import Reservation from "../../../models/Reservation"
import dbConnect from "../../../util/dbConnect"


const handler = async(req, res) => {
    await dbConnect()

    const { method, query: { id } } = req

    if(method === "GET"){
        try {
            const reservation = await Reservation.findById(id)
            res.status(200).json(reservation)
        } catch (error) {
            console.log(error)
        }
    }

    if(method === "DELETE"){
        try {
            const reservation = await Reservation.findByIdAndDelete(id)
            res.status(200).json(reservation)
        } catch (error) {
            console.log(error)
        }
    }

    if(method === "PUT"){
        try {
            const reservation = await Reservation.findByIdAndUpdate(id, req.body, {new:true,})
            res.status(200).json(reservation)
        } catch (error) {
            console.log(error)
        }
    }
}

export default handler