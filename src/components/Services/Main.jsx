// src/components/Main.jsx
import React, { useEffect, useRef } from "react";
import "./Main.css";

const services = [
  {
    id: "architectural-drawings",
    title: "Architectural Drawings",
    img: "https://images.pexels.com/photos/271667/pexels-photo-271667.jpeg",
    desc:
      "Complete architectural plans: floor plans, elevations and sections tailored to site and client needs.",
    items: ["Schematic design", "Design development", "Construction drawings"],
  },
  {
    id: "submission-drawings",
    title: "Submission Drawings",
    img: "https://images.pexels.com/photos/5582599/pexels-photo-5582599.jpeg",
    desc:
      "Authority-ready drawings correctly formatted to local regulations, reducing approval cycles and revisions.",
    items: ["Site plan", "Elevations", "Compliance documentation"],
  },
  {
    id: "furniture-layout",
    title: "Furniture Layout",
    img: "https://images.pexels.com/photos/7546318/pexels-photo-7546318.jpeg",
    desc:
      "Optimal furniture arrangements to improve circulation, comfort and spatial efficiency for every room.",
    items: ["Space planning", "Ergonomic placement", "Custom joinery suggestions"],
  },
  {
    id: "foundation-drawings",
    title: "Foundation Drawings",
    img: "https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg",
    desc:
      "Technical foundation plans showing footing sizes, reinforcement details and load distribution recommendations.",
    items: ["Footing schedule", "Reinforcement details", "Soil consideration notes"],
  },
  {
    id: "working-drawings",
    title: "Working Drawings",
    img: "https://images.pexels.com/photos/6614747/pexels-photo-6614747.jpeg",
    desc:
      "Execution-ready drawings for contractors (detailed carpentry, masonry, finishes) to ensure build quality and speed.",
    items: ["Carpentry details", "Finishes schedule", "Installation notes"],
  },
  {
    id: "structure-drawings",
    title: "Structure Drawings",
    img: "https://images.pexels.com/photos/1320737/pexels-photo-1320737.jpeg",
    desc:
      "Structural engineering drawings: beams, columns, slab and reinforcement details coordinated with architectural layouts.",
    items: ["RCC schedules", "Beam/column details", "Slab reinforcement"],
  },
  {
    id: "electrical-drawings",
    title: "Electrical Drawings",
    img: "https://images.pexels.com/photos/4263057/pexels-photo-4263057.jpeg",
    desc:
      "Complete electrical layouts including lighting design, wiring routes, switch layouts and load calculations.",
    items: ["Lighting circuits", "Switchboard layout", "Power distribution"],
  },
  {
    id: "plumbing-drawings",
    title: "Plumbing Drawings",
    img: "https://images.pexels.com/photos/14953886/pexels-photo-14953886.jpeg",
    desc:
      "Plumbing and drainage plans with pipe routing, fixture positions, and hot & cold water separation for maintenance ease.",
    items: ["Pipe routes", "Fixture layout", "Slope & drainage notes"],
  },
  {
    id: "sewerage-drawings",
    title: "Sewerage Drawings",
    img: "https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg",
    desc:
      "Underground sewer routing, manhole positions, slopes and connection details to municipal lines.",
    items: ["Slope planning", "Manhole details", "Outlet connections"],
  },
  {
    id: "front-3d-views",
    title: "Front 3D Views",
    img: "https://images.pexels.com/photos/33747711/pexels-photo-33747711.png",
    desc:
      "Photoreal front elevation renders to visualize materials, lighting and facade composition before construction.",
    items: ["Day/night renders", "Material mockups", "Facade detailing"],
  },
];

const Main = () => {
  const root = useRef(null);

  // Scroll to top when this page mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  // IntersectionObserver for fade-in animations
  useEffect(() => {
    const els = root.current.querySelectorAll(".main-hero, .service-card, .page-cta");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("fade-in");
          else entry.target.classList.remove("fade-in");
        });
      },
      { threshold: 0.18 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <main className="main-page" ref={root}>
      {/* HERO SECTION */}
      <header className="main-hero">
        <div className="intro-area">
          <p className="hero-subtitle">MAIN PACKAGE</p>
          <h1 className="hero-title">
            Technical Clarity from Concept to Construction
          </h1>
          <p className="lead">
            Full technical documentation, coordination, and photoreal visualizations for seamless delivery.
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href="#services">See Details</a>
            <a className="btn-ghost" href="#contact">Contact Us</a>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg"
            alt="Main hero"
          />
        </div>
      </header>

      {/* SERVICES SECTION */}
      <section className="services-list" id="services">
        <h2 className="section-title">Services included in Main Package</h2>
        <p className="section-sub">Complete technical deliverables covering every construction stage.</p>

        <div className="service-grid">
          {services.map((s, idx) => (
            <article
              key={s.id}
              className="service-card"
              style={{ transitionDelay: `${idx * 0.08}s` }}
            >
              <div className="media">
                <img src={`${s.img}?auto=compress&cs=tinysrgb&w=1200`} alt={s.title} />
              </div>
              <div className="body">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul>
                  {s.items.map((it, i) => (
                    <li key={i}>{it}</li>
                  ))}
                </ul>

                <div className="actions">
                  <a className="btn-primary" href="#contact">Get Quote</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="page-cta">
        <div className="cta-inner">
          <h2>Start your project with confidence</h2>
          <p>
            We provide schedules, cost-aware options and clear technical packages to keep construction predictable.
          </p>
          <a className="btn-cta" href="#contact">Request Consultation</a>
        </div>
      </section>
    </main>
  );
};

export default Main;
