import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import img1 from "./images/avatar.418c8afc380507acd425.jpg"
import img2 from "./images/_UH11385-X3_fis1l3.webp"
import img3 from "./images/10_03_2021_FIFA-4057_1800x1200_djrm4q.webp"
import img4 from "./images/041622_Birmingham_180_HC.jpg"
import img5 from "./images/041622_Birmingham_180_HC.jpg"
import img6 from "./images/30906808628_cf37651a22_o (1)-2-1.jpg"
import img7 from "./images/AutomatedContent.jpg"
import img8 from "./images/bg.54122ef3ac6eced211d3.jpg"
import img9 from "./images/Finish Line - Opera House Aerial-1.jpg"

export default function App() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img1} alt=""/></SwiperSlide>
        <SwiperSlide><img src={img2} alt=""/></SwiperSlide>
        <SwiperSlide><img src={img3} alt=""/></SwiperSlide>
        <SwiperSlide><img src={img4} alt=""/></SwiperSlide>
        <SwiperSlide><img src={img5} alt=""/></SwiperSlide>
        <SwiperSlide><img src={img6} alt=""/></SwiperSlide>
        <SwiperSlide><img src={img7} alt=""/></SwiperSlide>
        <SwiperSlide><img src={img8} alt=""/></SwiperSlide>
        <SwiperSlide><img src={img9} alt=""/></SwiperSlide>
      </Swiper>
    </>
  );
}

