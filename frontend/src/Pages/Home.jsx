import React, { useEffect,useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FcLike } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import Tshirt from "../assets/T shirt.png"
import png from "../assets/npg tshirt.png"
import axios from 'axios'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
import video from "../assets/AnimeV.webm"

export default function Home({setshowcard}) {
  const navigate = useNavigate();
  const [products, setProducts] = useState([])
  const [open, setOpen] = useState(8)
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

  function hendlepage(id){
    let data = products.filter(item=>item.id == id)
    setshowcard(data)
    navigate("/customized")
  }

  return (
    <div className="swiper-container pb-10 w-screen">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay]} 
        spaceBetween={5} // Decrease space between slides
        slidesPerView={3} // Adjust the number of slides visible
        navigation
        pagination={false}
        scrollbar={false}
        effect="coverflow"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 50,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        // autoplay={{
        //   delay: 2000, 
        //   disableOnInteraction: false, 
        // }}
        className="w-full h-[300px] mt-20"
      >
        <SwiperSlide className="flex items-center justify-center">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI7N6ap5l4358wXx4jlC9RgF3Z3Q_pAHRyYw&s" alt="Slide 1" className="w-full h-full object-cover rounded-lg" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src="https://www.creativefabrica.com/wp-content/uploads/2022/07/30/Anime-Lover-TShirt-Design-Bundle-Graphics-35158811-1-1-580x386.jpg" alt="Slide 2" className="w-full h-full object-cover rounded-lg" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src="https://www.creativefabrica.com/wp-content/uploads/2022/04/23/Anime-TShirt-Design-Bundle-Graphics-29517084-2-580x386.jpg" alt="Slide 3" className="w-full h-full object-cover rounded-lg" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src="https://i5.walmartimages.com/seo/If-It-Doesn-t-Have-To-Do-With-Anime-Video-Game-Or-Food-T-Shirt_5e8a05fd-a7dc-4552-8950-326b312c03f6.bce5854dd3a4088a94ce44b77ede0256.jpeg" alt="Slide 4" className="w-full h-full object-cover rounded-lg" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src="https://m.media-amazon.com/images/I/A16YlCTQRlL._CLa%7C2140%2C2000%7C71QvkaS5vcL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png" alt="Slide 5" className="w-full h-full object-cover rounded-lg" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src="https://m.media-amazon.com/images/I/A16YlCTQRlL._CLa%7C2140%2C2000%7C71QvkaS5vcL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png" alt="Slide 6" className="w-full h-full object-cover rounded-lg" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src="https://m.media-amazon.com/images/I/A16YlCTQRlL._CLa%7C2140%2C2000%7C71QvkaS5vcL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png" alt="Slide 7" className="w-full h-full object-cover rounded-lg" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src="https://m.media-amazon.com/images/I/A16YlCTQRlL._CLa%7C2140%2C2000%7C71QvkaS5vcL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png" alt="Slide 8" className="w-full h-full object-cover rounded-lg" />
        </SwiperSlide>
      </Swiper>
      <br/>
      
      <div className='xl:h-[430px] sm:h-80 md:h-96 border-2 border-black rounded-sm flex justify-center  mt-20'>
  {/* <div className='h-full w-full sm:w-12/12 md:w-10/12 lg:w-9/12 xl:w-11/12 px-5 sm:px-10 md:px-16 lg:px-20'> */}
  <img src='https://customthouse.in/wp-content/uploads/2021/07/anime-cover-pic.jpg' className='h-full w-full'/>
  {/* </div> */}
</div>
      
      <div className='flex justify-center gap-5 px-5 mt-20 flex-wrap'  >
  <div className='w-full sm:w-72 md:w-72 lg:w-96 xl:w-80 h-72 md:h-80 xl:h-96 border-2 border-black rounded-md flex align-center'>
    <img src='https://cdn.dribbble.com/userupload/13221231/file/original-831eccb57952528ed4a5e74cf478c771.png?resize=400x300&vertical=center'className='h-96 w-96' />
  </div>
  <div className='w-full sm:w-72 md:w-72 lg:w-96 xl:w-80 h-72 md:h-80 xl:h-96 border-2 border-black rounded-md' >
    <img src="https://m.media-amazon.com/images/I/51nap1M6mNL._AC_UY1000_.jpg" className='h-full w-full'/>
  </div>
  <div className='w-full sm:w-72 md:w-72 lg:w-96 xl:w-80 h-72 md:h-80 xl:h-96 border-2 border-black rounded-md ' >
    <img src='https://neckermanndirect.eu/317496-medium_default/winter-mens-down-jacket-quality-thermal-thick-coat-snow-red-black-parka-male-warm-outwear-fashion-white-duck-down-men-jackets.jpg'/>
  </div>
  <div className='w-full sm:w-72 md:w-72 lg:w-96 xl:w-80 h-72 md:h-80 xl:h-96 border-2 border-black rounded-md ' >
    <img src='https://static.nextdirect.com/resource/blob/333376/c27808739c95f1c696be1ea4a74de7fb/autumn-essentials-data.jpg' className='h-full w-full'/>
  </div>
