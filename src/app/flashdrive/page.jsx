'use client'

import ProductCard from "@/components/ProductCard";
import Banner from "@/content/Banner"
import Sidebar from "@/content/Sidebar"
import Layout from "@/layout/Layout"
import { useEffect, useState } from "react";

// Icons
import { MdShoppingBag } from "react-icons/md";

import RiseLoader from "react-spinners/RiseLoader";


const FlashDrive = () => {
  const [loading, setLoading] = useState(true);

    const [products ,setproducts]=useState([])

    const getproducts = async()=>{
        const res = await fetch("http://localhost:4000/flashDrive");
        const data = await res.json();
        setproducts(data);
    }

    useEffect(()=>{
      setLoading(true);
      setTimeout(() => {
          setLoading(false);
          getproducts();
      }, 700);
    },[])


  return (
    <>
      <Layout>
            <div className="flex z-20 ">
              <Sidebar  />
              <div className="w-[75%] bg-[#F6F8FA] p-5">
                <Banner/>
               {
                loading ? <RiseLoader className=" absolute left-[60%] top-[50%]" color={'#1FBA4A'} loading={loading}  size={15} aria-label="Loading Spinner" data-testid="loader"/> 
                :  <>
                <h1 className="py-3 flex items-center text-2xl font-semibold space-x-5"> <MdShoppingBag className="text-[#1FBA4A]" />Xotira kartalari</h1>
                <div className="grid grid-cols-4 gap-3">
                    {products.map((item, index) => (
                        <ProductCard key={index} items={item} />
                    ))}
                </div>
            </> 
               }
              </div>
            </div>
      </Layout>
    </>
  )
}

export default FlashDrive