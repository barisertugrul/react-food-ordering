import * as Yup from 'yup';

export const footerSchema = 
    Yup.object({
        location: Yup.string()
            .required("Location is required."),
        email: Yup.string()
            .email("Invalid mail address.")
            .required("E-mail address is required."),
        phoneNumber: Yup.string()
            .min(10, "Phone number must be at least 10 characters or more.")
            .required("Phone number is required."),
        desc: Yup.string()
            .required("Description is required."),
        copyright: Yup.string(),
        day: Yup.string()
            .required("Day is required."),
        time: Yup.string()
            .required("Time is required."),
    });