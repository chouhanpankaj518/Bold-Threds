import React, { useState,useEffect } from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { IoIosMenu } from 'react-icons/io';
import { IoIosSearch } from "react-icons/io";
import { IoIosClose } from 'react-icons/io';
import IND from "../assets/ind.png";
import logo from "../assets/bold thread.png"
import {Link} from "react-router-dom"
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Navbar() {

  useEffect(() => {
    AOS.init({
      duration: 1200, 
     
    });
  }, []);

  let [isopen , setisopen]=useState(false)

  const addTogglebtn=()=>{
     setisopen(!isopen)
  }

  

 
  return (
    <div className="nav-container md-auto   text-xl  flex justify-center align-middle ">
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
      <nav className="   flex justify-around flex-col ">

        <div className="nav1-container ml-[-100px] mr-[-200px]  flex justify-between align-middle">
          
          <div  className="location-icon  flex items-center justify-center space-x-4 mb-4 md:mb-0 ">
            <IoLocationSharp className={` text-black text-3xl  xl:block ${isopen ? "block" : "hidden"}`} />
 
 <div className="flex justify-center bg-transparent mx-auto">
  <img
    src={IND}
    alt="Indian Flag"
    className={`  w-10 h-8 mr-2 rounded-full size-10 bg-transparent xl:block ${isopen ? "block" : "hidden"}`}
  />
  <div className="relative">
     <select
      className={` appearance-none bg-transparent text-gray-700 font-semibold py-2 pl-3 pr-8 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent xl:block ${isopen ? "block" : "hidden"} `}
      style={{
        backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3Csvg  xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7' /%3E%3C/svg%3E")`,
        backgroundPosition: "right 0.5rem center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "1rem",
      }}
    >
         
          <option value="english" className="py-1">English</option>
          <option value="hindi" className="py-1">Hindi</option>
        </select>
  </div>
</div>
          </div>


          <div className='size-32'>
            {/* <h1 className='logo text-5xl'>Logo</h1> */}
            <img src={logo} alt="logo" className='logo size30 text-black'  />
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
      <BsCart2 className="text-gray-600 cursor-pointer hover:text-blue-500" size={35} />
      <BsPerson className="text-gray-600  cursor-pointer hover:text-blue-500" size={35} />
    </div>
        </div>
      {/* <div className={`navlink px-4 py-2 mt-10 font-semibold w-full gap-12 bottom-10 bg-transparent transition-all duration-500 ease-in-out`}>
        <div className={`container flex flex-col md:flex-row items-center space-y-5 md:space-y-0 md:space-x-20 mt-4 md:mt-0 ${isopen ? "block " : "hidden"} md:block `}> */}
          <div  className={`navlink   w-full bg-transparent transition-all duration-500 ease-in-out   xl:pb-10`}
            style={{ maxHeight: isopen ? "1000px" : "0", overflow: "hidden" }} >
          <div data-aos="flip-left" className="container flex flex-col md:flex-row items-center space-y-5 md:space-y-0 md:space-x-20  text-1xl xl:w-full w-96 mx-aoto">
          <Link  to="/" className="nav-underline ">Home</Link>
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