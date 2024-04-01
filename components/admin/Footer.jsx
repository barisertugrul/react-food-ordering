import Title from '../ui/Title'
import Input from '../form/Input'
import { useFormik } from 'formik';
import { footerSchema } from '../../schema/footer';
import { useState } from 'react';

const Footer = () => {
    const [linkAddress, setLinkAddress] = useState("")
    const [newIcon, setNewIcon] = useState({
        'linkAddress': 'https://',
        'icon': 'fa fa-'
    })
    const [icons, setIcons] = useState([
        {'linkAddress':'https://www.facebook.com', 'icon':'fa-brands fa-facebook-f'},
        {'linkAddress':'https://www.twitter.com', 'icon':'fa-brands fa-twitter'},
        {'linkAddress':'https://www.linkedin.com', 'icon':'fa-brands fa-linkedin'}
    ])
    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 4000))
        actions.resetForm()
    }

    const {values, errors, touched, handleSubmit, handleChange, handleBlur} = useFormik({
        initialValues: {
            location: "",
            email: "",
            phoneNumber: "",
            desc: "",
            day: "",
            time: "",
        },
        onSubmit,
        validationSchema: footerSchema,
    })

    const inputs = [
        {
            id: "location",
            name: "location",
            type: "text",
            placeholder: "Your Location",
            value: values.location,
            isrequired:true,
            errorMessage: errors.location,
            touched: touched.location
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
            id: "desc",
            name: "desc",
            type: "text",
            placeholder: "Description",
            value: values.desc,
            isrequired:true,
            errorMessage: errors.desc,
            touched: touched.desc
        },
        {
            id: "day",
            name: "day",
            type: "text",
            placeholder: "Update Day",
            value: values.day,
            isrequired:true,
            errorMessage: errors.day,
            touched: touched.day
        },
        {
            id: "time",
            name: "time",
            type: "text",
            placeholder: "Update Time",
            value: values.day,
            isrequired:true,
            errorMessage: errors.day,
            touched: touched.day
        },
    ]
  return (
    <form className='md:p-8 flex-1 w-full md:mt-0 mt-5 md:items-center' onSubmit={handleSubmit}>
        <Title className="text-[40px]">Footer Settings</Title>
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
        <div className='mt-4 flex justify-between md:items-center md:flex-row flex-col gap-4'>
            <div className='flex items-center gap-4'>
                <Input
                    placeholder="Link Address"
                    value={newIcon.linkAddress || "https://"}
                    onChange={(e) => setNewIcon(prevState => ({ ...prevState, 'linkAddress': e.target.value }))}
                />
                <Input
                    placeholder='Icon Name'
                    value={newIcon.icon || 'fa fa-'}
                    onChange={(e) => setNewIcon(prevState => ({ ...prevState, 'icon': e.target.value }))}
                />
                <button
                    type='button'
                    className="btn-primary"
                    onClick={() => (
                        setIcons([...icons, newIcon]),
                        setNewIcon({
                            'linkAddress': 'https://',
                            'icon': 'fa fa-'
                        })
                    )}
                >Add</button>
            </div>
            <ul className='flex items-center justify-center gap-4'>
                { icons.map((icon, index) => (
                    <li key={index} className='flex items-center'>
                    <i className={`${icon.icon} text-2xl`}></i>
                    <button type='button' className='text-danger' onClick={() => {
                        setIcons((prev) => prev.filter((item, i) => i !== index))
                    }}>
                        <i className='fa fa-trash text-xl ml-1'></i>
                    </button>
                </li>
                ))}
            </ul>
        </div>
        <button type='submit' className="btn-primary mt-4">Update</button>
    </form>
  )
}

export default Footer