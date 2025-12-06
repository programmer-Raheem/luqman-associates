import React, { useEffect, useRef, useState } from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    { title: "Modern House 1", description: "A luxurious modern home with a clean architectural profile.", image: "/img-1.jpg", pdf: "/pdf-1.pdf", tags: ["Modern", "Luxury", "Architecture"] },
    { title: "Modern House 2", description: "Elegant interior design with premium woodwork and lighting.", image: "/img-2.jpg", pdf: "/pdf-2.pdf", tags: ["Interior", "Lighting", "Premium"] },
    { title: "Villa House 3", description: "A high-end villa with custom marble and glass structure.", image: "/img-3.jpg", pdf: "/pdf-3.pdf", tags: ["Villa", "Glass", "Custom"] },
    { title: "Furnished House 4", description: "Beautifully furnished home with modern layout and textures.", image: "/img-4.jpg", pdf: "/pdf-4.pdf", tags: ["Furnished", "Design", "Modern"] },
    { title: "Classic House 5", description: "Classic architectural style blended with modern materials.", image: "/img-5.jpg", pdf: "/pdf-5.pdf", tags: ["Classic", "Architecture", "Premium"] },
    { title: "Luxury House 6", description: "A fully detailed luxury home with top-tier finishes.", image: "/img-6.jpg", pdf: "/pdf-6.pdf", tags: ["Luxury", "Details", "High-End"] },
  ];

  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    // Observer for section heading
    const sectionObserver = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) sectionObserver.observe(sectionRef.current);

    // Observer for project cards with enter and leave
    const cards = document.querySelectorAll(".project-card-horizontal");
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          } else {
            entry.target.classList.remove("animate-in"); // remove class when leaving
          }
        });
      },
      { threshold: 0.3 }
    );
    cards.forEach((card) => cardObserver.observe(card));

    return () => {
      sectionObserver.disconnect();
      cardObserver.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="projects-section-horizontal" id="projects">
      <h1 className={`section-title ${inView ? "in-view" : ""}`}>Projects</h1>

      <div className="horizontal-scroll">
        {projects.map((project, index) => (
          <div
            className={`project-card-horizontal direction-${index % 4}`}
            key={index}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tags">
                {project.tags.map((tag, i) => (
                  <span className="tag" key={i}>
                    {tag}
                  </span>
                ))}
              </div>

              <a
                className="view-project-btn"
                href={project.pdf}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
