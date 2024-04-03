import dbConnect from "../../../util/dbConnect"
import Footer from "../../../models/Footer"

const handler = async(req, res) => {
    await dbConnect()

    const { method } = req

    if(method === "GET"){
        try {
            const footer = await Footer.find()
            res.status(200).json(footer)
        } catch (error) {
            console.log(error)
        }
    }

    if(method === "POST"){
        try {
            const newFooter = await Footer.create(req.body)
            res.status(201).json(newFooter)
        } catch (error) {
            console.log(error)
        }
    }
}

export default handler