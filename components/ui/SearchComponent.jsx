import Image from "next/image"
import OutsideClickHandler from "react-outside-click-handler"
import { GiCancel } from 'react-icons/gi'
import Title from "./Title"
import { useEffect, useState } from "react"
import axios from "axios"
import Input from "../form/Input"
import { useRouter } from "next/router"
import PacmanLoader from "react-spinners/PacmanLoader"

const SearchComponent = ({setIsSearchModal}) => {
    const [products, setProducts] = useState([])
    const [filtered, setFiltered] = useState([])
    const router = useRouter()

    useEffect(() => {
      const getProducts = async () => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`)
            setProducts(res.data)
            setFiltered(res.data.slice(0, 15))
        } catch (error) {
            console.log(error)
        }
      }
      getProducts()
    }, [])

    const handleSearch = (e) => {
        const searchFilter = products.filter((product)=>product.title.toLowerCase().includes(e.target.value.toLowerCase())).slice(0, 15)
        setFiltered(searchFilter)
    }
    

  return (
    <div className="fixed w-screen h-screen z-50 top-0 left-0
    aftert:content-[''] after:w-screen after:h-screen after:bg-slate-800 after:absolute after:top-0 after:left-0 after:opacity-60
    first-of-type:h-screen grid place-content-center">
        <OutsideClickHandler onOutsideClick={() => setIsSearchModal(false)}>
            <div className="w-full h-full grid place-content-center relative">
                <div className="relative z-50 md:w-[600px] w-[370px] bg-white border-2 p-10 rounded-3xl">
                    <Title className="text-[40px] text-center">Search</Title>
                    <Input type="text" onChange={handleSearch} placeholder="Search..." />
                    
                    {products.length > 0 ? (<ul className="max-h-[300px] overflow-hidden overflow-y-scroll mt-5">
                        {filtered.length > 0 ? (filtered.map((product) => 
                            <li key={product?._id} className="flex items-center justify-between p-2 hover:bg-primary transition-all h-[58px] rounded-md cursor-pointer"
                                onClick={() => {
                                    router.push(`/product/${product?._id}`)
                                    setIsSearchModal(false)
                                }}
                            >
                                <div className="relative flex">
                                    <Image src={product?.img} alt={product?.title} width={48} height={48} />
                                </div>
                                <span className="font-bold">{product?.title}</span>
                                <span className="font-bold">${product?.prices[0]}</span>
                            </li>
                        )) : (
                            <p className="text-center font-semibold mt-5">No products were found matching your search criteria!</p>
                        )}
                    </ul>) : (
                        <div className="flex justify-center items-center mt-3">
                            <PacmanLoader color="#fca311" />
                        </div>
                    )}
                    <button className="absolute top-4 right-4" onClick={() => setIsSearchModal(false)} >
                        <GiCancel size={20} className="hover:text-primary transition-all" />
                    </button>
                </div>
            </div>
        </OutsideClickHandler>
    </div>
  )
}

export default SearchComponent