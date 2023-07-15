import Image from 'next/image'

const Order = () => {
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
                                63107f5559...
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                John Doe
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>İzmir, Türkiye</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>$18</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='flex justify-between w-full p-10 bg-primary mt-6'>
                <div className='relative flex flex-col'>
                    <Image src="/images/paid.png" alt='' width={40} height={40} objectFit='contain' />
                    <span>Payment</span>
                </div>
                <div className='relative flex flex-col animate-pulse'>
                    <Image src="/images/bake.png" alt='' width={40} height={40} objectFit='contain' />
                    <span>Preparing</span>
                </div>
                <div className='relative flex flex-col'>
                    <Image src="/images/bike.png" alt='' width={40} height={40} objectFit='contain' />
                    <span>On the way</span>
                </div>
                <div className='relative flex flex-col'>
                    <Image src="/images/delivered.png" alt='' width={40} height={40} objectFit='contain' />
                    <span>Delivered</span>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Order