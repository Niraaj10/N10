import React, { useState } from 'react'
import { WiDaySunny } from "react-icons/wi";
import { VscGithubInverted } from "react-icons/vsc";
import { BsLinkedin } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";


const Navbar = ({ scrollToAbout }) => {
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
            <div className='mt-0 m-5 mx-10 p-5 fixed w-[94vw] z-50 px-11 font-bold rounded-xl backdrop-blur-3xl bg-gray-100/20 dark:bg-gray-950/10  transition-colors duration-300 shadowBG dark:shadow-none '>

                <div className='flex justify-between items-center'>

                    <div className="logofont">
                    N10
                    </div>

                    <div className="flex gap-3 cursor-pointer">
                        <div onClick={scrollToAbout}>About</div>
                        <div>Projects</div>
                        <div>Contact</div>
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
