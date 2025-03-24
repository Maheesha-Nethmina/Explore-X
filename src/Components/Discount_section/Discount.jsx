import './Discount.css';
import discount from '../../assets/discount2.jpg';

function Discount() {
  return (
    <div className='discount'>
      <div className="banner-image">
        <div className="overlay"></div> 
        <img src={discount} alt="banner" />
        <div className="content">
          <h1>Get 10% Discount For Your Next Holiday.</h1>
          <button>Explore Now</button>
        </div>
      </div>
    </div>
  );
}

export default Discount;
