import React from "react";
import "./Services.css";

const ServiceCard = ({ title, description, img, link }) => {
  return (
    <div className="service-card">
      <div className="card-image">
        <img src={img} alt={title} />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} className="read-more-btn">See More</a>
      </div>
    </div>
  );
};

export default ServiceCard;
