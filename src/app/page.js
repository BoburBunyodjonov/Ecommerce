import ProductCard from "@/components/ProductCard";
import ProductList from "@/components/ProductList";
import Banner from "@/content/Banner"
import Sidebar from "@/content/Sidebar"
import Layout from "@/layout/Layout"

// Icons
import { MdShoppingBag } from "react-icons/md";


const Home = () => {
  return (
    <>
      <Layout>
            <div className="md:flex z-20 ">
              <Sidebar  />
              <div className="w-full md:w-[75%] bg-[#F6F8FA] p-5">
                <Banner/>
                <ProductList />
              </div>
            </div>
      </Layout>
    </>
  )
}

export default Home