import React from 'react'
import bgGlow from '../assets/GlowB.png'
import Navbar from './Navbar'

const Main = () => {
  return (
    <div className='Main pt-5 relative z-10 bg-white dark:bg-black transition-colors duration-300'>
      {/* Niraj10 */}

      <Navbar />

      <div className=''>


        <div className=''>
          <img src={bgGlow} alt="" className='absolute z-0 top-[-20px]  ' />

          <div className='relative z-10'>
            heyyyyy
            <div className='cursor-pointer z-20'>
              <a href="https://www.linkedin.com/in/niraj-alone-7231aa328/" target="_blank" rel="noopener noreferrer" className='z-20'>
                logo
              </a>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Main
