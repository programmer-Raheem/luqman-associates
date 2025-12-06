import React, { useEffect } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link for navigation
import "./Services.css";

const Services = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          } else {
            entry.target.classList.remove("fade-in"); // remove when out of view
          }
        });
      },
      { threshold: 0.2 }
    );

    const targets = document.querySelectorAll(
      ".services-heading, .package-title, .service-card, .btn-wrapper"
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const interiorServices = [
    {
      img: "img-7.jpeg",
      title: "Floor Design",
      desc: "Beautiful and durable flooring layouts customized for every room.",
    },
    {
      img: "img-8.jpeg",
      title: "Door & Ceiling Design",
      desc: "Premium modern door styles paired with elegant ceiling concepts.",
    },
    {
      img: "img-9.jpeg",
      title: "Kitchen Design",
      desc: "Functional, stylish kitchen and bathroom layouts built for comfort.",
    },
  ];

  const mainServices = [
    {
      img: "img-10.jpeg",
      title: "Architectural Designs",
      desc: "Complete architectural planning with premium 2D & 3D visuals.",
    },
    {
      img: "img-11.jpeg",
      title: "Submission Drawings",
      desc: "Foundation, structure, plumbing and electrical drawings included.",
    },
    {
      img: "img-12.jpg",
      title: "3D Front Views",
      desc: "High-end 3D rendering showcasing the exact look of your building.",
    },
  ];

  return (
    <section className="services-section" id="services">
      {/* Heading */}
      <div className="services-heading">
        <h2>Transforming Spaces With Precision & Creativity</h2>
        <p>Premium architectural & interior solutions crafted just for you.</p>
      </div>

      {/* Interior Package */}
      <div className="package-wrapper">
        <h3 className="package-title">Interior Package</h3>
        <div className="cards-container">
          {interiorServices.map((service, index) => (
            <div className="service-card" key={index}>
              <img src={service.img} alt={service.title} />
              <h4>{service.title}</h4>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
        <div className="btn-wrapper">
          {/* ✅ Wrap button in Link */}
          <Link to="/interior-package">
            <button className="view-btn">View Full Interior Package</button>
          </Link>
        </div>
      </div>

      {/* Main Package */}
      <div className="package-wrapper">
        <h3 className="package-title">Main Package</h3>
        <div className="cards-container">
          {mainServices.map((service, index) => (
            <div className="service-card" key={index}>
              <img src={service.img} alt={service.title} loading="lazy" />
              <h4>{service.title}</h4>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
        <div className="btn-wrapper">
          {/* ✅ Wrap button in Link */}
          <Link to="/main-package">
            <button className="view-btn">View Full Main Package</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
