import React from "react";
import "./hero-image.css";
import heroImage from "../../assets/heroImg.jpg";

const HeroImage = ({ title }) => {
  return (
    <section className="hero-image">
      <img src={heroImage} alt="hero image" />
      <div className="hero-overlay">
        <h1>{title}</h1>
      </div>
    </section>
  );
};

export default HeroImage;
