// src/components/services/Interior.jsx
import React, { useEffect, useRef } from "react";
import "./Interior.css";

const services = [
  {
    id: "floor-design",
    title: "Floor Design",
    img: "https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg",
    desc:
      "Modern and functional floor layouts: tile patterns, hardwood options, zoning and circulation flow with premium finish recommendations.",
    features: [
      "Material selection & samples",
      "Traffic flow & zoning",
      "Underfloor heating planning (optional)",
    ],
  },
  {
    id: "ceiling-design",
    title: "Ceiling Design",
    img: "https://images.pexels.com/photos/271667/pexels-photo-271667.jpeg",
    desc:
      "Custom false ceiling concepts with integrated lighting, acoustic solutions and decorative details to enhance room ambiance.",
    features: ["Gypsum/cove layouts", "Recessed lighting design", "Acoustic panels"],
  },
  {
    id: "wall-design",
    title: "Wall Design",
    img: "https://images.pexels.com/photos/8138430/pexels-photo-8138430.jpeg",
    desc:
      "Feature wall concepts, cladding, textures, and paint/wallpaper schemes that create focal points and strengthen your interior palette.",
    features: ["Paneling & cladding", "Texture & paint finishes", "Feature lighting"],
  },
  {
    id: "door-design",
    title: "Door Design",
    img: "https://images.pexels.com/photos/7166935/pexels-photo-7166935.jpeg",
    desc:
      "Custom door solutions including main doors, internal doors, sliding/hidden doors with secure hardware and premium finishes.",
    features: ["Material & hardware specs", "Security & locking options", "Concealed/frameless designs"],
  },
  {
    id: "window-design",
    title: "Window Design",
    img: "https://images.pexels.com/photos/34225003/pexels-photo-34225003.jpeg",
    desc:
      "Window placement, sizing and frame specification (aluminium/UPVC) to maximize daylight, views, and natural ventilation.",
    features: ["Daylight optimization", "Frame & glazing selection", "Privacy & shading strategies"],
  },
  {
    id: "kitchen-design",
    title: "Kitchen Design",
    img: "https://images.pexels.com/photos/3016430/pexels-photo-3016430.jpeg",
    desc:
      "Functional modular kitchens with ergonomic workflows, storage solutions, appliance layouts and durable finishes built for daily life.",
    features: ["Cabinetry & fittings", "Work triangle optimization", "Lighting & workflow plans"],
  },
  {
    id: "bath-design",
    title: "Bath Design",
    img: "https://images.pexels.com/photos/2207894/pexels-photo-2207894.jpeg",
    desc:
      "Bathroom planning including sanitary selection, waterproof detailing, drainage slope design and elegant vanity solutions.",
    features: ["Waterproofing & slopes", "Fixture specification", "Vanity & storage planning"],
  },
];

const QuickList = ({ items }) => (
  <ul className="quick-list">
    {items.map((it) => (
      <li key={it}>
        <svg className="check" viewBox="0 0 24 24" aria-hidden>
          <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span>{it}</span>
      </li>
    ))}
  </ul>
);

const Interior = () => {
  const rootRef = useRef(null);

  // Scroll to top when this page loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  // Intersection Observer for fade-in animations
  useEffect(() => {
    const els = rootRef.current.querySelectorAll(
      ".hero-inner, .quick-overview, .package-card, .page-cta"
    );
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
    <main className="interior-page" ref={rootRef}>
      <header className="interior-hero">
        <div className="hero-inner">
             <p className="hero-subtitle">MAIN PACKAGE</p>
          <h1>Designing Interiors that Feel Like Home</h1>
          <p className="lead">
            Our Interior Package covers end-to-end interior design — from schematic concepts to execution-ready drawings and specifications.
          </p>
          <div className="hero-actions">
            <a href="#packages" className="btn-primary">Explore Services</a>
            <a href="#contact" className="btn-ghost">Request a Quote</a>
          </div>
        </div>

        <div className="hero-image" aria-hidden>
          <img src="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg" alt="Interior hero" />
        </div>
      </header>

      <section className="quick-overview">
        <div className="overview-left">
          <h2>Interior Package Includes</h2>
          <p>Comprehensive interior services to craft beautiful and functional living spaces.</p>
          <QuickList items={services.map(s => s.title)} />
        </div>
        <div className="overview-right">
          <div className="overview-card">
            <h3>Why Choose This Package</h3>
            <p>Cost-effective sourcing, efficient execution drawings, and flexible options for every budget — with sustainable material choices where possible.</p>
            <a className="btn-outline" href="#contact">Get Started</a>
          </div>
        </div>
      </section>

      <section id="packages" className="packages-section">
        <h2 className="section-title">Detailed Services</h2>
        <p className="section-sub">Click any card to request a consultation.</p>

        <div className="cards-grid">
          {services.map((s, idx) => (
            <article key={s.id} className="package-card" style={{ transitionDelay: `${idx * 0.12}s` }}>
              <div className="card-media">
                <img src={`${s.img}?auto=compress&cs=tinysrgb&w=1200`} alt={s.title} />
              </div>

              <div className="card-body">
                <div className="card-head">
                  <h3>{s.title}</h3>
                  <span className="pill">Interior</span>
                </div>

                <p className="card-desc">{s.desc}</p>

                <ul className="card-features">
                  {s.features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>

                <div className="card-actions">
                  {/* Removed Download button */}
                  <a className="btn-primary" href="#contact">Request Service</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page-cta">
        <div className="cta-inner">
          <h2>Ready to transform your interiors?</h2>
          <p>Schedule a free consultation and we'll provide an initial proposal and rough estimate.</p>
          <a href="#contact" className="btn-cta">Get a Quote</a>
        </div>
      </section>
    </main>
  );
};

export default Interior;
