"use client";

import Layout from "@/layout/Layout";
import Image from "next/image";
import { IoIosCloseCircleOutline } from "react-icons/io";

// Redux
import { remove } from "@/reducers/CartSlice";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const dispatch=useDispatch();
  const cartitems = useSelector((state)=>state.cart)

  const handleRemoveItem =(id)=>{
        dispatch(remove(id))
    }

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartitems.forEach((product) => {
      totalPrice += parseFloat(product.price);
    });
    return totalPrice.toFixed(2); // Optionally, you can round the total price to two decimal places
  };

  return (
    <>
      <Layout>
        <div className="bg-gray-100  py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-3/4 ">
                <div className=" rounded-lg  p-6 mb-4">
                  <table className="w-full ">
                    <tbody className="">
                      {cartitems.map((data, index) => (
                        <tr key={index} className="mt-3  border-2 rounded-lg">
                          <td className="py-4 bg-white flex items-center justify-center">
                            <div className="flex items-center">
                              <Image
                                src={data.img}
                                alt="perfume bottle image"
                                width={150}
                                height={150}
                                className="xl:w-[140px] bg-white"
                              />
                            </div>
                          </td>
                          <td className="p-4">
                            <span className="font-semibold">{data.title}</span>
                          </td>
                          <td className="py-4">{data.price}</td>
                          <td className="py-4">
                            <div className="flex items-center">
                              <button className="border rounded-md py-2 px-4 mr-2">
                                -
                              </button>
                              <span className="text-center w-8">1</span>
                              <button className="border rounded-md py-2 px-4 ml-2">
                                +
                              </button>
                            </div>
                          </td>
                          <td>
                            <button
                              className="text-red-600 mt-4 lg:mt-0"
                              onClick={()=>handleRemoveItem(data.id)}
                            >
                              <IoIosCloseCircleOutline />
                              Remove
                            </button>
                          </td>
                          <td className="py-4">{data.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="md:w-1/4">
                <div className="bg-white rounded-lg shadow-md p-6">
                  {/* <h2 className="text-lg font-semibold mb-4">Summary</h2> */}
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Jami</span>
                    <span className="font-semibold">
                      {calculateTotalPrice()} So'm.
                    </span>
                  </div>
                  <hr className="my-2" />

                  <div className="flex justify-between mb-2">
                    <span>Mahsulotlar </span>
                    <span>{calculateTotalPrice()} So'm.</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Chegirma</span>
                    <span>0 So'm.</span>
                  </div>

                  <div className="space-y-2">
                    <button className="bg-[#1FBA4A] text-white py-2 px-4 rounded-lg mt-4 w-full">
                      Buyurtma berish
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Cart;
