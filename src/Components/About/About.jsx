import './About.css';
import { MdLocationOn } from "react-icons/md";
import { MdOutlineKitesurfing } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
import { BiUserVoice } from "react-icons/bi";


function About() {
  const services = [
    {
      icon: <MdOutlineKitesurfing size={50} />, 
      title: "Activities",
      description: "Discover thrilling adventures and unforgettable experiences crafted just for you!",
    },
    {
      icon: <GrMapLocation size={50} />, 
      title: "Travel Arrangements",
      description: "Enjoy hassle-free travel with our custom flight, accommodation, and tour arrangements.",
    },
    {
      icon: <BiUserVoice size={50} />, 
      title: "Private Guide",
      description: "Discover more with our expert private guides for a personalized tour experience.",
    },
    {
      icon: <MdLocationOn size={50} />, 
      title: "Location Manager",
      description: "Seamless trips with our expert location managers handling all logistics.",
    },
  ];

  return (
    <div className="col-md-12 row about">
      {/* Services Section */}
      <div className="col-md-6 services">
        <div className="row g-4 icon-card">
          {services.map((service, index) => (
            <div className="col-md-6" key={index}>
              <div className="text-center p-3 ">
                <div className="mb-3">
                  {service.icon}
                </div>
                <h5 className="fw-bold mb-2">{service.title}</h5>
                <p className="text-muted">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="col-md-6 about-text">
        <h1>ExploreX – Your Gateway to Unforgettable Journeys</h1>
        <p>
          At ExploreX, we believe that every journey tells a story and every
          destination unlocks new possibilities. Whether you’re craving the
          thrill of adventure, the serenity of nature, or the charm of hidden
          gems, we’re here to make your travel dreams a reality. From
          planning your itinerary to discovering unique experiences, our
          mission is to help you explore the world with ease and excitement.
          Let us guide you through breathtaking landscapes, rich cultures,
          and unforgettable memories – because your next great adventure
          starts here!
        </p>

        <button type="submit" className="about-button">
          Meet ExploreX
        </button>
      </div>
    </div>
  );
}

export default About;
