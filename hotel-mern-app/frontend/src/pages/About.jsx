import React from "react";
import "../styles/about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonHiking,
  faMugSaucer,
  faMountainSun,
  faBellConcierge,
  faDog,
} from "@fortawesome/free-solid-svg-icons";
import FacilitySlider from "../components/slider-2/FacilitySlider";
import Query from "../components/query/Query";
import Newsletter from "../components/newsletter/Newsletter";
import HeroImage from "../components/hero-image/HeroImage";
import logo from "../assets/logo.png";

const About = () => {
  return (
    <div>
      <HeroImage title={"About Us"} />
      <div className="about about-page">
        <div className="about-text">
          <h1>Welcome to The Rudraksha Stays</h1>
          <h2>Experience the best Homestay & Cafe in Mcleod Ganj</h2>
          <p>
            The Rudraksha Stays will help you experience McLeod Ganj life in its
            true sense. From living among the residents to eating authentic
            delicacies you are sure to walk home with memories and wonderful
            moments. Surrounded by scenic beauty and attractive tourist
            attractions we make it convenient for you to visit all the beautiful
            places with our inhouse guide. We can also help you arrange
            transport facilities for an easier commute to nearby places.
          </p>
        </div>
        <img src={logo} alt="logo" width={350} height={350} />
      </div>
      <div className="facility-section">
        <div className="facility-container">
          <div className="facility-card">
            <FontAwesomeIcon icon={faMugSaucer} className="facility-icon" />
            <h2>CAFE & LOUNGE</h2>
            <p>
              "Indulge in mountain comfort at our cafe. Treat yourself to
              locally sourced delights with stunning views, creating
              unforgettable moments amidst nature's embrace."
            </p>
          </div>
          <div className="facility-card">
            <FontAwesomeIcon icon={faMountainSun} className="facility-icon" />
            <h2>ADVENTURE</h2>
            <p>
              "Embark on unforgettable adventures with our guided tours amidst
              the stunning Dhauladhar range. Discover hidden gems and vistas.
              Experience nature's wonders!"
            </p>
          </div>
          <div className="facility-card">
            <FontAwesomeIcon icon={faBellConcierge} className="facility-icon" />
            <h2>ROOM SERVICE</h2>
            <p>
              "Enjoy the convenience of room service amidst mountain serenity.
              Indulge in delicious meals delivered right to your door, enhancing
              your retreat at our homestay."
            </p>
          </div>
          <div className="facility-card">
            <FontAwesomeIcon icon={faDog} className="facility-icon" />
            <h2>PET FRIENDLY</h2>
            <p>
              "Embrace adventure with your furry companion at our homestay.
              Discover scenic trails and cozy accommodations, ensuring a
              memorable getaway for you and your pet."
            </p>
          </div>
        </div>
      </div>
      <FacilitySlider />
      <Newsletter />
    </div>
  );
};

export default About;
