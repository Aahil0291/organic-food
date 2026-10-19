import React from 'react'
import { IoSearch } from "react-icons/io5";
import { FaRegUserCircle,FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";





export default function Header() {
  return (
    <>
      <section className='w-full bg-white sticky z-999 lg:py-6 py-5 grid lg:px-10 px-3 lg:grid-cols-[15%_auto_auto]  shadow-xl shadow-gray-400 '>
      <figure>
        <img src="https://preview.themewagon.com/organic/images/logo.svg" alt="logo" className='cursor-pointer' />
      </figure>

      <div className='flex gap-3'>
        <form className='relative'>
          <input type="text" placeholder='Search Product' className='py-2 px-8 bg-gray-200 rounded-xl  ' />
          <IoSearch className='absolute top-2.5 right-5 text-xl cursor-pointer hover:text-[#6BB252]' />
        </form>
        <div className='flex items-center lg:px-15'>
          <ul className='flex lg:gap-15 '>
            <li className='font-bold text-gray-400 cursor-pointer border-b-2 border-white transform duration-600 hover:text-[#6BB252] hover:border-b-[#6BB252] '>Home</li>
            <li className='font-bold text-gray-400 cursor-pointer border-b-2 border-white transform duration-600 hover:text-[#6BB252] hover:border-b-[#6BB252] '>About Us</li>
            <li className='font-bold text-gray-400 cursor-pointer border-b-2 border-white transform duration-600 hover:text-[#6BB252] hover:border-b-[#6BB252] '>Product</li>
            <li className='font-bold text-gray-400 cursor-pointer border-b-2 border-white transform duration-600 hover:text-[#6BB252] hover:border-b-[#6BB252] '>Contact Us</li>
          </ul>

        </div>
      </div>

      <div className='flex items-center gap-8 lg:px-4'>
          <FaRegUserCircle  className='text-2xl text-gray-400 border-b-2 border-white transform duration-400 cursor-pointer hover:text-[#6BB252] hover:border-[#6BB252]  ' />
          <FaShoppingCart className='text-2xl text-gray-400 border-b-2 border-white transform duration-400  cursor-pointer hover:text-[#6BB252] hover:border-[#6BB252] ' />
          <FaHeart className='text-2xl text-gray-400 border-b-2 border-white transform duration-400 cursor-pointer hover:text-[#6BB252] hover:border-[#6BB252] ' />


          
      </div>

      </section>

    </>
  )
}
