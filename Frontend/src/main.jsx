import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Homepage from './landing_page/home/homepage.jsx';
import Signuppage from './landing_page/signup/signup.jsx';
import Aboutpage from './landing_page/about/aboutpage.jsx';
import Pricingpage from './landing_page/pricing/pricingpage.jsx';
import Productspage from './landing_page/products/productspage.jsx';
import Supportpage from './landing_page/support/supportpage.jsx';
import Navbar from './landing_page/navbar.jsx';
import Fotter from './landing_page/fotter.jsx';
import Errorpage from './landing_page/errorpage.jsx';
import Loginpage from './landing_page/login/login.jsx';
import { ToastContainer } from "react-toastify";
import {BrowserRouter,Routes,Route} from 'react-router-dom';


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
       <Navbar/>
       <ToastContainer
        position="top-right"
        autoClose={3000}
      />
       <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/Signup" element={<Signuppage/>}/>
          <Route path="/About" element={<Aboutpage/>}/>
          <Route path="/Pricing" element={<Pricingpage/>}/>
          <Route path="/Products" element={<Productspage/>}/>
          <Route path="/Support" element={<Supportpage/>}/>
          <Route path="/login" element={<Loginpage/>}/>
          <Route path="*" element={<Errorpage/>}/>
       </Routes>
       <Fotter/>
    </BrowserRouter>
)
