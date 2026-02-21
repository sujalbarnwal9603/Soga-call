// src/sockets/callHandler.js
import { User } from "../models/user.model.js";

export const callHandler = (io) => {
  io.on("connection", (socket) => {
    console.log("📶 User connected:", socket.id);

    // when user joins with ID
    socket.on("join", async (userId) => {
      socket.userId = userId;
      await User.findByIdAndUpdate(userId, { status: "online" });
      console.log(`✅ ${userId} joined with socket ${socket.id}`);
      io.emit("update-status", { userId, status: "online" });
    });

    // initiate a call
    socket.on("call-user", (data) => {
      const { to, offer } = data;
      console.log(`📞 Call from ${socket.userId} → ${to}`);
      io.to(to).emit("incoming-call", {
        from: socket.userId,
        offer,
      });
    });

    // answer a call
    socket.on("answer-call", (data) => {
      const { to, answer } = data;
      console.log(`✅ ${socket.userId} answered call from ${to}`);
      io.to(to).emit("call-accepted", {
        from: socket.userId,
        answer,
      });
    });

    // end a call
    socket.on("end-call", (data) => {
      const { to } = data;
      console.log(`❌ Call ended by ${socket.userId}`);
      io.to(to).emit("call-ended", { from: socket.userId });
    });

    // handle disconnect
    socket.on("disconnect", async () => {
      if (socket.userId) {
        await User.findByIdAndUpdate(socket.userId, {
          status: "offline",
          lastSeen: Date.now(),
        });
        io.emit("update-status", {
          userId: socket.userId,
          status: "offline",
        });
      }
      console.log("🔴 User disconnected:", socket.id);
    });
  });
};