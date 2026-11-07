import React, { createContext, useEffect, useState, } from 'react'
export let cartcontext = createContext()

export default function MainContext({ children }) {

    let [cart, setcart] = useState(localStorage.getItem("CART") ?
        JSON.parse(localStorage.getItem("CART")) : []
    )


    useEffect(() => {
        localStorage.setItem('CART', JSON.stringify(cart))
    }, [cart])

    let obj={cart,setcart}

    return (
        <cartcontext.Provider value={obj}>
            {children}
        </cartcontext.Provider>
    )
}
