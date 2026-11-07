import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { data } from 'react-router'
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic-light-dark.css';
import ProductCart from '../common/ProductCard';

export default function Products() {
    let [getproduct, setGetProduct] = useState([])
    let [loading, setLoading] = useState(true)

    let [currentpage, setCurrenPage] = useState(1)
    let [totalpages, setTotalPages] = useState(0)
    let getapiproduct = () => {
        setLoading(true)
        axios.get('https://wscubetech.co/ecommerce-api/products.php', {
            params: {
                categories: getcheckedcategory.join(','),
                page: currentpage
            }
        })
            .then((res) => {
                setGetProduct(res.data.data);
                setTotalPages(res.data.total_pages)

                setLoading(false)

            })

            window.scrollTo({
                top:0,
                behavior:'smooth'
            })

    }



    let [getcategory, setGetCategory] = useState([])
    let categoryapi = () => {
        axios.get('https://wscubetech.co/ecommerce-api/categories.php')
            .then((res) => {
                setGetCategory(res.data.data);

            })
    }



    useEffect(() => {
        categoryapi()
    }, [])

    let [getcheckedcategory, setCheckedCategory] = useState([])

    let checkbox = (event) => {
        let slug = event.target.value

        if (event.target.checked) {
            setCheckedCategory([...getcheckedcategory, slug])

        } else {
            setCheckedCategory(getcheckedcategory.filter((s) => s !== slug))
        }

    }

    useEffect(() => {
        getapiproduct()
    }, [getcheckedcategory, currentpage])

    console.log(getcheckedcategory);

    let category=getcategory.filter((cat)=>{

         return cat.name!='Fragrances'

         
         
    })




    return (
        <>
            <section className='w-full py-8 '>
                <h1 className='text-4xl font-bold pb-5 text-[green] ms-90'>Our Products</h1>
                <div className='max-w-[1320px] mx-auto grid grid-cols-[20%_auto] gap-5'>
                    <div    >
                        <h1 className='text-4xl font-bold'>Arrivals</h1>
                        <ul className='mt-5'>
                            <li className='text-2xl  border-b pb-3' >Categories</li>

                            <ul>
                                {
                                    category.map((value) => {
                                        return (
                                            
                                            <li className='text-xl mt-2 ' onClick={checkbox} type='checkbox'  ><input onClick={checkbox} type="checkbox" name="" id="" value={value.slug} />{value.name}</li>
                                        )
                                    })
                                }
                            </ul>



                        </ul>
                    </div>
                    {

                        loading ? <div role="status">
                            <svg
                                aria-hidden="true"
                                className=" w-50 ms-80 mt-50 text-neutral-tertiary animate-spin fill-brand mx-auto "
                                viewBox="0 0 100 101 "
                                fill="blue"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentFill"
                                />
                            </svg>
                            <span className="sr-only">Loading...</span>
                        </div> : <div className=' bg-linear-to-r from-[#9cc5a9] to-[#276749] px-8 py-8 grid grid-cols-3 gap-5  '>
                            {
                                getproduct.map((obj, ind) => {
                                    return (
                                        <ProductCart pdata={obj} />
                                    )
                                })
                            }

                        </div>


                    }

                    <div className=' ms-[250%]'>

                        <ResponsivePagination
                            current={currentpage}
                            total={totalpages}
                            onPageChange={setCurrenPage}
                        />
                    </div>

                </div>

            </section>
        </>
    )
}
