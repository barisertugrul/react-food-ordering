import dbConnect from "../../../util/dbConnect"
import Category from "../../../models/Category"

const handler = async(req, res) => {
    await dbConnect()

    const { method } = req

    if(method === "GET"){
        try {
            const categories = await Category.find()
            res.status(200).json(categories)
        } catch (error) {
            console.log(error)
        }
    }

    if(method === "POST"){
        try {
            const newCategory = await Category.create(req.body)
            res.status(200).json(newCategory)
        } catch (error) {
            console.log(error)
        }
    }
}

export default handler