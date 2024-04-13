import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
    {
        customer: {
            type: {},
            required: true,
        },
        address: {
            type: String,
            required: true,
            maxlength: 200,
        },
        subTotal: {
            type: Number,
            required: true,
        },
        discounts: {
            type: Number,
            required: true,
        },
        total: {
            type: Number,
            required: true,
        },
        status: {
            type: Number,
            default: 0,
        },
        method: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true}
)

export default mongoose.models.Order || mongoose.model("Order", OrderSchema)