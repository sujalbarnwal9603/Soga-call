import express from "express";
import {
    sendFriendRequest,
    acceptFriendRequest,
    removeFriend,
    getUserFriends,
} from "../controllers/friend.controller.js";
import {verifyJWT} from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/add", verifyJWT, sendFriendRequest);

router.patch("/accept/:requestId", verifyJWT, acceptFriendRequest);

router.delete(":requestId", verifyJWT, removeFriend);
router.get("/", verifyJWT, getUserFriends);
export default router;
