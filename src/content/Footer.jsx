"use client"

import Image from "next/image";

// Images 
import Logo from "@/images/logo.png"
import google from "@/images/google.png"
import apple from "@/images/apple.png"

const Footer = () => {
  return (
    <div className="w-full bg-white relative bottom-0">
        <div className="container mx-auto lg:flex">
            <div className="w-[30%] py-3 space-y-4">
                    <Image src={Logo} alt="Footer Logo" />
                    <p>Mobilux © 2022</p>
                    <span>Barcha huquqlar kafolatlangan</span>
                    <div className="flex justify-start space-x-3">
                        <Image src={google} alt="google Logo" />
                        <Image src={apple} alt="apple Logo" />
                    </div>
            </div>
            <div className="w-[25%] py-3">
                <p className="font-semibold pb-4">Foydali havolalar</p>
                <ul className="space-y-1">
                    <li>Bosh sahifa</li>
                    <li>Yordam kerakmi?</li>
                    <li>Foydalanish shartlari</li>
                    <li>Maxfiylik siyosati</li>
                </ul>
            </div>
            <div className="w-[45%] py-3">
                <p className="font-semibold pb-4">Biz haqimizda</p>
                <ul className="space-y-1">
                    <li>Manzil: #214, G-dong, Lotte castle, 347 Jongno, Jongno-gu, Seoul, 03113, Crescent Trade ltd</li>
                    <li>Korxona nomi: Mobilux trade</li>
                    <li>Korxona rahbari: HASANBOY TURSUNOV</li>
                    <li>Registratsiya raqami: 433-62-00377</li>
                    <li>Telefon raqam: 93 000 66-44 97 000 66-44</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer