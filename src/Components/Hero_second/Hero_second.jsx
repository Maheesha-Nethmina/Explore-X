import PropTypes from "prop-types";
import "./Hero_second.css";

const HeroSection = ({ image, title, description }) => {
  return (
    <div className="hero-section">
      {/* Background Image with Overlay */}
      <div className="hero-background" style={{ backgroundImage: `url(${image})` }}>
        <div className="hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

HeroSection.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default HeroSection;