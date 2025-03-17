import "./Tour.css";
import Kyoto from "../../assets/Kyoto, Japan.jpg";
import Thailand from "../../assets/Thailand.jpg";
import Australia from "../../assets/Australia.jpg";
import Indonesia from "../../assets/Indonesia.jpg";
import Maldives from "../../assets/Maldives1.jpg";
import Switzerland from "../../assets/Switzerland.jpg";


const CardSection = () => {
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
    <>
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
      <div className="more-destionation  ">
        <button>Explore Destinations</button>
      </div>

    </>
  );
};

export default CardSection;
