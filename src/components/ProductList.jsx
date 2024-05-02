'use client'

import { useEffect, useState } from "react"
import ProductCard from "./ProductCard"
import RiseLoader from "react-spinners/RiseLoader";

// Icons
import { MdShoppingBag } from "react-icons/md";

const ProductList = () => {
    const [loading, setLoading] = useState(true);
    const [products ,setproducts]=useState([])

    const getproducts = async()=>{
        const res = await fetch("http://localhost:4000/all");
        const data = await res.json();
        setproducts(data);
    }

    useEffect(()=>{
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 700);
        getproducts();

    },[])

  return (
   <>
        {
            loading ?
            <RiseLoader className=" absolute left-[60%] top-[50%]" color={'#1FBA4A'} loading={loading}  size={15} aria-label="Loading Spinner" data-testid="loader"/> 
            :  <>
        <h1 className="py-3 flex items-center text-2xl font-semibold space-x-5"> <MdShoppingBag className="text-[#1FBA4A]" /> Yangi mahsulotlar</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">

          {products.slice(20, 28).map((item, index) => (
              <ProductCard key={index} items={item} />
          ))}
      </div>
      <h1 className="py-3 flex items-center text-2xl font-semibold space-x-5"> <MdShoppingBag className="text-[#1FBA4A]" /> Ommabop mahsulotlar</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">

          {products.slice(9, 17).map((item, index) => (
              <ProductCard key={index} items={item} />
          ))}
      </div>
      <h1 className="py-3 flex items-center text-2xl font-semibold space-x-5"> <MdShoppingBag className="text-[#1FBA4A]" />Chegirmadagi mahsulotlar</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
          {products.slice(0, 4).map((item, index) => {
              if (item.discount !== "0") {
              return <ProductCard key={index} items={item} />;
              }
              return null; // Don't forget to handle the case where the condition is not met
          })}
      </div>
      
      </>
        }
       
    </>
  )
}

export default ProductList