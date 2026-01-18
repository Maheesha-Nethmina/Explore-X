import { useState } from "react";
import Hero_second from '../Components/Hero_second/Hero_second';
import Navbar from '../Components/Navbar/Navbar';
import Welcome from '../Components/Welcome/Welcome';
import './Gallery.css';
import HeroImg from "../assets/hero15.jpg";

import image1 from "../assets/gallery1.jpg";
import image2 from "../assets/gallery2.jpg";
import image3 from "../assets/gallery3.jpg";
import image4 from "../assets/gallery4.jpg";
import image5 from "../assets/gallery5.jpg";
import image6 from "../assets/gallery6.jpg";
import image7 from "../assets/gallery7.jpg";
import image8 from "../assets/gallery8.jpg";
import image9 from "../assets/gallery9.jpg";
import image10 from "../assets/gallery10.jpg";
import image11 from "../assets/gallery11.jpg";
import image12 from "../assets/gallery12.jpg";
import image13 from "../assets/gallery13.jpg";
import image14 from "../assets/gallery14.jpg";
import image15 from "../assets/gallery15.jpg";
import image16 from "../assets/gallery16.jpg";
import image17 from "../assets/gallery17.jpg";
import image18 from "../assets/gallery18.jpg";
import image19 from "../assets/gallery19.jpg";
import image20 from "../assets/gallery20.jpg";
import Footer from "../Components/Footer/Footer";

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10,image11,image12,image13,image14,image15,image16,image17,image18,image19,image20];

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
    <div>
      <Welcome />
      <Navbar />
      <Hero_second image={HeroImg} title="Gallery" description="" />

      <section className="gallery-section">
        

        <div className="gallery-grid">
          {images.map((src, index) => (
            <div key={index} className="gallery-item" onClick={() => openModal(src)}>
              <img src={src} alt={`Destination ${index + 1}`} />
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={closeModal}>&times;</button>
              <img src={selectedImage} alt="Enlarged view" />
            </div>
          </div>
        )}
      </section>
      <Footer/>
    </div>
  );
}

export default Gallery;
