import { useEffect, useState } from 'react'
import Title from '../ui/Title'
import axios from 'axios'
import Link from 'next/link'

const Orders = () => {
    const [orders, setOrders] = useState([])
    const method = ["Cash", "Credit Card"]
    const statusList = ["Pending Payment", "Preparing", "On the way", "Delivered"]

    useEffect(() => {
      const getOrders = async () => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/orders`)
            setOrders(res.data)
        } catch (error) {
            console.log(error)
        }
      }

      getOrders()
    }, [])

    const handleStatus = async (event, id) => {
        event.preventDefault()
        const item = orders.find((order) => order._id === id)
        const currentStatus = item.status
        const newStatus = (currentStatus + 1) % 4
        try {
            const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/orders/${id}`,
            {
                status: newStatus
            })
            setOrders([res.data, ...orders.filter((order) => order._id !== id)])
        } catch (error) {
            console.log(error)
        }
    }
    
  return (
    <div className='md:p-8 flex-1 md:mt-0 mt-5 md:items-center overflow-x-auto'>
        <Title className="text-[40px]">Orders</Title>
        <div className='overflow-auto max-h-96 w-full mt-5'>
                <table className='w-full text-sm text-center text-gray-500 xl:min-w-[1000px] min-w-100%'>
                    <thead className='text-xs text-gray-400 uppercase bg-gray-700'>
                        <tr>
                            <th scope='col' className='py-3 px-6'>PRODUCT ID</th>
                            <th scope='col' className='py-3 px-6'>CUSTOMER</th>
                            <th scope='col' className='py-3 px-6'>TOTAL</th>
                            <th scope='col' className='py-3 px-6'>PAYMENT</th>
                            <th scope='col' className='py-3 px-6'>STATUS</th>
                            <th scope='col' className='py-3 px-6'>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.length > 0 && orders
                            .sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt))
                            .map((order) => (
                                <Link key={order?._id} href={`/admin/order/${order?._id}`}>
                                    <tr className='border-b bg-secondary border-gray-700 hover:bg-primary hover:border-white transition-all cursor-pointer'>
                                        <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white gap-x-1'>
                                            <span>{order?._id.substring(0,8)}...</span>
                                        </td>
                                        <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                            <span>{order?.customer?.fullName}</span>
                                        </td>
                                        <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>${order?.total}</td>
                                        <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>{method[order?.method]}</td>
                                        <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>{statusList[order?.status]}</td>
                                        <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                            <button
                                                className='btn-primary !bg-success'
                                                onClick={(e) => handleStatus(e, order?._id)}
                                                //disabled={order?.status > 2}
                                            >Next Stage</button>
                                        </td>
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

export default Orders