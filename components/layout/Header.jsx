import Logo from "../ui/Logo"
import {FaUserAlt, FaShoppingCart, FaSearch} from 'react-icons/fa'

const Header = () => {
  return (
    <div className="h-[5.5rem] bg-secondary">
        <div className="container mx-auto text-white flex justify-between items-center h-full">
            <Logo/>
            <nav>
                <ul className="flex gap-x-2">
                    <li className="link-item header-nav-link">
                        <a href="">Home</a>
                    </li>
                    <li className="link-item header-nav-link">
                        <a href="">Menu</a>
                    </li>
                    <li className="link-item header-nav-link">
                        <a href="">About</a>
                    </li>
                    <li className="link-item header-nav-link">
                        <a href="">Book Table</a>
                    </li>
                </ul>
            </nav>
            <div className="flex gap-x-4 items-center">
                <a className="link-item " href="">
                    <FaUserAlt/>
                </a>
                <a className="link-item " href="">
                    <FaShoppingCart />
                </a>
                <a className="link-item " href="">
                    <FaSearch />
                </a>
                <a className="link-item " href="">
                    <button className="btn-primary">Order Online</button>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Header