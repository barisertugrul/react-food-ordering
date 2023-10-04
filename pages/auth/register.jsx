import { useFormik } from 'formik';
import Title from '../../components/ui/Title'
import Input from '../../components/form/Input'
import Link from 'next/link';
import { registerSchema } from '../../schema/register';

const Register = () => {
    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 400))
        actions.resetForm()
    }

    const {values, errors, touched, handleSubmit, handleChange, handleBlur} = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        onSubmit,
        validationSchema: registerSchema,
    })

    const inputs = [
        {
            id: "fullName",
            name: "fullName",
            type: "text",
            placeholder: "Your Full Name",
            value: values.fullName,
            isrequired:true,
            errorMessage: errors.fullName,
            touched: touched.fullName
        },
        {
            id: "email",
            name: "email",
            type: "email",
            placeholder: "Your E-mail Address",
            value: values.email,
            isrequired:true,
            errorMessage: errors.email,
            touched: touched.email
        },
        {
            id: "password",
            name: "password",
            type: "password",
            placeholder: "Your Password",
            value: values.password,
            isrequired:true,
            errorMessage: errors.password,
            touched: touched.password
        },
        {
            id: "confirmPassword",
            name: "confirmPassword",
            type: "password",
            placeholder: "Your Confirm Password",
            value: values.confirmPassword,
            isrequired:true,
            errorMessage: errors.confirmPassword,
            touched: touched.confirmPassword
        },
    ]
  return (
    <div className='container mx-auto'>
        <form className='flex flex-col items-center my-20 sm:w-1/2 w-full mx-auto'
        onSubmit={handleSubmit}>
            <Title className="text-[40px] mb-6">Register</Title>
            <div className='flex flex-col gap-y-3 w-full'>
                {inputs.map((input, index) => (
                        <Input key={index} {...input}
                        onChange={handleChange}
                        onBlur={handleBlur} />
                    ))}
            </div>
            <div className='flex flex-col mt-4 gap-y-3 w-full'>
                <button type='submit' className="btn-primary">REGISTER</button>
                <Link href="/auth/login">
                    <span className='text-sm underline cursor-pointer text-secondary hover:font-semibold'>Do you have an account?</span>
                </Link>
            </div>
        </form>
    </div>
  )
}

export default Register