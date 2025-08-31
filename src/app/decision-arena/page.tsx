'use client'

import Navbar from "@/components/Navbar"
import { decisionQuestions } from "@/data/decisionArena";
import { usePathname, useRouter } from "next/navigation"

function page() {

    const pathname = usePathname();
    const router = useRouter();

    return (
        <>
            <div className={`w-full h-auto overflow-hidden flex flex-col justify-start items-center relative`}>
                <Navbar pathname={pathname} />

                <div className={`w-full mt-20 py-5 sm:pt-10 px-4 md:px-10 flex flex-col justify-start items-center`}>
                    <div className={`w-full overflow-hidden relative rounded-lg xl:rounded-xl h-auto flex flex-col justify-center items-center`}>
                        <img src="/assets/decision.jpg" className={`w-full h-52 sm:h-60 md:h-64`}/>
                        <div className={`w-full h-full px-5 absolute flex flex-col justify-center items-center overflow-hidden`}>
                            <h1 className={`w-full text-white text-center text-lg sm:text-xl font-Montserrat`}>Welcome to </h1>
                            <h1 className={`w-full text-white md:w-auto lg:font-bold text-2xl sm:text-3xl md:text-4xl text-center font-Archivo font-semibold`}>Interactive Decision Making </h1>
                            <h1 className={`w-full text-white mt-5 text-center text-sm sm:text-lg font-Montserrat italic`}>Test your thoughts and make right decisions which aligns with your thoughts. </h1>
                        </div>
                    </div>
                </div>

                <h1 className={`w-full text-start px-5 md:px-10 py-3 font-Montserrat text-lg md:text-2xl font-semibold`}>Activities</h1>

                <div className={`w-full pb-12 px-4 md:px-10 py-5 mt-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-4`}>
                    {decisionQuestions.map((question) => {
                        return <div onClick={() => {
                            router.push(`/decision-arena/activity?id=${question.id-1}&name=${encodeURIComponent(question.category)}`);
                        }} key={question.id} className={`w-full cursor-pointer hover:shadow-2xl hover:-translate-y-2 duration-200 ease-in-out h-auto flex flex-col justify-start items-center px-4 py-5 bg-gray-200 rounded-lg`}>
                            <p className={`w-full text-start font-Montserrat font-semibold text-sm`}>{question.category}</p>
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default page
