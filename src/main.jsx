import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import MainLayout from './components/common/MainLayout.jsx'
import Home from './components/pages/Home.jsx'
import Contact from './components/pages/Contact.jsx'
import AboutUs from './components/pages/About.jsx'
import Login from './components/pages/Login.jsx'
import Products from './components/pages/Product.jsx'
import ShoppingCart from './components/pages/Shoppingcart.jsx'
import MainContext from './components/context/MainContext.jsx'
import ProductsDetails from './components/pages/ProductsDetails.jsx'

createRoot(document.getElementById('root')).render(

  <MainContext>
 <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />}  >
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/product' element={<Products />} />
        <Route path='/shoppingcart' element={<ShoppingCart />} />
        <Route path='/products/:pid' element={<ProductsDetails />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/login' element={<Login />} />




      </Route>
    </Routes>





  </BrowserRouter>
  </MainContext>
 


)
