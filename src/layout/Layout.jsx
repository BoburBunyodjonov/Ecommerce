"use client"

import Footer from "@/content/Footer";
import Navbar from "@/content/Navbar";

const Layout = ({children}) => {
    return (
        <>
            <Navbar/>
                <div className="bg-[#F6F8FA]">
                    {children}
                    <br />
                </div>
            <Footer />
        </>
      );
}

export default Layout