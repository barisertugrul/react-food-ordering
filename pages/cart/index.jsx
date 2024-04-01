import Image from 'next/image'
import Title from '../../components/ui/Title'
import { useDispatch, useSelector } from "react-redux"
import { removeFromCart } from "../../redux/cartSlice"


const Cart = () => {

    const cart = useSelector((state) => state.cart)
    const discounts = 3.60

    const dispatch = useDispatch()

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
                                        <span key={item.id}>{item.text}, </span>
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
                        <button className='btn-primary mt-4'>CHECKOUT NOW!</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart