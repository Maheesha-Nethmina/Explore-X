import  { useEffect, useRef } from 'react';
import Navbar from '../Components/Navbar/Navbar'
import Welcome from '../Components/Welcome/Welcome'
import Hero_second from "../Components/Hero_second/hero_second";
import HeroImg from "../assets/destinationhero.jpg";
import destinationVideo from '../assets/destinationVideo.mp4'; 

import './Destination.css'

function Destination() {
  const videoRef = useRef(null);  // Create a ref for the video

  useEffect(() => {
    const video = videoRef.current;

    // Create an IntersectionObserver to detect when the video enters the viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          video.play();  // Play the video when it enters the viewport
        } else {
          video.pause();  // Pause the video when it leaves the viewport
        }
      });
    }, { threshold: 0.5 }); // Trigger when 50% of the video is in the viewport

    if (video) {
      observer.observe(video);
    }

    // Cleanup the observer on component unmount
    return () => {
      if (video) {
        observer.unobserve(video);
      }
    };
  }, []);

  return (
    <div>
      <Welcome />
      <Navbar />
      <Hero_second 
          image={HeroImg} 
          title="ExploreX Tour Packages - Your Next Adventure Awaits!" 
          description="" 
      />
      
      <div className="tour-section">
        <div className="video-container">
          <video
            ref={videoRef} 
            src={destinationVideo}
            controls
            muted 
            autoPlay 
          ></video>
        </div>
        <div className="tour-content">
          <h2 className="heading">Eco-Tourism & Nature Retreats</h2>
          <p className="description">
          Reconnect with nature through our eco-tourism packages. Stay in eco-friendly lodges, explore national parks, and experience sustainable travel in Costa Rica, New Zealand, and beyond.          </p>
          <h2 className="heading">Tropical Getaways</h2>
          <p className="description">
          Experience paradise with our tropical vacation packages. Relax on the pristine beaches of the Maldives, explore the exotic islands of Bali, or soak in the Caribbean sun.
          </p>
          <h2 className="heading">Iconic City Tours</h2>
          <p className="description">
          Take a deep dive into the world’s most vibrant cities! Explore the neon lights of Tokyo, the charm of London, or the architectural wonders of Dubai with our city tour packages.
          </p>
          <h2 className="heading">Adventure & Wildlife Expeditions</h2>
          <p className="description">
          For thrill-seekers and nature lovers! Embark on a safari in Kenya, hike through Patagonia, or discover the wild beauty of the Amazon rainforest.
          </p>
          <h2 className="heading">Historical & Cultural Journeys</h2>
          <p className="description">
          Step into history with our cultural exploration tours. Walk through the ancient ruins of Rome, marvel at the pyramids of Egypt, or immerse yourself in the rich traditions of India.
          </p>
          <h2 className="heading">Winter Wonderland Packages</h2>
          <p className="description">
          Love snow and winter sports? Our winter tour packages take you to the best skiing resorts in the Alps, the magical northern lights of Iceland, and the snowy landscapes of Canada.          </p>
        </div>
      </div>

    </div>
  )
}

export default Destination;
