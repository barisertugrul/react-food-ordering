import React from 'react'
import Title from '../ui/Title'

const Order = () => {
  return (
    <div className='md:p-8 flex-1 md:mt-0 mt-5 md:items-center overflow-x-auto'>
        <Title className="text-[40px]">Orders</Title>
        <div className='overflow-auto max-h-96 w-full mt-5'>
                <table className='w-full text-sm text-center text-gray-500 min-w-[750px]'>
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
                        <tr className='border-b bg-secondary border-gray-700 hover:bg-primary hover:border-white transition-all cursor-pointer'>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center'>
                                <span>63107...</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                <span>İzmir</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>01-09-2023</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>$20</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>Preparing</td>
                        </tr>
                        <tr className='border-b bg-secondary border-gray-700 hover:bg-primary hover:border-white transition-all cursor-pointer'>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center'>
                                <span>63107...</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                <span>İzmir</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>01-09-2023</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>$20</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>Preparing</td>
                        </tr>
                        <tr className='border-b bg-secondary border-gray-700 hover:bg-primary hover:border-white transition-all cursor-pointer'>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center'>
                                <span>63107...</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                <span>İzmir</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>01-09-2023</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>$20</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>Preparing</td>
                        </tr>
                        <tr className='border-b bg-secondary border-gray-700 hover:bg-primary hover:border-white transition-all cursor-pointer'>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center'>
                                <span>63107...</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                <span>İzmir</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>01-09-2023</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>$20</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>Preparing</td>
                        </tr>
                        <tr className='border-b bg-secondary border-gray-700 hover:bg-primary hover:border-white transition-all cursor-pointer'>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center'>
                                <span>63107...</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                <span>İzmir</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>01-09-2023</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>$20</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>Preparing</td>
                        </tr>
                        <tr className='border-b bg-secondary border-gray-700 hover:bg-primary hover:border-white transition-all cursor-pointer'>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center'>
                                <span>63107...</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                <span>İzmir</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>01-09-2023</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>$20</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>Preparing</td>
                        </tr>
                        <tr className='border-b bg-secondary border-gray-700 hover:bg-primary hover:border-white transition-all cursor-pointer'>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center'>
                                <span>63107...</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                <span>İzmir</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>01-09-2023</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>$20</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>Preparing</td>
                        </tr>
                        <tr className='border-b bg-secondary border-gray-700 hover:bg-primary hover:border-white transition-all cursor-pointer'>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center'>
                                <span>63107...</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                <span>İzmir</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>23-09-2023</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>$14</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>Delivered</td>
                        </tr>
                        <tr className='border-b bg-secondary border-gray-700 hover:bg-primary hover:border-white transition-all cursor-pointer'>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center'>
                                <span>63107...</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                <span>İzmir</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>23-09-2023</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>$14</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>Delivered</td>
                        </tr>
                        <tr className='border-b bg-secondary border-gray-700 hover:bg-primary hover:border-white transition-all cursor-pointer'>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center'>
                                <span>63107...</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                <span>İzmir</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>23-09-2023</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>$14</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>Delivered</td>
                        </tr>
                        <tr className='border-b bg-secondary border-gray-700 hover:bg-primary hover:border-white transition-all cursor-pointer'>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center'>
                                <span>63107...</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                <span>İzmir</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>23-09-2023</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>$14</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>Delivered</td>
                        </tr>
                        <tr className='border-b bg-secondary border-gray-700 hover:bg-primary hover:border-white transition-all cursor-pointer'>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center'>
                                <span>63107...</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                <span>İzmir</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>23-09-2023</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>$14</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>Delivered</td>
                        </tr>
                        <tr className='border-b bg-secondary border-gray-700 hover:bg-primary hover:border-white transition-all cursor-pointer'>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center'>
                                <span>63107...</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                <span>İzmir</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>23-09-2023</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>$14</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>Delivered</td>
                        </tr>
                        <tr className='border-b bg-secondary border-gray-700 hover:bg-primary hover:border-white transition-all cursor-pointer'>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center'>
                                <span>63107...</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                <span>İzmir</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>23-09-2023</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>$14</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>Delivered</td>
                        </tr>
                        <tr className='border-b bg-secondary border-gray-700 hover:bg-primary hover:border-white transition-all cursor-pointer'>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center'>
                                <span>63107...</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                <span>İzmir</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>23-09-2023</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>$14</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>Delivered</td>
                        </tr>
                        <tr className='border-b bg-secondary border-gray-700 hover:bg-primary hover:border-white transition-all cursor-pointer'>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center'>
                                <span>63107...</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                <span>İzmir</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>23-09-2023</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>$14</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>Delivered</td>
                        </tr>
                    </tbody>
                </table>
            </div>
    </div>
  )
}

export default Order