import React, { useState, useEffect } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';

export default function Home() {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [remainingTime, setRemainingTime] = useState(1000);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime === 1) {
          if (swiper) {
            swiper.slideNext();
          }
          return 1000;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [swiper]);

  return (
    <div className="swiper-container">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}

        loop={true}
        onSwiper={setSwiper}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
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
      <div className="mt-4 text-center">
        {/* Time until next slide: {Math.floor(remainingTime / 60)}:{(remainingTime % 60).toString().padStart(2, '0')} */}
      </div>
      <div className="mt-2 text-center">
        Current slide: {activeIndex + 1}
      </div>
    </div>
  );
}