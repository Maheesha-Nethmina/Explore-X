import './Welcome.css';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

function Welcome() {
  return (
    <div className='welcome_section'>
      <div className="container">
        <nav className="nav">
          <div className="contact-info">
            <p className="welcome">
              <FaPhoneAlt className="icon" /> 041 2265346 &nbsp; | &nbsp;
              <FaEnvelope className="icon" /> exploreXtravelpartner@gmail.com
            </p>
          </div>

          <div className="social-icons">
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
