import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className='w-full flex flex-col text-center justify-center items-center px-6 py-10 scroll-smooth' id='About'>
      <h1 className='font-bold text-4xl md:text-6xl'>About <span className='font-thin underline underline-offset-4'>Our Brand</span></h1>
      <p className='max-w-[300px] mt-4 text-sm md:text-base'>Passionate About Properties, Dedicated to Your Vision</p>
      <motion.div 
      initial={{opacity:0, x:100}}
      transition={{duration: 1.5}}
      whileInView={{opacity: 1, x:0}}
      viewport={{once: true}}
      className='flex flex-col md:flex-row items-center justify-center mt-10 md:mt-20' id='info'>
        <img
          src={assets.brand_img}
          alt="Brand"
          className='w-full md:w-[50%] h-[300px] md:h-[500px] md:mr-10'
        />
        <div className='flex flex-col md:flex-col mt-10 md:mt-0'>
          <div className='grid grid-cols-2 w-full items-start gap-x-5 md:gap-x-10 gap-y-5 md:gap-y-10' id='numbers'>
            <div>
              <p className='text-3xl md:text-5xl m-0'>10+</p>
              <p className='text-xs md:text-base m-0'>Years of Excellence</p>
            </div>
            <div>
              <p className='text-3xl md:text-5xl m-0'>12+</p>
              <p className='text-xs md:text-base m-0'>Projects Completed</p>
            </div>
            <div>
              <p className='text-3xl md:text-5xl m-0'>20+</p>
              <p className='text-xs md:text-base m-0'>Mn.Sq.Ft Delivered</p>
            </div>
            <div>
              <p className='text-3xl md:text-5xl m-0'>25+</p>
              <p className='text-xs md:text-base m-0'>Ongoing Projects</p>
            </div>
          </div>
          <p className='mt-5 md:mt-10 md:ml-10 max-w-full md:max-w-[400px] text-justify text-sm md:text-base'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, laboriosam totam odit, laborum fugiat labore magnam illo magni quisquam ab harum. Adipisci sed at perspiciatis labore aliquid? Laborum, eligendi eum.
          </p>
          <button className='bg-blue-700 w-[120px] md:w-[150px] h-8 md:h-10 flex items-center justify-center ml-5 md:ml-10 mt-5 md:mt-10 rounded-full text-xs md:text-base'>Learn more</button>
        </div>
      </motion.div>
    </div>
  )
}

export default About
