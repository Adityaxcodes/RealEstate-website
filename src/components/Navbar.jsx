import React, { useState } from 'react';
import { assets } from '../assets/assets.js';

const Navbar = () => {
  const [mobileIcon, showMobileIcon] = useState(false);

  return (
    <div className='absolute top-0 left-0 w-full z-10 flex'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
        <img src={assets.logo} alt="Company Logo" />
        <ul className='hidden md:flex gap-jj7 text-white gap-x-10 justify-center w-full'>
          <li className='flex justify-center items-center'><a href="#Header" className='cursor-pointer hover:text-gray-400 scroll-smooth'>Home</a></li>
          <li className='flex justify-center items-center'><a href="#About" className='cursor-pointer hover:text-gray-400 scroll-smooth'>About</a></li>
          <li className='flex justify-center items-center'><a href="#Projects" className='cursor-pointer hover:text-gray-400 scroll-smooth'>Projects</a></li>
          <li className='flex justify-center items-center'><a href="#Testimonials" className='cursor-pointer hover:text-gray-400 scroll-smooth'>Testimonials</a></li>
          <li className='flex justify-center items-center'><a href="#Contact" className='cursor-pointer hover:text-gray-400 scroll-smooth'>Contact</a></li>
        </ul>
        <button className='hidden md:block px-10 py-4 bg-black text-white ml-20 w-auto rounded-full hover:bg-gray-800 transition duration-300 whitespace-nowrap'>
          Sign Up
        </button>
        <img
            src={assets.menu_icon}
            alt="Menu Icon"
            className="cursor-pointer right-0 md:hidden"
            onClick={() => showMobileIcon(true)}
        />
      </div>

      {/* ---------------------Mobile Menu------------------------- */}
      <div
        className={`bg-white w-full md:hidden mt-0 fixed right-0 top-0 bottom-0 transition-all duration-300 ${
          mobileIcon ? 'h-full' : 'h-0 overflow-hidden'
        }`}
      >
        <div className='flex justify-end mr-10'>
          <img
            src={assets.cross_icon}
            alt="Close Icon"
            onClick={() => showMobileIcon(false)}
            className='w-6 h-6 mt-10 cursor-pointer'
          />
        </div>
          <ul className='flex flex-col text-center space-y-5 text-2xl text-black mt-32'>
            <li className='flex justify-center items-center'><a href="" onClick={()=>showMobileIcon(false)}>About</a></li>
            <li className='flex justify-center items-center'><a href="" onClick={()=>showMobileIcon(false)}>Home</a></li>
            <li className='flex justify-center items-center'><a href="" onClick={()=>showMobileIcon(false)}>Projects</a></li>
            <li className='flex justify-center items-center'><a href="" onClick={()=>showMobileIcon(false)}>Testimonials</a></li>
          </ul>
        </div>
       </div>
  );
};

export default Navbar;
