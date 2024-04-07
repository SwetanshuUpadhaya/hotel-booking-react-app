import React from "react";
import "./hero-image.css";

const HeroImage = ({ title }) => {
  return (
    <section className="hero-image">
      <img
        src="https://images.unsplash.com/photo-1698930300147-655773e11d60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="hero image"
      />
      <div className="hero-overlay">
        <h1>{title}</h1>
      </div>
    </section>
  );
};

export default HeroImage;
