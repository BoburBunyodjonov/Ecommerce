"use client"

//Icons 
import { LiaCartPlusSolid } from "react-icons/lia";

// Images
import Image from "next/image"

// Redux
import {useDispatch} from "react-redux";
import { add } from "@/reducers/CartSlice";
import Link from "next/link";
import { useState } from "react";


const ProductCard = ({items}) => {

  const [showButton, setShowButton] = useState(true);
  const dispatch = useDispatch();

  const handleAddToCart = (items) => {
    if(localStorage.getItem('registerData')) {
      dispatch(add(items));
      console.log('great');
      setShowButton(false);
    }else {
      window.location.href = '/login';
    }
  };

  return (
    <div className="card rounded-lg p-5 bg-white flex-col justify-center items-center">
    <Link href={`/product/${items.id}`}>

        {
            items.discount !== "0" && (
            <span className="p-2 bg-[#FF0C27] text-white rounded-lg">{items.discount}</span>
            )
        }
        <Image
              className=" w-full h-[250px] hover:scale-110 duration-200 object-contain"
              src={items.img}
              width={200}
              height={200}
              alt="productImg"
            />
        <p>{items.title}</p>
        <div className="py-1">
            {/* <s>{items.oldcost}</s> */}
            <p className="price font-bold">{items.price}</p><br />
        </div>
    </Link>
        {
          showButton ? 
            <button onClick={()=> handleAddToCart(items)} className="w-full bg-[#F6F8FA] duration-100 hover:bg-[#1FBA4A] hover:text-white flex justify-center items-center px-5 py-3 rounded-lg">
                <LiaCartPlusSolid className="text-xl mr-3" />
                Savatchaga
            </button>
          :
            <div className="px-5 flex ">
              <button  className="hover:bg-[#1FBA4A] hover:text-white text-xl w-[25%] text-center px-4 py-2  bg-[#F6F8FA] rounded-full">-</button>
              <input className="text-xl w-[50%] text-center outline-none" type="text" readOnly name="" id="" placeholder="1" /> {/* placeholder={state} */}
              <button className="hover:bg-[#1FBA4A] hover:text-white text-xl w-[25%] text-center px-4 py-2 bg-[#F6F8FA] rounded-full">+</button>
            </div>
        }
    </div>
  )
}

export default ProductCard