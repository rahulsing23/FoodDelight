import mongoose from "mongoose";

const menuSchema  = new mongoose.Schema({
    itemname: {
        type: String,
        required: true,
        unique: true
    },
    description:{
        type:String,
    },
    price:{
        type: Number,
        required: true
    },
    itemId: {
        type: String,
        required: true,
        unique: true
    },
    image:{
        type: String
    }
},{timestamps: true})

const Menu = mongoose.model("menu", menuSchema)

export default Menu