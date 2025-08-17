'use client'

import { FaShareAlt } from "react-icons/fa";
import { IoChatboxSharp } from "react-icons/io5";
import { FaRegNewspaper } from "react-icons/fa";
import { SiGooglenews } from "react-icons/si";
import { RiPerplexityLine } from "react-icons/ri";
import { SiOpenai } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { useCollapse } from "react-collapsed";
import { faq } from "@/data/faq";
import { SiGooglegemini } from "react-icons/si";
import { useState } from "react";
import { Collapse } from 'react-collapse';

function page() {

  const [current, setCurrnt] = useState<number | null>(null);

  return (
    <>
      <div className={`w-full h-auto flex flex-col justify-start items-center relative overflow-hidden`}>

        {/* logo */}
        <div className={`w-full z-30 fixed top-0 py-5 flex justify-center items-center backdrop-blur-3xl bg-white/40`}>
          <img src='/assets/logo.png' className={`h-8 xl:h-12`} />
        </div>

        {/* hero section */}
        <div className={`w-full flex flex-col h-auto overflow-hidden py-5 px-5 mt-20 xl:mt-24`}>
          <div className={`w-full mb-4 py-2 flex justify-start items-center relative`}>
            <span className={`font-Archivo text-3xl sm:text-5xl md:text-7xl z-20 lg:pl-28`}><span className={`font-bold bg-gradient-to-r from-red-500 to-red-900 bg-clip-text text-transparent`}>Real-Time</span> Answers</span>
            <div className={`w-1/2 z-10 absolute rounded-r-4xl md:rounded-r-[50px] bg-gradient-to-r from-transparent to-[#FF0000] h-full right-0`}></div>
          </div>
          <div className={`w-full py-2 flex justify-end items-center relative`}>
            <span className={`font-Archivo text-3xl sm:text-5xl md:text-7xl z-20 lg:pr-28`}>High on <span className={`font-bold bg-gradient-to-r from-red-500 to-red-900 bg-clip-text text-transparent`}> Privacy</span></span>
            <div className={`w-1/2 z-10 absolute rounded-l-4xl md:rounded-l-[50px] bg-gradient-to-l from-transparent to-[#FF0000] h-full left-0`}></div>
          </div>

          <p className={`w-full text-center font-Montserrat text-sm mt-7`}>Get your queries solved without worrying about the history or data leak.</p>
          <p className={`w-full text-center font-Montserrat text-sm mt-2`}>Try out our smart AI chat system where you’ll get your smart browser like capabilities but on steroids.</p>
        </div>

        {/* links */}
        <div className={`w-full px-5 py-3 md:mt-5 grid grid-cols-1 justify-items-center gap-3 sm:grid-cols-3`}>
          <div className={`w-full rounded-full hover:bg-[#2d2d2d] bg-black flex justify-center items-center gap-3 py-5 cursor-pointer active:scale-95 duration-150 ease-in-out`}>
            <p className={`font-Montserrat text-white text-[12px] lg:text-lg`}>Continue with Chat</p>
            <span className={`text-white`}><IoChatboxSharp /></span>
          </div>
          <div className={`w-full rounded-full hover:bg-[#2d2d2d] bg-black flex justify-center items-center gap-3 py-5 cursor-pointer active:scale-95 duration-150 ease-in-out`}>
            <p className={`font-Montserrat text-white text-[12px] lg:text-lg`}>Continue with News</p>
            <span className={`text-white`}><FaRegNewspaper /></span>
          </div>
          <div className={`w-full rounded-full hover:bg-[#2d2d2d] bg-black flex justify-center items-center gap-3 py-5 cursor-pointer active:scale-95 duration-150 ease-in-out`}>
            <p className={`font-Montserrat text-white text-[12px] lg:text-lg`}>Continue with Share</p>
            <span className={`text-white`}><FaShareAlt /></span>
          </div>
        </div>

        {/* inspired by */}
        <div className={`w-full h-auto mt-5 md:mt-10 px-5 flex flex-col justify-start items-center gap-4`}>
          <h2 className={`w-full text-center font-Archivo text-xl md:text-2xl xl:text-4xl font-bold`}>Inspired By</h2>

          <div className={`w-full mt-2 h-auto grid grid-cols-2 md:grid-cols-4 justify-items-center gap-3 `}>
            <div className={`w-full cursor-pointer h-32 bg-[#d9d9d9a8] rounded-lg lg:rounded-2xl flex flex-col justify-center items-center group gap-3 lg:gap-2 overflow-hidden relative`}>
              <span className={`text-3xl group-hover:text-white duration-200 ease-in-out lg:text-5xl z-20 opacity-50`}><SiGooglenews /></span>
              <p className={`font-Montserrat group-hover:text-white duration-200 ease-in-out text-[12px] z-20 md:text-[15px] lg:text-lg`}>Google News</p>
              <div className={`h-[300px] w-[300px] md:h-[500px] md:w-[500px] z-10 absolute translate-x-full group-hover:translate-x-0 duration-500 ease-in-out bg-gradient-to-r from-red-500 to-red-800`}></div>
            </div>
            <div className={`w-full cursor-pointer h-32 bg-[#d9d9d9a8] rounded-lg lg:rounded-2xl flex flex-col justify-center items-center group gap-3 lg:gap-2 overflow-hidden relative`}>
              <span className={`text-3xl group-hover:text-white duration-200 ease-in-out lg:text-5xl z-20 opacity-50`}><RiPerplexityLine /></span>
              <p className={`font-Montserrat group-hover:text-white duration-200 ease-in-out text-[12px] z-20 md:text-[15px] lg:text-lg`}>Perplexity</p>
              <div className={`h-[300px] w-[300px] md:h-[500px] md:w-[500px] z-10 absolute translate-x-full group-hover:translate-x-0 duration-500 ease-in-out bg-gradient-to-r from-red-500 to-red-800`}></div>
            </div>
            <div className={`w-full cursor-pointer h-32 bg-[#d9d9d9a8] rounded-lg lg:rounded-2xl flex flex-col justify-center items-center group gap-3 lg:gap-2 overflow-hidden relative`}>
              <span className={`text-3xl group-hover:text-white duration-200 ease-in-out lg:text-5xl z-20 opacity-50`}><SiOpenai /></span>
              <p className={`font-Montserrat group-hover:text-white duration-200 ease-in-out text-[12px] z-20 md:text-[15px] lg:text-lg`}>ChatGPT</p>
              <div className={`h-[300px] w-[300px] md:h-[500px] md:w-[500px] z-10 absolute translate-x-full group-hover:translate-x-0 duration-500 ease-in-out bg-gradient-to-r from-red-500 to-red-800`}></div>
            </div>
            <div className={`w-full cursor-pointer h-32 bg-[#d9d9d9a8] rounded-lg lg:rounded-2xl flex flex-col justify-center items-center group gap-3 lg:gap-2 overflow-hidden relative`}>
              <span className={`text-3xl group-hover:text-white duration-200 ease-in-out lg:text-5xl z-20 opacity-50`}><FaGoogle /></span>
              <p className={`font-Montserrat group-hover:text-white duration-200 ease-in-out text-[12px] z-20 md:text-[15px] lg:text-lg`}>Google Search Engine</p>
              <div className={`h-[300px] w-[300px] md:h-[500px] md:w-[500px] z-10 absolute translate-x-full group-hover:translate-x-0 duration-500 ease-in-out bg-gradient-to-r from-red-500 to-red-800`}></div>
            </div>
          </div>
        </div>

        {/* why ripple ai ? */}
        <div className={`w-full px-5 flex flex-col justify-start items-center mt-7 lg:mt-12`}>
          <h2 className={`w-full text-center font-Archivo text-xl md:text-2xl xl:text-4xl font-bold`}>Why <span className={`bg-gradient-to-r from-red-500 to-red-900 bg-clip-text text-transparent`}>Ripple AI</span> ? </h2>

          <div className={`w-full md:w-[70%] mt-5 rounded-xl bg-[#d9d9d9a8] flex flex-col h-auto px-4 md:px-10 py-5`}>
            <p className={`w-full text-start font-Montserrat text-black text-[12px] md:text-sm`}>In today’s AI world we know that what machines are capable of doing and have you ever imagined that how these machines are performing these task so much efficiently ?</p>

            <p className={`w-full mt-5 text-start font-Montserrat text-black text-[12px] md:text-sm`}>1. By collecting user's data.</p>
            <p className={`w-full text-start font-Montserrat text-black text-[12px] md:text-sm`}>2. Training their AI models.</p>
            <p className={`w-full text-start font-Montserrat text-black text-[12px] md:text-sm`}>3. Repeat</p>

            <p className={`w-full mt-5 text-start font-Montserrat text-black text-[12px] md:text-sm`}>Each and every search, played song, written note, used an AI assistant, ghibli style image generation all of this is data for the AI models to train.</p>
            <p className={`w-full mt-5 text-start font-Montserrat text-black text-[12px] font-bold md:text-sm`}>Now here comes Ripple AI</p>

            <p className={`w-full mt-5 text-start font-Montserrat text-black text-[12px] md:text-sm`}>1. Your search will be completely safe between you and your browser in that specific time only. </p>
            <p className={`w-full text-start font-Montserrat text-black text-[12px] md:text-sm`}>2. No user history will be saved. No sign up needed. </p>
            <p className={`w-full text-start font-Montserrat text-black text-[12px] md:text-sm`}>3. Any file that will be shared will be deleted after legit use. </p>
            <p className={`w-full text-start font-Montserrat text-black text-[12px] md:text-sm`}>4. No model training with usage behaviour. </p>

          </div>
        </div>

        {/* doubts cleared */}
        <div className={`w-full px-5 py-5 mt-8 flex flex-col justify-start items-center`}>
          <h2 className={`w-full text-center font-Archivo text-xl md:text-2xl xl:text-4xl font-bold`}>Your Doubt's Answered</h2>

          <div className={`w-[80%] md:w-[70%] xl:w-[60%] flex flex-col justify-start items-center gap-3 pt-10 pb-5`}>
            {faq.map((obj, index) => {
              const open = index + 1 === current ? true : false;
              return <div key={index} className={`w-full h-auto pb-[1px] bg-gradient-to-r from-transparent via-red-700 to-transparent flex justify-center items-center`}>
                <div className={`w-full h-full bg-white py-4 flex flex-col justify-start items-center px-3`}>
                  <div className={`w-full cursor-pointer flex justify-between items-center`} onClick={() => setCurrnt(obj.id)}>
                    <p className={`text-black font-Arapey text-lg md:text-2xl font-semibold`}>{obj.question}</p>
                    <span><SiGooglegemini /></span>
                  </div>
                  <Collapse isOpened={open}>
                    <div className={`w-full py-4 pr-5`}>
                      <p className={`w-full font-Montserrat text-start text-[12px] md:text-[14px] text-black`}>{obj.answer}</p>
                    </div>
                  </Collapse>
                </div>
              </div>
            })}
          </div>
        </div>


      </div>
    </>
  )
}

export default page
