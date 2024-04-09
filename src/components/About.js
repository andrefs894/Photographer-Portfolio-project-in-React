import '../css/About.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsTurnRight } from "@fortawesome/free-solid-svg-icons";
import Pic1 from '../assets/photo.jpg';
import Pic2 from '../assets/photo2.jpg';
import Tape1 from '../assets/tape.jpg';
import Tape2 from '../assets/tape.jpg';

function About() {
    return (
      <div className="about-container" id="about">
          <div className="text">
            <h1>About me</h1>
            <hr />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="photo">
            <img src={Pic1} className="pic1" />
            <img src={Tape1} className="tape1" />
            <img src={Pic2} className="pic2" />
            <img src={Tape2} className="tape2" />
          </div>
          <div className='action'>
            <hr />
            <a href='/#contact'>
              <h3><FontAwesomeIcon icon={faArrowsTurnRight} /> contact me <FontAwesomeIcon icon={faArrowsTurnRight} /></h3>
            </a>
            <hr />
          </div>
      </div>
    );
  }

  export default About;