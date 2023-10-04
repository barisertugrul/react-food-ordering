import React from 'react'
import Title from '../ui/Title'
import Input from '../form/Input'
import { useFormik } from 'formik';
import { profileSchema } from '../../schema/profile';

const Account = () => {
    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 4000))
        actions.resetForm()
    }

    const {values, errors, touched, handleSubmit, handleChange, handleBlur} = useFormik({
        initialValues: {
            fullName: "",
            phoneNumber: "",
            email: "",
            address: "",
            job: "",
            bio: "",
        },
        onSubmit,
        validationSchema: profileSchema,
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
            id: "phoneNumber",
            name: "phoneNumber",
            type: "text",
            placeholder: "Your Phone Number",
            value: values.phoneNumber,
            isrequired:true,
            errorMessage: errors.phoneNumber,
            touched: touched.phoneNumber
        },
        {
            id: "address",
            name: "address",
            type: "text",
            placeholder: "Your Address?",
            value: values.address,
            isrequired:true,
            errorMessage: errors.address,
            touched: touched.address
        },
        {
            id: "job",
            name: "job",
            type: "text",
            placeholder: "Your Job?",
            value: values.job,
            isrequired:true,
            errorMessage: errors.job,
            touched: touched.job
        },
        {
            id: "bio",
            name: "bio",
            type: "text",
            placeholder: "Your Bio?",
            value: values.bio,
            isrequired:true,
            errorMessage: errors.bio,
            touched: touched.bio
        },
    ]
  return (
    <form className='md:p-8 flex-1 w-full md:mt-0 mt-5 md:items-center' onSubmit={handleSubmit}>
        <Title className="text-[40px]">Account Settings</Title>
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

export default Account