import mongoose from "mongoose";

const FooterSchema = new mongoose.Schema(
    {
        location: {
            type: String,
            required: true,
            maxlength: 255,
        },
        email: {
            type: String,
            required: true,
            maxlength: 60,
        },
        phoneNumber: {
            type: String,
            required: true,
            maxlength: 20,
        },
        desc: {
            type: String,
            required: true,
            maxlength: 255,
        },
        socialMedia: {
            type: [
                {
                    icon: { type: String},
                    link: { type: String},
                }
            ],
        },
        openingHours: {
            type: {
                day: { type: String },
                time: { type: String }
            },
            required: true
        },
        copyright: {
            type: String,
            maxlength: 255,
        }
    },
    { timestamps: true}
)

export default mongoose.models.Footer || mongoose.model("Footer", FooterSchema)