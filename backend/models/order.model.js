import mongoose from 'mongoose'

const orderSchema  = new mongoose.Schema({
    order_id: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    total_price: {
        type: Number,
        required: true
    },
}, {timestamps: true})

const Order = mongoose.model("orders", orderSchema)

export default Order