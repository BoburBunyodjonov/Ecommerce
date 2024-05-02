"use client"

import Image from "next/image";

// Images 
import Logo from "@/images/logo.png"

// Icons 
import { LuSettings2 } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BiSolidUserCircle } from "react-icons/bi";
import { MdOutlineShoppingCart } from "react-icons/md";


import Link from "next/link";





const Navbar = () => {
  return (
    <div className="navbar w-full bg-white shadow-lg sticky top-0">
        <div className="container mx-auto bg-white md:flex ">
        <div className=" md:w-[15%] flex justify-center md:justify-start items-center">
            <Link href="/"> <Image src={Logo} alt="Logo"  className="py-3"/></Link>
        </div>
        <div className=" md:w-[65%] flex justify-between items-center p-3">
            <div className="w-full bg-[#F6F8FA] flex items-center border px-3 rounded-l-md border-[#1fba4a]">
                <IoSearch className="text-xl" />
                <input placeholder="Qidiruv" className="bg-[#F6F8FA] w-full outline-none p-3" type="text" name="" id="" />
            </div>
            <button className="px-5 py-3 bg-[#1FBA4A] border border-[#1fba4a] rounded-r-md text-white flex items-center justify-center">
                <LuSettings2 />
                Filter 
            </button>
        </div>
        <div className=" md:w-[20%] p-5 flex justify-around space-x-3 items-center">
            <select name="" id="" className="bg-[#F6F8FA] p-2 outline-none">
                <option value="">UZ</option>
                <option value="">EN</option>
                <option value="">RU</option>
            </select>
            <IoIosNotificationsOutline className="text-xl cursor-pointer" />
            
            <Link href="/cart" className="px-2 text-center flex flex-col justify-center">
                    {/* <StyledBadge badgeContent={cartCount.length} color="secondary"> */}
                      <MdOutlineShoppingCart className="text-xl mx-auto" />
                    {/* </StyledBadge> */}
            </Link>
            <Link href={`${localStorage.getItem('loginData') ? '/profile': "/login" }`}>
                <button className="flex justify-between items-center space-x"> 
                    Kirish
                    <BiSolidUserCircle className="text-xl ml-3" />
                 </button> 
            </Link>
        </div>
    </div>
    </div>
  )
}

export default Navbar