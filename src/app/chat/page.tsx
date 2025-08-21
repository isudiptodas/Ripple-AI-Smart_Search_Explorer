'use client'

import Navbar from "@/components/Navbar"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { toast } from "sonner"
import { GoogleGenAI } from "@google/genai";
import Markdown from 'react-markdown'
import { BsSendFill } from "react-icons/bs";
import { dummy } from "@/data/dummyData"
import axios from "axios"
import { AiOutlineSound } from "react-icons/ai";
import { FaRegStopCircle } from "react-icons/fa";

interface Sources {
  title: string,
  link?: string,
  date?: string,
  favicon?: string,
  source?: string
}

interface Videos {
  title: string,
  link: string,
  thumbnail: string,
  platform?: string,
  duration?: string,
  channel: string
}

interface Images {
  source?: string,
  thumbnail?: string,
  original?: string,
  title?: string,
  source_name?: string
}

function page() {

  const pathname = usePathname();
  const [outputText, setOutputText] = useState<string | undefined>('');
  const [videos, setVideos] = useState<Videos[] | []>([]);
  const [input, setInput] = useState('');
  const [sources, setSources] = useState<Sources[] | []>([]);
  const [images, setImages] = useState<Images[] | []>([]);
  const [option, setOption] = useState('answer');
  const [isSpeaking, setIsSpeaking] = useState(false);

  const fetchData = async () => {

    if (!input) {
      toast.error("Enter any query");
      return;
    }

    const api = process.env.NEXT_PUBLIC_GEMINI_API;
    const ai = new GoogleGenAI({ apiKey: api });

    const id = toast.loading('Fetching results . . .');

    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: input,
      });
      //console.log(response.text);
      setOutputText(response.text);

      const res = await axios.post(`/api/get-response`, {
        query: input
      });
      const data = res.data.data;
      setVideos(data?.inline_videos);
      setSources(data?.organic_results);
      setImages(data?.inline_images);
    } catch (err) {
      console.log(err);
    }
    finally {
      toast.dismiss(id);
    }
  }

  const trimText = (text: string) => {
    if (text.length > 35) {
      return text.substring(0, 35) + '...';
    }
    else {
      return text;
    }
  }

  const trimTextLarge = (text: string) => {
    if (text.length > 85) {
      return text.substring(0, 85) + '...';
    }
    else {
      return text;
    }
  }

  const handleReadOut = () => {
    if ('speechSynthesis' in window) {

      const utterance = new SpeechSynthesisUtterance(outputText);
      utterance.lang = 'en-US';
      utterance.pitch = 1;
      utterance.rate = 1;
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);

      utterance.onend = () => {
        setIsSpeaking(false);
      };
    } else {
      toast.error('Your browser does not support the Web Speech API');
    }
  }


  const handleStop = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };


  return (
    <>
      <div className={`w-full h-auto flex flex-col justify-start items-center relative overflow-hidden`}>
        <Navbar pathname={pathname} />

        <div className={`w-full flex flex-col justify-start items-center pt-24 gap-3 h-screen`}>

          {/* ai response */}
          <div className={`w-full md:w-[70%] flex flex-col justify-start items-center px-5 h-full overflow-y-auto scroll-bar relative`}>
            <div className={`w-full py-2 px-3 flex justify-start  md:justify-center items-center overflow-x-auto scroll-bar`}>
              <p onClick={() => setOption('answer')} className={`w-auto ${outputText !== '' ? "block" : "hidden"} ${option === 'answer' ? "border-b-red-500" : "border-b-white"} cursor-pointer px-4 text-start font-Montserrat py-2 border-b-2`}>Answer</p>
              <p onClick={() => setOption('images')} className={`w-auto ${images?.length > 0 ? "block" : "hidden"} ${option === 'images' ? "border-b-red-500" : "border-b-white"} cursor-pointer px-4 text-start font-Montserrat py-2 border-b-2`}>Images</p>
              <p onClick={() => setOption('videos')} className={`w-auto ${videos?.length > 0 ? "block" : "hidden"} ${option === 'videos' ? "border-b-red-500" : "border-b-white"} cursor-pointer px-4 text-start font-Montserrat py-2 border-b-2`}>Videos</p>
              <p onClick={() => setOption('sources')} className={`w-auto ${sources?.length > 0 ? "block" : "hidden"} ${option === 'sources' ? "border-b-red-500" : "border-b-white"} cursor-pointer px-4 text-start font-Montserrat py-2 border-b-2`}>Sources</p>
            </div>

            {option === 'answer' && <div className={`w-full h-[90%] py-5 flex justify-start mt-3 mb-3 overflow-y-auto px-3 items-start scroll-bar`}>
              <p className={`font-Montserrat text-[12px] lg:text-[15px] text-black text-start w-full`}>
                <Markdown>
                  {outputText}
                </Markdown>
              </p>
            </div>}

            {option === 'images' && <div className={`w-full py-5 h-[90%] mt-3 overflow-y-auto scroll-bar grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 justify-items-center gap-4`}>
              {images.length > 0 && images.map((image, index) => {
                return <div key={index} onClick={() => {
                  window.open(image?.source, '_blank');
                }} className={`w-full hover:shadow-2xl duration-200 ease-in-out cursor-pointer px-1 m-3 py-1 rounded-md bg-gray-200 flex flex-col justify-start items-center`}>
                  <img src={image.thumbnail} className={`h-24 sm:h-32 w-full object-cover rounded-lg`} />
                  <p className={`w-full text-start font-Montserrat text-[10px] md:text-[12px] py-2 px-3`}>{image?.title}</p>
                  <p className={`w-full text-start font-Montserrat text-[10px] py-2 px-3`}><span className={`font-semibold font-Montserrat`}>Source : </span> {image?.source_name}</p>
                </div>
              })}
            </div>}

            {option === 'videos' && <div className={`w-full h-[90%] mt-3 flex flex-col justify-start items-center gap-3 overflow-y-auto scroll-bar`}>
              {videos.length > 0 && videos.map((video, index) => {
                return <div onClick={() => {
                  window.open(video?.link, '_blank');
                }} key={index} className={`w-full cursor-pointer hover:shadow-2xl duration-200 ease-in-out bg-gray-200 rounded-lg flex justify-between items-center py-1 px-1`}>
                  <div className={`w-[30%] h-full rounded-lg overflow-hidden`}>
                    <img src={video?.thumbnail} className={`w-full h-full object-cover`} />
                  </div>
                  <div className={`h-full overflow-hidden w-full px-3 py-3 flex flex-col justify-start items-start`}>
                    <p className={`w-full lg:hidden text-start font-Montserrat text-black text-[14px] font-semibold`}>{trimText(video?.title)}</p>
                    <p className={`w-full hidden lg:block text-start font-Montserrat text-black text-[14px] font-semibold`}>{trimTextLarge(video?.title)}</p>
                    <p className={`w-full text-start font-Montserrat text-black text-[10px]`}><span className={`font-semibold`}>Channel : </span> {video?.channel}</p>
                    <p className={`w-full text-start font-Montserrat text-black text-[10px]`}><span className={`font-semibold`}>Duration : </span> {video?.duration}</p>
                    <p className={`w-full text-start font-Montserrat text-black text-[10px]`}><span className={`font-semibold`}>Platform : </span> {video?.platform}</p>
                  </div>
                </div>
              })}
            </div>}

            {option === 'sources' && <div className={`w-[90%] overflow-y-auto scroll-bar flex flex-col justify-start items-start mt-3 mb-3 gap-4`}>
              {sources.length > 0 && sources.map((result, index) => {
                return <div onClick={() => {
                  window.open(result?.link, '_blank');
                }} key={index} className={`w-full cursor-pointer hover:shadow-2xl duration-200 ease-in-out rounded-lg bg-gray-200 flex flex-col justify-center items-start py-2 px-2`}>
                  <div className={`w-full flex justify-start items-start gap-3`}>
                    <img src={result?.favicon} className={`h-3`} />
                    <p className={`w-full text-start font-Montserrat text-black text-[10px]`}>{result?.source}</p>
                  </div>
                  <p className={`w-full text-start font-Montserrat text-black text-[12px] font-semibold`}>{result?.title}</p>
                </div>
              })}
            </div>}

            <h1 className={`w-full px-5 ${outputText === '' ? 'block' : 'hidden'} text-center font-Archivo text-5xl lg:text-7xl font-bold opacity-30 absolute top-1/2 -translate-y-1/2 px-auto`}>What's on your mind today ?</h1>
            <p onClick={handleReadOut} className={`px-4 py-2 active:scale-95 duration-150 ease-in-out ${outputText ? 'block' : 'hidden'} ${isSpeaking ? 'hidden' : 'block'} absolute bottom-5 text-[12px] right-5 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 text-white font-Montserrat cursor-pointer flex justify-center items-center gap-3`}>Read Loud <AiOutlineSound /></p>
            <p onClick={handleStop} className={`px-4 py-2 active:scale-95 duration-150 ease-in-out ${isSpeaking ? 'block' : 'hidden'} absolute bottom-5 text-[12px] right-5 rounded-full bg-gradient-to-r from-red-400 to-red-600 text-white font-Montserrat cursor-pointer flex justify-center items-center gap-3`}>Stop <FaRegStopCircle /></p>

          </div>

          {/* input box */}
          <div className={`w-full md:w-[70%] pb-5 px-5 h-auto flex justify-center relative items-center`}>
            <textarea onChange={(e) => setInput(e.target.value)} className={`w-full rounded-md h-20 lg:h-24 bg-gray-200 outline-none font-Montserrat text-[10px] text-black placeholder-gray-700 lg:text-sm pl-3 pr-12 py-2`} placeholder="Ask anything" />
            <span onClick={fetchData} className={`p-2 rounded-md bg-gradient-to-r from-red-400 via-red-600 to-red-800 text-sm md:text-lg text-white cursor-pointer active:scale-95 duration-150 ease-in-out absolute bottom-7 right-7`}><BsSendFill /></span>
          </div>
        </div>

      </div>
    </>
  )
}

export default page
