import React from 'react'
import figma from '../assets/figma.png'
import git from '../assets/git.png'
import vercel from '../assets/vercel.png'
import vscode from '../assets/vscode.png'
import postman from '../assets/postman.png'
import tailwind from '../assets/Tailwind.png'
import react from '../assets/ReactJs.png'
import express from '../assets/express.png'
import node from '../assets/node.png'
import mongoDB from '../assets/mongoDB.png'
import html from '../assets/html.png'
import js from '../assets/js.png'
import css from '../assets/css.webp'
import boot from '../assets/boot.png'
import GL from '../assets/GlowLeft.png'




const TechStack = () => {
    return (
        <>
            <div className='TechStack mx-28 mt-5 pb-11 bg-white dark:bg-black '>
                {/* TechStack */}



                {/* <div className='text-[5vw] font-bold  border-b border-[#80808021] pb-5'> */}
                <div className='relative text-[5vw] font-bold '>
                <img src={GL} alt="" className='absolute z-0 h-[90vh] top-[60px] left-[-112px]'/>
                    Tech Stack
                    <div className='ml-4 text-lg font-semibold text-[#808080]'>My Skills and Dev tools i use : </div>
                </div>

                <div className='my-10'>


                    {/* <div className='font-bold ml-5 mb-5 '>Skills</div> */}

                    <div className='grid grid-cols-6 px-16 items-center justify-center gap-7'>
                        <div className='p-9  rounded-3xl w-fit h-fit backdrop-blur-xl bg-gray-100/50 dark:bg-gray-900/10 border border-gray-100 dark:border-[#23232355]'>
                            <img src={react} alt="" className='w-[6vw]' />
                        </div>
                        <div className='p-9  rounded-3xl w-fit h-fit backdrop-blur-xl bg-gray-100/50 dark:bg-gray-900/10 border border-gray-100 dark:border-[#23232355]'>
                            <img src={node} alt="" className='w-[6vw] h-[98px] rounded-3xl' />
                        </div>
                        <div className='p-9  rounded-3xl w-fit h-fit backdrop-blur-xl bg-gray-100/50 dark:bg-gray-900/10 border border-gray-100 dark:border-[#23232355]'>
                            <img src={express} alt="" className='w-[6vw] rounded-full' />
                        </div>
                        <div className='p-9 rounded-3xl w-fit h-fit backdrop-blur-xl bg-gray-100/50 dark:bg-gray-900/10 border border-gray-100 dark:border-[#23232355]'>
                            <img src={js} alt="" className='w-[6vw]' />
                        </div>
                        <div className='p-9  rounded-3xl w-fit h-fit backdrop-blur-xl bg-gray-100/50 dark:bg-gray-900/10 border border-gray-100 dark:border-[#23232355]'>
                            <img src={mongoDB} alt="" className='w-[6vw]' />
                        </div>
                        <div className='p-9 py-14  rounded-3xl w-fit h-fit backdrop-blur-xl bg-gray-100/50 dark:bg-gray-900/10 border border-gray-100 dark:border-[#23232355]'>
                            <img src={tailwind} alt="" className='w-[6vw]' />
                        </div>
                        <div className='p-9  rounded-3xl w-fit h-fit backdrop-blur-xl bg-gray-100/50 dark:bg-gray-900/10 border border-gray-100 dark:border-[#23232355]'>
                            <img src={html} alt="" className='w-[6vw]' />
                        </div>
                        <div className='p-9  rounded-3xl w-fit h-fit backdrop-blur-xl bg-gray-100/50 dark:bg-gray-900/10 border border-gray-100 dark:border-[#23232355]'>
                            <img src={css} alt="" className='w-[6vw]' />
                        </div>
                    {/* </div> */}




                    {/* <div className='font-bold ml-5 mb-5 mt-10'>Dev Tools</div> */}

                    {/* <div className='grid grid-cols-6 px-16'> */}
                        <div className='p-9  rounded-3xl w-fit h-fit backdrop-blur-xl bg-gray-100/50 dark:bg-gray-900/10 border border-gray-100 dark:border-[#23232355]'>
                            <img src={vscode} alt="" className='w-[6vw]' />
                        </div>
                        <div className='p-9  rounded-3xl w-fit h-fit backdrop-blur-xl bg-gray-100/50 dark:bg-gray-900/10 border border-gray-100 dark:border-[#23232355]'>
                            <img src={git} alt="" className='w-[6vw] rounded-3xl' />
                        </div>
                        <div className='p-9  rounded-3xl w-fit h-fit backdrop-blur-xl bg-gray-100/50 dark:bg-gray-900/10 border border-gray-100 dark:border-[#23232355]'>
                            <img src={postman} alt="" className='w-[6vw] rounded-full' />
                        </div>
                        <div className='p-9  rounded-3xl w-fit h-fit backdrop-blur-xl bg-gray-100/50 dark:bg-gray-900/10 border border-gray-100 dark:border-[#23232355]'>
                            <img src={figma} alt="" className='w-[6vw]' />
                        </div>
                        <div className='p-9  rounded-3xl w-fit h-fit backdrop-blur-xl bg-gray-100/50 dark:bg-gray-900/10 border border-gray-100 dark:border-[#23232355]'>
                            <img src={vercel} alt="" className='w-[6vw]' />
                        </div>
                        <div className='p-9  rounded-3xl w-fit h-fit backdrop-blur-xl bg-gray-100/50 dark:bg-gray-900/10 border border-gray-100 dark:border-[#23232355]'>
                            <img src={boot} alt="" className='w-[6vw]' />
                        </div>
                    </div>







                </div>

            </div>
        </>
    )
}

export default TechStack
