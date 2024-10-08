import React, { useEffect,useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';

export default function Home() {
  const [products, setProducts] = useState([])
  const [open, setOpen] = useState(6)
  const [productfilter , setproductsfilter] = useState([])


  useEffect(()=>{
    async function fetchData() {
      const response = await axios.get('https://fakestoreapi.com/products');
      console.log(response.data)
      setProducts(response.data)
    }
    fetchData()
  },[])

  useEffect(()=>{
     const filterdata = products.filter(item=>item.id<=open)
     setproductsfilter(filterdata)
  },[open,products])


  return (
    <div className="swiper-container pb-10">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay]} 
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: false }}
        scrollbar={{ draggable: false }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        autoplay={{
          delay: 2000, 
          disableOnInteraction: false, 
        }}
        className="w-full h-[300px]"
      >
        <SwiperSlide className="flex items-center justify-center">
          <img src="https://media.istockphoto.com/id/1208088021/photo/black-sport-t-shirts-mock-up-front-and-back-view-isolated-on-white-background-with-clipping.jpg?s=612x612&w=0&k=20&c=cVhIkdeXfxOPBltQKDGYxdPoyZJAd33hlj871H2Yt34=" alt="Slide 1" className="w-full h-full object-cover rounded-lg" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src="https://media.istockphoto.com/id/1358422692/photo/dark-blue-3d-hq-rendered-t-shirt-with-detailed-and-texture-color.jpg?s=612x612&w=0&k=20&c=AWYhN8Kj26q-qXX0wtiOEJG218odk6ZUl1AIliHarZI=" alt="Slide 2" className="w-full h-full object-cover rounded-lg" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src="https://media.istockphoto.com/id/1428684081/photo/t-shirts-isolated.jpg?s=612x612&w=0&k=20&c=oc2byQAOluCUlBpWw6Iz3pyEROcoO3yhfaG8ZPGS-sU=" alt="Slide 3" className="w-full h-full object-cover rounded-lg" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src="https://media.istockphoto.com/id/1152150649/photo/t-shirt-on-white-background.jpg?s=612x612&w=0&k=20&c=Cdsx6JeJeKp6WJWH76KNQAllW77ZKcvArYr3yOcWGEQ=" alt="Slide 4" className="w-full h-full object-cover rounded-lg" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src="https://media.istockphoto.com/id/1309835771/photo/mens-short-sleeve-t-shirt-mockup-in-front-side-and-back-views-design-presentation-for-print.jpg?s=612x612&w=0&k=20&c=eGiFUN3WCGpFYkBcwF68u4e9wuwm_z8GLOYDwR9xAYQ=" alt="Slide 5" className="w-full h-full object-cover rounded-lg" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src="https://images.unsplash.com/photo-1522706604291-210a56c3b376?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dCUyMHNoaXJ0fGVufDB8fDB8fHww" alt="Slide 6" className="w-full h-full object-cover rounded-lg" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src="https://plus.unsplash.com/premium_photo-1673356301514-2cad91907f74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dCUyMHNoaXJ0fGVufDB8fDB8fHww" alt="Slide 7" className="w-full h-full object-cover rounded-lg" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src="https://images.unsplash.com/photo-1485218126466-34e6392ec754?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dCUyMHNoaXJ0fGVufDB8fDB8fHww" alt="Slide 8" className="w-full h-full object-cover rounded-lg" />
        </SwiperSlide>
      </Swiper>
      <br/>
      <h1 className='font-semibold text-4xl text-center mt-5'>Our New Arrival</h1>
     <div className='flex justify-center align-evenly gap-28 w-full bg-gray-200  p-5 flex-wrap mt-5 '>
     {
        productfilter.map((product,index)=>(
        <div key={index} className='w-72 rounded-md overflow-hidden h-96 bg-white max-h-fit pb-10'> 
          <img src="https://media.istockphoto.com/id/991893524/photo/stylish-young-male-and-female-models-in-colorful-hoodies-sitting-on-chairs-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=HlsYbtPQRka-6b0XlZYDpmFPZPtDGuFi-uNzTmL4bbA=" alt="" className='w-full h-52  '/>
         <div className='flex justify-around align-middle mt-3'>
         <h2>{product.category}</h2>
         <h2 className='border-5 border-black'>{product.price}</h2>
         </div>
          <p className='text-xs ml-3 mt-2 '>{product.title}</p>
          <button className='text-white ml-3 text-xs rounded-md p-2 mt-2 bg-black'>Order Now</button>
          </div>
        ))
      }
     </div>
      <button onClick={()=>setOpen(open+3)} className='border-2 border-black  mt-2 ml-96 xl:ml-[167vh] rounded-[100px] font-semibold p-1 px-5 '>View More</button>
      <h1 className='font-semibold text-4xl text-center mt-5'>Our New Arrival</h1>
      <div className='flex justify-center align-evenly gap-28 w-full bg-gray-200  p-5 flex-wrap mt-5 '>
     {
        productfilter.map((product,index)=>(
        <div key={index} className='w-72 rounded-md overflow-hidden h-96 bg-white max-h-fit pb-10'> 
          <img src="https://media.istockphoto.com/id/1294576092/photo/hipster-indian-man.webp?a=1&b=1&s=612x612&w=0&k=20&c=7uaS2oNYThqfXI09AFRyMnMULd3KtIbopLFJum0uWaw=" alt="" className='w-full h-52  '/>
         <div className='flex justify-around align-middle mt-3'>
         <h2>{product.category}</h2>
         <h2 className='border-5 border-black'>{product.price}</h2>
         </div>
          <p className='text-xs ml-3 mt-2 '>{product.title}</p>
          <button className='text-white ml-3 text-xs rounded-md p-2 mt-2 bg-black'>Order Now</button>
          </div>
        ))
      }
     </div>
     <button onClick={()=>setOpen(open+3)} className='border-2 border-black  mt-2 ml-96 xl:ml-[167vh] rounded-[100px] font-semibold p-1 px-5 '>View More</button>
     <h1 className='font-semibold text-4xl text-center mt-5'>Create you now customize T shirt</h1>



     <div className='flex justify-center align-evenly gap-28 w-full bg-gray-200  p-5 scroll-auto mt-5  '>
     {
        productfilter.map((product,index)=>(
        <div key={index} className='w-72 rounded-md overflow-hidden h-96 bg-white max-h-fit pb-10'> 
          <img src="https://media.istockphoto.com/id/991893524/photo/stylish-young-male-and-female-models-in-colorful-hoodies-sitting-on-chairs-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=HlsYbtPQRka-6b0XlZYDpmFPZPtDGuFi-uNzTmL4bbA=" alt="" className='w-full h-52  '/>
         <div className='flex justify-around align-middle mt-3'>
         <h2>{product.category}</h2>
         <h2 className='border-5 border-black'>{product.price}</h2>
         </div>
          <p className='text-xs ml-3 mt-2 '>{product.title}</p>
          <button className='text-white ml-3 text-xs rounded-md p-2 mt-2 bg-black'>Order Now</button>
          </div>
        ))
      }
     </div>
    </div>
  );
}