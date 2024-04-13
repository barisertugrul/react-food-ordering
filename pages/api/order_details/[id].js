import OrderDetail from "../../../models/OrderDetail"
import dbConnect from "../../../util/dbConnect"


const handler = async(req, res) => {
    await dbConnect()

    const { method, query: { id } } = req

    if(method === "GET"){
        try {
            const orderDetail = await OrderDetail.findById(id)
            res.status(200).json(orderDetail)
        } catch (error) {
            console.log(error)
        }
    }

    if(method === "DELETE"){
        try {
            const orderDetail = await OrderDetail.findByIdAndDelete(id)
            res.status(200).json(orderDetail)
        } catch (error) {
            console.log(error)
        }
    }

    if(method === "PUT"){
        try {
            const orderDetail = await OrderDetail.findByIdAndUpdate(id, req.body, {new:true,})
            res.status(200).json(orderDetail)
        } catch (error) {
            console.log(error)
        }
    }
}

export default handler