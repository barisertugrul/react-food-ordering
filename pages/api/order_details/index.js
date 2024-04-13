import dbConnect from "../../../util/dbConnect"
import OrderDetail from "../../../models/OrderDetail"

const handler = async(req, res) => {
    await dbConnect()

    const { method, query: { orderId } } = req

    if(method === "GET"){
        try {
            const orderDetails = await OrderDetail.find({"orderId":orderId})
            res.status(200).json(orderDetails)
        } catch (error) {
            console.log(error)
        }
    }

    if(method === "POST"){
        try {
            const newOrderDetail = await OrderDetail.create(req.body)
            res.status(201).json(newOrderDetail)
        } catch (error) {
            console.log(error)
        }
    }
}

export default handler