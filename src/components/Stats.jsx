import React, { useRef, useEffect, useState } from "react";
import "./Stats.css";

const statsData = [
  { title: "Projects Delivered", value: 150, icon: "🏗️" },
  { title: "Global Clients", value: 30, icon: "🌍" },
  { title: "Awards Won", value: 12, icon: "🏆" },
  { title: "Years of Experience", value: 10, icon: "⏳" },
];

const StatsWithCTA = () => {
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => setInView(entry.isIntersecting)),
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView) {
      statsData.forEach((stat, idx) => {
        let start = 0;
        const end = stat.value;
        const duration = 1500;
        const increment = end / (duration / 30);
        const interval = setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(interval);
          }
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[idx] = Math.floor(start);
            return newCounts;
          });
        }, 30);
      });
    }
  }, [inView]);

  return (
    <section className="stats-section" ref={containerRef}>
      <div className="stats-container">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className={`stat-card ${inView ? "fade-in-up" : ""}`}
            style={{ transitionDelay: `${index * 0.2}s` }}
          >
            <div className="stat-icon">{stat.icon}</div>
            <h3 className="stat-value">{counts[index]}+</h3>
            <p className="stat-title">{stat.title}</p>
          </div>
        ))}
      </div>

      {/* Call-to-action */}
      <div className="stats-cta">
        <h2>Ready to build your dream project?</h2>
        <button>Contact Us Now</button>
      </div>
    </section>
  );
};

export default StatsWithCTA;

    