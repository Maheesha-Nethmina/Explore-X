import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
      
        <div className="footer-main">
          {/* Newsletter Section */}
          <div className="newsletter">
            <h3>Subscribe to Our Newsletter</h3>
            <p>Get the latest travel deals and updates.</p>
            <div className="newsletter-input">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>

          {/* Footer Links */}
          <div className="footer-links">
            <div>
              <h4>Company</h4>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Partnerships</a></li>
              </ul>
            </div>

            <div>
              <h4>Explore</h4>
              <ul>
                <li><a href="#">Destinations</a></li>
                <li><a href="#">Travel Guides</a></li>
                <li><a href="#">Packages</a></li>
                <li><a href="#">Reviews</a></li>
              </ul>
            </div>

            <div>
              <h4>Support</h4>
              <ul>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
              </ul>
            </div>

            <div className="social-media">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaYoutube /></a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>© 2025 ExploreX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
