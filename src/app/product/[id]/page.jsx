"use client"

import Layout from "@/layout/Layout";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

// Images
import Flag from "@/images/flag.png";

// Redux
import { useDispatch } from "react-redux";
import { add } from "@/reducers/CartSlice";
import ProductCard from "@/components/ProductCard";
import { MdShoppingBag } from "react-icons/md";

const ProductDetailedPage = ({ params: { id } }) => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);

  const handleAddToCart = (product) => {
    dispatch(add(product));
    // setShowButton(false); // Assuming setShowButton is defined somewhere
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [products ,setproducts]=useState([])

  const getproducts = async()=>{
      const res = await fetch("http://localhost:4000/all");
      const data = await res.json();
      setproducts(data);
  }

  useEffect(()=>{
      getproducts();

  },[])

  const fetchData = () => {
    fetch(`http://localhost:4000/all/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((productData) => {
        setProduct(productData);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        notFound();
      });
  };

  if (!product) {
    return null; // Or display a loading indicator or an error message
  }

  return (
    <>
      <Layout>
        <div className="container  mx-auto grid md:grid-cols-2 flex-col md:flex-row items-center gap-8 px-4 py-10">
            <div className=" p-3 bg-white flex justify-center items-center relative h-full">
              <Image src={product.img} width={300} height={300} alt={product.title} />
            </div>
            <div className=" p-3 flex-1 flex flex-col space-y-3">
              <div className="flex-1">
                <h1 className=" text-xl font-semibold">{product.title}</h1>{" "}
                <br />
                <p className="text-[#7A7687] text-sm">
                  <span>Brand:</span>
                  <span>{product.brand}</span>
                </p>
                <h2 className="font-medium text-[#1FBA4A] text-2xl">
                  {product?.price} so'm
                </h2>
                <div className="py-3 space-x-5 flex items-center">
                  <button onClick={() => handleAddToCart(product)} className="rounded-md bg-[#0A0A0A] text-white px-5 py-2">
                    Savatchaga
                  </button>
                  <p>omborda mavjud</p>
                </div><br />
                <div className="bg-[#98e8ae] flex p-3 rounded-md space-x-3 items-center">
                  <Image src={Flag} alt="flag" />
                  <span>O’zbekiston bo’ylab yetkazib berish:</span>
                  <span>14 ish kuni</span>
                </div>
                <hr />
                <br />
                <p className="font-medium text-base">Description</p>
                <p className="line-clamp-5 text-sm">{product.description}</p>
              </div>
            </div>
        </div>

        <div className="container mx-auto">
            <h1 className="py-3 flex items-center text-2xl font-semibold space-x-5"> <MdShoppingBag className="text-[#1FBA4A]" /> Yangi mahsulotlar</h1>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">

              {products.slice(1,9).map((item, index) => (
                  <ProductCard key={index} items={item} />
              ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ProductDetailedPage;
