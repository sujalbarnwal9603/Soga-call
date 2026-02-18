import { Friend } from "../models/friend.model.js";
import AsyncHandler from "../utils/AsyncHandler.js";
import ApiError from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import ApiResponse from "../utils/ApiResponse.js";

/* ===============================
    ➕ ADD FRIEND CONTROLLER
================================= */

export const sendFriendRequest = AsyncHandler(async (req, res) => {
    const { friendId } = req.body;
    const userId = req.user.id;

    if (!friendId) {
        throw new ApiError(400, "Friend ID is required");
    }
    if (friendId === userId) {
        throw new ApiError(400, "You cannot send a friend request to yourself");
    }
    const friendUser = await User.findById(friendId);
    if (!friendUser) {
        throw new ApiError(404, "User not found");
    }

    const existing = await Friend.findOne({
        $or: [
            { user: userId, friend: friendId },
            { user: friendId, friend: userId },
        ],
    });
    if (existing) {
        throw new ApiError(409, "Friend request already exists or you are already friends");
    }

    //create friend request
    const friendRequest = await Friend.create({
        user: userId,
        friend: friendId,
        status: "pending",
    })

    return res
        .status(201)
        .json(new ApiResponse(201, "Friend request sent", friendRequest));

})

export const acceptFriendRequest = AsyncHandler(async (req, res) => {
    const { requestId } = req.params;
    const userId = req.user.id;

    const request = await Friend.findById(requestId);
    if (!request) throw new ApiError(404, "Friend request not found");
    if (request.friend.toString() !== userId) {
        throw new ApiError(403, "You are not authorized to accept this friend request");
    }

    request.status = "accepted";
    await request.save();

    return res
        .status(200)
        .json(new ApiResponse(200, "Friend request accepted", request));

})

export const removeFriend = AsyncHandler(async (req, res) => {
    const { requestId } = req.params;
    const userId = req.user.id;

    const friendship = await Friend.findOneAndDelete({
        $or: [
            { user: userId, friend: friendId },
            { user: friendId, friend: userId },
        ],
    });

    if (!friendship) {
        throw new ApiError(404, "Friendship not found");
    }

    return res
        .status(200)
        .json(new ApiResponse(200, "Friend removed", null));

});

export const getUserFriends = AsyncHandler(async (req, res) => {
    const userId = req.user.id;
    const friends = await Friend.find({
        $or: [{ user: userId }, { friend: userId }],
        status: "accepted",

    })
        .populate("user", "name email")
        .populate("friend", "name email");

    return res
        .status(200)
        .json(new ApiResponse(200, "Friend list retrieved", friends));
});