import * as Yup from 'yup';
const today = Date().toLocaleString()

export const reservationSchema = 
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
        persons: Yup.number()
            .required("Persons is required."),
        date: Yup.date()
            .typeError("Please enter a valid date.")
            .min(today, 'Date cannot be in the past')
            .required("Book date is required."),
    });