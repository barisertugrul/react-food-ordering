import * as Yup from 'yup';

export const loginSchema = 
    Yup.object({
        email: Yup.string()
            .email("Invalid mail address.")
            .required("E-mail address is required."),
        password: Yup.string()
            .required("Password is required.")
            .min(8, "Password must be at least 8 characters.")
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            "Password must contain at least one uppercase, one lowercase, one number and one special character."),
    });