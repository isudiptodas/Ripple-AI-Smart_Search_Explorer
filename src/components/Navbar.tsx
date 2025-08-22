'use client'

import { TbLayoutNavbar } from "react-icons/tb";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Navbar({pathname} : {pathname : string}) {

    const[menuVisible, setMenuVisible] = useState(false);
    const router = useRouter();

    return (
        <>
            <div className={`w-full rounded-b-3xl border-b-2 border-red-500 z-30 backdrop-blur-3xl bg-white/40 fixed top-0 flex justify-center md:justify-between items-center px-14 py-5`}>
                <img onClick={() => {router.push('/')}} src='/assets/logo.png' className={`h-8 cursor-pointer xl:h-12`} />
                <span onClick={() => setMenuVisible(!menuVisible)} className={`fixed ${menuVisible ? "text-white" : "text-black"} text-xl cursor-pointer md:hidden z-30 right-5`}>{menuVisible ? <RxCross1 /> : <TbLayoutNavbar />}</span>

                <div className={`fixed ${menuVisible ? "translate-y-0" : "-translate-y-full"} top-0 rounded-b-3xl bg-red-600 flex flex-col justify-start items-start gap-3 px-3 pt-14 pb-10 w-full duration-300 ease-in-out`}>
                    <Link href='/chat' className={`w-full text-white font-Montserrat font-semibold pb-3 border-b-[1.5px] border-b-white text-xl`}>Chat</Link>
                    <Link href='/news' className={`w-full text-white font-Montserrat font-semibold pb-3 border-b-[1.5px] border-b-white text-xl`}>News</Link>
                    <Link href='/share' className={`w-full text-white font-Montserrat font-semibold pb-3 border-b-[1.5px] border-b-white text-xl`}>Share</Link>
                </div>

                <div className={`w-auto hidden md:flex justify-between items-start gap-6 px-3 duration-300 ease-in-out`}>
                    <Link href='/chat' className={`w-full ${pathname === '/chat' ? "text-white bg-red-500 px-4" : "text-black"} py-2 rounded-full font-Montserrat font-semibold text-[14px] xl:text-[17px]`}>Chat</Link>
                    <Link href='/news' className={`w-full ${pathname === '/news' ? "text-white bg-red-500 px-4" : "text-black"} py-2 font-Montserrat font-semibold text-[14px] xl:text-[17px] rounded-full`}>News</Link>
                    <Link href='/share' className={`w-full ${pathname === '/share' ? "text-white bg-red-500 px-4" : "text-black"} py-2 font-Montserrat font-semibold text-[14px] xl:text-[17px] rounded-full`}>Share</Link>
                </div>

            </div>
        </>
    )
}

export default Navbar
