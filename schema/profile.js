import * as Yup from 'yup';

export const profileSchema = 
    Yup.object({
        fullName: Yup.string()
            .min(3, "Full name must be at least 3 characters.")
            .required("Full name is required."),
        phoneNumber: Yup.string()
            .min(10, "Phone number must be at least 10 characters or more.")
            .required("Phone number is required."),
        email: Yup.string()
            .email("Invalid mail address.")
            .required("E-mail address is required."),
        address: Yup.string()
            .min(3, "Address must be at least 3 characters or more.")
            .required("Address is required."),
        job: Yup.string()
            .min(3, "Job must be at least 3 characters or more."),
        bio: Yup.string()
            .min(3, "Bio must be at least 3 characters or more."),
    });