</div>

      <br/>


      <h1 className='font-semibold text-4xl text-center mt-5'>Latest Collection</h1>
     <div className='flex  align-center gap-3 w-full p-5 flex-wrap mt-5 xl:ml-20 ml-10'>
     {
        productfilter.map((product,index)=>(
        <div key={index}  className='relative xl:w-80 w-60 overflow-hidden h-96 bg-gray-50 hover:bg-gray-200  max-h-fit pb-14 xl:max-h-fit'> 
        <p className='absolute  left-4 rounded-sm bg-red-500 text-white text-xs py-1 top-4 px-3'>new</p>
        <p className='absolute right-4 top-4'><FcLike size={30}/></p>
        <div className='w-52 text-center h-3/4 bg-transparent'>
          <img src={png} alt="Image" className='w-full ml-10 h-full bg-center'/>
          
        </div>
         <div className='flex justify-around align-middle mt-3'>
         <h2>{product.category}</h2>
         <h2 className='border-2 border-black  px-3 rounded'>{product.price}</h2>
         </div>
          <p className='text-xs ml-3 mt-2 '>{product.title}</p>
          <button className='text-white ml-3 text-xs rounded-2xl p-2 mt-5 bg-black'>Order Now</button>
          </div>
        ))
      }
     </div>
      <button onClick={()=>navigate('new-arrivals')} className='border-2 border-black  mt-2 ml-96 xl:ml-[167vh] rounded-[100px] font-semibold p-1 px-5 '>View More</button>
      
      <div className='w-[100%] h-[500px]'>
        <video src={video}   loop muted autoPlay className='w-[100%] h-[500px]  mt-10 '></video>
      </div>
      
      
      <h1 className='font-semibold text-4xl text-center mt-5'>Our Arrivals</h1>
      <div className='flex  align-evenly gap-3 w-full p-5 flex-wrap mt-5 xl:ml-20 ml-10'>
     {
        productfilter.map((product,index)=>(
        <div  key={index} className='relative xl:w-80 w-60 overflow-hidden xl:h-96 bg-gray-100 hover:bg-gray-300 max-h-fit pb-10 '>
            <p className='absolute right-4 top-4'><FcLike size={30}/></p> 
          
          <img src={png} alt="" className='w-full h-52  '/>
         <div className='flex justify-around align-middle mt-3'>
         <h2>{product.category}</h2>
         <h2 className='border-2 border-black  px-3 rounded'>{product.price}</h2>
         </div>
          <p className='text-xs ml-3 mt-2 tracking-tighter' >{product.title}</p>
          <button className='text-white ml-3 text-xs rounded-2xl p-2 mt-5 bg-black'>Order Now</button>
          </div>
        ))
      }
     </div>
     <button onClick={()=>navigate('new-arrivals')} className='border-2 border-black  mt-2 ml-96 xl:ml-[167vh] rounded-[100px] font-semibold p-1 px-5 '>View More</button>
     <h1 className='text-black xl:text-5xl  text-3xl text-center mt-5'>Create you now customize T shirt</h1>

     <div className='flex justify-center items-center mt-2'>
  <div className='xl:w-[69rem]  rounded-md mx-auto bg-red-50 xl:h-[600px] flex justify-center items-center'>
   <img src={Tshirt} alt='Image' className='relative w-96 h-96 p-5 xl:w-[500px] xl:h-[500px] animate-rotateLR'/>
   <h1 className='absolute text-6xl xl:text-9xl font-semibold ml-32 mb-20'>T   SHIRT </h1>
   <h1  className='absolute text-1xl xl:text-3xl font-semibold xl:ml-72 xl:mt-16 ml-52'>ANIMATED MOCKUP</h1>
  </div>
</div>



<div className='snap-x flex overflow-x-auto  w-screen justify-start gap-28  p-5 scroll-auto mt-5 scrollbar-hide'>
  {
    productfilter.map((product, index) => (
      <div onClick={()=>hendlepage(product.id)} key={index} className='cursor-pointer flex-shrink-0 snap-center w-72 rounded-md overflow-hidden h-96 bg-white max-h-fit pb-10'> 
        <img src="https://media.istockphoto.com/id/991893524/photo/stylish-young-male-and-female-models-in-colorful-hoodies-sitting-on-chairs-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=HlsYbtPQRka-6b0XlZYDpmFPZPtDGuFi-uNzTmL4bbA=" alt="" className='w-full h-52'/>
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