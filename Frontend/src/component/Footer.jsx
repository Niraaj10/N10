import React from 'react'
import bgGlow from '../assets/GlowDown.png'

const Footer = ({ scrollToAbout, scrollToTech, scrollToPro, scrollToCont, scrollToMain }) => {
    return (
        <>
            <div className='Footer mx-7 md:mx-28 lg:mx-28 mt-5 border-t pt-16 p-7  '>
                {/* Footer */}

                <img src={bgGlow} alt="" className='absolute z-0 hidden md:block lg:block object-cover w-[85vw] h-[50vh] bottom-0   ' />

                <div className='relative z-20 flex justify-between items-start'>

                    <div className='flex flex-col justify-between h-[20vh] md:h-[30vh] lg:h-[30vh]'>
                        <div onClick={scrollToMain} className="logofont font-extrabold text-[6vw] md:text-[5vw] lg:text-[3vw] cursor-pointer ">
                            N10
                            <div className='text-sm font-semibold'>Thanks for stopping by ッ</div>
                        </div>

                        <div className='font-bold mb-14 md:mb-0 lg:mb-0'>
                            &copy; 2024 Niraj Alone. All Rights Reserved
                        </div>
                    </div>


                    <div className='hidden md:grid lg:grid grid-cols-2 gap-10'>

                        <div className='text-md font-bold'>
                            Links
                            <ul className='font-normal mt-7 cursor-pointer'>
                                <li className='mt-2' onClick={scrollToAbout}>About</li>
                                <li className='mt-2' onClick={scrollToPro}>Projects</li>
                                <li className='mt-2' onClick={scrollToTech}>Tech Stack</li>
                                <li className='mt-2' onClick={scrollToCont}>Contact</li>
                            </ul>
                        </div>
                        <div className='text-md font-bold'>
                            Elsewhere
                            <ul className='font-normal mt-7 cursor-pointer'>
                            <a href="https://www.linkedin.com/in/niraj-alone-7231aa328/" target="_blank" rel="noopener noreferrer"><li className='mt-2'>LinkedIn</li></a>
                                
                                <a href="https://github.com/Niraaj10" target="_blank" rel="noopener noreferrer"><li className='mt-2'>Github</li></a>
                                
                                <a href="https://www.instagram.com/_.niraj10?igsh=MW10YXhxdjBybWxxaA==" target="_blank" rel="noopener noreferrer"><li className='mt-2'>Instagram</li></a>
                                
                                <li className='mt-2'>Discord</li>
                            </ul>
                        </div>
                        
                    </div>

                </div>

            </div>
        </>
    )
}

export default Footer
