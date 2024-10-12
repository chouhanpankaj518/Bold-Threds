import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import "./App.css"
import Home from './Pages/Home'
import NewArrivals from './Pages/NewArrivals'
import Trending from './Pages/Trending'
import Customized from './Pages/Customized'
import Upperwear from './Pages/upperwear/Upperwear'
import Bottomwear from './Pages/Bottomwear'
import Seasonals from './Pages/Seasonals'
import Tshirt from './Pages/upperwear/Tshirt'
import Shirt from './Pages/upperwear/Shirt'
import Hoodie from './Pages/upperwear/Hoodie'
import Sweatshirt from './Pages/upperwear/Sweatshirt'
import Footer from './components/Footer'



export default function App() {
  const [showcard , setshowcard] = useState([])
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home setshowcard={setshowcard}/>}/>
        <Route path='/new-arrivals' element={<NewArrivals/>}/>
        <Route path='/trending' element={<Trending/>}/>
        <Route path="/customized" element={<Customized  showcard={showcard}/>}/>
        <Route path='/bottom-wear' element={<Bottomwear/>}/>
        <Route path='/seasonals' element={<Seasonals/>}/>

          {/* Nested Routes for Upper Wear */}
          <Route path='/upper-wear' element={<Upperwear />}/>
          <Route path='/Tshirt' element={<Tshirt/>}/>
          <Route path='/Shirt' element={<Shirt/>}/>
          <Route path='/Hoodie' element={<Hoodie/>}/>
          <Route path='/Sweatshirt' element={<Sweatshirt/>}/>
          
    
      </Routes>
      <Footer/>
      </BrowserRouter>
     
    </div>
  )
}
