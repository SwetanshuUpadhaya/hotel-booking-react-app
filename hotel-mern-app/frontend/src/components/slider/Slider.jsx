import React, { useState, useEffect } from "react";
import "./slider.css"; // Import CSS file for styling

const Slider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === images.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [currentSlide, images]);

  return (
    <div className="slider">
      {images.map((image, index) => (
        <div
          key={index}
          className={index === currentSlide ? "slide active" : "slide"}
        >
          <img src={image} alt={`Slide ${index}`} />
          <div className="dark-overlay">
            <div className="dark-overlay-text">
              <span className="line_top"></span>
              <h1>ॐ नमः शिवाय</h1>
              <h2>The Rudraksha Stays</h2>
              <h3>Homestay & Cafe</h3>
              <span className="line_bottom"></span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
