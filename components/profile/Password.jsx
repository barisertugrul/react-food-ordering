import React from 'react'
import Title from '../ui/Title'
import Input from '../form/Input'
import { useFormik } from 'formik';
import { newPasswordSchema } from '../../schema/newPassword';

const Password = () => {
    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 4000))
        actions.resetForm()
    }

    const {values, errors, touched, handleSubmit, handleChange, handleBlur} = useFormik({
        initialValues: {
            password: "",
            confirmPassword: "",
        },
        onSubmit,
        validationSchema: newPasswordSchema,
    })

    const inputs = [
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
    <form className='md:p-8 flex-1 w-full md:mt-0 mt-5 md:items-center' onSubmit={handleSubmit}>
        <Title className="text-[40px]">Password</Title>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mt-4'>
            {inputs.map((input) => (
                <Input
                    key={input.id}
                    {...input}
                    onBlur={handleBlur}
                    onChange={handleChange}
                />
            ))}
        </div>
        <button type='submit' className="btn-primary mt-4">Update</button>
    </form>
  )
}

export default Password