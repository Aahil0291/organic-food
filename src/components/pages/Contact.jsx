import React from 'react'

export default function Contact() {
    return (
        <>
            <section className=' lg:pt-8 '>
                <div className='w-[960px]  mx-auto p-5 grid lg:grid-cols-2 '>
                    <figure className='relative'>
                        <h2 className='absolute font-extrabold text-3xl text-white left-5 top-3'>Contact-Us</h2>
                        <img src="https://images.pexels.com/photos/7682337/pexels-photo-7682337.jpeg?cs=tinysrgb&dpr=1&w=500" alt="img" className='h-[70vh] rounded-2xl w-full ' />
                    </figure>
                    <div className='bg-[#b9b9b93c] rounded-2xl'>
                        <h1 className='text-3xl font-bold text-[#6BB252] text-center border-b-2 transform mt-3 duration-500 border-[#ede4e43c] hover:border-[#6BB252] '>Send Us A Message</h1>
                        <form className='px-8 mt-4'>
                            <input type="text" placeholder='Name' className='py-2 w-full  rounded-2xl px-3 bg-white font-bold mb-5 ' />
                            <input type="Email" placeholder='Email' className='py-2 w-full  rounded-2xl px-3 bg-white font-bold mb-5 ' />
                            <input type="tel" placeholder='number' className='py-2 w-full  rounded-2xl px-3 bg-white font-bold mb-5 ' />
                            <input type="text" placeholder='Message' className='py-2 w-full  rounded-2xl px-3 bg-white font-bold mb-5 ' />
                            <input type="submit" placeholder='Submit' className='py-2 w-full cursor-pointer text-white  rounded-2xl px-3 bg-[#6BB252] font-bold mb-5 hover:bg-black ' />





                        </form>

                    </div>

                </div>


            </section>



        </>
    )
}
