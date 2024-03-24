import { useFormik } from 'formik';
import Title from '../../components/ui/Title'
import Input from '../../components/form/Input'
import { adminSchema } from '../../schema/admin';
import Link from 'next/link';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const Login = () => {
    const { push } = useRouter()

    const onSubmit = async (values, actions) => {
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/admin`, values)
            if(res.status === 200){
                actions.resetForm()
                toast.success("Admin Login Success!")
                push("/admin/profile")
            }
        } catch (error) {
            console.log(error)
        }
    }

    const {values, errors, touched, handleSubmit, handleChange, handleBlur} = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        onSubmit,
        validationSchema: adminSchema,
    })

    const inputs = [
        {
            id: "username",
            name: "username",
            type: "text",
            placeholder: "Your Username",
            value: values.username,
            isrequired:true,
            errorMessage: errors.username,
            touched: touched.username
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
            <Title className="text-[40px] mb-6">Admin Login</Title>
            <div className='flex flex-col gap-y-3 w-full'>
                {inputs.map((input, index) => (
                        <Input key={index} {...input}
                        onChange={handleChange}
                        onBlur={handleBlur} />
                    ))}
            </div>
            <div className='flex flex-col mt-4 gap-y-3 w-full'>
                <button type='submit' className="btn-primary">LOGIN</button>
                <Link href="/">
                    <span className='text-sm underline cursor-pointer text-secondary hover:font-semibold'>Go to Home</span>
                </Link>
            </div>
        </form>
    </div>
  )
}

export const getServerSideProps = (context) => {
    const myCookie = context.req?.cookies || ""
    if(myCookie.token === process.env.ADMIN_TOKEN){
        return {
            redirect: {
                destination: "/admin/profile",
                permanent: false
            },
        }
    }

    return {
        props: {},
    }
}

export default Login