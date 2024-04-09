import '../css/Projects.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTurnDown } from '@fortawesome/free-solid-svg-icons';
import slides from '../Collection'
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';

function ProjectsSlider({setProject}) {
  const title = useRef();

  const handleProject = (title) => {
    const project = slides.filter((p) => p.title === title)
    setProject(project)
  }

  return (
    <div className="slider" id="slider">
      <div className='title'>
        <h1>Projects</h1>
        <hr />
      </div>
      <div>
        <Swiper
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          speed={1000}
          slidesPerView={2}
          spaceBetween={5}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          pagination={{el:'.swiper-pagination',clickable:true}}
          navigation={{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev',clickable:true}}
          modules={[Autoplay,Navigation, Pagination]}
        >
          {
            slides.map((slide, index) => (
              <SwiperSlide key={index} ref={title}>
                <img src={slide.cover} />
                <div className='description'>
                  <div className='title'>
                    <h3>{slide.title}</h3>
                  </div>
                  <div className='text'>
                    <p>{slide.text}</p>
                  </div>
                </div>
                <div className='action'>
                  <a href="/#project" onClick={() => handleProject(slide.title)}>
                    <h4>See more <FontAwesomeIcon icon={faArrowTurnDown} /></h4>
                  </a>
                </div>
              </SwiperSlide>
            ))
          }
          <div className='slider-controler'>
            <div className='swiper-button-prev slider-arrow'></div>
            <div className='swiper-button-next slider-arrow'></div>
            <div className='swiper-pagination'></div>
          </div>
        </Swiper>
      </div>

    </div>
  );
}

export default ProjectsSlider;