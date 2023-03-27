import Image from "next/image"
import OutsideClickHandler from "react-outside-click-handler"
import { GiCancel } from 'react-icons/gi'
import Title from "./Title"

const SearchComponent = ({setIsSearchModal}) => {
  return (
    <div className="fixed w-screen h-screen z-50 top-0 left-0
    aftert:content-[''] after:w-screen after:h-screen after:bg-slate-800 after:absolute after:top-0 after:left-0 after:opacity-60
    first-of-type:h-screen grid place-content-center">
        <OutsideClickHandler onOutsideClick={() => setIsSearchModal(false)}>
            <div className="w-full h-full grid place-content-center relative">
                <div className="relative z-50 md:w-[600px] w-[370px] bg-white border-2 p-10 rounded-3xl">
                    <Title className="text-[40px] text-center">Search</Title>
                    <input type="text" name="" id="" placeholder="Search..." className="border w-full p-2 my-5" />
                    
                    <ul>
                        <li className="flex items-center justify-between p-2 hover:bg-primary transition-all h-[58px] rounded-md">
                            <div className="relative flex">
                                <Image src="/images/f1.png" alt="" width={48} height={48} />
                            </div>
                            <span className="font-bold">Good Pizza</span>
                            <span className="font-bold">$20</span>
                        </li>
                        <li className="flex items-center justify-between p-2 hover:bg-primary transition-all h-[58px] rounded-md">
                            <div className="relative flex">
                                <Image src="/images/f2.png" alt="" width={48} height={48} />
                            </div>
                            <span className="font-bold">Delicious Burger</span>
                            <span className="font-bold">$15</span>
                        </li>
                        <li className="flex items-center justify-between p-2 hover:bg-primary transition-all h-[58px] rounded-md">
                            <div className="relative flex">
                                <Image src="/images/f4.png" alt="" width={48} height={48} />
                            </div>
                            <span className="font-bold">Delicious Pasta</span>
                            <span className="font-bold">$18</span>
                        </li>
                    </ul>
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