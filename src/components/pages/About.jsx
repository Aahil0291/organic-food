import React from 'react'
import { FaCheck } from "react-icons/fa";
import { Link } from 'react-router';



export default function AboutUs() {
    return (
        <>
        
            <section className=" py-10">

                <div className="max-w-[1320px] mx-auto grid grid-cols-2 gap-5 px-2 items-center">

                    <article className=" p-4 pl-[150px]">

                        <h1 className="text-4xl text-[#101828] font-extrabold ">100% Pure & Fresh <br />to <span className="text-4xl text-[#text-4xl text-[#6BB252] font-extrabold] font-extrabold">Organic Goodness.</span></h1>
                        <p className="text-gray-400 py-7">Hum khet se seedhe aapke ghar tak 100% chemical-free, taaze aur prakritik (natural) products pahunchate hain, taaki aap aur aapki family hamesha healthy rahein.n easier to build beautiful websites that</p>

                        <div className="flex gap-4">

                            <button className="bg-[#6BB252] py-2.5 px-8 cursor-pointer text-white rounded-[10px]">Order Now</button>
                            <Link to={"/Contact-US"}>
                            <button className="bg-[#6BB252] py-2.5 px-8 cursor-pointer text-white rounded-[10px]">Contact-Us</button></Link>

                        </div>



                    </article>
                    <figure>
                        <img src="https://preview.themewagon.com/organic/images/banner-ad-1.jpg" />
                    </figure>

                </div>



            </section>

            <section className=" py-5">

                <div className="max-w-[1320px] mx-auto grid grid-cols-2 gap-5 px-2 items-center">


                    <figure>
                        <img src="https://preview.themewagon.com/organic/images/banner-ad-2.jpg" className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 " />
                    </figure>

                    <article className=" p-4 pl-20">

                        <h1 className="text-4xl font-bold">100% Chemical-Free & Pure</h1>
                        <p className="text-gray-400 py-5">Hamare saare products bina kisi harmful pesticides, chemicals ya artificial preservatives ke ugaye aur taiyar kiye jaate hain..</p>

                        <ul className="leading-6">
                            <li className="flex py-1.5 items-center gap-2 text-gray-500"><span className="rounded-[50%] bg-green-600 text-white font-bold p-1.5"><FaCheck /></span>Certified Organic Farming</li>
                            <li className="flex  py-1.5 items-center gap-2 text-gray-500"><span className="rounded-[50%] bg-green-600 text-white font-bold p-1.5"><FaCheck /></span>Zero Artificial Colors or Preservatives</li>
                            <li className="flex py-1.5 items-center gap-2 text-gray-500"><span className="rounded-[50%] bg-green-600 text-white font-bold p-1.5"><FaCheck /></span>Rich in Natural Nutrients & Taste</li>

                        </ul>

                    </article>


                </div>



            </section>

            <section className=" py-5">

                <div className="max-w-[1320px] mx-auto grid grid-cols-2 gap-5 px-2 items-center">

                    <article className=" p-4 pl-[150px]">

                        <h1 className="text-4xl font-bold">Pure quality you can trust for your family!</h1>
                        <p className="text-gray-400 py-5">Aapki sehat hamari sabse badi priority hai. Isliye har product aap tak pahunchne se pehle in steps se guzarta hai:.</p>

                        <ul className="leading-6">
                            <li className="flex py-1.5 items-center gap-2 text-gray-500"><span className="rounded-[50%] bg-green-600 text-white font-bold p-1.5"><FaCheck /></span>Superfast & Hygienic Home Delivery</li>
                            <li className="flex py-1.5 items-center gap-2 text-gray-500"><span className="rounded-[50%] bg-green-600 text-white font-bold p-1.5"><FaCheck /></span> 3-Step Strict Quality & Lab Testing</li>
                            <li className="flex py-1.5 items-center gap-2 text-gray-500"><span className="rounded-[50%] bg-green-600 text-white font-bold p-1.5"><FaCheck /></span> 100% Freshness Guarantee & Easy Returns</li>

                        </ul>

                    </article>

                    <figure>
                        <img src="https://preview.themewagon.com/organic/images/banner-ad-3.jpg" className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 " />
                    </figure>

                </div>





            </section>

            <section className=" py-5 bg-[#F9FAFB]">

                <div className="max-w-[1320px] mx-auto grid grid-cols-2 gap-5 px-2 items-center">

                    <article className=" p-4 pl-[150px]">

                        <h1 className="text-4xl font-bold">Helping families switch to a healthier organic lifestyle !</h1>
                        <p className="text-gray-400 py-5">It's never been easier to build a business of your own. Our tools <br />will help you with the following:</p>

                        <ul className="leading-6">
                            <li className="flex py-1.5 items-center gap-2 text-gray-500"><span className="rounded-[50%] bg-green-600 text-white font-bold p-1.5"><FaCheck /></span>Faster Processing and Delivery</li>
                            <li className="flex py-1.5 items-center gap-2 text-gray-500"><span className="rounded-[50%] bg-green-600 text-white font-bold p-1.5"><FaCheck /></span> Out of the Box Tracking and Monitoring</li>
                            <li className="flex py-1.5 items-center gap-2 text-gray-500"><span className="rounded-[50%] bg-green-600 text-white font-bold p-1.5"><FaCheck /></span> 100% Protection and Security for Your App</li>

                        </ul>

                    </article>

                    <figure>
                        <img src="https://preview.themewagon.com/organic/images/post-thumbnail-3.jpg" className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 " />
                    </figure>

                </div>





            </section>

            <section className="py-[150px]">

                <h2 className="text-center text-2xl font-bold text-[#6BB252]">Don't just take our word for it</h2>
                <h1 className="text-5xl font-bold text-center">See what others are saying</h1>

                <div className="max-w-[1320px] mx-auto grid grid-cols-3  mt-10">

                    <div className="border-r-1 pl-11">
                        <div className="flex items-center ">
                            <figure><img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1700&q=80" alt="" className=" p-2 w-[70px] h-[70px] rounded-[50%]" /></figure>
                            <article>
                                <h4 className="font-bold">rehan Abbasi</h4>
                                <p>Verified Buyer (Homemaker)</p>
                            </article>
                        </div>
                        <p className="text-[18px] text-gray-500">"This is a no-brainer if you want to take your <br /> business to the next level. If you are looking for <br />the ultimate toolset, this is it!"</p>
                    </div>

                    <div className="border-r-1 pl-11">
                        <div className="flex items-center ">
                            <figure><img src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2547&q=80" alt="" className=" p-2 w-[70px] h-[70px] rounded-[50%]" /></figure>
                            <article>
                                <h4 className="font-bold">Anjali Gupta</h4>
                                <p>Regular Customer</p>
                            </article>
                        </div>
                        <p className="text-[18px] text-gray-500">"This is a no-brainer if you want to take your <br /> business to the next level. If you are looking for <br />the ultimate toolset, this is it!"</p>
                    </div>

                    <div className=" pl-11">
                        <div className="flex items-center ">
                            <figure><img src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1256&q=80https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1256&q=80" alt="" className=" p-2 w-[70px] h-[70px] rounded-[50%]" /></figure>
                            <article>
                                <h4 className="font-bold">Sezan khan</h4>
                                <p>Fitness Coach</p>
                            </article>
                        </div>
                        <p className="text-[18px] text-gray-500">"This is a no-brainer if you want to take your <br /> business to the next level. If you are looking for <br />the ultimate toolset, this is it!"</p>
                    </div>





                </div>

            </section>
        

        </>
    )
}