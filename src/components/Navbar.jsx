import React,{ useState } from "react"

import { NavLink } from "react-router-dom"
import { ImCart } from "react-icons/im";
import { IoHomeOutline } from "react-icons/io5";

import { LiaOpencart } from "react-icons/lia";


import { AiFillProduct } from "react-icons/ai";




const Navbar = ({cartAllProduct}) => {
    
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen)

    console.log(cartAllProduct)
    return (
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
            {/* Desktop view */}
            <NavLink className='rounded-xl p-1 hover:bg-amber-50 border-b border-amber-300'  to="/">

                    <p className=" text-2xl font-[Pacifico] font-bold text-black">e-<span className="text-red-500">com</span></p>
                </NavLink>
            <div className="hidden sm:flex items-center  gap-8">
                <NavLink className="text-2xl text-amber-500 hover:text-red-400 hover:border-b" to="/">
                    Home
                </NavLink>

                <NavLink className="text-2xl text-amber-500 hover:text-red-400 hover:border-b " to="/product">
                    Product
                </NavLink>

                <NavLink to="/cart">
                    <LiaOpencart className="text-3xl hover:border-b hover:text-red-500 text-amber-500" />
                    {cartAllProduct > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex  items-center justify-center">
                            {cartAllProduct}
                        </span>
                    )}
                </NavLink>
            </div>

        {/* Mobile view */}
            <div className="sm:hidden flex flex-row items-center gap-8">
            <NavLink to="/product">
                    <AiFillProduct className="text-2xl hover:text-red-500 text-green-500" />
                </NavLink>

                <NavLink to="/cart">
                    <ImCart className="text-2xl  hover:text-red-500 text-green-500" />
                    <span>{cartAllProduct}</span>
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar