import React from 'react'
import macdottes from '../assets/mac.svg'

const Contact = () => {
    return (
        <>
            <div className='Contact mx-28 mt-5 pb-11'>
                {/* Contact */}

                <div className='text-[5vw] font-bold'>
                    Get in touch
                </div>


                <div className=' '>
                    <div className='FormBox border m-5 mx-36 p-5 rounded-xl backdrop-blur-3xl shadowBG dark:shadow-none dark:bg-[#0f0f0f] border-gray-100 dark:border-[#23232355]'>

                        <div className='FormHeader flex justify-between items-center border-b border-gray-100 dark:border-[#ffffff22] py-2 '>
                            <div>
                                <img src={macdottes} alt="" />
                            </div>
                            <div className='text-black dark:text-white font-bold'>New message</div>
                            <div></div>
                        </div>

                        <div className='p-4 px-10 text-[#808080]'>
                            <form>

                                <div className='mb-3 py-2 border-b border-gray-100 dark:border-[#ffffff3f]'>
                                    <label htmlFor="name" className='text-black  dark:text-[#383737] font-semibold'>Name : </label>
                                    <input type="text" name="name" id="name" className='ml-5 outline-none bg-transparent' placeholder='Enter your name' />
                                </div>

                                <div className='mb-3 py-2 border-b border-gray-100 dark:border-[#ffffff3f]'>
                                    <label htmlFor="email" className='text-black dark:text-[#383737] font-semibold'>Email : </label>
                                    <input type="text" name="email" id="email" className='ml-5 outline-none bg-transparent' placeholder='Enter your email' />
                                </div>

                                <div className='py-2 '>
                                    <textarea name="message" id="message" placeholder='Enter your message here...' className='bg-[#F6F6F6] dark:bg-[#090808] w-full h-[35vh] p-5 rounded-xl outline-none '></textarea>
                                </div>

                                {/* <button type='submit' className='p-3 px-7 rounded-xl backdrop-blur-3xl btnBg text-[#C5C5C5] dark:text-[#808080] font-bold shadowLightBG items-end' >Send message</button> */}

                                <div className='text-right'> 
                                    <button type='submit' className='mr-5 p-3 px-7 rounded-xl backdrop-blur-3xl btnBg text-[#C5C5C5] dark:text-[#808080] font-bold shadowLightBG'>
                                        Send message
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Contact
