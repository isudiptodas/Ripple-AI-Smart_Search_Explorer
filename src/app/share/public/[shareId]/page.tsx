'use client'

import { supabase } from "@/utils/supabase";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface fileData {
    created_at: string,
    fullpath: string,
    id: number,
    password?: string,
    path: string,
    protected: boolean
}

function page() {

    const { shareId } = useParams();
    const [valid, setValid] = useState(false);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const [filename, setFilename] = useState<string | null>(null);
    const [publicUrl, setPublicUrl] = useState<string | null>('');
    const[downloadData, setDownloadData] = useState<fileData | null>(null);
    const[matched, setMatched] = useState(false);
    const[isProtected, setIsProtected] = useState(false);
    const[enteredPassword, setEnteredPassword] = useState('');

    useEffect(() => {
        if (shareId) {
            const url = `http://localhost:3000/share/public/${decodeURIComponent(shareId as string)}`;
            const fetchData = async () => {
                const { data, error } = await supabase
                    .from(process.env.NEXT_PUBLIC_SUPABASE_TABLE_NAME as string)
                    .select()
                    .eq('fullpath', url)

                if (data?.length !== 0) {
                    setValid(true);
                    setDownloadData(data?.[0]);
                    if(data?.[0]?.protected){
                        setIsProtected(true);
                    }
                    else{
                        setMatched(true);
                        setIsProtected(false);
                    }
                    setFilename(data?.[0].path.split('-')[1]);
                    const { data: url } = supabase
                        .storage
                        .from(process.env.NEXT_PUBLIC_SUPABASE_BUCKET_ID as string)
                        .getPublicUrl(data?.[0].path);
                    setPublicUrl(url.publicUrl);
                }

                setLoading(false);

                if (error) {
                    console.log(error);
                }
            }

            fetchData();
        }

    }, [shareId]);

    const handleDownload = () => {
        window.open(publicUrl as string, '_blank');
    }

    const handlePassMatch = () => {
        if(!enteredPassword){
            toast.error("Please enter password");
            return;
        }

        if(enteredPassword.trim() === downloadData?.password){
            setMatched(true);
            setIsProtected(false);
            return;
        }

        toast.error("Invalid Password");
    }

    return (
        <>
            <div className={`w-full z-30 ${loading === false ? "hidden" : "block"} px-5 md:px-10 py-5 h-screen flex flex-col justify-start items-center gap-4`}>
                <div className={`w-full h-[25%] bg-gray-200 rounded-xl xl:rounded-2xl`}></div>
                <div className={`w-full h-[15%] bg-gray-200 rounded-xl xl:rounded-2xl`}></div>
                <div className={`w-full h-[15%] bg-gray-200 rounded-xl xl:rounded-2xl`}></div>
            </div>

            <div className={`w-full ${loading === false && valid === false ? "block" : "hidden"} z-20 px-5 py-10 h-screen flex flex-col justify-center items-center relative`}>
                <img onClick={() => { router.push('/') }} src='/assets/logo.png' className={`h-8 absolute top-5 cursor-pointer md:top-10 xl:h-12`} />
                <h1 className={`w-full text-center font-Montserrat text-red-500 text-2xl font-semibold italic`}>The file you are looking for may have expired or removed</h1>
                <Link href='/share' className={`w-auto mt-5 py-3 px-4 rounded-xl bg-gradient-to-r from-blue-400 to-blue-700 text-white font-Montserrat text-sm cursor-pointer active:scale-95 duration-150 ease-in-out`}>Upload new file</Link>
            </div>

            <div className={`w-full h-screen flex flex-col justify-center items-center relative`}>
                <div className={`w-full absolute top-0 py-5 border-b-2 border-b-red-500 rounded-b-3xl flex justify-center items-center`}>
                    <img onClick={() => { router.push('/') }} src='/assets/logo.png' className={`h-8 cursor-pointer xl:h-12`} />
                </div>

                <h1 className={`w-full text-center font-Montserrat text-xl text-black`}>{filename}</h1>
                <p onClick={handleDownload} className={`mt-4 ${isProtected === false && matched === true ? "block" : "hidden"} w-auto px-4 py-2 rounded-lg bg-gradient-to-r from-teal-400 to-blue-700 text-white font-Montserrat text-sm cursor-pointer active:scale-95 duration-150 ease-in-out`}>Download</p>
                <input onChange={(e) => setEnteredPassword(e.target.value)} type="text" className={`w-[90%] ${isProtected === true ? "block" : "hidden"}  sm:w-[70%] md:w-[50%] lg:w-[30%] px-3 py-3 mt-4 bg-gray-200 rounded-lg outline-none`} placeholder="Enter password"/>
                <p onClick={handlePassMatch} className={` ${isProtected === true ? "block" : "hidden"} mt-4 w-auto px-4 py-2 rounded-lg bg-gradient-to-r from-blue-400 to-blue-700 text-white font-Montserrat text-sm cursor-pointer active:scale-95 duration-150 ease-in-out`}>Check</p>

            </div>

        </>
    )
}

export default page
