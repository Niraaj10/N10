import React, { useState } from 'react'
import macdottes from '../assets/mac.svg'
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // console.log("name : ", formData.name);
        // console.log("email : ", formData.email);
        // console.log("message : ", formData.message);

        toast.error('Failed to send message. Please try again.', {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

        // emailjs.sendForm('service_a7rndln', 'template_fvaxu8a', e.target, 'Xg8cox_DZlb-nAGCH')
        //     .then((result) => {
        //         // console.log(result.text);
        //         // console.log('Message sent successfully!');

        //         toast('Message Sent', {
        //             position: "bottom-center",
        //             autoClose: 5000,
        //             hideProgressBar: false,
        //             closeOnClick: true,
        //             pauseOnHover: true,
        //             draggable: true,
        //             progress: undefined,
        //             progressStyle: { backgroundColor: 'red', }
        //         });

        //     }, (error) => {
        //         toast.error('Failed to send message. Please try again.', { 
        //             position: "bottom-center",
        //             autoClose: 5000,
        //             hideProgressBar: false,
        //             closeOnClick: true,
        //             pauseOnHover: true,
        //             draggable: true,
        //             progress: undefined, 
        //         });

        //         console.log(error.text);
        //         // console.log('Failed to send message. Please try again.');
        //     });

        setFormData({ name: '', email: '', message: '' });
    }



    return (
        <>
            <div className='Contact mx-7 md:mx-28 lg:mx-28 mt-5 pb-11'>

                <div className='hidden md:block lg:block'>
                    <ToastContainer
                        position="bottom-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                </div>
                
                <div className=' md:hidden lg:hidden'>
                    <ToastContainer
                        position="bottom-top"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                </div>

                {/* Contact */}

                <div className='text-[9vw] lg:text-[5vw] mb-5 md:mb-0 lg:mb-0 font-bold'>
                    Get in touch
                </div>


                <div className=' '>
                    <div className='FormBox border mb-16 md:m-5 lg:m-5 md:mx-36 lg:mx-36  p-3 md:p-5 lg:p-5 rounded-xl backdrop-blur-3xl shadowBG dark:shadow-none dark:bg-[#0f0f0f] border-gray-100 dark:border-[#23232355]'>

                        <div className='FormHeader flex justify-between items-center border-b border-gray-100 dark:border-[#ffffff22] py-2 '>
                            <div>
                                <img src={macdottes} alt="" />
                            </div>
                            <div className='text-black dark:text-white font-bold'>New message</div>
                            <div></div>
                        </div>

                        <div className='p-4 md:px-10 lg:px-10 text-[#808080]'>
                            <form onSubmit={handleSubmit}>

                                <div className='mb-3 py-2 border-b border-gray-100 dark:border-[#ffffff3f]'>
                                    <label htmlFor="name" className='text-black  dark:text-[#383737] font-semibold'>Name : </label>
                                    <input type="text" name="name" id="name" className='ml-5 outline-none bg-transparent' placeholder='Enter your name' value={formData.name} onChange={handleChange} required />
                                </div>

                                <div className='mb-3 py-2 border-b border-gray-100 dark:border-[#ffffff3f]'>
                                    <label htmlFor="email" className='text-black dark:text-[#383737] font-semibold'>Email : </label>
                                    <input type="email" name="email" id="email" className='ml-5 outline-none bg-transparent' placeholder='Enter your email' value={formData.email} onChange={handleChange} required />
                                </div>

                                <div className='py-2 '>
                                    <textarea name="message" id="message" placeholder='Enter your message here...' className='bg-[#F6F6F6] dark:bg-[#090808] w-full h-[35vh] p-5 rounded-xl outline-none ' value={formData.message} onChange={handleChange} required rows="4" ></textarea>
                                </div>

                                {/* <button type='submit' className='p-3 px-7 rounded-xl backdrop-blur-3xl btnBg text-[#C5C5C5] dark:text-[#808080] font-bold shadowLightBG items-end' >Send message</button> */}

                                <div className='text-right'>
                                    <button type='submit' className='mr-5 p-3 px-7 rounded-xl backdrop-blur-3xl btnBg text-[#C5C5C5] dark:text-[#808080] font-bold '>
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
