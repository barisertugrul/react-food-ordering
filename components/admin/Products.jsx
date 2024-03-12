import React from 'react'
import Title from '../ui/Title'
import Image from 'next/image'

const Products = () => {
  return (
    <div className='md:p-8 flex-1 md:mt-0 mt-5 md:items-center overflow-x-auto'>
        <Title className="text-[40px]">Products</Title>
        <div className='overflow-auto max-h-96 w-full mt-5'>
                <table className='w-full text-sm text-center text-gray-500 min-w-[750px]'>
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
                        <tr className='border-b bg-secondary border-gray-700 hover:bg-primary hover:border-white transition-all cursor-pointer'>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center'>
                                <Image src="/images/f1.png" alt='' width={50} height={50} />
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                <span>63049e92...</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>Delicious Pizza</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>$20</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                              <button className='btn-primary !bg-danger'>Delete</button>
                            </td>
                        </tr>
                        <tr className='border-b bg-secondary border-gray-700 hover:bg-primary hover:border-white transition-all cursor-pointer'>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center'>
                            <Image src="/images/f2.png" alt='' width={50} height={50} />
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                <span>67245192...</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>Delicious Burger</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>$12</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                              <button className='btn-primary !bg-danger'>Delete</button>
                            </td>
                        </tr>
                        <tr className='border-b bg-secondary border-gray-700 hover:bg-primary hover:border-white transition-all cursor-pointer'>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center'>
                            <Image src="/images/f3.png" alt='' width={50} height={50} />
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                <span>63187192...</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>Good Pizza</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>$17</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                              <button className='btn-primary !bg-danger'>Delete</button>
                            </td>
                        </tr>
                        <tr className='border-b bg-secondary border-gray-700 hover:bg-primary hover:border-white transition-all cursor-pointer'>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center'>
                            <Image src="/images/f4.png" alt='' width={50} height={50} />
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                <span>75489631...</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>Delicious Pasta</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>$18</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                              <button className='btn-primary !bg-danger'>Delete</button>
                            </td>
                        </tr>
                        <tr className='border-b bg-secondary border-gray-700 hover:bg-primary hover:border-white transition-all cursor-pointer'>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center'>
                            <Image src="/images/f5.png" alt='' width={50} height={50} />
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                <span>635781245...</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>French Fries</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>$10</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                              <button className='btn-primary !bg-danger'>Delete</button>
                            </td>
                        </tr>
                        <tr className='border-b bg-secondary border-gray-700 hover:bg-primary hover:border-white transition-all cursor-pointer'>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center'>
                            <Image src="/images/f6.png" alt='' width={50} height={50} />
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                <span>6712487...</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>Delicious Pizza</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>$15</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                              <button className='btn-primary !bg-danger'>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
    </div>
  )
}

export default Products