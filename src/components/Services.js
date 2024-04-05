import '../css/Services.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro, faMountainSun, faEnvelope, faMoneyBill } from "@fortawesome/free-solid-svg-icons";

function Services() {
    return (
      <div className="services-container" id="services">
        <div>
          <h1>Services</h1>
          <hr />
        </div>
        <div className="services">
          <div className="grid">
            <div className="item">
              <FontAwesomeIcon className="icon" icon={faCameraRetro} size='3x'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="item">
              <FontAwesomeIcon className="icon" icon={faMountainSun} size='3x'/>
              <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="item">
              <FontAwesomeIcon className="icon" icon={faEnvelope} size='3x'/>
              <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div>
              <FontAwesomeIcon className="icon" icon={faMountainSun} size='3x'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div>
              <FontAwesomeIcon className="icon" icon={faMountainSun} size='3x'/>
              <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faMoneyBill} size='3x'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  export default Services;