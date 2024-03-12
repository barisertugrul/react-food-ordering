import Title from '../ui/Title'

const Orders = () => {
  return (
    <div className='md:p-8 flex-1 md:mt-0 mt-5 md:items-center overflow-x-auto'>
        <Title className="text-[40px]">Orders</Title>
        <div className='overflow-auto max-h-96 w-full mt-5'>
                <table className='w-full text-sm text-center text-gray-500 min-w-[750px]'>
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
                        <tr className='border-b bg-secondary border-gray-700 hover:bg-primary hover:border-white transition-all cursor-pointer'>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white gap-x-1'>
                                <span>63107...</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                <span>A*** Z***</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>$20</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>Cash</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>Preparing</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                              <button className='btn-primary !bg-success'>Next Stage</button>
                            </td>
                        </tr>
                        <tr className='border-b bg-secondary border-gray-700 hover:bg-primary hover:border-white transition-all cursor-pointer'>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white gap-x-1'>
                                <span>63107...</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                <span>R*** F***</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>$12</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>e-wallet</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>Complete</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                              <button className='btn-primary !bg-success'>Next Stage</button>
                            </td>
                        </tr>
                        <tr className='border-b bg-secondary border-gray-700 hover:bg-primary hover:border-white transition-all cursor-pointer'>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white gap-x-1'>
                                <span>63107...</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                <span>G*** j***</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>$18</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>Cash</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>Complete</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                              <button className='btn-primary !bg-success'>Next Stage</button>
                            </td>
                        </tr>
                        <tr className='border-b bg-secondary border-gray-700 hover:bg-primary hover:border-white transition-all cursor-pointer'>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white gap-x-1'>
                                <span>63107...</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                <span>T*** M*** C***</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>$32</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>Credit Card</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>Preparing</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                              <button className='btn-primary !bg-success'>Next Stage</button>
                            </td>
                        </tr>
                        <tr className='border-b bg-secondary border-gray-700 hover:bg-primary hover:border-white transition-all cursor-pointer'>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white gap-x-1'>
                                <span>63107...</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                <span>S*** Y***</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>$38</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>Cash</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>Preparing</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                              <button className='btn-primary !bg-success'>Next Stage</button>
                            </td>
                        </tr>
                        <tr className='border-b bg-secondary border-gray-700 hover:bg-primary hover:border-white transition-all cursor-pointer'>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white gap-x-1'>
                                <span>63107...</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                <span>Ç*** U*** D***</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>$18</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>Credit Card</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>Complete</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                              <button className='btn-primary !bg-success'>Next Stage</button>
                            </td>
                        </tr>
                        <tr className='border-b bg-secondary border-gray-700 hover:bg-primary hover:border-white transition-all cursor-pointer'>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white gap-x-1'>
                                <span>63107...</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                <span>L*** U***</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>$12</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>Cash</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>Preparing</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                              <button className='btn-primary !bg-success'>Next Stage</button>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
    </div>
  )
}

export default Orders