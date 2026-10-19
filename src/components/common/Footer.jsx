import React from 'react'
import { FaAmazon, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";


export default function Footer() {
  return (

      <section className=' bg-white lg:py-8 py-5 lg:px-10 border border-gray-300 grid lg:grid-cols-5 '>
        <div>
          <img src="https://preview.themewagon.com/organic/images/logo.svg" alt="logo" />
          <div className=' flex gap-3 mt-3  '>
            <FaFacebookF className='border border-gray-300 rounded-[5px] text-gray-400 text-4xl p-2 hover:bg-[#6BB252]  ' />
            <FaTwitter className='border border-gray-300 rounded-[5px] text-gray-400 text-4xl p-2 hover:bg-[#6BB252]  ' />
            <FaYoutube className='border border-gray-300 rounded-[5px] text-gray-400 text-4xl p-2 hover:bg-[#6BB252]  ' />
            <FaInstagram className='border border-gray-300 rounded-[5px] text-gray-400 text-4xl p-2 hover:bg-[#6BB252]  ' />
            <FaAmazon className='border border-gray-300 rounded-[5px] text-gray-400 text-4xl p-2 hover:bg-[#6BB252]  ' />


          </div>


        </div>

        <div >
          <h2 className='text-2xl font-bold hover:text-[#6BB252] '>Organic</h2>
          <ul className='mt-2 '>
            <li className='text-gray-400 mb-1 cursor-pointer hover:text-[#6BB252] '>About Us</li>
            <li className='text-gray-400 mb-1 cursor-pointer hover:text-[#6BB252] '>Product</li>
            <li className='text-gray-400 mb-1 cursor-pointer hover:text-[#6BB252] '>Contact US</li>
            <li className='text-gray-400 mb-1 cursor-pointer hover:text-[#6BB252] '>Cart</li>
          </ul>
        </div>

        <div>
          <h2 className='text-2xl font-bold hover:text-[#6BB252] '>Quick Link</h2>
          <ul className='mt-2'>
          <li className='text-gray-400 mb-1 cursor-pointer hover:text-[#6BB252] '>Offers</li>
          <li className='text-gray-400 mb-1 cursor-pointer hover:text-[#6BB252] '>Discount Coupons</li>
          <li className='text-gray-400 mb-1 cursor-pointer hover:text-[#6BB252] '>Store</li>
          <li className='text-gray-400 mb-1 cursor-pointer hover:text-[#6BB252] '>Track Order</li>
          <li className='text-gray-400 mb-1 cursor-pointer hover:text-[#6BB252] '>Shop</li>
          <li className='text-gray-400 mb-1 cursor-pointer hover:text-[#6BB252] '>Info</li>
          </ul>

        </div>

        <div > 
          <h2 className='text-2xl font-bold hover:text-[#6BB252] '>Customer Service</h2>
          <ul className='mt-2' >
            <li className='text-gray-400 mb-1 cursor-pointer hover:text-[#6BB252] '>FAQ</li>
            <li className='text-gray-400 mb-1 cursor-pointer hover:text-[#6BB252] '>Contact</li>
            <li className='text-gray-400 mb-1 cursor-pointer hover:text-[#6BB252] '>Privacy Policy</li>
            <li className='text-gray-400 mb-1 cursor-pointer hover:text-[#6BB252] '>Return & Refurnds</li>
            <li className='text-gray-400 mb-1 cursor-pointer hover:text-[#6BB252] '>Cookies Guideline</li>
            <li className='text-gray-400 mb-1 cursor-pointer hover:text-[#6BB252] '>Delevery Informtion</li>
            <li className='text-gray-400 mb-1 cursor-pointer hover:text-[#6BB252] '>About Us</li>
          </ul>
        </div>

        <div>
          <h2 className='text-2xl font-bold hover:text-[#6BB252] '>Subscribe Us</h2>
          <p className='text-gray-400 mt-2 '>Subscribe to our newsletter to get updates about our grand offers.</p>
          <form className='flex mt-3'>
            <input type="email" placeholder='Email Address' className='py-2 px-8 bg-gray-100 rounded-[8px] hover:bg-[#6BB252] hover:text-white  ' />
            <input type="submit" className='bg-black text-white rounded-[7px] p-2.5 cursor-pointer hover:bg-[#6BB252] ' />
          </form>


        </div>


      </section>


  )
}
