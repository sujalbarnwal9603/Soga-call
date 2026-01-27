import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {User} from "../models/user.model.js";
import AsyncHandler from "../utils/AsyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

/* ===============================
   🧾 USER SIGNUP CONTROLLER
================================= */
export const registerUser =AsyncHandler(async(req, res)=>{
    const {name, email, password}=req.body;

    if(!name || !email || !password){
        throw new ApiError(400, "All fields are required");
    }

    const existingUser=await User.findOne({email});
    if(existingUser){
        throw new ApiError(409, "User with this email already exists");
    }

    const hashedPassword=await bcrypt.hash(password, 10);

    const newUser=await User.create({
        name,
        email,
        password: hashedPassword
    });

    const {password: _, ...userDate}= newUser.doc;

    return res
        .status(201)
        .json(new ApiResponse(201, "User registered successfully", userDate));

});



/* ===============================
   🔐 USER LOGIN CONTROLLER
================================= */

