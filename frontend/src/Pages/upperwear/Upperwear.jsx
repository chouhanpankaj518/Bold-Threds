import React from 'react'
import { Link } from 'react-router-dom'
export default function upperwear() {
  return (
    <div>
    <div data-aos="zoom-in" className='flex justify-center align-middle gap-20 w-full bg-transparent font-semibold  p-5'> 
     <Link to={"/Tshirt"}>T Shirt</Link>
     <Link to={"/Shirt"}>Shirt</Link>
     <Link to={"/Hoodie"}>Hoodie</Link>
     <Link to={"/Sweatshirt"}>Sweatshirt</Link>
      </div>
    </div>
  )
}

