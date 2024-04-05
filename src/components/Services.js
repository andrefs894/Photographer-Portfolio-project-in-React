import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro, faMountainSun, faEnvelope, faMoneyBill } from "@fortawesome/free-solid-svg-icons";

function Services() {
    return (
      <div className="services" id="services">
        <div>
          <h1>Services</h1>
          <hr />
        </div>
        <div className="content">
          <div className="grid">
            <div>
              <FontAwesomeIcon className="icon" icon={faCameraRetro} size='3x'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div>
              <FontAwesomeIcon className="icon" icon={faMountainSun} size='3x'/>
              <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div>
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