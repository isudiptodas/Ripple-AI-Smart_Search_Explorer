'use client'

import Navbar from "@/components/Navbar"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { toast } from "sonner"
import { filesize } from "filesize"
import { IoCloudUploadOutline } from "react-icons/io5";
import axios from "axios"
import { supabase } from "@/utils/supabase"
import { FaCopy } from "react-icons/fa6";

function page() {

  const pathname = usePathname();
  const [file, setFile] = useState<File | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const[url, setUrl] = useState('');

  const trimText = (text: string) => {
    if (text.length > 20) {
      return text.substring(0, 30) + '...'
    }
    else {
      return text;
    }
  }

  const handleUpload = async () => {
    if (file) {

      const id = toast.loading(`Uploading ...`);
      try {

        const { data, error } = await supabase
          .storage
          .from(process.env.NEXT_PUBLIC_SUPABASE_BUCKET_ID as string)
          .upload(`public/${Date.now()}-${file.name}`, file, {
            upsert: false
          });

        if (error) {
          toast.dismiss(id);
          toast.error("Upload failed");
          console.log(error);
        }

        const entered = {
          path: data?.path,
          protected: password === null ? false : true,
          password: password?.trim(),
          fullpath: `${process.env.NEXT_PUBLIC_COPY_URL}/${data?.path}`
        }

        const { error: er } = await supabase
          .from(process.env.NEXT_PUBLIC_SUPABASE_TABLE_NAME as string)
          .insert(entered);

          if(er){
            console.log(er);
          }

        toast.dismiss(id);
        toast.success("File uploaded");
        const fullPath = `${process.env.NEXT_PUBLIC_COPY_URL}/${data?.path}`;
        setUrl(fullPath);
      } catch (err) {
        console.log(err);
      }
      finally {
        toast.dismiss(id);
        setFile(null);
        setPassword(null);
      }

    }
  }

  return (
    <>
      <div className={`w-full h-auto flex flex-col justify-start items-center relative overflow-hidden`}>
        <Navbar pathname={pathname} />

        <div className={`w-full px-5 flex flex-col justify-start items-center mt-24 lg:mt-32 py-4`}>

          <div className={`w-[80%] cursor-pointer sm:w-[70%] md:w-[50%] xl:w-[30%] h-auto relative overflow-hidden rounded-lg lg:rounded-2xl border-2 lg:border-4 py-5 px-5 border-dashed border-red-600 flex flex-col justify-center items-center`}>
            <p className={`w-full text-center font-Montserrat text-2xl lg:text-4xl font-semibold`}>Upload a file</p>
            <input onChange={(e) => {
              if (e?.target?.files?.[0]) {
                const selected = e.target.files[0];
                if (!(selected.name.endsWith('.pdf') || selected.name.endsWith('.doc') || selected.name.endsWith('.docx') || selected.name.endsWith('.zip'))) {
                  toast.error("File not supported");
                  return;
                }

                if (!(selected.size <= 52428800)) {
                  toast.error("File size must be under 50 MB");
                  return;
                }
                setFile(selected);
                //console.log(selected);
              }
            }}
              type="file" accept=".doc, .docx, .pdf, .zip" className={`w-full z-20 h-36 absolute opacity-0 top-1/2 left-10 xl:left-16`} />

            <p className={`w-full ${file === null ? "hidden" : "block"} mt-2 text-center font-Arapey italic text-black text-[12px] lg:text-[14px]`}> {trimText(file === null ? "" : file.name as string)}</p>
            <p className={`w-full ${file === null ? "hidden" : "block"} text-center font-Arapey italic text-black text-[12px] lg:text-[14px]`}> {filesize(file === null ? 0 : file?.size as number)}</p>
            <p onClick={() => {
              setFile(null);
              setPassword(null);
            }} className={`w-auto ${file === null ? "hidden" : "block"} px-4 mt-2 py-2 z-30 rounded-lg bg-gradient-to-r from-red-500 to-red-700 text-white font-Montserrat text-[12px] cursor-pointer active:scale-95 duration-150 ease-in-out hover:opacity-80`}>Remove</p>
          </div>

          <div className={`${file === null ? "hidden" : "block"} sm:w-[70%] md:w-[50%] xl:w-[30%] px-5 flex flex-col justify-start items-center mt-5`}>
            <p className={`w-full font-Montserrat text-sm md:text-[16px] text-center text-black`}>Enable Password protection</p>
            <input onChange={(e) => setPassword(e.target.value)} type="text" className={`w-full mt-4 text-[12px] lg:text-[14px] rounded-lg bg-gray-200 outline-none text-black font-Montserrat placeholder-gray-700 px-3 py-2`} placeholder="Enter password (Optional)" />
            <p onClick={handleUpload} className={`w-auto ${file === null ? "hidden" : "block"} mt-4 px-4 py-2 z-30 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white font-Montserrat text-[12px] cursor-pointer active:scale-95 duration-150 ease-in-out hover:opacity-80 flex justify-center items-center gap-2`}>Upload File <IoCloudUploadOutline /></p>
          </div>

          <p onClick={() => {
            navigator.clipboard.writeText(url);
            toast.success("URL copied");
          }} className={`w-auto ${url === '' ? "hidden" : "block"} mt-4 px-4 py-2 z-30 rounded-lg bg-gradient-to-r from-teal-500 to-blue-700 text-white font-Montserrat text-[12px] cursor-pointer active:scale-95 duration-150 ease-in-out hover:opacity-80 flex justify-center items-center gap-2`}>Copy URL <FaCopy  /></p>


          <div className={`w-[90%] md:w-[70%] opacity-40 mt-5 rounded-lg h-auto flex flex-col justify-start items-start px-3 py-4`}>
            <p className={`w-full mb-3 text-center font-Archivo text-xl md:text-2xl font-semibold`}>Keep in Mind</p>
            <p className={`w-full text-center font-Montserrat text-[12px] md:text-sm lg:text-[16px]`}>File size must be under 50 MB.</p>
            <p className={`w-full text-center font-Montserrat text-[12px] md:text-sm lg:text-[16px]`}>File type accepted : (pdf, doc, docx, zip)</p>
          </div>

        </div>
      </div>
    </>
  )
}

export default page
