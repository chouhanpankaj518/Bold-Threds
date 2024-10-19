import React from 'react'
import { IoLogoFacebook, IoLogoLinkedin } from "react-icons/io";
import { FaSquareTwitter, FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full bg-[#696969] text-white">
      <div className="container mx-auto px-4 py-8 md:py-10  h-fit ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 ">


          <div>
            <h3 className="text-xl font-bold ">Products</h3>
            <ul className="text-sm space-y-2 mt-5">
              <li><a href="/new-arrivals" className="hover:text-gray-300 transition-colors">New Arrival</a></li>
              <li><a href="/seasonals" className="hover:text-gray-300 transition-colors">Seasonals</a></li>
              <li><a href="/trending" className="hover:text-gray-300 transition-colors">Trending</a></li>
              <li><a href="/upper-wear" className="hover:text-gray-300 transition-colors">Upper Wear</a></li>
              <li><a href="/bottom-wear" className="hover:text-gray-300 transition-colors">Bottom Wear</a></li>
            </ul>
          </div>


          <div>
            <h3 className="text-xl font-bold mb-4">About</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-gray-300 transition-colors">History</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Philosophy</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Store</a></li>
            </ul>
          </div>
          

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-sm mb-2">boltthreads@gmail.com</p>
            <p className="text-sm mb-2">Phone: (123) 456-7890</p>
            <p className="text-sm mb-4">India</p>
            <div className='flex gap-4'>
              <a href="#" className="text-white hover:text-gray-300 transition-colors"><IoLogoFacebook className='text-2xl'/></a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors"><IoLogoLinkedin className='text-2xl'/></a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors"><FaSquareTwitter className='text-2xl'/></a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors"><FaInstagram className='text-2xl'/></a>
            </div>
          </div>

       
     

  
    

          <div>
           <div className='p-5 px-10 rounded-md border-3 border-black bg-white text-black'>
            <h3 className="text-lg  mb-4 font-thin">Explore Customization</h3>
           <form className="space-y-4">
              <div>
                <label htmlFor='email' className="block text-sm mb-1 text-slate-500">Email</label>
                <input type='email' id="email" placeholder='Enter Email' className="w-full px-3 py-2 border-2  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="contact" className="block text-sm mb-1 text-slate-500">Contact no</label>
                <input type='tel' id="contact" placeholder='Enter Contact no' className="w-full px-3 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor='whatsapp' className="block text-sm mb-1 text-slate-500">WhatsApp no</label>
                <input type='tel' id="whatsapp" placeholder='Enter WhatsApp no' className="w-full px-3 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor='message' className="block text-sm mb-1 text-slate-500">Message</label>
                <textarea id="message" placeholder='Enter Message' rows="3" className="w-full px-3 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              </div>
              <div>
                <input type='file' className="block w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700" />
              </div>
              <div className="flex space-x-4">
                <button type='submit' className='px-6 py-1 bg-blue-600 text-white rounded'>Submit</button>
                <button type='reset' className="px-6 py-1 bg-red-600 text-white rounded">Clear</button>
              </div>
            </form>
           </div>
          </div>

          <div className="footerbox mt-20">
        <h1 className='text-3xl'>Get In Touch</h1>
        <h1 className='text-3xl font-semibold mt-5 space-x-2'>Join Our Newsletter</h1>
        <form className='flex gap-10 mt-10 space-x-3'>
          <input type='email' placeholder='your Email' className=' border-2 border-white py-2  px-7 rounded-md bg-transparent' />
          <button className='bg-white rounded-full py-2 px-7 text-black'>Subscribe</button>
        </form>
       </div>

        </div>
      </div>
    </footer>
  )
}