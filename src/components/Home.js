import '../css/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTurnDown } from '@fortawesome/free-solid-svg-icons';
import Photo1 from '../assets/home1.jpg';
import Photo2 from '../assets/home2.jpg';
import Photo3 from '../assets/home3.jpg';
import Photo4 from '../assets/home4.jpg';
import Photo5 from '../assets/home5.jpg';
import { useState, useEffect } from 'react';

function Home() {
  const images = [
    Photo1, Photo2, Photo3, Photo4, Photo5
  ]

  const [image, setImage] = useState(0);

  const nextImage = () => {
    setImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 250);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='home-container' id="home">
      <div className='home'>
        <div className='text'>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>
        <div className='image'>
          <img src={images[image]} />
        </div>
      </div>
      <div className='action'>
        <hr />
        <a href='/#projects'>
          <h3><FontAwesomeIcon icon={faArrowTurnDown} /> check my work <FontAwesomeIcon icon={faArrowTurnDown} /></h3>
        </a>
        <hr />
      </div>
    </div>
  );
}

export default Home;
