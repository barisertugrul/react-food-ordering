import { useState } from "react"
import { FaUserAlt, FaShoppingCart, FaSearch } from 'react-icons/fa'
import { GiHamburgerMenu, GiCancel } from 'react-icons/gi'
import Logo from "../ui/Logo"
import SearchComponent from "../ui/SearchComponent"
import { useRouter } from "next/router"
import Link from "next/link"
import { useSelector } from "react-redux"

const Header = () => {
    const [isSearchModal, setIsSearchModal] = useState(false)
    const [isMenuModal, setIsMenuModal] = useState(false)
    const cart = useSelector((state) => state.cart)
    const router = useRouter()
  return (
    <div className={`h-[5.5rem] z-40 relative ${
        router.asPath === "/" ? "bg-transparent" : "bg-secondary"
    }`}>
        <div className="container mx-auto text-white flex justify-between items-center h-full sm:w-10/12">
            <Logo/>
            {
                //Benim çözüm
                //<nav className={`sm:static sm:flex absolute top-[5.5rem] left-0 grid place-content-center sm:w-auto sm:h-auto max-sm:bg-white h-full w-full sm:text-white text-black ${!isMenuModal && 'hidden'}`}>
            }
            {
                // Hocanın çözümü
            }
            <nav className={`sm:static absolute top-0 left-0 sm:w-auto sm:h-auto w-full h-screen sm:text-white text-black sm:bg-transparent bg-white sm:flex hidden ${isMenuModal === true && '!grid place-content-center'}`}>
                <ul className="flex gap-x-2 sm:flex-row flex-col items-center">
                    <li className="link-item header-nav-link">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="link-item header-nav-link">
                        <Link href="/menu">Menu</Link>
                    </li>
                    <li className="link-item header-nav-link">
                        <Link href="/about">About</Link>
                    </li>
                    <li className="link-item header-nav-link">
                        <Link href="/reservation">Book Table</Link>
                    </li>
                </ul>
                    { isMenuModal &&
                        <button className="absolute top-4 right-4" onClick={() => setIsMenuModal(false)} >
                            <GiCancel size={20} className="hover:text-primary transition-all" />
                        </button>
                    }
            </nav>
            <div className="flex gap-x-4 items-center">
                <Link href="/auth/login">
                    <span><FaUserAlt className="link-item"/></span>
                </Link>
                <Link href="/cart">
                    <span className="relative">
                        <FaShoppingCart className="link-item" />
                        <span className="w-4 h-4 text-xs grid place-content-center rounded-full
                         bg-primary absolute -top-3 -right-3 text-black
                         font-bold">
                            {cart.products.length}
                        </span>
                    </span>
                    
                </Link>
                <button className="link-item" onClick={() => setIsSearchModal(!isSearchModal)}>
                    <FaSearch />
                </button>
                <a className="link-item md:inline-block hidden sm" href="">
                    <button className="btn-primary">Order Online</button>
                </a>
                <button className="link-item max-sm:block hidden whitespace-nowrap" onClick={() => {
                    setIsMenuModal(!isMenuModal)
                    console.log(isMenuModal? "True":"False")
                    }}>
                    <GiHamburgerMenu className="text-2xl" />
                </button>
            </div>
        </div>
        {isSearchModal && (
            <SearchComponent setIsSearchModal={setIsSearchModal}/>
        )}
    </div>
  )
}

export default Header