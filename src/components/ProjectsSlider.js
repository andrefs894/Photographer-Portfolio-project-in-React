import '../css/Projects.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsTurnRight } from '@fortawesome/free-solid-svg-icons';
import slides from '../Collection'
import { Link, Route, Routes } from 'react-router-dom';
import Project from './Project';

function ProjectsSlider() {

<Routes>
  <Route path="/#projects" element={<ProjectsSlider />}></Route>
  <Route path="/#projects/project" element={<Project />}></Route>
</Routes>

  return (
    <div className="slider">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        speed={1000}
        slidesPerView={2}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }
        }
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1.5,
          slideShadows: true,
        }}
        pagination={{el:'.swiper-pagination',clickable:true}}
        navigation={{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev',clickable:true}}
        modules={[Autoplay,EffectCoverflow,Navigation, Pagination]}
      >
        {
          slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <img src={slide.cover} />
              <div className='description'>
                <div className='title'>
                  <h3>{slide.title}</h3>
                </div>
                <div className='text'>
                  <p>{slide.text}</p>
                </div>
                <div className='action'>
                  <Link to="/#projects/project">
                    <h4>See more <FontAwesomeIcon icon={faArrowsTurnRight} /></h4>
                  </Link>
                </div>
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
  );
  }

  export default ProjectsSlider;