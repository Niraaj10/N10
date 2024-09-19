import React, { useRef } from 'react'
import first from '../assets/1st.jpg'
import second from '../assets/2nd.jpg'
import thrid from '../assets/3rd.jpg'
import GR from '../assets/GlowRight.png'

const About = () => {


    

    const Me = [
        {name: 'WHO I AM', content: " I'm Niraj Alone (also known as Niraaj10 on GitHub), a passionate and self-driven MERN stack developer based in India. With a deep enthusiasm for full-stack development, I focus on creating efficient, scalable, and user-friendly web applications."},
        // {name: 'WHAT I DO', content: "Through my hands-on experience in MERN stack development, I’ve not only honed my technical skills but also learned how to bridge the gap between development and design. My projects are born from a blend of curiosity, creativity, and a problem-solving mindset, allowing me to craft functional and visually engaging applications. Whether working on complex back-end logic or intuitive front-end interfaces, I am committed to delivering impact with every project."},
        {name: "WHAT I'VE ACCOMPLISHED", content: "As a fresher full-stack developer, I’ve built a portfolio of projects, focusing on real-time data applications, API handling, and user experience design. I’ve continuously refined my technical skills through ongoing learning, including advanced courses and self-driven projects. I am eager to apply my expertise to contribute to impactful projects and grow within a collaborative development team."},
        {name: "MY BACKGROUND", content: "Before diving into development, my love for creativity led me through a journey in various tech explorations. This background empowered me with a unique blend of technical proficiency and artistic insight, allowing me to approach web development with a focus on user empathy, interactive design, and clean, modular code. My understanding of user-centric design principles ensures that the solutions I build are not just functional but also delightful to use."}
    ]


  return (
    <>
      <div className='AboutSec mx-28 mt-5 pb-11 bg-white dark:bg-black'>
            <div className='relative z-20 '>
                <img src={GR} alt="" className='absolute z-0 h-[95vh] top-0 right-[-112px]'/>
                <div className='text-[5vw] font-bold'>
                    A little bit about me
                    {/* <div className='text-lg font-semibold text-[#808080]'>Who am I</div> */}
                </div>
                <div className='px-2 pt-3 pb-5 flex justify-center items-center gap-10'>
                    <div>
                        <div className='flex justify-center items-center h-full w-full'>
                            <img src={second} alt="" className='w-[13vw] h-[40vh] object-cover rounded-lg relative z-10 -rotate-6 -mr-5 hover:z-30 hover:scale-150 transition-transform duration-300'/>
                            <img src={thrid} alt="" className='w-[15vw] h-[50vh] object-cover rounded-lg relative z-20 '/>
                            <img src={first} alt="" className='w-[13vw] h-[40vh] object-cover rounded-lg rotate-6 relative z-10 -ml-5 hover:z-30 hover:scale-150 transition-transform duration-300' />
                        </div>
                        
                    </div>

                    <div className='basis-[50%]'>
                        <div>
                            {
                                Me.map((item, index) => (
                                    <div key={index} className='my-5'>
                                        <div className='font-bold'>{item.name}</div>
                                        <p className='mt-2'>{item.content}</p>
                                    </div>
                                ))
                            }

                            <div className='border-t pt-5'>
                                Feel free to reach out via <a href="https://www.instagram.com/_.niraj10?igsh=MW10YXhxdjBybWxxaA==" className='text-black font-bold dark:text-white'>e-mail</a>, or follow me on Insta. Check out my <a href="/NirajCVUP.pdf" className='text-black font-bold dark:text-white'>Resume</a>, or Connect with me on <a href="https://www.linkedin.com/in/niraj-alone-7231aa328/" className='text-black font-bold dark:text-white'>LinkedIn</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </>
  )
}

export default About
