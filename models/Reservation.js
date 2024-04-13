import mongoose from "mongoose";

const ReservationSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
        },
        fullName: {
            type: String,
            required: true,
            maxlength: 100,
        },
        phoneNumber: {
            type: String,
            required: true,
            maxlength: 25,
        },
        email: {
            type: String,
            required: true,
            maxlength: 200,
        },
        persons: {
            type: Number,
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
        status: {
            type: Number,
            default: 0,
        },
        tableNo: {
            type: [Number],
        },
    },
    { timestamps: true}
)

export default mongoose.models.Reservation || mongoose.model("Reservation", ReservationSchema)