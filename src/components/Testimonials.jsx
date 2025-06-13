import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Testimonials = () => {
  return (
    <div id='Testimonials' className='px-6 py-10 scroll-smooth'>
        <div className='flex flex-col items-center mt-[100px] text-center'>
            <h1 className='text-4xl md:text-6xl font-bold'>Customer <span className='font-thin underline underline-offset-4'>Testimonials</span></h1>
            <p className='mt-8 w-full md:w-[300px]'>Real Stories From Those Who Found Home With Us</p>
        </div>

        {/* -------------------------Cards------------------------------- */}
        <motion.div 
          initial={{opacity:0, x:100}}
          transition={{duration: 1.5}}
          whileInView={{opacity: 1, x:0}}
          viewport={{once: true}}
          className='flex flex-col md:flex-row mt-10 gap-10 justify-center z-10 overflow-hidden'
        >
            {testimonialsData.map((data, index) => (
                <div className='bg-slate-200 w-full md:w-[350px] flex flex-col items-center rounded-2xl flex-shrink-0' key={index}>
                    <img src={data.image}
                    alt={data.alt}
                    className='mt-10 w-[150px] h-[150px] md:w-auto md:h-auto'/>
                    <div className='flex text-center flex-col z-20 bg-slate-400 my-3 w-full md:w-[370px] rounded-2xl shadow-xl'>
                        <h2 className='mt-10 font-semibold text-xl md:text-3xl'>{data.name}</h2>
                        <p className='mt-2 mb-10 text-sm md:text-base'>{data.title}</p>
                    </div>
                    <div className='flex flex-row gap-2'>
                        {Array.from({ length: data.rating }, (_, index) => (
                            <img src={assets.star_icon} alt="" key={index} className='w-[20px] h-[20px] md:w-auto md:h-auto'/>
                        ))}
                    </div>
                    <p className='text-center text-black px-5 border-xl mt-6 text-sm md:text-base'>{data.text}</p>
                </div>
            ))}
        </motion.div>
    </div>
  )
}

export default Testimonials
