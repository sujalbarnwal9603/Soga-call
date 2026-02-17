import express from 'express';
import {loginUser, registerUser, getUserProfile} from '../controllers/user.controller.js';
import { verifyJWT } from '../middlewares/auth.middleware.js';

const router= express.Router();

//Register new user
router.post("/signup", registerUser);

//Login user
router.post("/login", loginUser);

//Get user profile
router.get("/profile", verifyJWT,getUserProfile);

export default router;