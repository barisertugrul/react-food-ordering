import Image from 'next/image'
import { useState } from 'react'
import Products from '../../components/admin/Products'
import Categories from '../../components/admin/Categories'
import Orders from '../../components/admin/Orders'
import Footer from '../../components/admin/Footer'
import axios from 'axios'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import AddProduct from '../../components/admin/AddProduct'
import Reservations from '../../components/admin/Reservations'

const Profile = () => {
    const [tabs, setTabs] = useState(0)
    const [isAddProductModal, setIsAddProductModal] = useState(false)
    const [isProductAdded, setIsProductAdded] = useState(false)
    const {push} = useRouter()

    const logout = async () => {
        try {
            if(confirm("Are you sure you want to logout?")){
                const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/admin`)
                if (res.status === 200){
                    push("/admin")
                    toast.success("Successfully logged out from admin account.")
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='flex px-10 lg:min-h-[calc(100vh_-_433px)] md:flex-row flex-col md:mb-0 mb-10'>
        <div className='md:w-64 w-100 mb-5 flex-shrink-0'>
            <div className='relative flex flex-col items-center px-10 py-5 border border-b-0'>
                <Image src="/images/admin.png" alt='' width={100} height={100} className='rounded-full' />
                <span className='font-bold text-xl mt-1'>Admin</span>
            </div>
            <ul className='font-semibold'>
                <li className={`profile-tab-link ${tabs === 0 && "bg-primary text-white"}`} onClick={() => setTabs(0)}>
                    <i className='fa fa-cutlery'></i>
                    <button className='ml-2'>Products</button>
                </li>
                <li className={`profile-tab-link border-t-0 ${tabs === 1 && "bg-primary text-white"}`} onClick={() => setTabs(1)}>
                    <i className='fa fa-list-alt'></i>
                    <button className='ml-2'>Categories</button>
                </li>
                <li className={`profile-tab-link border-t-0 ${tabs === 2 && "bg-primary text-white"}`} onClick={() => setTabs(2)}>
                    <i className='fa fa-shopping-bag'></i>
                    <button className='ml-2'>Orders</button>
                </li>
                <li className={`profile-tab-link border-t-0 ${tabs === 3 && "bg-primary text-white"}`} onClick={() => setTabs(3)}>
                    <i className="fa-solid fa-calendar-days"></i>
                    <button className='ml-2'>Reservations</button>
                </li>
                <li className={`profile-tab-link border-t-0 ${tabs === 4 && "bg-primary text-white"}`} onClick={() => setTabs(4)}>
                    <i className='fa fa-window-minimize'></i>
                    <button className='ml-2'>Footer</button>
                </li>
                <li className={`profile-tab-link border-t-0`} onClick={logout}>
                    <i className='fa fa-sign-out'></i>
                    <button className='ml-2'>Logout</button>
                </li>
            </ul>
        </div>
        { tabs === 0 && <Products isProductAdded={isProductAdded} />  }
        { tabs === 1 && <Categories />  }
        { tabs === 2 && <Orders /> }
        { tabs === 3 && <Reservations /> }
        { tabs === 4 && <Footer /> }
        {isAddProductModal && <AddProduct setIsAddProductModal={setIsAddProductModal} setIsProductAdded={setIsProductAdded} />}
        {tabs === 0 && <button
            className='fixed btn-primary w-12 h-12 !p-0 bottom-6 right-6 text-4xl'
            onClick={() => {
                setIsAddProductModal(true)
                setIsProductAdded(false)
            }}
            title='Add new product'
        >
            +
        </button>}
    </div>
  )
}



export const getServerSideProps = (context) => {
    const myCookie = context.req?.cookies || ""
    if(myCookie.token !== process.env.ADMIN_TOKEN){
        return {
            redirect: {
                destination: "/admin",
                permanent: false
            },
        }
    }

    return {
        props: {},
    }
}

export default Profile