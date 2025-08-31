'use client'

import { decisionQuestions } from "@/data/decisionArena"
import Link from "next/link";
import { useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { VscDebugContinue } from "react-icons/vsc";
import { VscDebugRestart } from "react-icons/vsc";

interface Option {
  text: string;      
  feedback: string;  
}

interface Question {
  id: number;         
  question: string; 
  options: Option[]; 
}

interface DecisionCategory {
  id: number;             
  category: string;       
  description: string;    
  questions: Question[];
}

function page() {

    const search = useSearchParams();
    const id = Number(search.get('id'));
    const router = useRouter();
    const[questionData, setQuestionData] = useState<null | DecisionCategory>(null);
    const[isValid, setIsValid] = useState(false);
    const[current, setCurrent] = useState(0);
    const[currentFeedback, setCurrentFeedback] = useState('');
    const[feedbackVisible, setFeedbackVisible] = useState(false);

    useEffect(() => {
        if (id <= decisionQuestions.length) {
            setIsValid(true);
            setQuestionData(decisionQuestions[id]);
        }
        else{
            setIsValid(false);
            router.push('/decision-arena');
        }
    }, [id]);

    return (
        <>
            <div className={`w-full h-screen ${isValid ? "block" : "hidden"} flex flex-col justify-start items-center px-5 md:px-10 pt-10 relative overflow-hidden`}>
                <Link href='/decision-arena' className={`w-auto px-4 py-1 lg:py-2 text-[12px] lg:text-[16px] flex justify-center items-center gap-2 text-black cursor-pointer absolute top-5 z-10 lg:top-10 lg:left-8 left-3`}><IoIosArrowRoundBack className={`font-bold text-lg lg:text-[20px]`}/> Go Back</Link>
                
                <div className={`${feedbackVisible ? "block" : "hidden"} w-full h-full px-5 md:px-10 z-30 flex flex-col justify-center items-center overflow-hidden absolute top-0 backdrop-blur bg-white/50`}>
                    <h1 className={`w-full text-center font-Montserrat text-lg`}>{currentFeedback}</h1>
                    <p onClick={() => {
                        setCurrent((prev) => prev+1);
                        setFeedbackVisible(false);
                    }} className={`w-auto mt-3 ${questionData?.questions.length && current + 1 < questionData?.questions.length ? "block":"hidden"} flex justify-center items-center text-center gap-2 rounded-full px-4 hover:px-6 duration-200 ease-in-out py-2 cursor-pointer bg-gradient-to-r from-teal-400 to-green-500`}>Continue <VscDebugContinue /></p>
                    <p onClick={() => {
                        router.push('/decision-arena');
                    }} className={`w-auto mt-3 ${questionData?.questions.length && current + 1 >= questionData?.questions.length ? "block":"hidden"} flex justify-center items-center text-center gap-2 rounded-full px-4 hover:px-6 duration-200 ease-in-out py-2 cursor-pointer text-white bg-gradient-to-r from-red-400 to-red-700`}>End Activity</p>
                </div>

                <h1 className={`w-full text-center mt-10 lg:mt-14 text-xl md:text-2xl xl:text-4xl font-Montserrat font-bold`}>{questionData?.category}</h1>
                <h1 className={`w-full text-center mt-2 text-sm xl:text-[16px] italic font-Montserrat`}>{questionData?.description}</h1>

                <div className={`w-full md:w-[80%] xl:w-[70%] mt-5 md:mt-8 h-auto flex flex-col justify-start items-center px-4 py-5`}>
                   <h1 className={`w-full text-center font-Montserrat font-semibold text-sm md:text-lg`}>{current+1}. {questionData?.questions[current].question}</h1>
                   <div className={`w-full grid grid-cols-1 sm:grid-cols-2 mt-4 md:mt-8 justify-items-center gap-5`}>
                    {questionData?.questions[current].options.map((opt, index) => {
                        return <span onClick={() => {
                            setFeedbackVisible(true);
                            setCurrentFeedback(opt.feedback);
                        }} key={index} className={`w-full rounded-lg hover:shadow-xl duration-200 ease-in-out border-[1px] border-black cursor-pointer text-center text-[10px] sm:text-sm py-3 md:py-5 px-4`}>{opt.text}</span>
                    })}
                   </div>
                </div>

                <p onClick={() => {
                    setCurrent(0);
                }} className={`w-auto px-6 hover:shadow-xl duration-200 ease-in-out py-2 mt-4 flex justify-center items-center gap-3 rounded-full text-white cursor-pointer text-sm lg:text-lg bg-gradient-to-r from-blue-400 to-blue-700`}>Restart <VscDebugRestart /></p>
            </div>
        </>
    )
}

export default page
