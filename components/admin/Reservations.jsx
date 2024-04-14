import { useEffect, useState } from 'react'
import Title from '../ui/Title'
import axios from 'axios'
import { toast } from 'react-toastify'

const Reservations = () => {
    const [reservations, setReservations] = useState([])
    const statusList = ["Waiting for Approval", "Approved", "Rejected", "Cancelled"]

    
    const getReservations = async () => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/reservations`)
            setReservations(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
      getReservations()
    }, [])

    const handleStatus = async (id, status) => {
        
        const item = reservations.find((reservation) => reservation._id === id)

        if(status === 1 && (item.tableNo === "" || item.tableNo === null)){
            toast.error("You must include at least one table number before confirming the booking. (You can write more than one table number by separating them with a comma.)")
        }else{
            try {
                const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/reservations/${id}`,
                {
                    status
                })
                if(res.status === 200){
                    setReservations([res.data, ...reservations.filter((reservation) => reservation._id !== id)])
                    if(status === 1){
                        toast.success("Booking confirmation has been made.")
                    }else{
                        toast.warning("Booking rejected!")
                    }
                }
            } catch (error) {
                console.log(error)
            }
        }
    }

    const handleSetTable = async (id, value) => {
        
        const item = reservations.find((reservation) => reservation._id === id)

        try {
            const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/reservations/${id}`,
            {
                tableNo: value
            })
            if(res.status === 200){
                setReservations([res.data, ...reservations.filter((reservation) => reservation._id !== id)])
                // or getReservations()
                toast.success("The table number has been updated successfully.)")
            }
        } catch (error) {
            console.log(error)
        }
    }
    
  return (
    <div className='md:p-8 flex-1 md:mt-0 mt-5 md:items-center overflow-x-auto'>
        <Title className="text-[40px]">Reservations</Title>
        <div className='overflow-auto max-h-96 w-full mt-5'>
                <table className='w-full text-sm text-center text-gray-500 xl:min-w-[1000px] min-w-100%'>
                    <thead className='text-xs text-gray-400 uppercase bg-gray-700'>
                        <tr>
                            <th scope='col' className='py-3 px-6'>RESERVATION ID</th>
                            <th scope='col' className='py-3 px-6'>CUSTOMER</th>
                            <th scope='col' className='py-3 px-6'>PHONE NUMBER</th>
                            <th scope='col' className='py-3 px-6'>E-MAIL</th>
                            <th scope='col' className='py-3 px-6'>PERSONS</th>
                            <th scope='col' className='py-3 px-6'>DATE</th>
                            <th scope='col' className='py-3 px-6'>TABLE NO</th>
                            <th scope='col' className='py-3 px-6'>STATUS</th>
                            <th scope='col' className='py-3 px-6'>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reservations.length > 0 && reservations
                            .sort((a,b) => new Date(a.date) - new Date(b.date))
                            .map((reservation) => (
                                <tr key={reservation?._id} className='border-b bg-secondary border-gray-700 hover:bg-primary hover:border-white transition-all cursor-pointer'>
                                    <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white gap-x-1'>
                                        <span>{reservation?._id.substring(0,8)}...</span>
                                    </td>
                                    <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                        <span>{reservation?.fullName}</span>
                                    </td>
                                    <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>{reservation?.phoneNumber}</td>
                                    <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>{reservation?.email}</td>
                                    <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>{reservation?.persons}</td>
                                    <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>{reservation?.date}</td>
                                    <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                        <input type="text" className="bg-transparent border border-double border-gray-900 h-11 text-sm focus:ring-blue-500 focus:border-blue-500 block py-2.5 w-10 text-center font-bold" onChange={(e) => handleSetTable(reservation._id, e.target.value)} value={reservation?.tableNo} />
                                    </td>
                                    <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>{statusList[reservation?.status]}</td>
                                    <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                        <button
                                            className='btn-primary !bg-success'
                                            onClick={() => handleStatus(reservation?._id, 1)}
                                            title='Approve'
                                            disabled = {(reservation.tableNo === null || reservation.tableNo === '')}
                                        >
                                            <i className="fa fa-check"></i>
                                        </button>
                                        <button
                                            className='btn-primary !bg-red-600 ml-2'
                                            onClick={() => handleStatus(reservation?._id, 2)}
                                            title='Reject'
                                        >
                                            <i className="fa fa-times"></i>
                                        </button>
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

export default Reservations