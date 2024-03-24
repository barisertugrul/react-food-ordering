import { useFormik } from 'formik';
import Title from '../../components/ui/Title'
import Input from '../../components/form/Input'
import Link from 'next/link';
import { registerSchema } from '../../schema/register';
import axios from 'axios';
import { toast } from 'react-toastify'
import { useRouter } from 'next/router';

const Register = () => {
    const { push } = useRouter()

    const onSubmit = async (values, actions) => {
        try {
            const res = await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}/users/register`,
                values
            )
            if(res.status === 200){
                toast.success("User created successfully")
                push("/auth/login")
            }
        } catch (error) {
            toast.error(error.response.data.message)
            console.log(error)
        }
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
                {inputs.map((input) => (
                        <Input key={input.id} {...input}
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