import React from 'react'
import { Link } from 'react-router-dom'
export default function upperwear() {
  return (
    <div>
    <div className='flex justify-center align-middle gap-20 mt-2 w-full bg-blue-950 text-yellow-50 p-5'> 
     <Link to={"/Tshirt"}>T Shirt</Link>
     <Link to={"/Shirt"}>Shirt</Link>
     <Link to={"/Hoodie"}>Hoodie</Link>
     <Link to={"/Sweatshirt"}>Sweatshirt</Link>
      </div>
    </div>
  )
}

