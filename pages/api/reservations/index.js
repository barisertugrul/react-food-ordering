import dbConnect from "../../../util/dbConnect"
import Reservation from "../../../models/Reservation"

const handler = async(req, res) => {
    await dbConnect()

    const { method } = req

    if(method === "GET"){
        try {
            const reservation = await Reservation.find()
            res.status(200).json(reservation)
        } catch (error) {
            console.log(error)
        }
    }

    if(method === "POST"){
        try {
            const newReservation = await Reservation.create(req.body)
            res.status(201).json(newReservation)
        } catch (error) {
            console.log(error)
        }
    }
}

export default handler