import mongoose from 'mongoose';

const userSchema= new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            trim: true
        },
        email:{
            type:String,
            required:true,
            unique: true,
            lowercase:true,
        },
        password:{
            type:Strinf,
            required:true,
            minlength:8
        },
    },
    {timestamps:true}
);

export const User = mongoose.model("User", userSchema);