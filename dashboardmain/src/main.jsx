import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/home';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home/>}></Route>
      </Routes>
  </BrowserRouter>
)
