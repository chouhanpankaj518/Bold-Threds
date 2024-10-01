import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";  // Import carousel CSS

export default function Home() {
  return (
    <div>
      <Carousel showThumbs={false} showIndicators={false} >
        <div className='w-48 h-40 rounded-md'>
          <img className='h-40 w-48' src="https://images.unsplash.com/photo-1727402881307-9b2d1cd53ca5?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 1" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div className='w-48 h-40 rounded-md'>
          <img className='40 h-48' src="https://images.unsplash.com/photo-1725610588097-9ba8efa96b17?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 2" />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div className='w-48 h-40 rounded-md'>
          <img className='w-48 h-40' src="https://images.unsplash.com/photo-1725652264563-9f8eea4e2995?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 3" />
          {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
    </div>
  );
}
