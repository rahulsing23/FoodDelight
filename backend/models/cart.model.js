import mongoose from 'mongoose'

const cartSchema  = new mongoose.Schema({
    itemId: {
        type: String,
        required: true
    },
    itemName:{
        type: String,
        required : true
    },
    quantity:{
        type: Number,
        required : true
    },
    price:{
        type: Number,
        required : true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 86400, 
      },
}, {timestamps: true})

const Cart = mongoose.model("cart", cartSchema);

export default Cart;