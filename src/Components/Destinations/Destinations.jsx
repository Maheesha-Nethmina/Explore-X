import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Destinations.css";
import Kyoto from '../../assets/Kyoto, Japan.jpg';
import Maldives from '../../assets/Maldives.jpg';
import Paris from '../../assets/Paris, France.jpg';
import Rome from '../../assets/Rome, Italy.jpg';
import Santorini from '../../assets/Santorini, Greece.jpg';
import Srilanka from '../../assets/srilanka.jpg';

const destinations = [
  {
    id: 1,
    image: Paris,
    name: "Paris, France",
    description: "Known as the City of Light, Paris is famous for the Eiffel Tower, the Louvre Museum, Notre-Dame Cathedral, and its romantic ambiance",
  },
  {
    id: 2,
    image: Maldives,
    name: "Maldives",
    description: "A tropical paradise with crystal-clear waters, white-sand beaches, and luxury resorts, perfect for a relaxing beach holiday or a honeymoon.",
  },
  {
    id: 3,
    image: Kyoto,
    name: "Kyoto, Japan",
    description: "Known for its traditional temples, beautiful gardens, and vibrant culture, Kyoto is a must-visit for those interested in Japan's history and heritage.",
  },
  {
    id: 4,
    image: Srilanka,
    name: "Sri Lanka",
    description: "Sri Lanka is known for its beautiful beaches, lush landscapes, and rich history, offering a perfect mix of nature, culture, and adventure.",
  },
  {
    id: 5,
    image: Santorini,
    name: "Santorini, Greece",
    description: "Famous for its white-washed buildings with blue domes, stunning sunsets, and crystal-clear waters.",
  },
  {
    id: 6,
    image: Rome,
    name: "Rome, Italy",
    description: "A city filled with ancient ruins like the Colosseum and the Roman Forum, combined with vibrant modern culture and delicious cuisine.",
  },
];

const CardSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    arrows: false,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div className="card-slider">
      <div className="destination-caption">
        <h1>Explore<span className="text-danger">X</span>: Must-See Destinations</h1>
      </div>
      <Slider {...settings}>
        {destinations.map((destination) => (
          <div key={destination.id} className="card">
            {/* Destination name in the top-left corner */}
            <div className="destination-name">{destination.name}</div>
            <img className="destination-image" src={destination.image} alt={destination.name} />
            <div className="overlay">
              {/* <h3>{destination.name}</h3> */}
              <p>{destination.description}</p>
              <div className="wishlist">❤️</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
