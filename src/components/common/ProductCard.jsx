import React, { useContext } from 'react'
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from 'react-router';
import { cartcontext } from '../context/MainContext';

export default function ProductCart({ pdata }) {

    let {cart,setcart} = useContext(cartcontext)

    let { id, image, price, } = pdata

    

    let AddCart = () => {
        let cartobj = {
            id,
            image,
            price,
            qnt: 1
        }

        setcart([cartobj, ...cart])


    }

    let DeleteCart = () => {
        setcart(cart.filter((obj) => obj.id != id))
    }

    let cartstop = cart.find((obj) => obj.id == id)



    return (
        <>



            <div className='  rounded-[12px]  py-5 bg-white text-black shadow-lg '>
                <img className='mb-3 rounded-[12px] mx-auto' src={pdata.image} alt="" />
                <div className='px-5'>
                    <Link to={`/products/${pdata.id}`}> <h2 className='text-2xl mb-2'> {pdata.name} </h2></Link>
                    <p className='font-bold text-xl mb-2'>${pdata.price}</p>
                    <p>{pdata.description}</p>

                    {
                        cartstop ? <button className='border p-3 mt-5 rounded-[12px] font-bold flex items-center gap-2 hover:bg-[red] hover:text-white duration-500 cursor-pointer ' title='Remove to Cart' onClick={DeleteCart}> <FaCartArrowDown />
                            Remove to Cart</button> : <button className='border p-3 mt-5 rounded-[12px] font-bold flex items-center gap-2 hover:bg-[green] hover:text-white duration-500 cursor-pointer ' title='Add to Cart' onClick={AddCart}> <FaCartArrowDown />
                            Add to Cart</button>
                    }

                </div>
            </div>


        </>
    )
}
