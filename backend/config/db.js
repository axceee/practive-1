import dotenv from 'dotenv'
dotenv.config()
import mongoose from "mongoose";

const connectDB = async function () {
    try{
        const connect = await mongoose.connect(`${process.env.MONGO_URL}`)
        console.log(`mango connected :)`)
        return connect
    }
    catch(err){
        console.error(err)
        throw err;
    }
}

export default connectDB