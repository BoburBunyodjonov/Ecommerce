"use client"

// Icons
import { LiaCartPlusSolid } from "react-icons/lia";
import { GrFormNext } from "react-icons/gr";
import { useEffect, useState } from "react";
import Link from "next/link";



const Sidebar = () => {
    const [category ,setCategory]=useState([])

    const getproducts = async()=>{
        const res = await fetch("http://localhost:4000/categories");
        const data = await res.json();
        setCategory(data);
    }

    useEffect(()=>{
        getproducts();
    },[])



  return (
    <div className="w-full md:w-[25%]  py-3 bg-white px-14">
        <button className="w-full bg-[#1FBA4A] text-white flex justify-center items-center px-5 py-3 rounded-lg">
            <LiaCartPlusSolid className="text-xl mr-3" />
            Maxsus buyurtma
        </button>
        <ul className="space-y-2 py-5">
            {
                category.map((items, index) => {
                    return (
                        <li key={items.title} >
                            <Link className="hover:text-[#1FBA4A] cursor-pointer duration-100 flex justify-between items-center text-md p-3" href={items.link}>{items.title} <GrFormNext /></Link>
                        </li>
                    )
                })
            }
        </ul>
        
    </div>
  )
}

export default Sidebar