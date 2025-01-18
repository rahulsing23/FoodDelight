import mongoose from 'mongoose'

const orderSchema  = new mongoose.Schema({
    order_item_id: {
        type: String,
        required: true
    },
    order_id: {
        type: String,
        required: true
    },
    itemname: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        default: 0,
        required: true
    },
}, {timestamps: true})

const OrderItems = mongoose.model("orderItems", orderSchema)

export default OrderItems