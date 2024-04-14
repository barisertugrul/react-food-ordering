import Image from "next/image"
import Link from "next/link"
import { RiShoppingCart2Fill } from 'react-icons/ri'
import { useSelector, useDispatch } from "react-redux"
import { addProduct } from "../../redux/cartSlice"
import { v4 as uuidv4 } from 'uuid';


const MenuItem = ({ product }) => {
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    // If you want a product to be added to the cart once
    const isInCart = cart.products.find((item) => item._id === product._id)

    const handleClick = () => {
        // Add to cart direct on the menu list with default values
        dispatch(addProduct({
            cartUUID: uuidv4(),
            ...product,
            extras: null,
            price: product.prices[0],
            quantity: 1
        }))
    }

  return (
    <div className="bg-secondary rounded-3xl">
        <div className="w-full bg-[#f1f2f3] h-[210px] grid place-content-center rounded-bl-[46px] rounded-tl-2xl rounded-tr-2xl">
            <Link className="cursor-pointer" href={`/product/${product._id}`}>
                <div className="relative w-36 h-36 hover:scale-110 transition-all cursor-pointer">
                    <Image src={product.img} alt="" layout="fill" className="" priority />
                </div>
            </Link>
        </div>
        <div className="p-[25px] text-white">
            <Link className="cursor-pointer" href={`/product/${product._id}`}>
                <h4 className="text-xl font-semibold mb-2 cursor-pointer hover:text-primary">{product.title}</h4>
            </Link>
            <p className="text-[15px] mb-4">
                {product.desc}
            </p>
            <div className="flex justify-between items-center mt-4">
                <span>${product.prices[0]}</span>
                <button
                    className="btn-primary w-10 h-10 rounded-full !p-0 grid place-content-center"
                    onClick={handleClick} // Add to cart direct on the menu list
                    //disabled={isInCart}  // If you want a product to be added to the cart once
                >
                    <RiShoppingCart2Fill />
                </button>
            </div>
        </div>
    </div>
  )
}

export default MenuItem