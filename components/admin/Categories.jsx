import { useState } from "react";
import Input from "../form/Input";
import Title from "../ui/Title";


const Categories = () => {
    const [newCategory, setNewCategory] = useState("")
    const [categories, setCategories] = useState(["Pizza"])

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

                <button className="btn-primary" onClick={() => {
                    setCategories([...categories, newCategory])
                    setNewCategory("")
                }}>Add</button>
            </div>
            <div className="mt-10">
                {
                    categories.map((category, index) => (
                        <div className="flex justify-between mt-4" key={index}>
                            <b className="text-xl">{category}</b>
                            <button
                                className="btn-primary !bg-danger"
                                onClick={() => 
                                    setCategories(categories.filter((cat) => 
                                    cat != category))
                                }
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