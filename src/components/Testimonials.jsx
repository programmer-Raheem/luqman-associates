import React, { useState, useEffect } from "react";
import "./Testimonials.css";

const testimonialsData = [
  {
    name: "Sarah Williams",
    role: "Homeowner",
    image: "/review-5.jpg",
    rating: 5,
    review:
      "Absolutely amazing architectural services! The team turned my dream home into a reality. Professional, timely, and highly creative.",
  },
  {
    name: "Mark Johnson",
    role: "Business Owner",
    image: "/review-2.jpg",
    rating: 4,
    review:
      "The office redesign was superb. They understood our brand identity perfectly and delivered more than expected.",
  },
  {
    name: "Fazal Khan",
    role: "Real state developer",
    image: "/review-4.jpg",
    rating: 5,
    review:
      "Their 3D visualization made all the difference. I could see the design before construction, which helped me make the right choices.",
  },
  {
    name: "David Lee",
    role: "Interior Enthusiast",
    image: "/review-1.jpg",
    rating: 5,
    review:
      "Highly recommend! The architecture team is detail-oriented and truly listens to clients’ needs. Efficient and creative.",
  },
  {
    name: "Sadia Arif",
    role: "Entrepreneur",
    image: "/review-3.jpg",
    rating: 4,
    review:
      "Fantastic service! They delivered on time and made the entire process smooth and enjoyable. Very professional team.",
  },
  {
    name: "Sanwao",
    role: "Interior Designer",
    image: "/review-6.jpg",
    rating: 5,
    review:
      "I loved working with this team! Their designs are both practical and stunning. Highly recommend for any project.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  // Update number of visible cards based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) setItemsToShow(1);
      else if (window.innerWidth <= 1024) setItemsToShow(2);
      else setItemsToShow(3);
      setCurrentIndex(0);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => {
    if (currentIndex < testimonialsData.length - itemsToShow) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const slideWidth = 100 / itemsToShow;

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-heading">
        <h2>What Our Clients Say</h2>
        <p>Real feedback from people who trusted us with their projects.</p>
      </div>

      <div className="testimonial-wrapper">
        <button className="arrow left" onClick={prev} disabled={currentIndex === 0}>
          &#10094;
        </button>

        <div className="testimonials-slider">
          <div
            className="testimonials-grid"
            style={{
              transform: `translateX(-${currentIndex * slideWidth}%)`,
            }}
          >
            {testimonialsData.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card"
                style={{ flex: `0 0 ${slideWidth}%` }}
              >
                <div className="testimonial-top">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="testimonial-img"
                  />
                  <div className="testimonial-info">
                    <h3>{testimonial.name}</h3>
                    <p className="testimonial-role">{testimonial.role}</p>
                    <div className="testimonial-rating">
                      {"★".repeat(testimonial.rating)}
                      {"☆".repeat(5 - testimonial.rating)}
                    </div>
                  </div>
                </div>
                <p className="testimonial-text">{testimonial.review}</p>
              </div>
            ))}
          </div>
        </div>

        <button
          className="arrow right"
          onClick={next}
          disabled={currentIndex >= testimonialsData.length - itemsToShow}
        >
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
