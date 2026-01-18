import Navbar from '../Components/Navbar/Navbar';
import Welcome from '../Components/Welcome/Welcome';
import Hero_second from "../Components/Hero_second/Hero_second";
import Footer from '../Components/Footer/Footer'
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import './Contact.css';
import HeroImg from "../assets/contacthero.jpg";


function Contact() {
  return (
    <div>
      <Welcome/>
      <Navbar/>
      <Hero_second
         image={HeroImg}
        title="Contact Us"
        text=""/>
      
      <div className="contact-container">
      
      <div className="contact-form">
        <h2>Get in Touch with Us</h2>
        <div className="input-group">
          <input type="text" placeholder="Enter your first name" />
          <input type="email" placeholder="Enter your last aname" />
        </div>
        <input type="text" placeholder="Enter your email" className="full-width" />
        <textarea placeholder="Add your message content"></textarea>
        <button className="send-button">Send message</button>
      </div>

      <div className="contact-details">
        <h2>Contact Details</h2>
        <p>
           We’re here to help! Whether you have questions, need assistance, or want to share feedback, 
           feel free to reach out to us. Fill out the form or use the contact details below, and our team will get back to you as soon as possible.
        </p>
        <div className="info-box">
          <div className="info">
            <FaMapMarkerAlt className="icon" />
            <p><strong>Address:</strong> No:123/A, Beach Road, Matara </p>
          </div>
          <div className="info">
            <FaPhoneAlt className="icon" />
            <p><strong>Mobile:</strong> (+094) 789 345</p>
          </div>
          <div className="info">
            <FaClock className="icon" />
            <p><strong>Availability:</strong> Daily 09 am - 05 pm</p>
          </div>
          <div className="info">
            <FaEnvelope className="icon" />
            <p><strong>Email:</strong> explorex@gamil.com</p>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="social-media">
          <h4>Social Media:</h4>
          <div className="social-icons">
            <FaFacebookF className="social-icon" />
            <FaTwitter className="social-icon" />
            <FaInstagram className="social-icon" />
            <FaLinkedinIn className="social-icon" />
          </div>
        </div>
      </div>
    </div>
      <Footer/>
      
    </div>
  )
}

export default Contact