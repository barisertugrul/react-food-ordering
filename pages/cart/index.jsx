import Image from 'next/image'
import Title from '../../components/ui/Title'
import { useDispatch, useSelector } from "react-redux"
import { removeFromCart, reset } from "../../redux/cartSlice"
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'


const Cart = ({ userList }) => {

    const {data:session} = useSession()
    const cart = useSelector((state) => state.cart)
    const discounts = 3.60 // TODO: Get from Database or settings
    const dispatch = useDispatch()
    const user = userList?.find((user) => user.email === session?.user?.email)
    const router = useRouter()

    const newOrder = {
        customer: user,
        address: user?.address ? user?.address : "No address",
        total: cart.total-discounts,
        method: 0, // Payment method - 0: Cash, 1: Card
    }

    const createOrder = async () => {
        try {
            if(session){
                if(confirm("Are you sure to order?")){
                    const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/orders`, newOrder)
                    if(res.status === 201){
                        dispatch(reset())
                        toast.success("Order created successfully.", {
                            autoClose: 1000,
                        })
                        router.push(`/order/${res.data._id}`)
                    }
                }
            }else{
                toast.error("Please try again after checking whether you are logged in or not.")
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleRemove = (item) => {
        dispatch(removeFromCart(
            {
                product: {...item}
            }
        ))
    }

  return (
    <div className='min-h-[calc(100vh_-_420px)]'>
        <div className='flex justify-between items-center md:flex-row flex-col'>
            <div className='min-h-[calc(100vh_-_420px)] flex items-center flex-1 p-10 overflow-x-auto w-full'>
                <table className='w-full text-sm text-center text-gray-500 min-w-[750px]'>
                    <thead className='text-xs text-gray-400 uppercase bg-gray-700'>
                        <tr>
                            <th scope='col' className='py-3 px-6'>PRODUCT</th>
                            <th scope='col' className='py-3 px-6'>EXTRAS</th>
                            <th scope='col' className='py-3 px-6'>PRICE</th>
                            <th scope='col' className='py-3 px-6'>QUANTITY</th>
                            <th scope='col' className='py-3 px-6'>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.products.map((product) => (
                            <tr key={product.cartUUID} className='border-b bg-secondary border-gray-700 hover:bg-primary hover:border-white transition-all cursor-pointer'>
                                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center'>
                                    <Image src="/images/f1.png" alt="" width={40} height={40} />
                                    <span>{product.name}</span>
                                </td>
                                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                    {product.extras.map((item) => (
                                        <span key={item._id}>{item.text}, </span>
                                    ))}
                                </td>
                                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>${product.price}</td>
                                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>{product.quantity}</td>
                                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                    <button
                                        className="btn-primary !bg-danger"
                                        onClick={() => handleRemove(product)}
                                    >Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='bg-secondary min-h-[calc(100vh_-_420px)] flex flex-col justify-center md:text-start text-center text-white p-12 md:w-auto w-full'>
                <Title className='text-[40px]'>CART TOTAL</Title>
                <div className='flex flex-col gap-y-2 mt-6'>
                    <span><b>Subtotal:</b> ${cart.total}</span>
                    <span><b>Discount:</b> ${discounts}</span>
                    <span><b>Total:</b> ${(cart.total > 0) ? (cart.total)-discounts : 0}</span>
                    <div>
                        <button className='btn-primary mt-4' onClick={createOrder}>CHECKOUT NOW!</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export const getServerSideProps = async () => {
    const users = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`)
    
    return {
      props: {
        userList: users.data ? users.data : [],
      }
    }
  }

export default Cart