// src/index.js
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";
import { createServer } from "http";
import { Server } from "socket.io";
import { User } from "./models/user.model.js";
import { callHandler } from "./sockets/callHandler.js";

// Load environment variables
dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 8000;

// Create HTTP server (so Socket.io can attach to Express)
const httpServer = createServer(app);

// Initialize Socket.io
const io = new Server(httpServer, {
  cors: {
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  },
});

// Register custom call handling events
callHandler(io);

// 🔌 SOCKET.IO connection handler
io.on("connection", (socket) => {
  console.log("🟢 New client connected:", socket.id);

  // When a user goes online
  socket.on("user-online", async (userId) => {
    console.log(`✅ User ${userId} is online`);
    await User.findByIdAndUpdate(userId, { status: "online" });
    io.emit("update-status", { userId, status: "online" });
  });

  // When a user disconnects
  socket.on("disconnect", async () => {
    console.log("🔴 Client disconnected:", socket.id);
  });

  // When a user logs out manually
  socket.on("user-offline", async (userId) => {
    console.log(`⚪ User ${userId} went offline`);
    await User.findByIdAndUpdate(userId, {
      status: "offline",
      lastSeen: Date.now(),
    });
    io.emit("update-status", { userId, status: "offline" });
  });

  // Handle friend requests in real-time
  socket.on("send-friend-request", (data) => {
    const { from, to } = data;
    console.log(`📨 Friend request from ${from} to ${to}`);
    io.emit("friend-request-received", { from, to });
  });

  // Handle friend request acceptance
  socket.on("accept-friend-request", (data) => {
    const { from, to } = data;
    console.log(`🤝 Friend request accepted: ${from} & ${to}`);
    io.emit("friend-request-accepted", { from, to });
  });
});

// ✅ Start the server after connecting to the database
connectDB()
  .then(() => {
    httpServer.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("❌ MongoDB Connection Failed:", err);
  });