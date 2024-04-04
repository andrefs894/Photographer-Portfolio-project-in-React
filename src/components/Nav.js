import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faLinkedin, faBehance } from '@fortawesome/free-brands-svg-icons';

function Nav() {
  return (
    <div className="nav">
      <div className='header'>
        <div className="socials">
          <FontAwesomeIcon icon={faInstagram} beat className='icons' />
          <FontAwesomeIcon icon={faWhatsapp} bounce className='icons' />
          <FontAwesomeIcon icon={faLinkedin} fade className='icons' />
          <FontAwesomeIcon icon={faBehance} spinPulse className='icons' />
        </div>
        <div className='name'>
          First Name Last Name
          <hr />
        </div>
      </div>
      <div className='menu'>
        <a href='/#home' className='menu-item'>HOME</a>
        <a href='/#projects' className='menu-item'>PROJECTS</a>
        <a href='/#services' className='menu-item'>SERVICES</a>
        <a href='/#about' className='menu-item'>ABOUT</a>
        <a href='/#contact' className='menu-item'>CONTACT</a>
      </div>
    </div>
  );
  }

export default Nav;
