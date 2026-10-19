import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import MainLayout from './components/common/MainLayout.jsx'
import Home from './components/pages/Home.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}  >
          <Route path='/' element={<Home />} />






        </Route>
      </Routes>




    </BrowserRouter>



)
