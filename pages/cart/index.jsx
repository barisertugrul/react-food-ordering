import Image from 'next/image'
import Title from '../../components/ui/Title'
import { useDispatch, useSelector } from "react-redux"
import { updateCart, removeFromCart, reset } from "../../redux/cartSlice"
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'


const Cart = ({ userList }) => {

    const {data:session} = useSession()
    let cart = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    const user = userList?.find((user) => user.email === session?.user?.email)
    const router = useRouter()
    const [cartData, setCartData] = useState([])
   
    useEffect(() => {
      setCartData({...cart, total: cart.subTotal - cart.discounts})
    }, [])


    useEffect(() => {
        dispatch(updateCart({...cartData}))
    }, [cartData])
    
    
    const newOrder = {
        customer: user,
        address: user?.address ? user?.address : "No address",
        subTotal: cartData.subTotal,
        discounts: cartData.discounts,
        total: cartData.total,
        method: 0, // Payment method - 0: Cash, 1: Card
    }

    const createOrderDetails = async (orderId, product) => {
        const extras = product.extras.reduce((acc, e) => {
            acc.push(e.text)
            return acc
          }, [])

        const newOrderDetail = {
            orderId,
            productId: product._id,
            size: product.size,
            extras,
            quantity: product.quantity
        }

        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/order_details`, newOrderDetail)
        } catch (error) {
            console.log(error)
        }
    }

    const createOrder = async () => {
        try {
            if(session){
                if(confirm("Are you sure to order?")){
                    const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/orders`, newOrder)
                    if(res.status === 201){
                        if(cartData?.products?.length > 0){
                            cartData?.products?.map((product) => (
                                createOrderDetails(res.data._id, product)
                            ))
                        }
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

    const handleSetQuantity = (id, value) => {
        if(value >= 0){
            let newProducts = cartData.products.reduce((acc, currentItem) => {
                if(currentItem.cartUUID !== id){
                    acc.push({...currentItem})
                }else{
                    acc.push({...currentItem, quantity:value})
                }
                return acc
            }, []);

            let subTotal = newProducts.reduce((subTotal, currentItem) => {
                return subTotal + (currentItem.quantity * currentItem.price);
            }, 0);

            let quantity = newProducts.reduce((quantity, currentItem) => {
                return quantity + currentItem.quantity;
            }, 0);

            const newCart = {
                ...cartData,
                products : [...newProducts],
                subTotal,
                quantity,
                total: subTotal - cartData.discounts
            }
            setCartData({...newCart})
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
                <div className='max-h-96 overflow-auto w-full'>
                    {cart?.products?.length > 0 ? (
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
                                {cartData?.products?.map((product) => (
                                    
                                    <tr key={product.cartUUID} className='border-b bg-secondary border-gray-700 hover:bg-primary hover:border-white transition-all cursor-pointer'>
                                        <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center'>
                                            <Image src={product.img} alt="" width={40} height={40} />
                                            <span>{product.name}</span>
                                        </td>
                                        <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                            {product?.extras?.length > 0 ? (product?.extras?.map((item) => (
                                                <span key={item._id}>{item.text}, </span>
                                            ))) : "-"}
                                        </td>
                                        <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>${product.price}</td>
                                        <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                        <div className="flex justify-center md:max-w-[8rem]">
                                            <button type="button" id="decrement-button" className="border rounded-2xl bg-secondary border-gray-700 hover:bg-primary hover:border-white transition-all  p-3 h-11"
                                                onClick={
                                                    () => handleSetQuantity(product.cartUUID, product.quantity - 1)
                                                }
                                            >
                                                <svg className="w-3 h-3 text-gray-900 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16"/>
                                                </svg>
                                            </button>
                                            <input type="text" className="bg-transparent border-x-0 border-gray-300 h-11 text-sm focus:ring-blue-500 focus:border-blue-500 block py-2.5 w-5 text-center font-bold" placeholder="1" onChange={(e) => handleSetQuantity(product.cartUUID, e.target.value)} value={product.quantity} required />
                                            <button type="button" id="increment-button" className="border rounded-2xl bg-secondary border-gray-700 hover:bg-primary hover:border-white transition-all  p-3 h-11"
                                                onClick={() => handleSetQuantity(product.cartUUID, product.quantity + 1)}
                                            >
                                                <svg className="w-3 h-3 text-gray-900 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                                                </svg>
                                            </button>
                                        </div>
                                        </td>
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
                    ) : (<p className='text-center font-semibold'>There are no items in your cart.</p>)}
                </div>
            </div>
            <div className='bg-secondary min-h-[calc(100vh_-_420px)] flex flex-col justify-center md:text-start text-center text-white p-12 md:w-auto w-full'>
                <Title className='text-[40px]'>CART TOTAL</Title>
                <div className='flex flex-col gap-y-2 mt-6'>
                    <span><b>Subtotal:</b> ${cartData.subTotal}</span>
                    <span><b>Discount:</b> ${cartData.discounts}</span>
                    <span><b>Total:</b> ${(cartData.total > 0) ? cartData.total : 0}</span>
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