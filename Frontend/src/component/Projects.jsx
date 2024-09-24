import React, { useState } from 'react'
import tailwind from '../assets/Tailwind.png'
import react from '../assets/ReactJs.png'
import express from '../assets/express.png'
import node from '../assets/node.png'
import mongoDB from '../assets/mongoDB.png'
import webSocketDark from '../assets/webDark.svg'
import webSocketLight from '../assets/webLight.svg'
import AiDark from '../assets/aiDark.svg'
import AiLight from '../assets/aiLight.svg'
import ProPH from '../assets/ProjectPH.svg'
import VC1 from '../assets/project img/VC_P1.png'
import VC2 from '../assets/project img/VC_P2.png'
import VC3 from '../assets/project img/VC_P3.png'
import VC_VF from '../assets/project img/VC.mp4'

const Projects = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        // console.log(isHovered)
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        // console.log(isHovered)

    };



    return (
        <>
            <div className='Project mx-28 mt-5 pb-11 bg-white dark:bg-black'>
                {/* Project */}


                <div className='text-[5vw] font-bold '>
                    Projects
                    <div className='ml-4 text-lg font-semibold text-[#808080]'>Projects and ideas i've worked on</div>
                </div>



                <div className='ProjectSec mt-5'>

                    <div className='p-10 px-20 flex flex-col gap-10'>

                        <div className='ViewChart backdrop-blur-3xl border dark:border-[#23232355] bg-[#fafafadd] dark:bg-[#0f0f0f51]  p-5 px-10 rounded-xl flex gap-5 justify-center items-center'>

                            <div className='basis-[50%]'>
                                <div className='text-xl font-bold'>

                                    ViewChart- <span>Real-time stock market tracker</span>
                                </div>

                                <div className='mt-3'>
                                    <li>ViewChart is a full-stack real-time stock market tracker built with React, Node.js, Express, MongoDB, and
                                        WebSocket.io</li>
                                    <li>It provides live stock price updates using WebSocket and visualizes stock data with dynamic candlestick charts via ReactApexChart.
                                    </li>
                                    <li>The project demonstrates proficiency in real-time data handling, secure authentication, API integration,
                                        and making it a robust tool for stock market analysis.</li>
                                    <li>Technologies Used: React, Node.js, Express, MongoDB, WebSocket.io , JWT Authentication, ReactApexChart, Finnhub API, Tailwind CSS</li>
                                </div>

                                <div className='mt-5'>
                                    <div className='p-3 px-7 rounded-xl backdrop-blur-3xl btnBg text-[#C5C5C5] dark:text-[#808080] font-bold shadowLightBG w-fit'> <a href="https://viewchart1.netlify.app/">Visit website</a></div>

                                    <div className='flex gap-3 mt-3 items-center'>
                                        <div className='p-3 rounded-xl w-fit h-fit backdrop-blur-xl bg-gray-100/50 dark:bg-gray-900/10 border border-gray-100 dark:border-[#23232355]'>
                                            <img src={react} alt="" className='w-7' />
                                        </div>

                                        <div className='p-3 rounded-xl w-fit h-fit backdrop-blur-xl bg-gray-100/50 dark:bg-gray-900/10 border border-gray-100 dark:border-[#23232355]'>
                                            <img src={webSocketDark} alt="" className='w-7 dark:hidden' />
                                            <img src={webSocketLight} alt="" className='w-7 hidden dark:block' />
                                        </div>
                                        <div className='p-3 rounded-xl w-fit h-fit backdrop-blur-xl bg-gray-100/50 dark:bg-gray-900/10 border border-gray-100 dark:border-[#23232355]'>
                                            <img src={express} alt="" className='w-7' />
                                        </div>
                                        <div className='p-3 rounded-xl w-fit h-fit backdrop-blur-xl bg-gray-100/50 dark:bg-gray-900/10 border border-gray-100 dark:border-[#23232355]'>
                                            <img src={mongoDB} alt="" className='w-7' />
                                        </div>
                                        <div className='p-3 rounded-xl w-fit h-fit backdrop-blur-xl bg-gray-100/50 dark:bg-gray-900/10 border border-gray-100 dark:border-[#23232355]'>
                                            <img src={tailwind} alt="" className='w-7' />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='basis-[50%] h-full flex items-center justify-center flex-col'>

                                    <img src={VC3} alt="ViewChart" className='rounded-lg w-[40vh] relative z-10 -mb-20 '/>

                                <div className='flex justify-center bg-white items-center relative z-20 w-[60vh] h-[31vh]'    
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}>


                                    <img
                                        src={VC1}
                                        alt="ViewChart"
                                        className={`rounded-lg object-cover w-[60vh] h-[31vh] absolute top-0 left-0 transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'
                                            }`}
                                    />

                                    <video
                                        src={VC_VF}
                                        autoPlay
                                        muted
                                        loop
                                        className={`rounded-lg object-cover w-[60vh] h-[31vh] absolute top-0 left-0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'
                                            }`}
                                    />

                                </div>

                                <img src={VC2} alt="ViewChart" className='rounded-lg w-[40vh] relative z-10 -mt-20'/>

                            </div>

                        </div>



                        <div className='ChicKickzz backdrop-blur-3xl border dark:border-[#23232355] bg-[#fafafadd] dark:bg-[#0f0f0f51]  p-5 px-10 rounded-xl flex gap-5 justify-center items-center'>

                            <div className='basis-[50%]'>
                                <div className='text-xl font-bold'>ChicKickzz
                                    {/* <span>Real-time stock market tracker</span> */}
                                </div>

                                <div className='mt-3'>
                                    <li>ChicKickzz is a full-stack e-commerce platform designed for sneaker enthusiasts, leveraging the MERN (MongoDB, Express.js, React.js, Node.js) stack.</li>
                                    <li>The platform provides a seamless and intuitive shopping experience, enabling users to browse, select, and purchase sneakers from a curated catalog.</li>
                                    <li>TKey features include a responsive user interface, secure user authentication, dynamic product management,and an integrated admin panel for efficient order and inventory management.</li>
                                    <li>The project showcases expertise in full-stack development, RESTful API design, and state management in React.</li>
                                </div>

                                <div className='mt-5'>
                                    <div className='p-3 px-7 rounded-xl backdrop-blur-3xl btnBg text-[#C5C5C5] dark:text-[#808080] font-bold shadowLightBG w-fit'> <a href="https://chickickzz10.netlify.app/">Visit website</a></div>

                                    <div className='flex gap-3 mt-3 items-center'>
                                        <div className='p-3 rounded-xl w-fit h-fit backdrop-blur-xl bg-gray-100/50 dark:bg-gray-900/10 border border-gray-100 dark:border-[#23232355]'>
                                            <img src={react} alt="" className='w-7' />
                                        </div>

                                        <div className='p-3 rounded-xl w-fit h-fit backdrop-blur-xl bg-gray-100/50 dark:bg-gray-900/10 border border-gray-100 dark:border-[#23232355]'>
                                            <img src={node} alt="" className='w-7' />
                                        </div>
                                        <div className='p-3 rounded-xl w-fit h-fit backdrop-blur-xl bg-gray-100/50 dark:bg-gray-900/10 border border-gray-100 dark:border-[#23232355]'>
                                            <img src={express} alt="" className='w-7' />
                                        </div>
                                        <div className='p-3 rounded-xl w-fit h-fit backdrop-blur-xl bg-gray-100/50 dark:bg-gray-900/10 border border-gray-100 dark:border-[#23232355]'>
                                            <img src={mongoDB} alt="" className='w-7' />
                                        </div>
                                        <div className='p-3 rounded-xl w-fit h-fit backdrop-blur-xl bg-gray-100/50 dark:bg-gray-900/10 border border-gray-100 dark:border-[#23232355]'>
                                            <img src={tailwind} alt="" className='w-7' />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='basis-[50%]'>
                                <img src="" alt="ViewChart" />
                            </div>

                        </div>


                        <div className='YourGuide backdrop-blur-3xl border dark:border-[#23232355] bg-[#fafafadd] dark:bg-[#0f0f0f51]  p-5 px-10 rounded-xl flex gap-5 justify-center items-center'>

                            <div className='basis-[50%]'>
                                <div className='text-xl font-bold'>YourGuide -
                                    <span> Your Trip Planner with the help of AI</span>
                                </div>

                                <div className='mt-3'>
                                    <li>This project is a Trip Planner application built with React that allows users to input a city name and date range to generate a detailed trip itinerary. </li>
                                    <li>The itinerary includes city description, hotel recommendations,
                                        daily plans with activities, and location maps.
                                    </li>
                                    <li>Technologies Used - React ,Intergeted ChatGPT AI for trip plannig, Tripadvisor API for Places Information,HTML, CSS</li>
                                </div>

                                <div className='mt-5'>
                                    <div className='p-3 px-7 rounded-xl backdrop-blur-3xl btnBg text-[#C5C5C5] dark:text-[#808080] font-bold shadowLightBG w-fit'> <a href="https://your-guidee.netlify.app/">Visit website</a></div>

                                    <div className='flex gap-3 mt-3 items-center'>
                                        <div className='p-3 rounded-xl w-fit h-fit backdrop-blur-xl bg-gray-100/50 dark:bg-gray-900/10 border border-gray-100 dark:border-[#23232355]'>
                                            <img src={react} alt="" className='w-7' />
                                        </div>

                                        <div className='p-3 rounded-xl w-fit h-fit backdrop-blur-xl bg-gray-100/50 dark:bg-gray-900/10 border border-gray-100 dark:border-[#23232355]'>
                                            <img src={AiDark} alt="" className='w-7 dark:hidden' />
                                            <img src={AiLight} alt="" className='w-7 hidden dark:block' />
                                        </div>
                                        <div className='p-3 rounded-xl w-fit h-fit backdrop-blur-xl bg-gray-100/50 dark:bg-gray-900/10 border border-gray-100 dark:border-[#23232355]'>
                                            <img src={express} alt="" className='w-7' />
                                        </div>
                                        <div className='p-3 rounded-xl w-fit h-fit backdrop-blur-xl bg-gray-100/50 dark:bg-gray-900/10 border border-gray-100 dark:border-[#23232355]'>
                                            <img src={mongoDB} alt="" className='w-7' />
                                        </div>
                                        <div className='p-3 rounded-xl w-fit h-fit backdrop-blur-xl bg-gray-100/50 dark:bg-gray-900/10 border border-gray-100 dark:border-[#23232355]'>
                                            <img src={tailwind} alt="" className='w-7' />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='basis-[50%]'>
                                <img src="" alt="ViewChart" />
                            </div>

                        </div>


                        <div className='ProjectPH backdrop-blur-3xl border dark:border-[#23232355] bg-[#fafafadd] dark:bg-[#0f0f0f51] border-dashed h-[40vh] p-5 px-10 rounded-xl flex gap-5 justify-center items-center'>

                            <div className='flex flex-col justify-center items-center gap-7'>
                                <img src={ProPH} alt="" />

                                <div className='flex flex-col justify-center items-center text-[2vw] font-bold'>
                                    YOUR PROJECT GOES HERE
                                    <div className='text-[#808080] text-sm'>
                                        Let's turn your idea into a visual reality
                                    </div>
                                </div>

                            </div>

                        </div>




                    </div>



                </div>

            </div>
        </>
    )
}

export default Projects
