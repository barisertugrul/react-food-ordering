import dbConnect from "../../../util/dbConnect"
import Footer from "../../../models/Footer"


const handler = async(req, res) => {
    await dbConnect()

    const { method, query: { id } } = req

    if(method === "GET"){
        try {
            const footer = await Footer.findById(id)
            res.status(200).json(footer)
        } catch (error) {
            console.log(error)
        }
    }

    if(method === "PUT"){
        try {
            const footer = await Footer.findByIdAndUpdate(id, req.body, {new:true,})
            res.status(200).json(footer)
        } catch (error) {
            console.log(error)
        }
    }
}

export default handler