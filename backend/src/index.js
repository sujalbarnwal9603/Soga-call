import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";
import {createServer} from "http";
import {Server} from "socket.io";
import {User} from "./models/user.model.js";

dotenv.config({
    path: './.env'
});

const PORT=process.env.PORT || 8000;

const httpServer= createServer(app);

const io=new Server(httpServer,{
    cors:{
        origin:process.env.CORS_ORIGIN,
        credentials:true,
    },
});

// SOCKET>IO connection handler
io.on("connection", (socket)=>{
    console.log("New client connected:", socket.id);

    socket.on("user-online", async (userId)=>{
        console.log(`User ${userId} is online`);
        await User.findByIdAndUpdate(userId, {status:"online"});
        io.emit("update-status", {userId, status:"online"});
    });

    //User goes offline manually or disconnects
    socket.on("disconnect", async()=>{
        console.log("Client disconnected:", socket.id);
        // Optional: find user by socket and set offline if you track them
    })

    
    //Handle manual logout (frontend can emit this)
    socket.on("user-offline", async(userId)=>{
        console.log(`User ${userId} went offline`);
        await User.findByIdAndUpdate(userId,{status:"offline", lastSeen: Date.now()});
        io.emit("update-status", {userId, status:"offline"});
        
    });

    //Handle manual logout


})



// Start the server after connecting to the database
connectDB()
    .then(()=>{
        app.listen(PORT, () =>{
            console.log(`🚀 Server running at http://localhost:${PORT}`);
        });
    })
    .catch((err)=>{
        console.log("❌ MongoDB Connection Failed", err);
    })