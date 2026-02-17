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

export const loginUser=AsyncHandler(async(req,res)=>{
    const {email, password}=req.body;

    if(!email|| !password){
        throw new ApiError(400, "Email and password are required");
    }

    const user= await User.findOne({email});
        if(!user){
            throw new ApiError(401, "Invalid email or password");
        }
    
    const isMatch= await bcrypt.compare(password, user.password);

    if(!isMatch){
        throw new ApiError(401, "Invalid password");
    }

    // Generate JWT Token
    const token = jwt.sign(
        {id:user._id, email: user.email},
        process.env.JWT_SECRET,
        {expiresIn: '7d'}
    );

    const {password:_, ...userData}=user._doc;

    return res
        .status(200)
        .json(new ApiResponse(200, "Login successfull", {user: userData, token}));
})


export const getUserProfile=AsyncHandler(async(req,res)=>{
    const user = await User.findById(req.user.id).select("-password");

    if(!user){
        throw new ApiError(404, "User not found");
    }

    return res
    .status(200)
    .json(new ApiResponse(200, "User profile fetched successfully", user));
});

