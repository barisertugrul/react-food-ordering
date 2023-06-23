import { useFormik } from 'formik';
import Title from '../../components/ui/Title'
import Input from '../../components/form/Input'
import { loginSchema } from '../../schema/login';
import Link from 'next/link';

const Login = () => {
    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 400))
        actions.resetForm()
    }

    const {values, errors, touched, handleSubmit, handleChange, handleBlur} = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit,
        validationSchema: loginSchema,
    })

    const inputs = [
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
    ]
  return (
    <div className='container mx-auto'>
        <form className='flex flex-col items-center my-20 sm:w-1/2 w-full mx-auto'
        onSubmit={handleSubmit}>
            <Title className="text-[40px] mb-6">Login</Title>
            <div className='flex flex-col gap-y-3 w-full'>
                {inputs.map((input, index) => (
                        <Input key={index} {...input}
                        onChange={handleChange}
                        onBlur={handleBlur} />
                    ))}
            </div>
            <div className='flex flex-col mt-4 gap-y-3 w-full'>
                <button type='submit' className="btn-primary">LOGIN</button>
                <button className="btn-primary !bg-secondary"><i className='fa-brands fa-github mr-2'></i>GITHUB</button>
                <Link href="/auth/register">
                    <span className='text-sm underline cursor-pointer text-secondary hover:font-semibold'>You don&apos;t have an account?</span>
                </Link>
            </div>
        </form>
    </div>
  )
}

export default Login