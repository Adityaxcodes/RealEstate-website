import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex flex-col justify-start bg-black mt-[50px] px-6 py-10' id='Footer'>
      <div className='flex flex-col md:flex-row mt-[100px] bg-black w-full py-[40px] gap-10'>
        <div className='flex flex-col md:ml-[100px] justify-start items-center md:items-start'>
          <img src={assets.logo_dark} alt="" className='w-[200px] md:w-[300px]' />
          <p className='max-w-[300px] md:max-w-[600px] mt-[20px] text-white text-center md:text-left'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis ratione impedit eligendi laborum architecto perspiciatis temporibus neque vero quisquam ullam dicta optio est commodi, enim debitis laboriosam atque sunt labore?
          </p>
        </div>

        <div className='text-white flex flex-col items-center md:items-start'>
          <h3 className='font-semibold text-2xl md:text-4xl'>Company</h3>
          <ul className='flex flex-col mt-4 gap-y-4 items-center md:items-start'>
            <li><a href="#Header" className='hover:text-slate-400 scroll-smooth'>Home</a></li>
            <li><a href="#About" className='hover:text-slate-400 scroll-smooth'>About Us</a></li>
            <li><a href="#Contact" className='hover:text-slate-400 scroll-smooth'>Contact Us</a></li>
            <li><a href="#Footer" className='hover:text-slate-400 scroll-smooth'>Privacy Policy</a></li>
          </ul>
        </div>

        <div className='text-white flex flex-col gap-4 items-center md:items-start'>
          <h3 className='font-bold text-2xl md:text-4xl text-center md:text-left'>Subscribe to our newsletter</h3>
          <p className='mt-2 text-center md:text-left'>The latest news, articles, and resources, sent to your inbox weekly.</p>
          <div className='flex flex-col md:flex-row gap-4'>
            <input type="email" placeholder='Enter your email' className='px-4 py-2 bg-slate-800 w-full md:w-auto'/>
            <button className='bg-white text-black rounded-xl w-full md:w-[100px]'>Subscribe</button>
          </div>
        </div>
      </div>
      <div className='text-white text-center text-sm md:text-2xl mt-10'>Copyright 2025 © Pulyala. All Right Reserved.</div>
    </div>
  )
}

export default Footer
