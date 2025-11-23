import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="wrapper">
      {/* Background Video */}
      <video
        className="bg-video show"
        src="/video.mp4"
        muted
        autoPlay
        loop
      ></video>

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src="/logo.png" alt="Logo" />
        </div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a className="active" href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About Us</a></li>
          <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact Us</a></li>
          <li><a href="#feedback" onClick={() => setMenuOpen(false)}>Feedback</a></li>
        </ul>

        {/* Hamburger Icon */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="center">
        <h1>Welcome to Luqman Associates</h1>
        <h2>Design your dream</h2>
        <div className="buttons">
          <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
            View Projects
          </button>
          <button className="btn" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
            Get a Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
