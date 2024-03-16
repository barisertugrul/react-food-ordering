import Title from '../../components/ui/Title'
import Image from 'next/image'
import { useState } from 'react'
import { addProduct } from '../../redux/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';

const itemsExtra = [
    {
        id: 1,
        name: "Extra 1",
        price: 1,
    },
    {
        id: 2,
        name: "Ketchup",
        price: 1,
    },
    {
        id: 3,
        name: "Mayonnaise",
        price: 1,
    },
    {
        id: 4,
        name: "Hot Sauce",
        price: 2,
    },
]

const foodItems = [
    {
        id: 1,
        name: "Pizza 1",
        price: 10,
        desc: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        extraOptions: [
            {
                id: 1,
                name: "Extra 1",
                price: 1,
            }
        ]
    }
]

const Index = () => {
    const [prices, setPrices] = useState([10, 20, 30])
    const [price, setPrice] = useState(prices[0])
    const [size, setSize] = useState(0)
    const [quantity, setQuantity] = useState(1)
    const [extraItems, setExtraItems] = useState(itemsExtra)
    const [extras, setExtras] = useState([])
    const cart = useSelector((state) => state.cart)

    const dispatch = useDispatch()

    const handleSize = (sizeIndex) => {
        const difference = prices[sizeIndex] - prices[size]
        setSize(sizeIndex)
        changePrice(difference)
    }

    const changePrice = (number) => {
        setPrice(price + number)
    }

    const handleChange = (e, item) => {
        const checked = e.target.checked

        if(checked) {
            changePrice(item.price)
            setExtras([...extras, item])
        }else{
            changePrice(-(item.price))
            setExtras(extras.filter((extra) => extra.id !== item.id))
        }
    }

    const handleClick = () => {
        dispatch(addProduct(
            {
                ...foodItems[0],
                cartUUID: uuidv4(),
                extras,
                price,
                quantity
            }
        ))
    }

  return (
    <div className='flex items-center  md:h-[calc(100vh_-_88px)] gap-5 py-20 flex-wrap'>
        <div className='relative md:flex-1 md:w-[80%] md:h-[80%] w-36 h-36 mx-auto'>
            <Image
                src="/images/f1.png" alt=''
                layout="fill"
                objectFit="contain"
                sizes="(max-width: 768px) 80vw,
                (max-width: 1200px) 80vw,
                80vw"
            />
        </div>
        <div className='md:flex-1 md:pr-24 pl-10 pr-10 md:text-start text-center'>
            <Title className="text-6xl" >Delicious Pizza</Title>
            <span className='text-primary text-2xl font-bold underline underline-offset-1 inline-block my-4'>${price}</span>
            <p className='text-sm my-4'>
                Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
            </p>
            <div className='mt-5 md:justify-start justify-center'>
                <h4 className='text-xl font-bold'> Chose the size</h4>
                <div className='flex items-center gap-x-20 md:justify-start justify-center'>
                    <div className='relative w-8 h-8 cursor-pointer'
                        onClick={() => handleSize(0)}>
                        <Image src="/images/size.png" alt='' layout="fill" />
                        <span className='absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium'>Small</span>
                    </div>
                    <div className='relative w-12 h-12 cursor-pointer'
                        onClick={() => handleSize(1)}>
                        <Image src="/images/size.png" alt='' layout="fill" />
                        
                        <span className='absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium'>Medium</span>
                    </div>
                    <div className='relative w-16 h-16 cursor-pointer'
                        onClick={() => handleSize(2)}>
                        <Image src="/images/size.png" alt='' layout="fill" />
                        <span className='absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium'>Large</span>
                    </div>
                </div>
            </div>
            <div className='mt-5 md:justify-start justify-center'>
                <h4 className='text-xl font-bold'> Chose additional ingredients</h4>
                <div className='flex gap-x-4 mt-4 md:justify-start justify-center'>
                  {
                    extraItems.map((item) => (
                        <label key={item.id} className='flex items-center gap-x-1'>
                            <input type="checkbox"
                                onClick={(e) => handleChange(e, item)} className='w-5 h-5 accent-primary cursor-pointer' />
                            <span className='text-sm font-semibold'>{item.name}</span>
                        </label>
                    ))
                  }
                </div>
            </div>
            <div className='md:flex flex-1 gap-x-4 mt-5 md:justify-between justify-center'>
                <div className="flex gap-x-4 mt-4 md:justify-start justify-center">
                    <div className='flex-1 md-justify-start justify-center'>
                        <h4 className='text-xl font-bold mb-2'> Chose Quantity</h4>
                        <div className="flex justify-center md:max-w-[8rem]">
                            <button type="button" id="decrement-button" className="btn-primary  p-3 h-11"
                                onClick={
                                    () => (
                                    quantity > 1 ?
                                        setQuantity(quantity-1) : setQuantity(quantity)
                                    )
                                }
                            >
                                <svg className="w-3 h-3 text-gray-900 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16"/>
                                </svg>
                            </button>
                            <input type="text" className="bg-gray-50 border-x-0 border-gray-300 h-11 text-sm focus:ring-blue-500 focus:border-blue-500 block py-2.5 w-5 text-center font-bold" placeholder="1" value={quantity} required />
                            <button type="button" id="increment-button" className="btn-primary p-3 h-11"
                                onClick={() => (setQuantity(quantity+1))}
                            >
                                <svg className="w-3 h-3 text-gray-900 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='flex md:justify-end justify-center items-end md:mt-0 mt-5'>
                    <button className='btn-primary mt-5 h-12' onClick={handleClick}>Add to Cart</button>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Index
