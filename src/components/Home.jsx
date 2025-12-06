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
