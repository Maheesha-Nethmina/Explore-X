import { useState } from "react";
import "./Gallery.css";

import image1 from "../../assets/gallery1.jpg";
import image2 from "../../assets/gallery2.jpg";
import image3 from "../../assets/gallery3.jpg";
import image4 from "../../assets/gallery4.jpg";
import image5 from "../../assets/gallery5.jpg";
import image6 from "../../assets/gallery6.jpg";
import image7 from "../../assets/gallery7.jpg";
import image8 from "../../assets/gallery8.jpg";
import image9 from "../../assets/gallery9.jpg";
import image10 from "../../assets/gallery10.jpg";

const images = [image1, image2, image3, image4, image5, image6, image7, image8,image9, image10];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto"; // Re-enable scrolling
  };

  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <h2>Explore The Most Beautiful</h2>
        <h1>Places In The World</h1>
        <p>
          Whether you are exploring your own city or an unfamiliar destination
          in any of the four corners of the globe, our list of the best places to
          explore will ignite a fire of curiosity, inspiration and motivation in
        </p>
      </div>
      
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div 
            key={index} 
            className="gallery-item"
            onClick={() => openModal(src)}
          >
            <img src={src} alt={`Destination ${index + 1}`} />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <img src={selectedImage} alt="Enlarged view" />
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;