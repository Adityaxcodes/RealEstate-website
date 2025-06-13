import React from 'react'
import Navbar from './Navbar'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <div className='min-h-screen mb-5 bg-cover w-full bg-center overflow-hidden' style={{backgroundImage : "url('header_img.png')"}} id='Header'>
      <Navbar/>
      <motion.div 
      initial={{opacity:0, y:100}}
      transition={{duration: 1.5}}
      whileInView={{opacity: 1, y:0}}
      viewport={{once: true}}
      className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white mt-40 flex flex-col justify-center items-center'>
        <h2 className='text-white text-5xl sm:text-6xl md:text-[82px] max-w-3xl mt-28 font-semibold'>Explore homes that fit your dreams</h2>
        <div className='flex-row w-full text-[20px] space-x-6 mt-16'>
            <a href="" className='border border-white px-14 py-3'>projects</a>
            <a href="" className='border border-white px-14 py-3 bg-blue-800'>Contact Us</a>
        </div>
      </motion.div>
    </div>
  )
}

export default Header
