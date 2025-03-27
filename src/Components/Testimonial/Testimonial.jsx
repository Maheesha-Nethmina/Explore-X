
    import './Testimonial.css';

    const testimonials = [
    {
        name: "Saman Kumara Perera",
        text: "This product really helped my brand expand in a very manageable way. Would really use this for any future expansion.",
        role: "Software Engineer",
        image: "https://randomuser.me/api/portraits/men/12.jpg",
    },
   
     {
        name: "Ms. Shamila Kumari",
        text: "Scalability will never be an issue now for my brand!",
        role: "ANI, CEO",
        image: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    {
        name: "Mr. Nimal Perera",
        text: "The product is really easy to use that I didn’t have to set a training for my employees.",
        role: "Golden ABC, CEO",
        image: "https://randomuser.me/api/portraits/men/13.jpg",
    }
    ];

    const TestimonialSlider = () => {
    return (
        <div className="testimonial-container">
            <div className="testimonial-text-section">
                <h2 className="title">What Our Clients Say – Real Stories, Real Experiences!</h2>
                <p className="subtitle">Explore the worlds most breathtaking destinations, uncover hidden gems, and create unforgettable<br/> travel experiences tailored to your adventure.</p>
                <button className="read-more">Read success stories</button>
            </div>
            <div className="testimonial-cards">
                {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                    <p className="testimonial-quote">“{testimonial.text}”</p>
                    <div className="testimonial-footer">
                    <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                    <div>
                        <h4 className="testimonial-name">{testimonial.name}</h4>
                        <p className="testimonial-role">{testimonial.role}</p>
                    </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
    };

    export default TestimonialSlider;
