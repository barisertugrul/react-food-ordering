import * as Yup from 'yup';
const today = Date().toLocaleString()

export const registerSchema = 
    Yup.object({
        fullName: Yup.string()
            .min(3, "Full name must be at least 3 characters.")
            .required("Full name is required."),
        email: Yup.string()
            .email("Invalid mail address.")
            .required("E-mail address is required."),
        password: Yup.string()
            .required("Password is required.")
            .min(8, "Password must be at least 8 characters.")
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            "Password must contain at least one uppercase, one lowercase, one number and one special character."),
        confirmpassword: Yup.string()
            .required("Confirm Password is required.")
            .oneOf([Yup.ref("password"), null], "Passwords must be match"),
    });