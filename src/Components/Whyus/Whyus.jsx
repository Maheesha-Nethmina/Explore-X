import { useEffect, useState, useRef } from "react";
import "./Whyus.css";
import whyusimg01 from "../../assets/whyusimg01.jpg";

function Whyus() {
  const [toursCount, setToursCount] = useState(0);
  const [touristCount, setTouristCount] = useState(0);
  const [placesCount, setPlacesCount] = useState(0);
  const countersRef = useRef(null);

  useEffect(() => {
    const animateCounter = (target, setter, duration) => {
      let start = 0;
      const increment = Math.ceil(target / (duration / 10));
      const interval = setInterval(() => {
        start += increment;
        if (start >= target) {
          setter(target);
          clearInterval(interval);
        } else {
          setter(start);
        }
      }, 10);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Start counting when the counters are visible
          animateCounter(294, setToursCount, 3000);
          animateCounter(17576, setTouristCount, 3500);
          animateCounter(139, setPlacesCount, 3000);
          // Disconnect after triggering
          observer.disconnect(); 
        }
      },
      { threshold: 0.5 }
    );

    if (countersRef.current) {
      observer.observe(countersRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="col-md-12 row whyus">
      <div className="col-md-5 whyus-caption">
        <h1>Why Choose ExploreX?</h1>
        <p>
          At ExploreX, we go the extra mile to ensure your travel experience is
          nothing short of extraordinary. From personalized services to
          world-class facilities, we provide everything you need for a
          hassle-free and memorable journey. Here’s what sets us apart:
        </p>
        <ul>
          <li>Customizable Packages</li>
          <li>24/7 Support</li>
          <li>Luxury Accommodations</li>
          <li>Safe Travel Options</li>
          <li>Expert Guides</li>
          <li>Diverse Destinations</li>
          <li>Unique Experiences</li>
          <li>Sustainability Focus</li>
          <li>Seamless Booking</li>
          <li>Affordable Pricing</li>
        </ul>
      </div>
      <div className="col-md-7 whyus-img">
        <div className="image-container" ref={countersRef}>
          <img src={whyusimg01} alt="Why Choose ExploreX?" />
          <div className="overlayimg">
            <div className="counter">
              <h2>{toursCount}</h2>
              <p>Successful Tours</p>
            </div>
            <div className="counter">
              <h2>{touristCount}</h2>
              <p>Happy Tourists</p>
            </div>
            <div className="counter">
              <h2>{placesCount}</h2>
              <p>Places Explored</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whyus;
