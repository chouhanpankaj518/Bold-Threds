import React, { useState } from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { IoIosMenu } from 'react-icons/io';
import { IoIosSearch } from "react-icons/io";
import { IoIosClose } from 'react-icons/io';
import IND from "../assets/ind.png";
import {Link} from "react-router-dom"
import { useRef } from 'react';


export default function Navbar() {
  let elements = useRef(null)

  let [isopen , setisopen]=useState(false)

  const addTogglebtn=()=>{
     setisopen(!isopen)
  }

  

 
  return (
    <div className="nav-container md-auto bg-white #003D36 shadow-md flex justify-between align-middle ">
      <button
            className="toggle-btn block md:hidden text-gray-500  hover:text-gray-600 focus:outline-none focus:text-gray-600"
            onClick={addTogglebtn}
          >
             {isopen ? (
          <IoIosClose className='text-3xl'/> 
        ) : (
          <IoIosMenu className='text-3xl'/> 
        )}
          </button>
      <nav className=" px-4 py-3 flex justify-center flex-col ml-32">
      {/* md:flex-row justify-between items-center   flex-col md:flex-row */}
        <div className="nav1-container ml-[-100px] mr-[-200px]  flex justify-between align-middle">
          
          <div  className="location-icon  flex items-center space-x-4 mb-4 md:mb-0">
            <IoLocationSharp className=" text-black text-3xl" />
 
 <div className="flex justify-center bg-transparent">
  <img
    src={IND}
    alt="Indian Flag"
    className="  w-10 h-8 mr-2 rounded-full size-10 bg-transparent"
  />
  <div className="relative">
    <select
      className=" appearance-none bg-transparent border border-transparent focus:outline-none w-8 h-full"
      style={{
        backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3Csvg  xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7' /%3E%3C/svg%3E")`,
        backgroundPosition: "right 0.5rem center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "1rem",
      }}
    >
      <option hidden></option>
      <option>option1</option>
    </select>
  </div>
</div>
          </div>


          <div className="text-xl font-bold mb-4 md:mb-0">
            <h1 className='logo text-5xl'>Logo</h1>
          </div>
          <div className="flex items-center space-x-4">
      <div className="relative flex-grow">
        <input
          type="text"
          className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search by product"
        />
        <IoIosSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      </div>
      <BsCart2 className="text-gray-600 cursor-pointer hover:text-blue-500" size={30} />
      <BsPerson className="text-gray-600  cursor-pointer hover:text-blue-500" size={30} />
    </div>
        </div>
      <div className={`px-4 py-2 mt-10 font-semibold w-full gap-12 bottom-10 bg-transparent`}>
        <div  className={`container flex flex-col md:flex-row items-center space-y-5 md:space-y-0 md:space-x-20 mt-4 md:mt-0 ${isopen ? "block" : "hidden"} md:block`}>
          <Link to="/" className="nav-underline">Home</Link>
          <Link to="/new-arrivals" className="nav-underline">New Arrivals</Link>
          <Link to="/trending" className="nav-underline">Trending</Link>
          <Link to="/customized" className="nav-underline">Customized</Link>
          <Link to="/upper-wear" className="nav-underline">Upper Wear</Link>
          <Link to="/bottom-wear" className="nav-underline">Bottom Wear</Link>
          <Link to="/seasonals" className="nav-underline">Seasonals</Link>
        </div>
      </div>
      </nav>
    </div>
  );
}