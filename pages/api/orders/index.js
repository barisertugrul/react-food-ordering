import dbConnect from "../../../util/dbConnect"
import Order from "../../../models/Order"

const handler = async(req, res) => {
    await dbConnect()

    const { method } = req

    if(method === "GET"){
        try {
            const orders = await Order.find()
            res.status(200).json(orders)
        } catch (error) {
            console.log(error)
        }
    }

    if(method === "POST"){
        try {
            const newOrder = await Order.create(req.body)
            res.status(201).json(newOrder)
        } catch (error) {
            console.log(error)
        }
    }
}

export default handler