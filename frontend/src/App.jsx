import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import "./App.css"
import Home from './Pages/Home'
import NewArrivals from './Pages/NewArrivals'
import Trending from './Pages/Trending'
import Customized from './Pages/Customized'
import Upperwear from './Pages/upperwear'
import Bottomwear from './Pages/Bottomwear'
import Seasonals from './Pages/Seasonals'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/new-arrivals' element={<NewArrivals/>}/>
        <Route path='/trending' element={<Trending/>}/>
        <Route path="/customized" element={<Customized/>}/>
        <Route path='/upper-wear' element={<Upperwear/>}/>
        <Route path='/bottom-wear' element={<Bottomwear/>}/>
        <Route path='/seasonals' element={<Seasonals/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  )
}
