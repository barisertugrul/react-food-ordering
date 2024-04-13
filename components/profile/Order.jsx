import { useEffect, useState } from 'react'
import Title from '../ui/Title'
import { useSession } from 'next-auth/react'
import axios from 'axios'
import Link from 'next/link'

const Order = () => {
    
    const {data: session} = useSession()
    const [orders, setOrders] = useState([])
    const statusList = ["Pending Payment", "Preparing", "On the way", "Delivered"]

    useEffect(() => {
      const getOrders = async () => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/orders`)
            setOrders(res.data.filter((order) => order.customer.email === session.user.email))
        } catch (error) {
            console.log(error)
        }
      }

      getOrders()
    }, [session])

  return (
    <div className='md:p-8 flex-1 md:mt-0 mt-5 md:items-center overflow-x-auto'>
        <Title className="text-[40px]">Orders</Title>
        <div className='overflow-auto max-h-96 w-full mt-5'>
                <table className='w-full text-sm text-center text-gray-500 xl:min-w-[1000px] min-w-100%'>
                    <thead className='text-xs text-gray-400 uppercase bg-gray-700'>
                        <tr>
                            <th scope='col' className='py-3 px-6'>ID</th>
                            <th scope='col' className='py-3 px-6'>ADDRESS</th>
                            <th scope='col' className='py-3 px-6'>DATE</th>
                            <th scope='col' className='py-3 px-6'>TOTAL</th>
                            <th scope='col' className='py-3 px-6'>STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.length > 0 && orders.map((order) => (
                                <Link key={order?._id} href={`/order/${order?._id}`}>
                                    <tr className='border-b bg-secondary border-gray-700 hover:bg-primary hover:border-white transition-all cursor-pointer'>
                                        <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center'>
                                            <span>{order._id.substring(0,8)}...</span>
                                        </td>
                                        <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                            <span>{order?.address}</span>
                                        </td>
                                        <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>{Date(order?.createdAt)}</td>
                                        <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>${order?.total}</td>
                                        <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>{statusList[order?.status]}</td>
                                    </tr>
                                </Link>
                            ))
                        }
                    </tbody>
                </table>
            </div>
    </div>
  )
}

export default Order