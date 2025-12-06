import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import { FaLeaf, FaDollarSign, FaRegClock, FaShieldAlt } from "react-icons/fa";

const aboutReasons = [
  {
    icon: <FaDollarSign />,
    title: "Cost Effective",
    desc: "We provide modern architectural solutions without compromising quality, ensuring your investment is worthwhile.",
  },
  {
    icon: <FaLeaf />,
    title: "Environment Friendly",
    desc: "Our designs prioritize sustainability and eco-friendly materials to reduce environmental impact.",
  },
  {
    icon: <FaRegClock />,
    title: "Timely Delivery",
    desc: "We value your time and ensure projects are completed within the agreed schedule.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Trusted & Secure",
    desc: "Our clients trust us for professional, reliable, and safe construction practices.",
  },
];

const About = () => {
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setInView(entry.isIntersecting));
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section" ref={containerRef}>
      <div className="about-top">
        {/* Left side: Headline + Image */}
        <div className={`about-left ${inView ? "fade-in-left" : ""}`}>
          <h1>Your Partner in Modern Architecture</h1>
          <img 
            src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800" 
            alt="Architecture" 
          />
        </div>

        {/* Right side: Cards */}
        <div className="about-right">
          <h2 className={`reasons-title ${inView ? "fade-in" : ""}`}>Why Choose Us</h2>
          <div className="reasons-list">
            {aboutReasons.map((reason, index) => (
              <div
                key={index}
                className={`reason-card ${inView ? "fade-in-up" : ""}`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div className="icon">{reason.icon}</div>
                <h4>{reason.title}</h4>
                <p>{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
