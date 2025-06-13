import React, { useEffect, useState } from 'react'
import { assets, projectsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Projects = () => {

  const[currentIndex, setCurrentIndex] = useState(0)
  const[cardsToShow, setCarsToShow] = useState(1)


  useEffect(()=>{
      const updateCarsToShow =()=>{
    if(window.innerWidth >= 1024){
      setCarsToShow(projectsData.length)
    }else{
      setCarsToShow(1)
    }
  };

  updateCarsToShow();

  window.addEventListener('resize', updateCarsToShow)
  return()=>window.removeEventListener('resize', updateCarsToShow)
  }, [])

  const nextProject = ()=>{
    setCurrentIndex((prevIndex)=>(prevIndex+1)%projectsData.length)
  }

  const prevProject = ()=>{
    setCurrentIndex((prevIndex)=>(prevIndex===0 ? projectsData.length-1 : prevIndex-1))
  }

  return (
    <div id='Projects' className='scroll-smooth'>   
        <div className='flex flex-col items-center mt-[200px] text-center'>
        <h1 className='text-6xl font-bold'>Projects <span className='font-thin underline underline-offset-4'>Completed</span></h1>
        <p className='mt-8 w-[300px]'>Crafting Spaces, Building Legacies-Explore Our Portfolio</p>
        </div>

        {/* ----------------------------Buttons------------------ */}

        <div className='flex flex-row justify-end gap-10 items-center mr-[100px]' id='sliderButtons'>
            <img src={assets.left_arrow}
            alt=""
            className='w-10 h-10 bg-slate-300 rounded-xl'
            onClick={prevProject}/>

            <img src={assets.right_arrow}
            alt=""
            className='w-10 h-10 bg-slate-300 rounded-xl'
            onClick={nextProject}/>
        </div>

{/* ----------------------------Image cards---------------------------- */}

<motion.div 
      initial={{opacity:0, y:100}}
      transition={{duration: 1.5}}
      whileInView={{opacity: 1, y:0}}
      viewport={{once: true}}
className='mt-10 justify-between pl-8 overflow-visible'> {/* Removed overflow-visible and added overflow-hidden */}
  <div
    className='flex flex-row gap-8 transition-transform duration-500 ease-in-out'
    style={{ transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)` }} // Fixed transform syntax
  >
    {projectsData.map((project, index) => (
      <div key={index} className='w-1/4 relative flex-shrink-0'>
        {/* Image */}
        <img
          src={project.image}
          alt={project.title}
          className='w-full rounded-xl relative z-10' // Added rounded-t-xl for top curve
        />

        {/* Floating Container */}
        <div
          className='absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-1/2 bg-white z-30 px-4 py-3 rounded-xl w-[80%] border'
          style={{ bottom: '-10px' }}
        >
          <h2 className='font-semibold text-lg z-40'>
            {project.title}
          </h2>
          <p className='text-sm text-gray-600 z-40 relative'>
            {project.price} <span>|</span> {project.location}
          </p>
        </div>
      </div>
    ))}
  </div>
</motion.div>


    </div>

  )
}

export default Projects