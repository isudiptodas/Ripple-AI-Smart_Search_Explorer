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
                <span onClick={() => setMenuVisible(!menuVisible)} className={`fixed text-xl cursor-pointer md:hidden z-30 right-5`}>{menuVisible ? <RxCross1 /> : <TbLayoutNavbar />}</span>

                <div className={`fixed ${menuVisible ? "translate-y-0 shadow-2xl" : "-translate-y-full"} top-0 rounded-b-3xl border-b-2 border-b-red-600 bg-white flex flex-col justify-start items-start gap-3 px-3 pt-14 pb-10 w-full duration-300 ease-in-out`}>
                    <Link href='/chat' className={`w-full ${pathname === '/chat' ? "text-red-600" : "text-black"} font-Montserrat font-semibold pb-3 text-xl`}>Chat</Link>
                    <Link href='/news' className={`w-full ${pathname === '/news' ? "text-red-600" : "text-black"} font-Montserrat font-semibold pb-3 text-xl`}>News</Link>
                    <Link href='/share' className={`w-full ${pathname === '/share' ? "text-red-600" : "text-black"} font-Montserrat font-semibold pb-3 text-xl`}>Share</Link>
                    <Link href='/decision-arena' className={`w-full ${pathname === '/decision-arena' ? "text-red-600" : "text-black"} font-Montserrat font-semibold pb-3 text-xl flex justify-start items-start gap-2`}>Decision Arena <span className={`text-[10px] text-gray-400 px-4 py-2 rounded-full border-[1px] border-gray-400`}>Beta</span></Link>
                </div>

                <div className={`w-auto hidden md:flex justify-between items-start gap-6 px-3 duration-300 ease-in-out`}>
                    <Link href='/chat' className={`w-full ${pathname === '/chat' ? "text-white bg-red-500 px-4" : "text-black"} py-2 rounded-full font-Montserrat font-semibold text-[14px] xl:text-[17px]`}>Chat</Link>
                    <Link href='/news' className={`w-full ${pathname === '/news' ? "text-white bg-red-500 px-4" : "text-black"} py-2 font-Montserrat font-semibold text-[14px] xl:text-[17px] rounded-full`}>News</Link>
                    <Link href='/share' className={`w-full ${pathname === '/share' ? "text-white bg-red-500 px-4" : "text-black"} py-2 font-Montserrat font-semibold text-[14px] xl:text-[17px] rounded-full`}>Share</Link>
                    <Link href='/decision-arena' className={`w-full ${pathname === '/decision-arena' ? "text-white bg-red-500 px-4" : "text-black"} py-2 font-Montserrat font-semibold text-[14px] xl:text-[17px] rounded-full`}>Decision Arena (Beta)</Link>
                </div>

            </div>
        </>
    )
}

export default Navbar





