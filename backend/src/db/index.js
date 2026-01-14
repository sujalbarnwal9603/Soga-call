import mongoose from 'mongoose';
import DB_NAME from '../constant.js'

const connectDB = async () =>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MongoDB Connected: ${connectionInstance.connection.host}`);
        

    } catch(error){
        console.log("MONGO DB connection error");
        process.exit(1);
    }
}

export default connectDB;
