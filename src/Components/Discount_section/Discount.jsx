import './Discount.css';
import discount from '../../assets/discount4.jpg';

function Discount() {
  return (
    <div className='discount'>
      <div className="banner-image">
       
        <img src={discount} alt="banner" />
        <div className="overlay"></div>
        <div className="content">
          <h1>Get 10% Discount For Your Next Destination.</h1>
          <p>Enjoy an exclusive 10% discount on your next holiday! Whether you are planning a relaxing beach escape or an exciting adventure, now is the perfect time to explore. Book now and make unforgettable memories for less!</p>
          <button>Explore Now</button>
        </div>
      </div>
    </div>
  );
}

export default Discount;
