import React from 'react'

export default function Login() {
    return (
        <>
            <section className='w-full h-screen relative bg-linear-to-br from-[#E4F5C8] via-[#A8C686] to-[#174D32]'>
                <div className='w-120 mx-auto absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 rounded-2xl p-4 bg-white'>
                    <form action="" className='w-full'>
                        <h4 className='text-[#1e3b13] text-3xl font-black'>Login</h4>
                        <div className='w-full mt-4'>
                            <label htmlFor="" className='text-xl font-bold'>Name</label>
                            <input type="text" placeholder='Enter Your Name...' className=' border-2 border-[#1e3b13] p-3 w-full mt-1 text-xl font-bold rounded-xl' title='Enter Name...' required/>
                        </div>

                        <div className='w-full mt-4'>
                            <label htmlFor="" className='text-xl font-bold'>Phone</label>
                            <input type="number" placeholder='Enter Your Email...' className='border-2 border-[#1e3b13] p-3 rounded-xl w-full mt-1 text-xl font-bold' title='Enter Email...' required />
                        </div>

                        <div className='w-full mt-4'>
                            <label htmlFor="" className='text-xl font-bold'>Email</label>
                            <input type="email" placeholder='Enter Your Email...' className='border-2 rounded-xl border-[#1e3b13] p-3 w-full mt-1 text-xl font-bold' title='Enter Email...' required />
                        </div>

                        <div className='w-full mt-4'>
                            <label htmlFor="" className='text-xl font-bold'>Message</label>
                            <textarea  type="email" placeholder='Enter Your Message...' className='border-2 border-[#1e3b13] rounded-xl p-3 w-full mt-1 text-xl font-bold h-30' title='Enter Message...' required />
                        </div>

                        

                        <div className='w-full mt-4'>
                            <button className='bg-[#1e3b13] px-8 py-3 text-white font-bold rounded-2xl cursor-pointer'>Login</button>
                        </div>
                    </form>
                </div>
            </section>

        </>
    )
}