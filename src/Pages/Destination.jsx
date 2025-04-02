import { useEffect, useRef } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Welcome from '../Components/Welcome/Welcome';
import Hero_second from "../Components/Hero_second/hero_second";
import Footer from '../Components/Footer/Footer'
import HeroImg from "../assets/destinationhero11.jpg";
import destinationVideo from '../assets/destinationVideo.mp4';
import Kyoto from "../../assets/Kyoto, Japan.jpg";
import Thailand from "../../assets/Thailand.jpg";
import Australia from "../../assets/Australia.jpg";
import Indonesia from "../../assets/Indonesia.jpg";
import Maldives from "../../assets/Maldives1.jpg";
import Switzerland from "../../assets/Switzerland.jpg";

import './Destination.css';

function Destination() {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const cardData = [
      {
        image: Indonesia,
        price: "$300/person",
        duration: "8 Days Tour",
        title: "Bali, Indonesia",
        
      },
      {
        image: Australia,
        price: "$400/person",
        duration: "10 Days Tour",
        title: "Australia",
        
      },
      {
        image: Thailand,
        price: "$280/person",
        duration: "6 Days Tour",
        title: "Thailand",
        
      },
      {
        image: Switzerland,
        price: "$500/person",
        duration: "12 Days Tour",
        title: "Switzerland",
        
      },
      {
        image: Maldives,
        price: "$500/person",
        duration: "12 Days Tour",
        title: "Maldives",
        
      },
      {
        image: Kyoto,
        price: "$500/person",
        duration: "12 Days Tour",
        title: "Kyoto, Japan",
       
      },
    ];

  return (
    <div>
      <Welcome />
      <Navbar />
      <Hero_second
        image={HeroImg}
        title="Discover Your Next Dream Destination!"
        description=""
      />

     



      <div className="tour-caption">
        <h1>Uncharted Escapes for Modern Travelers</h1>
      </div>
      <div className="card-section">
        {cardData.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image} alt={card.title} className="card-image" />
            <button className="price-button">{card.price}</button>
            <div className="card-overlay">
              <div className="overlay-content">
                <p>{card.duration}</p>
                <h3>{card.title}</h3>
                
              </div>
            </div>
          </div>
        ))}
        
      </div>

      <div className="tour_container">
        <div className="video-container">
          <video ref={videoRef} muted loop playsInline>
            <source src={destinationVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="text-container">
          <h1>European Escapes</h1>
          <p>Explore the timeless beauty of Europe! From the romantic streets of Paris to the stunning landscapes of Switzerland, 
            our European tour packages offer a mix of culture, history, and breathtaking scenery.</p>
          <h1>Tropical Getaways</h1>
          <p>Experience paradise with our tropical vacation packages. Relax on the pristine beaches of the Maldives, explore the 
            exotic islands of Bali, or soak in the Caribbean sun.</p>
          <h1>Iconic City Tours</h1>
          <p>Take a deep dive into the world’s most vibrant cities! Explore the neon lights of Tokyo, the charm of London, or the 
            architectural wonders of Dubai with our city tour packages.</p>
          <h1> Adventure & Wildlife Expeditions</h1>
          <p>For thrill-seekers and nature lovers! Embark on a safari in Kenya, hike through Patagonia, or discover the wild beauty
             of the Amazon rainforest.</p>
          <h1>Eco-Tourism & Nature Retreats</h1>
          <p>Reconnect with nature through our eco-tourism packages. Stay in eco-friendly lodges, explore national parks, and experience
             sustainable travel in Costa Rica, New Zealand, and beyond.</p>
        
        </div>
        
      </div>

      <Footer/>


    </div>
  );
}

export default Destination;
