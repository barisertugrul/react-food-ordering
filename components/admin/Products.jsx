import React, { useEffect, useState } from 'react'
import Title from '../ui/Title'
import Image from 'next/image'
import axios from 'axios'
import { toast } from 'react-toastify'

const Products = ({isProductAdded}) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
      getProducts()
    }, [isProductAdded])

    const getProducts = async () => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`)
            setProducts(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async (id) => {
        try {
            if(confirm("Are you sure you want to delete this product?")){
                const res = await axios.delete(
                    `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`
                )
                if(res.status === 200){
                    toast.success("Product Deleted!")
                    getProducts()
                }
            }
        } catch (error) {
            console.log(error)
        }
    }
    
  return (
    <div className='md:p-8 flex-1 md:mt-0 mt-5 md:items-center overflow-x-auto'>
        <Title className="text-[40px]">Products</Title>
        <div className='overflow-auto max-h-96 w-full mt-5'>
                <table className='w-full text-sm text-center text-gray-500 xl:min-w-[1000px] min-w-100%'>
                    <thead className='text-xs text-gray-400 uppercase bg-gray-700'>
                        <tr>
                            <th scope='col' className='py-3 px-6'>IMAGE</th>
                            <th scope='col' className='py-3 px-6'>ID</th>
                            <th scope='col' className='py-3 px-6'>TITLE</th>
                            <th scope='col' className='py-3 px-6'>PRICE</th>
                            <th scope='col' className='py-3 px-6'>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.length > 0 && products.map((product) => (
                                <tr key={product._id} className='border-b bg-secondary border-gray-700 hover:bg-primary hover:border-white transition-all cursor-pointer'>
                                    <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center'>
                                        <Image src={product.img} alt={product.title} width={50} height={50} />
                                    </td>
                                    <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                        <span>{product._id.substring(0, 8)}...</span>
                                    </td>
                                    <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>{product.title}</td>
                                    <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>${product.prices[0]}</td>
                                    <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                    <button className='btn-primary !bg-danger' onClick={() => handleDelete(product._id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
    </div>
  )
}

export default Products