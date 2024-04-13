import axios from 'axios'
import Image from 'next/image'
import OrderDetails from '../../../components/order/OrderDetails'
import { useState } from 'react'
const Order = ({order}) => {

    const [status, setStatus] = useState(order?.status)

    const statusClass = (index) => {
        if(index - status === 0) return "animate-pulse"
        else return ""
    }

    

    const handleStatus = async (statusId) => {
        try {
            const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/orders/${order._id}`,
            {
                status: statusId
            })
            setStatus(statusId)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='overflow-x-auto'>
        <div className='flex min-h-[calc(100vh_-_420px)] justify-center items-center flex-col p-10 min-w-[750px]'>
            <div className='flex items-center flex-1 w-full'>
                <table className='w-full text-sm text-center text-gray-500'>
                    <thead className='text-xs text-gray-400 uppercase bg-gray-700'>
                        <tr>
                            <th scope='col' className='py-3 px-6'>ORDER ID</th>
                            <th scope='col' className='py-3 px-6'>CUSTOMER</th>
                            <th scope='col' className='py-3 px-6'>ADDRESS</th>
                            <th scope='col' className='py-3 px-6'>TOTALS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='border-b bg-secondary border-gray-700 hover:bg-primary hover:border-white transition-all cursor-pointer'>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center'>
                                {order?._id ? order?._id.substring(0,8) : ""}...
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                {order?.customer.fullName}
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>{order?.address}</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>${order?.total}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='flex justify-between w-full p-10 bg-primary mt-6'>
                <div className={`relative flex flex-col cursor-pointer ${statusClass(0)}`} onClick={() => handleStatus(0)} title='Click to set the order status to pending payment.'>
                    <Image src="/images/paid.png" alt='' width={40} height={40} objectFit='contain' />
                    <span>Pending Payment</span>
                </div>
                <div className={`relative flex flex-col cursor-pointer ${statusClass(1)}`} onClick={() => handleStatus(1)} title='Click to set the order status to preparing.'>
                    <Image src="/images/bake.png" alt='' width={40} height={40} objectFit='contain' />
                    <span>Preparing</span>
                </div>
                <div className={`relative flex flex-col cursor-pointer ${statusClass(2)}`} onClick={() => handleStatus(2)} title='Click to set the order status to on the way.'>
                    <Image src="/images/bike.png" alt='' width={40} height={40} objectFit='contain' />
                    <span>On the way</span>
                </div>
                <div className={`relative flex flex-col cursor-pointer ${statusClass(3)}`} onClick={() => handleStatus(3)} title='Click to set the order status to complete.'>
                    <Image src="/images/delivered.png" alt='' width={40} height={40} objectFit='contain' />
                    <span>Delivered</span>
                </div>
            </div>

            <OrderDetails order={{...order}} />
            
        </div>
    </div>
    
  )
}

export const getServerSideProps = async ({params}) => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/orders/${params.id}`)

    return {
        props: {
            order: res.data ? res.data : null
        }
    }
}

export default Order