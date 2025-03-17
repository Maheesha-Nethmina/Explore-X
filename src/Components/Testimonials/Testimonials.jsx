import { useState } from 'react';
import './Testimonial.css'; // Import your CSS

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    name: "John Abraham",
    location: "New York, USA",
    avatar: "avatar1.jpg",
    rating: 5,
  },
  {
    text: "Quis nostrum cupiditate, eligendi repellendus...",
    name: "Jane Doe",
    location: "California, USA",
    avatar: "avatar2.jpg",
    rating: 4,
  },
  {
    text: "Architecto dicta quisquam quasi porro officiis...",
    name: "Emily Clark",
    location: "London, UK",
    avatar: "avatar3.jpg",
    rating: 5,
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="testimonial-carousel">
      <h2>TESTIMONIAL</h2>
      <h3>Our Clients Say!!!</h3>
      <div className="carousel">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`testimonial-card ${
              index === currentIndex ? 'active' : 'inactive'
            }`}
          >
            <p>{testimonial.text}</p>
            <div className="client-info">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="avatar"
              />
              <h4>{testimonial.name}</h4>
              <p>{testimonial.location}</p>
              <div className="stars">
                {'★'.repeat(testimonial.rating)}
                {'☆'.repeat(5 - testimonial.rating)}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="navigation">
        <button onClick={prevTestimonial}>&larr;</button>
        <button onClick={nextTestimonial}>&rarr;</button>
      </div>
      <div className="dots">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
