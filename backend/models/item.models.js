import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        required:true,
       
    },

},{timestamps:true})

const Item = mongoose.model('Item',itemSchema)

export default Item