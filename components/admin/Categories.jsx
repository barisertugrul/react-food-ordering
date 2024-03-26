import { useEffect, useState } from "react";
import Input from "../form/Input";
import Title from "../ui/Title";
import axios from "axios";


const Categories = () => {
    const [newCategory, setNewCategory] = useState("")
    const [categories, setCategories] = useState([])

    useEffect(() => {
      const getCategories = async () => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`)
            setCategories(res?.data)
        } catch (error) {
            console.log(error)
        }
      }
      getCategories()
    }, [])

    const handleCreate = async () => {
        try {
            const res = await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}/categories`,
                { title: newCategory}
            )
            setCategories([...categories, res.data])
            setNewCategory("")
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async (id) => {
        try {
            if(confirm("Are you sure want to delete this category?")){
                await axios.delete(
                    `${process.env.NEXT_PUBLIC_API_URL}/categories/${id}`
                )
                setCategories(categories.filter((cat) => cat._id != id))
            }
        } catch (error) {
            console.log(error)
        }
    }
    

  return (
    <div className='md:p-8 flex-1 md:mt-0 mt-5 md:items-center overflow-x-auto'>
        <Title className="text-[40px]">Categories</Title>
        <div  className='mt-5'>
            <div className='flex gap-4 flex-1 items-center'>
                <Input value={newCategory}
                    isrequired={false}
                    placeholder="Type a new category name..."
                    onChange={(e) => setNewCategory(e.target.value)}
                />

                <button className="btn-primary" onClick={handleCreate}>Add</button>
            </div>
            <div className="mt-10 max-h-[250px] overflow-auto p-4">
                {
                    categories.map((category) => (
                        <div className="flex justify-between mt-4" key={category._id}>
                            <b className="text-xl">{category.title}</b>
                            <button
                                className="btn-primary !bg-danger"
                                onClick={() => handleDelete(category._id)}
                            >Delete</button>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
};

export default Categories