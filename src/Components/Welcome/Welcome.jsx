import './Welcome.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

function Welcome() {
  return (
    <div className='welcome_section'>
    <div className="container mt-3">
      <nav className="d-flex justify-content-between align-items-center">
      
        <div className="contact-info d-flex align-items-center">
          <p className="welcome m-0 d-flex align-items-center">
            <FaPhoneAlt className="icon" /> 041 2265346 &nbsp; | &nbsp;
            <FaEnvelope className="icon" /> exploreXtravelpartner@gmail.com
          </p>
        </div>

   
        <div className="social-icons d-flex align-items-center">
          <a href="#" target="_blank" rel="noopener noreferrer" className="icon">
            <FaFacebook />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="icon">
            <FaTwitter />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="icon">
            <FaInstagram />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="icon">
            <FaWhatsapp />
          </a>
        </div>
      </nav>
    </div>
    </div>
  );
}

export default Welcome;
