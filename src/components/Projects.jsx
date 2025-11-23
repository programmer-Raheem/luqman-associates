import React, { useRef, useState, useEffect } from "react";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "Modern Villa",
    desc: "Minimalistic villa with large windows and open spaces.",
    img: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Modern", "Minimalistic", "Luxury"],
  },
  {
    id: 2,
    title: "Luxury House",
    desc: "Spacious luxury house with landscaped gardens and modern interiors.",
    img: "https://images.pexels.com/photos/261146/pexels-photo-261146.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Luxury", "Residential", "Spacious"],
  },
  {
    id: 3,
    title: "Office Complex",
    desc: "Contemporary office building designed for productivity.",
    img: "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg",
    tags: ["Commercial", "Contemporary", "Collaborative"],
  },
  {
    id: 4,
    title: "Beach House",
    desc: "Serene beach house with panoramic ocean views.",
    img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Beachfront", "Minimalistic", "Relaxing"],
  },
  {
    id: 5,
    title: "Urban Apartment",
    desc: "Smart urban apartment design with city views.",
    img: "https://images.pexels.com/photos/373488/pexels-photo-373488.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Urban", "Modern", "Compact"],
  },
];

const Projects = () => {
  const [inView, setInView] = useState(false);
  const containerRef = useRef(null);

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
    <section className="projects-section-horizontal" ref={containerRef}>
      <h2 className={`section-title ${inView ? "in-view" : ""}`}>Projects</h2>
      <div className="horizontal-scroll">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`project-card-horizontal ${inView ? "animate-in" : ""} direction-${index % 4}`}
          >
            <div className="project-image">
              <img src={project.img} alt={project.title} />
              <div className="overlay">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
