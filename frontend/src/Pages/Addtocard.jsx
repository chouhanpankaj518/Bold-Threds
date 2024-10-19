import React, { useContext } from 'react';
import { Global } from './NewArrivals';

export default function Addtocard() {
  const  data  = useContext(Global); // Destructure the context value

  return (
    <div>
    
    <h1>Add to Card</h1>
    <h1>Add to Card</h1>
    <h1>Add to Card</h1>
    <h1>Add to Card</h1>
    <h1>Add to Card</h1>
    <p>data count.........0{data}</p>
    <h1>Add to Card</h1>
    <h1>Add to Card</h1>
    <h1>Add to Card</h1>
    <h1>Add to Card</h1>
    <h1>Add to Card</h1>
    <h1>Add to Card</h1>
    <h1>Add to Card</h1>
    <h1>Add to Card</h1>
{/*        
          <div>
            <h2>{fiternewarrivals.name}</h2>
            <p>${fiternewarrivals.price.toFixed(2)}</p>
            <p>{fiternewarrivals.category}</p>
          </div> */}
    
      
    </div>
  );
}
