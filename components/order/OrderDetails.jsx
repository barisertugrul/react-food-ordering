import React from 'react'
import Title from '../ui/Title'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import axios from 'axios'

const OrderDetails = ({order}) => {
    
    const size = ["Small", "Medium", "Large"]
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        const getOrderDetails = async () => {
            try {
                const params = {
                    orderId: order._id
                }
                
                const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/order_details`, {params})
                let productList = []
                res?.data?.map(async (orderDetail) => 
                    {
                        const orderedProduct = await getOrderedProduct(orderDetail.productId)
                        if(orderedProduct){
                            const product = {
                                img: orderedProduct.img || "",
                                title: orderedProduct.title || "",
                                id: orderedProduct._id || "",
                                size: orderDetail.size || "",
                                extras: [...orderDetail.extras] || null,
                                quantity: orderDetail.quantity || 0
                            }
                            productList.push(product)
                        }
                        
                        setProducts([...productList])
                    }
                )
            } catch (error) {
                console.log(error)
            }
        }
        getOrderDetails()
    }, [order])

    const getOrderedProduct = async (productId) => {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`)
        return res.data
    }

  return (
    <div className='md:p-8 flex-1 md:mt-0 mt-5 md:items-center overflow-x-auto'>
                <Title className="text-[40px]">Order Details</Title>
                <div className='overflow-auto max-h-96 w-full mt-5'>
                        <table className='w-full text-sm text-center text-gray-500 xl:min-w-[1000px] min-w-100%'>
                            <thead className='text-xs text-gray-400 uppercase bg-gray-700'>
                                <tr>
                                    <th scope='col' className='py-3 px-6'>IMAGE</th>
                                    <th scope='col' className='py-3 px-6'>ID</th>
                                    <th scope='col' className='py-3 px-6'>TITLE</th>
                                    <th scope='col' className='py-3 px-6'>SIZE</th>
                                    <th scope='col' className='py-3 px-6'>EXTRAS</th>
                                    <th scope='col' className='py-3 px-6'>QUANTITY</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.length > 0 && products.map((product) => (
                                        <tr key={product.id} className='border-b bg-secondary border-gray-700 hover:bg-primary hover:border-white transition-all cursor-pointer'>
                                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center'>
                                                <Image src={product.img} alt={product.title} width={50} height={50} />
                                            </td>
                                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                                <span>{product.id.substring(0, 8)}...</span>
                                            </td>
                                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>{product.title}</td>
                                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>{size[product.size] || "-"}</td>
                                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                                {product?.extras?.length > 0 ? (product?.extras?.map((item, index) => (
                                                    <span key={index}>{item}, </span>
                                                ))) : "-"}
                                            </td>
                                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>{product.quantity}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
            </div>
  )
}

export default OrderDetails
