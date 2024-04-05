import '../css/Projects.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft, faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Photo1 from '../assets/home1.jpg';
import Photo2 from '../assets/home2.jpg';
import Photo3 from '../assets/home3.jpg';
import Photo4 from '../assets/home4.jpg';
import Photo5 from '../assets/home5.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverFlow, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

function ProjectsSlider() {
  const slides = [
    Photo1, Photo2, Photo3, Photo4, Photo5
  ]

  return (
    <div className="slider">
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        pagination={{el:'.swiper-pagination',clickable:true}}
        navigation={{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev',clickable:true}}
        modules={[Navigation, Pagination]}
        className='swiper_container'
      >
        <SwiperSlide>
          <img src={slides[0]} className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slides[1]} className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slides[2]} className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slides[3]} className='slide' />
        </SwiperSlide>
        <div className='slider-controler'>
          <div className='swiper-button-prev slider-arrow'>
          </div>
          <div className='swiper-button-next slider-arrow'>
          </div>
          <div className='swiper-pagination'></div>
        </div>
      </Swiper>
    </div>
  );
  }

  export default ProjectsSlider;