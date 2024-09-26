import React, { useRef } from 'react'
import bgGlow from '../assets/GlowB.png'
import Navbar from './Navbar'
import N10 from '../assets/N10.png'
import About from './About'
import TechStack from './TechStack'
import Projects from './Projects'
import Contact from './Contact'
import ProfileCircle from '../assets/project img/PAC_Design.png'

const Main = () => {
  const aboutRef = useRef(null);
  const techRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTech = () => {
    techRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPro = () => {
    projectRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCont = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };




  return (
    <div className='Main pt-5 relative z-10 bg-white dark:bg-black transition-colors duration-300'>
      {/* Niraj10 */}

      <Navbar scrollToAbout={scrollToAbout} scrollToTech={scrollToTech} scrollToPro={scrollToPro} scrollToCont={scrollToCont} />

      <div className=''>


        <div className='h-[96vh] md:h-[86vh] lg:h-[86vh] mt-40 md:mt-0 lg:mt-0 mb-20 md:mb-0 lg:mb-0 w-full'>
            
          <img src={bgGlow} alt="" className='absolute z-0 object-cover w-[100vw] h-[90vh] top-[-1px] md:top-[-20px] lg:top-[-20px]  ' />

          <div className='relative z-10 h-full mt-16 mx-10 md:mx-0 lg:mx-0 flex flex-col-reverse md:flex-row lg:flex-row  md:justify-center lg:justify-center justify-start items-center'>

            <div className='basis-[50%] '>
              <div className='fonttext text-[7vh] md:text-[10vh] lg:text-[20vh] font-bold ' >
                <span className='text-gray-500 text-[5vh] md:text-[7vh] lg:text-[15vh] textShadow'>I'm </span>
                Niraj
              </div>

              <div className='font-semibold text-lg'>
                A passionate MERN stack developer with a knack for creativity and problem-solving. I recently graduated with a degree in BCA, and I love to blend my technical skills with my creative interests to bring innovative ideas to life.
              </div>

              <div className='flex flex-col md:flex-row lg:flex-row items-center gap-7 mt-10 md:mt-3 lg:mt-3 '>
                <div className='w-full md:w-[18vw] lg:w-[18vw] text-center p-3 px-7 rounded-xl btnBg text-[#C5C5C5] dark:text-[#808080] font-bold shadowLightBG'>
                  <a href="/NirajCVUP.pdf" target="_blank" rel="noopener noreferrer">
                    See my resume
                  </a>
                </div>
                <div className='w-full  md:w-[18vw] lg:w-[18vw] text-center p-3 px-7 rounded-xl bg-[#F3F3F3] dark:bg-[#181818] text-[#181818] dark:text-[#808080] font-bold transition-colors duration-300'>Get in touch</div>
              </div>
            </div>

            {/* <div className='relative w-[40vw] flex justify-center items-center '> */}
            <div className='relative '>
              {/* <img src={ProfileCircle} alt="" className='absolute z-0 w-[40vw] -right-8 spin-animation opacity-80'/> */}
              <img src={N10} alt="" className='w-[65vw] my-10 md:my-0 lg:my-0 md:w-[25vw] lg:w-[25vw] relative z-1' />
            </div>

          </div>
        </div>


        <div>

          <div className='pt-16 bg-white dark:bg-black' ref={aboutRef}>
            <About />
          </div>

          <div className='pt-16 bg-white dark:bg-black' ref={techRef}>
            <TechStack />
          </div>

          <div className='pt-16 bg-white dark:bg-black' ref={projectRef}>
            <Projects />
          </div>

          <div className='pt-16 bg-white dark:bg-black' ref={contactRef}>
            <Contact />
          </div>

        </div>



      </div>
    </div>
  )
}

export default Main
