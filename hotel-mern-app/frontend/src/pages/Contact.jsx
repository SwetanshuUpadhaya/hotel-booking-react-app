import React from "react";
import HeroImage from "../components/hero-image/HeroImage";
import Query from "../components/query/Query";
import Newsletter from "../components/newsletter/Newsletter";
import "../styles/contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonHiking } from "@fortawesome/free-solid-svg-icons";
import sliderImage4 from "../assets/slider-images/sliderImg4.jpg";

const Contact = () => {
  return (
    <div className="contact-page">
      <HeroImage title={"Contact Us"} />
      <Query />
      <div className="contact-section">
        <img src={sliderImage4} alt="church" />
        <div className="img-overlay">
          <div className="img-overlay-text">
            <FontAwesomeIcon icon={faPersonHiking} className="trek-icon" />
            <h1>Plan an Unforgettable Experience in Dharamshala Today!</h1>
            <h2>
              We can help you fit your stay and experience within your allotted
              budget.
            </h2>
            <p>BOOK YOUR STAY NOW</p>
            <p>Customer Care: +91 88941-63563</p>
            <p>Sales Manager: +91 88941-63563</p>
          </div>
        </div>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3373.9476019380313!2d76.31659161127912!3d32.25949201014509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1712066963782!5m2!1sen!2sin"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Newsletter />
    </div>
  );
};

export default Contact;
