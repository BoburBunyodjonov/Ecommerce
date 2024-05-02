"use client"

// Carusel Img
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Images
import Image from "next/image";
import AppleBanner from "@/images/iphone13.png";
import AppleLogo from "@/images/appleLogo.png";


// Css
import "@/content/banner.css"

import Slider from "react-slick";

const Banner = () => {

    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };

  return (
    <Slider {...settings}>
       <div>
            <div className="bg-white grid md:grid-cols-2">
                <Image src={AppleBanner}  alt="Banner Img 1" />
                <div className=" flex flex-col justify-center items-center">
                    <Image src={AppleLogo} alt="" />
                    <p className="font-bold text-xl">Iphone 13</p>
                    <span>Yangi yashil rangda</span>
                </div>
            </div>
       </div>
       <div>
            <div className="bg-white grid md:grid-cols-2">
                <Image src={AppleBanner}  alt="Banner Img 1" />
                <div className=" flex flex-col justify-center items-center">
                    <Image src={AppleLogo} alt="" />
                    <p className="font-bold text-xl">Iphone 13</p>
                    <span>Yangi yashil rangda</span>
                </div>
            </div>
       </div>
       <div>
            <div className="bg-white grid md:grid-cols-2">
                <Image src={AppleBanner}  alt="Banner Img 1" />
                <div className=" flex flex-col justify-center items-center">
                    <Image src={AppleLogo} alt="" />
                    <p className="font-bold text-xl">Iphone 13</p>
                    <span>Yangi yashil rangda</span>
                </div>
            </div>
       </div>
       <div>
            <div className="bg-white grid md:grid-cols-2">
                <Image src={AppleBanner}  alt="Banner Img 1" />
                <div className=" flex flex-col justify-center items-center">
                    <Image src={AppleLogo} alt="" />
                    <p className="font-bold text-xl">Iphone 13</p>
                    <span>Yangi yashil rangda</span>
                </div>
            </div>
       </div>
    </Slider>
  )
}

export default Banner
