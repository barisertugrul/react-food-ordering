import * as Yup from 'yup';
const today = Date().toLocaleString()

export const campaignSchema = 
    Yup.object({
        title: Yup.string()
            .min(5, "Title must be at least 3 characters.")
            .required("Campaign title is required."),
        slogan: Yup.string()
            .min(5, "Slogan must be at least 5 characters or more.")
            .required("Slogan is required."),
        img: Yup.string()
            .required("Image is required."),
        link: Yup.string()
            .required("Campaign link is required."),
        startDate: Yup.date()
            .typeError("Please enter a valid date."),
        endDate: Yup.date()
            .typeError("Please enter a valid date.")
            .min(today, 'End date cannot be in the past'),
    });