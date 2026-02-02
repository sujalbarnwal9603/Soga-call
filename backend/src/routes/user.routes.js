import express from 'express';
import {loginUser, registerUser} from '../controllers/user.controller.js';

const router= express.Router();

//Register new user
router.post("/signup", registerUser);

//Login user
router.post("/login", loginUser);

export default router;