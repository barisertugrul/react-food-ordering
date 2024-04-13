import mongoose from "mongoose";

const OrderDetailSchema = new mongoose.Schema(
    {
        orderId: {
            type: String,
            required: true,
        },
        productId: {
            type: String,
            required: true,
        },
        size: {
            type: Number,
            default:0,
        },
        extras: {
            type: [],
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true}
)

export default mongoose.models.OrderDetail || mongoose.model("OrderDetail", OrderDetailSchema)