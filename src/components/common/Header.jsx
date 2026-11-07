import React, { useContext } from 'react'
import { IoSearch } from "react-icons/io5";
import { FaRegUserCircle, FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { Link } from 'react-router';
import { cartcontext } from '../context/MainContext';





export default function Header() {

  let {cart}=useContext(cartcontext)
  return (
    <>
      <section className='w-full bg-white top-0 sticky z-999 lg:py-6 py-5 grid lg:px-10 px-3 lg:grid-cols-[15%_auto_auto]  shadow-xl shadow-gray-500 '>
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
              <Link to={"/"}>
                <li className='font-bold text-gray-400 cursor-pointer border-b-2 border-white transform duration-600 hover:text-[#6BB252] hover:border-b-[#6BB252] '>Home</li>
              </Link>
              <Link to={"/about-us"}>
                <li className='font-bold text-gray-400 cursor-pointer border-b-2 border-white transform duration-600 hover:text-[#6BB252] hover:border-b-[#6BB252] '>About Us</li>
              </Link>
              <Link to={"/product"}>
                <li className='font-bold text-gray-400 cursor-pointer border-b-2 border-white transform duration-600 hover:text-[#6BB252] hover:border-b-[#6BB252] '>Product</li>
              </Link>
              <Link to={"/contact-us"}>
                <li className='font-bold text-gray-400 cursor-pointer border-b-2 border-white transform duration-600 hover:text-[#6BB252] hover:border-b-[#6BB252] '>Contact Us</li>
              </Link>
            </ul>

          </div>
        </div>

        <div className='flex items-center gap-8 lg:px-4'>
          <Link to={"/login"}>
          <FaRegUserCircle className='text-2xl text-gray-400 border-b-2 border-white transform duration-400 cursor-pointer hover:text-[#6BB252] hover:border-[#6BB252]  ' />
          </Link>
          <Link  className='flex text-gray-400' to={'/shoppingcart'}><FaShoppingCart className='text-2xl text-gray-400 border-b-2 border-white transform duration-400  cursor-pointer hover:text-[#6BB252] hover:border-[#6BB252] ' />{cart.length}</Link>
          
          <FaHeart className='text-2xl text-gray-400 border-b-2 border-white transform duration-400 cursor-pointer hover:text-[#6BB252] hover:border-[#6BB252] ' />



        </div>

      </section>

    </>
  )
}
