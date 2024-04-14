import mongoose from "mongoose";

const CampaignSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            maxlength: 60,
        },
        slogan: {
            type: String,
            required: true,
            maxlength: 300,
        },
        startDate: {
            type: Date,
        },
        endDate: {
            type: Date,
        },
        img: {
            type: String,
            required: true,
        },
        link: {
            type: String,
            required: true,
        },
    },
    { timestamps: true}
)

export default mongoose.models.Campaign || mongoose.model("Campaign", CampaignSchema)