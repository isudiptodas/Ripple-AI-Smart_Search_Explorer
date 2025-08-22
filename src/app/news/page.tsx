'use client'

import Navbar from "@/components/Navbar"
import { newsCategory } from "@/data/newsCategory";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ImSearch } from "react-icons/im";
import { toast } from "sonner";

interface newsData {
    title: string,
    link: string,
    description: string,
    pubDate: string,
    image_url?: string,
    source_name?: string,
    source_icon?: string
}

function page() {

    const [newsOption, setNewsOption] = useState('india');
    const [input, setInput] = useState('');
    const [newsVisible, setNewsVisible] = useState(false);
    const [inputVisible, setInputVisible] = useState(false);
    const [newsData, setNewsData] = useState<newsData | null>(null);
    const [latestNews, setLatestNews] = useState<newsData[] | null>([]);
    const [categoryNews, setCategoryNews] = useState<newsData[] | null>([]);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const fetchLatestNews = async () => {
            try {
                const api = process.env.NEXT_PUBLIC_NEWS_API;
                const latest = await axios.get(`https://newsdata.io/api/1/latest?apikey=${api}&country=in&image=1&language=en`);
                //console.log(latest.data.results);
                setLatestNews(latest.data.results);
            } catch (err) {
                console.log(err);
            }
        }

        fetchLatestNews();
    }, []);

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const api = process.env.NEXT_PUBLIC_NEWS_API;
                const category = await axios.get(`https://newsdata.io/api/1/latest?apikey=${api}&q=${newsOption}&image=1&country=in&language=en`);
                //console.log(category.data.results);
                setCategoryNews(category.data.results);
                setInputVisible(false);
            } catch (err) {
                console.log(err);
            }
        }

        fetchCategory();
    }, [newsOption]);

    const trimText = (text: string, length: number) => {
        return text.substring(0, length)+'. . .';
    }

    const searchNews = async () => {
        if (!input) {
            toast.error("Please enter search query");
            return;
        }

        try {
            const api = process.env.NEXT_PUBLIC_NEWS_API;
            const category = await axios.get(`https://newsdata.io/api/1/latest?apikey=${api}&q=${input}&image=1&country=in&language=en`);
            //console.log(category.data.results);
            setCategoryNews(category.data.results);
            setInputVisible(true);
        } catch (err) {
            console.log(err);
        }
    }

    const navigate = (link: string | undefined) => {
        window.open(link, '_blank');
    }

    return (
        <>
            <div className={`w-full h-auto flex flex-col justify-start items-center relative overflow-hidden`}>
                <Navbar pathname={pathname}/>

                <div className={`absolute ${newsVisible ? "block" : "hidden"} overflow-hidden pointer-events-none duration-300 ease-in-out top-0 z-40 h-full w-full bg-black/70`}></div>
                <div className={`w-[90%] z-40 md:w-[60%] lg:w-[40%] px-4 py-5 rounded-lg h-auto fixed top-0 bg-white ${newsVisible ? "translate-y-0 top-10 md:top-7" : "-translate-y-full"} duration-300 ease-in-out flex flex-col justify-start items-center`}>
                    <div className={`w-full h-56 rounded-lg overflow-hidden`}>
                        <img src={newsData?.image_url} className={`w-full h-full object-cover`} />
                    </div>
                    <h1 className={`w-full mt-4 text-start font-Montserrat text-sm md:text-[16px] font-bold`}>{newsData?.title}</h1>
                    <h1 className={`w-full mt-2 max-h-20 lg:max-h-12 scroll-bar overflow-y-auto text-start font-Montserrat text-[10px] md:text-[12px]`}>{newsData?.description}</h1>
                    <h1 className={`w-full mt-5 text-start font-Montserrat text-[10px] md:text-[12px]`}><span className={`font-semibold`}>Publication Date :</span> {newsData?.pubDate.split(' ')[0]}</h1>
                    <h1 className={`w-full text-start font-Montserrat text-[10px] md:text-[12px]`}><span className={`font-semibold`}>Source :</span> {newsData?.source_name}</h1>
                    <div className={`w-full py-2 flex justify-start items-start`}>
                        <img src={newsData?.source_icon} className="h-7" />
                    </div>
                    <p className={`w-full py-3 text-sm rounded-lg bg-gradient-to-r from-red-400 via-red-600 to-red-800 text-white font-Montserrat hover:opacity-75 duration-200 ease-in-out cursor-pointer flex justify-center items-center font-bold`} onClick={() => navigate(newsData?.link)}>Read More</p>
                    <p onClick={() => {
                        setNewsVisible(false);
                        setNewsData(null);
                    }} className={`w-full cursor-pointer text-black text-center mt-3 underline font-Montserrat text-sm`}>Cancel</p>
                </div>

                {/* search bar */}
                <div className={`w-full lg:w-[70%] py-3 mt-20 md:mt-28 h-auto flex justify-between items-center gap-2 px-3`}>
                    <input onChange={(e) => setInput(e.target.value)} type="text" className={`w-full bg-gray-200 text-black font-Montserrat outline-none px-3 py-3`} placeholder="Enter search term" />
                    <span onClick={searchNews} className={`px-3 py-4 cursor-pointer bg-red-500 text-white hover:bg-red-700 duration-200 ease-in-out active:scale-95`}><ImSearch /></span>
                </div>

                {/* news category */}
                <div className={`w-full h-auto px-5 py-3 scroll-bar flex justify-start md:justify-center items-center gap-3 overflow-x-auto`}>
                    {newsCategory.map((news, index) => {
                        return <div onClick={() => setNewsOption(news)} key={index} className={`px-3 cursor-pointer py-2 rounded-lg ${newsOption === news ? "bg-red-500 border-2 border-red-500 text-white" : "border-red-500 border-2 text-black"} duration-150 ease-in-out`}>
                            <p className={`font-Montserrat capitalize text-sm`}>{news}</p>
                        </div>
                    })}
                </div>

                {/* latest news */}
                <div className={`w-full mt-3 h-auto flex flex-col justify-start items-center gap-3`}>
                    <h2 className={`w-full text-start font-Archivo font-semibold text-2xl px-5`}>Latest News</h2>

                    <div className={`w-full flex justify-start items-start gap-3 py-3 px-5 scroll-bar overflow-x-auto`}>
                        {latestNews?.map((news, index) => {
                            return <div key={index} onClick={() => {
                                setNewsVisible(true);
                                const data = {
                                    title: news?.title,
                                    description: news?.description,
                                    link: news?.link,
                                    image_url: news?.image_url,
                                    source_icon: news?.source_icon,
                                    source_name: news?.source_name,
                                    pubDate: news?.pubDate
                                };
                                setNewsData(data);
                            }} className={`w-72 cursor-pointer hover:shadow-2xl duration-300 ease-in-out rounded-lg shrink-0 overflow-hidden relative bg-gray-200 h-48`}>
                                <img src={news?.image_url} className={`h-full w-full object-cover`} />
                                <div className={`w-full absolute bottom-0 z-20 h-full bg-gradient-to-t from-black to-transparent flex flex-col justify-end items-start px-3 py-3`}>
                                    <p className={`w-full text-white font-Montserrat text-sm font-semibold text-start`}>{trimText(news?.title, 50)}</p>
                                    <p className={`w-full text-white font-Montserrat text-[10px] mt-2 text-start`}>{news?.pubDate.split(' ')[0]}</p>
                                </div>
                            </div>
                        })}
                    </div>
                </div>

                <hr className={`w-[90%] md:w-[95%] md:rounded-full h-[2px] md:h-[4px] mt-5 bg-gradient-to-r from-red-400 via-red-700 to-red-900`} />

                {/* all news */}
                <div className={`w-full flex flex-col pb-10 justify-start items-center `}>
                    <h2 className={`w-full mt-5 text-start font-Archivo font-semibold text-2xl capitalize px-5 ${inputVisible ? "hidden" : "block"}`}>{newsOption==='india' ? "All": newsOption}</h2>
                    <h2 className={`w-full mt-5 text-start font-Archivo font-semibold text-2xl capitalize px-5 ${inputVisible ? "block" : "hidden"}`}>Results for {input}</h2>

                    <div className={`w-full mt-5 h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-5`}>
                        {categoryNews?.map((news, index) => {
                            return <div key={index} onClick={() => {
                                setNewsVisible(true);
                                const data = {
                                    title: news?.title,
                                    description: news?.description,
                                    link: news?.link,
                                    image_url: news?.image_url,
                                    source_icon: news?.source_icon,
                                    source_name: news?.source_name,
                                    pubDate: news?.pubDate
                                };
                                setNewsData(data);
                            }} className={`w-full cursor-pointer hover:shadow-2xl duration-200 ease-in-out h-28 md:h-32 rounded-lg bg-gray-200 flex justify-between items-center gap-2 px-2 py-2`}>
                                <div className={`w-full h-full flex flex-col justify-start items-start`}>
                                    <p className={`font-Montserrat text-sm text-black font-semibold md:hidden`}>{trimText(news?.title, 50)}</p>
                                    <p className={`font-Montserrat text-sm text-black font-semibold hidden md:block xl:hidden`}>{trimText(news?.title, 80)}</p>
                                    <p className={`font-Montserrat text-sm text-black font-semibold hidden xl:block`}>{trimText(news?.title, 120)}</p>
                                    <p className={`font-Montserrat text-[10px] text-black mt-1`}>Date : {news?.pubDate.split(' ')[0]}</p>
                                </div>
                                <div className={`w-[30%] h-full overflow-hidden rounded-lg`}>
                                    <img src={news?.image_url} className={`h-full w-full object-cover`} />
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
