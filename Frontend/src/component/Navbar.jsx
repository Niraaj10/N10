import React, { useState } from 'react'
import { WiDaySunny } from "react-icons/wi";
import { VscGithubInverted } from "react-icons/vsc";
import { BsLinkedin } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";


const Navbar = ({ scrollToAbout, scrollToTech, scrollToPro, scrollToCont, scrollToMain }) => {
    const [darkmode, setDarkmode] = useState(false);

    const toggleDarkMode = () => {
        setDarkmode(!darkmode);
        if (!darkmode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }

    const openLink = (url) => {
        window.open('https://github.com/Niraaj10', "_blank", "noopener,noreferrer");
    };

    return (
        <>
                    <div className='md:hidden lg:hidden fixed bottom-2 z-50 '>
                        <div className="flex md:hidden lg:hidden w-[90vw] gap-5 justify-between mx-6 my-2 rounded-xl p-5 cursor-pointer shadowBG dark:shadow-none backdrop-blur-3xl bg-gray-100/20 dark:bg-gray-950/10">
                            <div onClick={scrollToAbout}>About</div>
                            <div onClick={scrollToPro}>Projects</div>
                            <div onClick={scrollToTech}>TechStack</div>
                            <div onClick={scrollToCont}>Contact</div>
                        </div>
                    </div>

            <div className='mt-0 m-5 md:mx-10 lg:mx-10 p-5 fixed w-[91vw] z-50 px-11 font-bold rounded-xl backdrop-blur-3xl bg-gray-100/20 dark:bg-gray-950/10  transition-colors duration-300 shadowBG dark:shadow-none '>
                    

                <div className='flex justify-between items-center'>

                    <div onClick={scrollToMain} className="logofont font-extrabold text-[6vw] md:text-[4vw] lg:text-[2vw] ">
                        N10
                    </div>

                    <div className="hidden md:flex lg:flex gap-3  cursor-pointer">
                        <div onClick={scrollToAbout}>About</div>
                        <div onClick={scrollToPro}>Projects</div>
                        <div onClick={scrollToTech}>TechStack</div>
                        <div onClick={scrollToCont}>Contact</div>
                    </div>


                    <div className="flex gap-3 items-center w-36">

                        <a href="https://www.instagram.com/_.niraj10?igsh=MW10YXhxdjBybWxxaA==" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={22} className='text-gray-600 dark:text-[#808080] cursor-pointer' />
                        </a>

                        <a href="https://www.linkedin.com/in/niraj-alone-7231aa328/" target="_blank" rel="noopener noreferrer">
                            <VscGithubInverted size={22} className='text-gray-600 dark:text-[#808080] cursor-pointer' />
                        </a>

                        <a href="https://github.com/Niraaj10" target="_blank" rel="noopener noreferrer">
                            <BsLinkedin size={22} className='text-gray-600 dark:text-[#808080] cursor-pointer' />
                        </a>

                        <div className='border-l-2 border-gray-400 pl-3'>
                            <WiDaySunny size={30} className='text-gray-600 dark:text-[#808080] cursor-pointer' onClick={toggleDarkMode} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;
