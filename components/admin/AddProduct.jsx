import Image from "next/image"
import OutsideClickHandler from "react-outside-click-handler"
import { GiCancel } from 'react-icons/gi'
import Title from "../ui/Title"
import { useEffect, useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import Input from "../form/Input"


const AddProduct = ({setIsAddProductModal, setIsProductAdded}) => {
    const [file, setFile] = useState()
    const [imageSrc, setImageSrc] = useState()

    /*
        In this component, we used useState() instead of Formik.
        But we colud also add new products with Formik
    */
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [category, setCategory] = useState("")
    const [categories, setCategories] = useState([])
    const [prices, setPrices] = useState([])
    const [extra, setExtra] = useState({text:"", price:""})
    const [extras, setExtras] = useState([])

    const handleExtra = (e) => {
        if(extra){
            if(extra.text && extra.price){
                // setExtras([...extras, extra]) --- Different version
                setExtras((prev) => [...prev, extra])
                setExtra({text:"", price:""})
            }
        }
    }

    const changePrice = (e, index) => {
        const currentPrices = prices
        currentPrices[index] = e.target.value
        setPrices(currentPrices)
    }
    
    const changeCategory = async (e) => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories/${e.target.value}`)
            setCategory(res.data)
        } catch (error) {
            console.log(error)
        }
    }

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

    const handleOnChange = (changeEvent) => {
        const reader = new FileReader()
        reader.onload = function(onLoadEvent){
            setImageSrc(onLoadEvent.target.result)
            setFile(changeEvent.target.files[0])
        }

        reader.readAsDataURL(changeEvent.target.files[0])
        
    }

    const handleCreate = async () => {
        const data = new FormData()
        data.append("file", file)
        data.append("upload_preset", "food-ordering")

        try {
            const uploadRes = await axios.post(
                `${process.env.NEXT_PUBLIC_CLOUDINARY_API_URL}/image/upload/`, data
            )

            const { url } = uploadRes.data

            const newProduct = {
                img: url,
                title,
                desc,
                category,
                prices,
                extras,
            }

            const res = await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}/products`,
                newProduct
            )

            if(res.status === 201){
                setIsAddProductModal(false)
                setIsProductAdded(true)
                toast.success("Product created successfully!")
            }

        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className="fixed w-screen h-screen z-50 top-0 left-0
    aftert:content-[''] after:w-screen after:h-screen after:bg-slate-800 after:absolute after:top-0 after:left-0 after:opacity-60
    first-of-type:h-screen grid place-content-center">
        <OutsideClickHandler onOutsideClick={() => setIsAddProductModal(false)}>
            <div className="w-full h-full grid place-content-center relative">
                <div className="relative z-50 md:w-[600px] w-[370px] bg-white border-2 p-10 rounded-3xl">
                    <Title className="text-[40px] text-center">Add a New Product</Title>
                    <div className="flex flex-col text-sm mt-6">
                        <label className="flex gap-2 items-center">
                            <input
                                type="file"
                                name="image"
                                id="image"
                                onChange={handleOnChange}
                                className="hidden"
                             />
                            <button className="btn-primary !bg-blue-600 pointer-events-none">Choose an Image</button>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            {imageSrc && <img src={imageSrc} alt="" className="w-14 h-14" />}
                        </label>
                    </div>
                    <div className="flex flex-col text-sm mt-4">
                        <span className="font-semibold mb-2">Title</span>
                        <Input
                            type="text"
                            //className="border-2 p-1 text-sm px-1 outline-none"
                            placeholder="Write a title..."
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col text-sm mt-4">
                        <span className="font-semibold mb-2">Description</span>
                        <textarea
                            className="h-14 w-full border outline-none rounded-xl px-4 peer 
                            pt-2
                            border-primary
                            has-value
                         p-1 text-sm"
                            placeholder="Write a description..."
                            onChange={(e) => setDesc(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col text-sm mt-4">
                        <span className="font-semibold mb-2">Select Category</span>
                        <select
                            className="h-14 w-full border outline-none rounded-xl px-4 peer 
                            pt-2
                            border-primary
                            has-value
                             p-1 text-sm"
                            placeholder="Chose a category..."
                            onChange={changeCategory}
                        >
                            <option className="!text-gray-400" value="0">Choose a category...</option>
                        {categories.length > 0 && categories.map((item) => (
                            <option key={item._id} value={item._id}>{item.title}</option>
                        ))}
                        </select>
                    </div>
                    <div className="flex flex-col text-sm mt-4">
                        <span className="font-semibold mb-[2px]">Prices</span>
                        {
                            category && category.title.toLowerCase() === "pizza" ? (
                                <div className="flex justify-between md:flex-nowrap flex-wrap gap-4">
                                    <Input
                                        type="number"
                                        addedClass="border-t-0 border-r-0 border-l-0"
                                        placeholder="small"
                                        onChange={(e) => changePrice(e, 0)}
                                    />
                                    <Input
                                        type="number"
                                        addedClass="border-t-0 border-r-0 border-l-0"
                                        placeholder="medium"
                                        onChange={(e) => changePrice(e, 1)}
                                    />
                                    <Input
                                        type="number"
                                        addedClass="border-t-0 border-r-0 border-l-0"
                                        placeholder="large"
                                        onChange={(e) => changePrice(e, 2)}
                                    />
                                </div>
                            ) : (
                                <Input
                                    type="number"
                                    addedClass="border-t-0 border-r-0 border-l-0"
                                    placeholder="Price"
                                    onChange={(e) => setPrices([e.target.value])}
                                />
                            )
                        }
                    </div>
                    <div className="flex flex-col text-sm mt-4">
                        <span className="font-semibold mb-[2px]">Extra</span>
                        <div className="flex md:flex-nowrap flex-wrap gap-4">
                            <Input
                                type="text"
                                addedClass="border-t-0 border-r-0 border-l-0"
                                placeholder="item"
                                name="text"
                                value={extra.text}
                                onChange={(e) => setExtra({...extra, [e.target.name]:e.target.value})}
                            />
                            <Input
                                type="number"
                                addedClass="border-t-0 border-r-0 border-l-0"
                                placeholder="price"
                                name="price"
                                value={extra.price}
                                onChange={(e) => setExtra({...extra, [e.target.name]:e.target.value})}
                            />
                            <button className="btn-primary ml-auto" onClick={handleExtra}>Add Extra</button>
                        </div>
                        <div className="mt-2 flex gap-2">
                            {extras.length > 0 && extras.map((item, index) => (
                            <span
                                className="inline-block border border-orange-500 text-orange-500 p-1 rounded-xl text-xs cursor-pointer"
                                key={index}
                                onClick={() => {
                                    setExtras(extras.filter((_, i) => i !== index))
                                }}
                            >
                                {item.text}
                            </span>))}
                        </div>
                        <div className="flex justify-end">
                            <button className="btn-primary !bg-success" onClick={handleCreate}>Create</button>
                        </div>
                    </div>

                    <button className="absolute top-4 right-4" onClick={() => setIsAddProductModal(false)} >
                        <GiCancel size={20} className="hover:text-primary transition-all" />
                    </button>
                </div>
            </div>
        </OutsideClickHandler>
    </div>
  )
}

export default AddProduct