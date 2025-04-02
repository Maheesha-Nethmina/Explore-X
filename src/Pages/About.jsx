import './About.css';
import Navbar from '../Components/Navbar/Navbar';
import Welcome from '../Components/Welcome/Welcome';
import Hero_second from '../Components/Hero_second/hero_second';
import Footer from '../Components/Footer/Footer'
import HeroImg from '../assets/abouthero2.jpg';
import aboutImg from '../assets/aboutimg2.jpg';
import visitionImg from '../assets/aboutimg3.jpg';
import misionImg from '../assets/misionImg.jpg';



function About() {
  return (
    <>
      <Welcome />
      <Navbar />
      <Hero_second image={HeroImg} title="Discover the World with Us" />
      
      <div className="who_we_are">
        <div className="page_caption">
          <h1>Who We Are</h1>
          <h4>Your Gateway to Unforgettable Adventures</h4>
          <p>
            At ExploreX, we are passionate travelers, storytellers, and explorers dedicated to bringing you the most
            breathtaking destinations worldwide. Our mission is to inspire your wanderlust and help you discover new places, 
            cultures, and experiences. Whether you are an adventure seeker, a beach lover, or a history enthusiast, we curate 
            the best travel experiences tailored just for you!
          </p>
          <ul className="about_list">
            <li>Expertly curated travel guides</li>
            <li>Authentic cultural experiences</li>
            <li>Hassle-free trip planning</li>
          </ul>
          <p>Travel far enough to meet yourself.</p>
        </div>
        <div className="about_img">
          <img src={aboutImg} alt="About Us" />
        </div>
      </div> 

      <div className="Vision">
        <div className="visiton_img">
          <img src={visitionImg} alt="About Us" />
        </div>
        <div className="Vision_caption">
          <h1>Our Vision</h1>
          <h4> Inspiring Journeys, Creating Memories</h4>
          <p>
          We envision a world where travel is not just about visiting places but about experiencing life in new ways. 
          Our goal is to make travel more accessible, meaningful, and enriching for every explorer. We believe that every 
          destination has a story, and we want to help you be a part of it.
          </p>
          
          <p>The world is a book, and those who do not travel read only one page.</p>
        </div>
        
      </div> 

      <div className="our_mision">
        <div className="mision_caption">
          <h1>Our Mission</h1>
          <h4>Connecting You to the World, One Destination at a Time</h4>
          <p>
          Our mission is to provide travelers with trusted recommendations, expert insights, and immersive experiences that turn vacations 
          into lifelong memories. We strive to promote sustainable tourism while helping you travel smarter, safer, and with a sense of adventure.
          </p>
          <ul className="mision_list">
            <li>Commitment to eco-friendly travel</li>
            <li>Promoting local cultures & communities</li>
            <li>Creating personalized travel experiences</li>
          </ul>
          <p>Don’t just visit. Experience. Explore. Live!</p>
        </div>
        <div className="mision_img">
          <img src={misionImg} alt="About Us" />
        </div>
      </div> 
      <Footer/>
    </>
  );
}

export default About;
