// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/projects";
import Contact from "./components/Contact";
import MovingHeadline from "./components/MovingHeadline";
import About from "./components/About";
import Stats from "./components/Stats";

// Services and packages
import Services from "./components/services/Services";
import InteriorPackage from "./components/services/Interior";
import MainPackage from "./components/services/Main";
import Faqs from "./components/Faqs"; // Optional FAQ section
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <Router>
      {/* Navbar is outside Routes so it shows on every page */}
      <Navbar />

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <Projects />
              <MovingHeadline />
              <About />
              <Stats />
              <Services />
              <Faqs />     
              <Testimonials/>   {/* optional, if you added FAQ */}
              <Contact />
            </>
          }
        />

        {/* SERVICE PAGES */}
        <Route path="/interior-package" element={<InteriorPackage />} />
        <Route path="/main-package" element={<MainPackage />} />
      </Routes>
    </Router>
  );
}

export default App;
