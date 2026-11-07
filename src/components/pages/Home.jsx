import React from 'react'
import { FaLeaf, FaRecycle, FaTractor } from 'react-icons/fa'


  


export default function Home() {
  return (
    <>

      <section className='w-full pb-5'>
        <figure className='w-full relative'>
          <img src="https://preview.themewagon.com/organic/images/banner-1.jpg" alt="" />
          <div className=' absolute w-full p-8 top-10'>
            <h1 className='text-7xl'>
              <span className=' font-bold text-[#6BB252]'>Organic</span> Foods at
              <br />
              your
              <span className='font-black'> Doorsteps</span>
            </h1>
            <p className='text-2xl text-gray-500 mt-7'>Dignissim massa diam elementum.</p>
            <div className='flex gap-6 text-xl mt-7'>
              <button className=' rounded-4xl transform cursor-pointer duration-100 hover:font-black bg-[#6BB252] text-white p-3 ' title='Shop Now'>Start Shoppin</button>
              <button className='hover:font-black transform cursor-pointer duration-100 rounded-4xl bg-black text-white p-3 ' title='Join Now'>Join Now</button>
            </div>

            <div className='flex w-[50%] gap-8 mt-10' >
              <div className='italic'>
                <h2 className='text-4xl font-bold'>14k +</h2>
                <p className='text-2xl'>Product Varieties</p>
              </div>

              <div className='italic'>
                <h2 className='text-4xl font-bold'>50k +</h2>
                <p className='text-2xl'>Happy Customer</p>
              </div>

              <div className='italic'>
                <h2 className='text-4xl font-bold'>10 +</h2>
                <p className='text-2xl'>Store Location</p>
              </div>
            </div>

            <div className=' grid grid-cols-3 mt-15'>
              <div className='text-white bg-[#6BB252] p-7 flex gap-5 items-center '>
                <figure >
                  <FaRecycle className='text-3xl' />
                </figure>
                <div>
                  <h3 className='text-2xl font-bold text-white'>Fresh from farm</h3>
                  <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                </div>
              </div>

              <div className='text-white bg-green-950 p-4 flex gap-5 items-center'>
                <figure >
                  <FaLeaf className='text-3xl' />
                </figure>
                <div>
                  <h3 className='text-2xl font-bold text-white'>100% Organic</h3>
                  <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                </div>
              </div>

              <div className='text-white bg-orange-600 p-4 flex gap-5 items-center'>
                <figure >
                  <FaTractor className='text-3xl' />
                </figure>
                <div>
                  <h3 className='text-2xl font-bold text-white'>Free delivery</h3>
                  <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                </div>
              </div>
            </div>
          </div>
        </figure>


      </section>

      <section className='py-10 '>
        <div className='px-8 mx-auto  gap-3 grid lg:grid-cols-[60%_auto] '>
          <figure className='relative'>
            <img src="https://preview.themewagon.com/organic/images/banner-ad-1.jpg" alt="img" />
            <div className='absolute top-30 left-10'>
              <h2 className='text-3xl text-white font-bold'>Items on SALE</h2>
              <p className='mt-3 mb-3 text-white'>Discounts up to 30%</p>
              <button className='text-white bg-[#6BB252] px-2 py-2 font-bold rounded-2xl cursor-pointer hover:text-[black] '>SHOP NOW</button>
            </div>
          </figure>
          <div className='grid gap-2 lg:grid-cols-1 '>
            <figure className='relative'>
              <img src="https://preview.themewagon.com/organic/images/banner-ad-2.jpg" alt="img" className='h-full' />
              <div className='absolute top-20 left-10'>
                <h2 className='text-2xl text-white font-bold'>Combo offers</h2>
                <p className='mt-3 mb-3 text-white'>Discounts up to 40%</p>
                <button className='text-white bg-[#6BB252] px-2 py-2 font-bold rounded-2xl cursor-pointer hover:text-[black] '>SHOP NOW</button>
              </div>
            </figure>
            <figure className='relative'>
              <img src="https://preview.themewagon.com/organic/images/banner-ad-3.jpg" alt="img" className='h-full' />
              <div className='absolute top-10 left-10'>
                <h2 className='text-3xl text-white font-bold'>Discount Coupons</h2>
                <p className='mt-3 mb-3 text-white'>Discounts up to 50%</p>
                <button className='text-white bg-[#6BB252] px-2 py-2 font-bold rounded-2xl cursor-pointer hover:text-[black] '>SHOP NOW</button>
              </div>
            </figure>


          </div>



        </div>



      </section>

      <section className='py-5'>
        <div className='px-8 relative'>
          <img src="https://preview.themewagon.com/organic/images/banner-newsletter.jpg" alt="" />
          <div className='absolute top-20 left-50'>
            <h2 className='text-4xl font-bold text-white'>Get 25% Discount on <br /> your first purchase</h2>
            <p className='mt-2 text-white'>Just Sign Up & Register it now to become member.</p>
          </div>
          <div className='absolute w-[600px] top-20 right-50'>
            <form >
              <input type="text" placeholder='Name' className='w-full bg-white px-3 py-2 mb-5' />
              <input type="email" placeholder='Email' className='w-full bg-white px-3 py-2 mb-4' />
              <button className='w-full text-white font-bold text-center cursor-pointer bg-black py-2'>Submit</button>


            </form>

          </div>

        </div>
      </section>

      <section className='py-10 px-5 '>
        <h2 className='text-3xl font-bold ml-5 border-b-2 pb-3 '>Our Recent Blog</h2>
        <div className='max-w-420 mx-auto grid grid-cols-3 gap-5'>

          <div className='p-4'>
            <figure>
              <img src="https://preview.themewagon.com/organic/images/post-thumbnail-1.jpg" alt="" />
            </figure>
            <div className='mt-5 p-4'>
              <h3 className='text-2xl font-bold'>Top 10 casual look ideas to dress up your kids</h3>
              <p className='text-gray-400 mt-3'>Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi...</p>
            </div>
          </div>

          <div className='p-4'>
            <figure>
              <img src="https://preview.themewagon.com/organic/images/post-thumbnail-2.jpg" alt="" />
            </figure>
            <div className='mt-5 p-4'>
              <h3 className='text-2xl font-bold'>Top 10 casual look ideas to dress up your kids</h3>
              <p className='text-gray-400 mt-3'>Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi...</p>
            </div>
          </div>

          <div className='p-4'>
            <figure>
              <img src="https://preview.themewagon.com/organic/images/post-thumbnail-2.jpg" alt="" />
            </figure>
            <div className='mt-5 p-4'>
              <h3 className='text-2xl font-bold'>Top 10 casual look ideas to dress up your kids</h3>
              <p className='text-gray-400 mt-3'>Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi...</p>
            </div>
          </div>
        </div>
      </section>

    <section className='py-10'>

    </section>

      <section className='py-10 px-8 relative'>
        <div className='bg-[#FFC107] rounded-2xl h-[350px]  '>
          <div className='absolute top-25 left-50'>
            <h2 className='font-bold text-2xl mb-2'>Download Organic App</h2>
            <p className='text-gray-400 mb-3'>Online Orders made easy, fast and reliable</p>
            <div className='flex'>
              <img src="https://preview.themewagon.com/organic/images/img-app-store.png" alt="" className='pr-4' />
              <img src="https://preview.themewagon.com/organic/images/img-google-play.png" alt="" />

            </div>
          </div>
          <figure className='absolute top-8 right-90'>
            <img src="https://preview.themewagon.com/organic/images/banner-onlineapp.png" alt="" className='w-[450px]' />
          </figure>


        </div>
      </section>

      <section className='w-full py-5'>
        <div className='max-w-330 mx-auto grid grid-cols-5 gap-5'>
          <div className='w-full border rounded-2xl p-4'>
            <figure className='py-5'>
              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHN5bWJvbCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJwYWNrYWdlIiB2aWV3Qm94PSIwIDAgNDggNDgiPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Im0yNCAxMy4yNjRsNy4yODggNC4yMUwyNCAyMS42ODFsLTcuMjg4LTQuMjA5WiI+PC9wYXRoPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0xNi43MTIgMTcuNDczdjguNDE4TDI0IDMwLjEwMWw3LjI4OC00LjIxdi04LjQxOE0yNCAzMC4xdi04LjQxOCI+PC9wYXRoPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik00MC45MDUgMjEuNDA1YTE2LjkwNSAxNi45MDUgMCAxIDAtMjMuMzg5IDE1LjYxMUwyNCA0My41bDYuNDg0LTYuNDg0YTE2LjkwNiAxNi45MDYgMCAwIDAgMTAuNDItMTUuNjExIj48L3BhdGg+PC9zeW1ib2w+PC9kZWZzPjx1c2UgaHJlZj0iI3BhY2thZ2UiPjwvdXNlPjwvc3ZnPg==" alt="" />
            </figure>
            <div>
              <h2 className='text-2xl font-bold'>Free delivery</h2>
              <p className='py-5'>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
            </div>
          </div>

          <div className='w-full border rounded-2xl p-4'>
            <figure className='py-5'>
              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHN5bWJvbCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJzZWN1cmUiIHZpZXdCb3g9IjAgMCA0OCA0OCI+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTE0LjEzNCAzNlYyMC4xMWgxOS43MzJNMTkuMjc5IDM2aDE0LjU4N1YyNS40NSI+PC9wYXRoPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Im0xOS4yNDYgMjYuNjA2bDQuMTM1IDQuMTM1bDUuMzczLTUuMzcybS04LjkzNC05LjI4MmE0LjA4NyA0LjA4NyAwIDEgMSA4LjE3NCAwbTAgMHY0LjAyM20tOC4xNzItNC4xMDh2NC4xMDgiPjwvcGF0aD48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMzAuMjg4IDQ0LjU2NmEyMS41MTYgMjEuNTE2IDAgMSAxIDkuNjktNi4xOCI+PC9wYXRoPjwvc3ltYm9sPjwvZGVmcz48dXNlIGhyZWY9IiNzZWN1cmUiPjwvdXNlPjwvc3ZnPg==" alt="" />
            </figure>
            <div>
              <h2 className='text-2xl font-bold'>100% secure payment</h2>
              <p className='py-5'>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
            </div>
          </div>

          <div className='w-full border rounded-2xl p-4'>
            <figure className='py-5'>
              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHN5bWJvbCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJxdWFsaXR5IiB2aWV3Qm94PSIwIDAgNDggNDgiPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Im0zMC41OSAxMy40NWw0Ljc3IDIuOTRMMjQgMzQuNjhsLTEwLjMzLTdsMy4xMS00LjZsNS41MiAzLjcxbDguMjYtMTMuMzhaIj48L3BhdGg+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTI0IDQuNXMtMTEuMjYgMi0xNS4yNSAydjIwYTExLjE2IDExLjE2IDAgMCAwIC44IDQuMWExNSAxNSAwIDAgMCAyIDMuNjFhMjIgMjIgMCAwIDAgMi44MSAzLjA3YTM0LjQ3IDM0LjQ3IDAgMCAwIDMgMi40OGEzNCAzNCAwIDAgMCAyLjg5IDEuODZjMSAuNTkgMS43MSAxIDIuMTMgMS4xOWwxIC40OWExLjQ0IDEuNDQgMCAwIDAgMS4yNCAwbDEtLjQ5Yy40Mi0uMiAxLjEzLS42IDIuMTMtMS4xOWEzNCAzNCAwIDAgMCAyLjg5LTEuODZhMzQuNDcgMzQuNDcgMCAwIDAgMy0yLjQ4YTIyIDIyIDAgMCAwIDIuODEtMy4wN2ExNSAxNSAwIDAgMCAyLTMuNjFhMTEuMTYgMTEuMTYgMCAwIDAgLjgtNC4xdi0yMGMtMy45OS4wMy0xNS4yNS0yLTE1LjI1LTIiPjwvcGF0aD48L3N5bWJvbD48L2RlZnM+PHVzZSBocmVmPSIjcXVhbGl0eSI+PC91c2U+PC9zdmc+" alt="" />
            </figure>
            <div>
              <h2 className='text-2xl font-bold'>Quality guarantee</h2>
              <p className='py-5'>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
            </div>
          </div>

          <div className='w-full border rounded-2xl p-4'>
            <figure className='py-5'>
              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHN5bWJvbCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJzYXZpbmdzIiB2aWV3Qm94PSIwIDAgNDggNDgiPjxjaXJjbGUgY3g9IjI0IiBjeT0iMjQiIHI9IjIxLjUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvY2lyY2xlPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0xMi41IDIzLjY4NGEzLjI5OCAzLjI5OCAwIDAgMSA1LjYzLTIuMzMybDMuMjEyIDMuMjEyaDBsOC41My04LjUzYTMuMjk4IDMuMjk4IDAgMCAxIDUuNjI4IDIuMzMzaDBjMCAuODc1LS4zNDggMS43MTQtLjk2NiAyLjMzM0wyMi45ODMgMzIuMjVhMi4zMjEgMi4zMjEgMCAwIDEtMy4yODMgMGwtNi4yMzQtNi4yMzNhMy4yOTggMy4yOTggMCAwIDEtLjk2Ni0yLjMzMyI+PC9wYXRoPjwvc3ltYm9sPjwvZGVmcz48dXNlIGhyZWY9IiNzYXZpbmdzIj48L3VzZT48L3N2Zz4=" alt="" />
            </figure>
            <div>
              <h2 className='text-2xl font-bold'>guaranteed savings</h2>
              <p className='py-5'>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
            </div>
          </div>

          <div className='w-full border rounded-2xl p-4'>
            <figure className='py-5'>
              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHN5bWJvbCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJvZmZlcnMiIHZpZXdCb3g9IjAgMCA0OCA0OCI+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0ibTQxLjU1NiAzOS4yOTdsLTIyLjAyMiAzLjExYTEuMDk3IDEuMDk3IDAgMCAxLTEuMjQ1LS45N2wtMi4zNTItMjIuMzExYTEuMDk3IDEuMDk3IDAgMCAxIDEuMDgtMS4yMTNsMjQuMjM4LS4yMjlhMS4wOTcgMS4wOTcgMCAwIDEgMS4xMDggMS4wOWwuMTM3IDE5LjQyOWMuMDA0LjU1LS40IDEuMDE3LS45NDQgMS4wOTRNMjYuMSAyNS4yNTh2Mi41NzltOC40OTQtMi43MzF2Mi4xNzUiPjwvcGF0aD48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMzQuMzQzIDMyLjM0NmMtMS40MzcuODI4LTEuOTI2IDEuMTk4LTIuNzc0IDEuOTg4Yy0xLjE5LS40NTctMi4yODQtMS4yMjgtMy43OTctMS40NTZtLTE1Ljk1MyA4LjcyMWwtMy40OS0xLjZhMS4xMiAxLjEyIDAgMCAxLS42NDMtLjg2M0w1LjUxMSAyMy41OTNjLS4wNTYtLjQuMTA4LS44LjQzLTEuMDQ2bDMuMTUtMi40MDZhMS4yNTcgMS4yNTcgMCAwIDEgMi4wMTQuODc0bDEuOTY2IDE5LjY5YS44ODcuODg3IDAgMCAxLTEuMjUyLjg5NG0xMS45ODktMjguMTEyYy4yMTQtLjQ1Ni45NjQtMS43MTYgMi43Ni0zLjYxOGMzLjEwOC0zLjMyMyA0LjI2LTQuMjg4IDQuMjYtNC4yODhzMS40Mi43NSAzLjI3IDMuMTA5YzEuODc2IDIuMzU4IDEuOTMgMy44MzIgMS45MyAzLjgzMnMuNjctLjA4LTQuNzk3IDEuNjg4Yy0zLjA1NS45OTEtNC4zNjggMS4xNTItNC45MzEgMS4xNTIiPjwvcGF0aD48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMjYuOTcgMTcuODI4di0uMDU0YzAtLjg4NC0uMjQxLTEuNzE1LS42Ny0yLjQxMmMtLjU2My0uOTEtMS40NDctMS42MDgtMi40OTItMS44NzZhMy41OCAzLjU4IDAgMCAwLTEuMDcyLS4xNmMtLjQyOSAwLS44NTguMDUzLTEuMjMzLjIxNGMtMS4xNTIuMzQ4LTIuMDYzIDEuMTgtMi41NzMgMi4yNzhhNC43NDcgNC43NDcgMCAwIDAtLjQyOCAxLjk1NnYuMTM0Ij48L3BhdGg+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTE4LjkzIDE1LjgxOGMtLjU2Mi0uMTA3LTEuNS0uMzQ5LTMuMTM1LS44ODRjLTIuMzA0LS43NS0zLjQzLTEuNTI4LTMuNDMtMS41MjhzLS40NTYtMS4zOTMgMS4wNDUtMy4yOTZzMi42NTMtMi41MiAyLjY1My0yLjUycy45MTEuNzc4IDMuNDMgMy40ODVjMS4yNiAxLjMxMyAxLjc5NiAyLjA5IDIuMDEgMi40NjVoLjAyNyI+PC9wYXRoPjwvc3ltYm9sPjwvZGVmcz48dXNlIGhyZWY9IiNvZmZlcnMiPjwvdXNlPjwvc3ZnPg==" alt="" />
            </figure>
            <div>
              <h2 className='text-2xl font-bold'>Daily offers</h2>
              <p className='py-5'>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
            </div>
          </div>

        </div>
      </section>


    </>
  )
}
