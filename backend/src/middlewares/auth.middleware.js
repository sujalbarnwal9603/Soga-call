import jwt from 'jsonwebtoken';
import ApiError from '../utils/ApiError.js';
import AsyncHandler from '../utils/AsyncHandler.js';


export const verifyJWT=AsyncHandler(async(req,res, next)=>{
    const token=req.headers.authorization?.split(" ")[1]; //format: "Bearer token"
    if(!token){
        throw new ApiError(401, "No token provided");
    }

    try{
        const decoded=jwt.verify(token, process.env.JWT_SECRET);
        req.user=decoded; // Attach user info to request
        next();

    }catch(error){
        throw new ApiError(401, "Invalid token");
    }

})