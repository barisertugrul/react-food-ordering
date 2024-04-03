import Title from '../ui/Title'
import Input from '../form/Input'
import { useFormik } from 'formik';
import { footerSchema } from '../../schema/footer';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Footer = () => {
    const [newIcon, setNewIcon] = useState({
        'icon': 'fa fa-',
        'link': 'https://'
    })

    const [icons, setIcons] = useState([])
    const [hasdata, setHasData] = useState(false)

    const [footerData, setFooterData] = useState([])

    const onSubmit = async (values, actions) => {
        try {
            const newData = {
                ...values,
                socialMedia: icons,
                openingHours: { day: values.day, time: values.time }
            }

            let res = null

            if(hasdata){
                res = await axios.put(
                    `${process.env.NEXT_PUBLIC_API_URL}/footer/${footerData._id}`,
                    newData
                )
            }else{
                res = await axios.post(
                    `${process.env.NEXT_PUBLIC_API_URL}/footer`,
                    newData
                )
            }

            if(res.status === 200 ){
                getFooterData()
                toast.success("Footer saved successfully.")
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const getFooterData = async () => {
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/footer`)
                setFooterData(res.data[0])
                setIcons([...(res.data[0]?.socialMedia)])
                if(res.data[0]){
                    setHasData(true)
                }
            } catch (error) {
                console.log(error)
            }
        }
      getFooterData()
    }, [])

    const handleIconAdding = () => {
        setIcons([...icons, newIcon])
        setNewIcon({
            'icon': 'fa fa-',
            'link': 'https://'
        })
    }
    

    const {values, errors, touched, handleSubmit, handleChange, handleBlur} = useFormik({
        enableReinitialize: true,
        initialValues: {
            location: footerData?.location || "",
            email: footerData?.email || "",
            phoneNumber: footerData?.phoneNumber || "",
            desc: footerData?.desc || "",
            copyright: footerData?.copyright || "",
            day: footerData?.openingHours?.day || "",
            time: footerData?.openingHours?.time || "",
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
            value: values.time,
            isrequired:true,
            errorMessage: errors.time,
            touched: touched.time
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
        <div className='grid grid-cols-1 gap-4 mt-4'>
            <Input
                    key="copyright"
                    name="copyright"
                    type= "text"
                    placeholder= "Copyright"
                    value = {values.copyright}
                    isrequired= {true}
                    errorMessage = {errors.copyright}
                    touched= {touched.copyright}
                    onBlur={handleBlur}
                    onChange={handleChange}
                />
        </div>
        <div className='mt-4 flex justify-between md:items-center md:flex-row flex-col gap-4'>
            <div className='flex items-center gap-4'>
                <Input
                    placeholder="Link Address"
                    value={newIcon.link}
                    onChange={(e) => setNewIcon(prevState => ({ ...prevState, 'link': e.target.value }))}
                />
                <Input
                    placeholder='Icon Name'
                    value={newIcon.icon}
                    onChange={(e) => setNewIcon(prevState => ({ ...prevState, 'icon': e.target.value }))}
                />
                <button
                    type='button'
                    className="btn-primary"
                    onClick={handleIconAdding}
                >Add</button>
            </div>
            <ul className='flex items-center justify-center gap-4'>
                { icons?.map((icon, index) => (
                    <li key={index } className='flex items-center'>
                    <i className={`${icon.icon} text-2xl`}></i>
                    <button type='button' className='text-danger' onClick={() => {
                        setIcons((prev) => prev.filter((item) => item !== icon))
                        // or setIcons((prev) => prev.filter((item, i) => i !== index))
                    }}>
                        <i className='fa fa-trash text-md ml-1'></i>
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