import { useFormik } from 'formik';
import Input from './form/Input'
import Title from './ui/Title'
import { reservationSchema } from '../schema/reservation';

const Reservation = () => {
    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 400))
        actions.resetForm()
    }
    const {values, errors, touched, handleSubmit, handleChange, handleBlur} = useFormik({
        initialValues: {
            fullName: "",
            phoneNumber: "",
            email: "",
            persons: "",
            date: "",
        },
        onSubmit,
        validationSchema: reservationSchema,
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
            id: "persons",
            name: "persons",
            type: "number",
            placeholder: "How Many Persons?",
            value: values.persons,
            isrequired:true,
            errorMessage: errors.persons,
            touched: touched.persons
        },
        {
            id: "date",
            name: "date",
            type: "datetime-local",
            value: values.date,
            isrequired:true,
            errorMessage: errors.date,
            touched: touched.date
        },
    ]
  return (
    <div className='container mx-auto py-12 '  >
        <Title className="text-[40px] mb-10">Book A Table</Title>
        <div className='flex justify-between flex-wrap-reverse gap-10'>
            <form className='md:flex-1 w-full'  onSubmit={handleSubmit}>
                <div className='flex flex-col gap-y-3'>
                    {inputs.map((input, index) => (
                        <Input key={index} {...input}
                        onChange={handleChange}
                        onBlur={handleBlur} />
                    ))}
                </div>
                <button type='submit' className="btn-primary mt-5 md:mb-1 mb-5">BOOK NOW</button>
            </form>
            <div className='md:flex-1 w-full'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25007.885492155172!2d27.120808264317812!3d38.41869566264328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd8e3fa1744e7%3A0xfc15e392fd3613c8!2zS2VtZXJhbHTEsSDDh2FyxZ_EsXPEsQ!5e0!3m2!1str!2str!4v1681069147666!5m2!1str!2str"
                    height="auto"
                    allowFullScreen=""
                    loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                    className='w-full h-full'
                ></iframe>
            </div>
        </div>
    </div>
  )
}

export default Reservation