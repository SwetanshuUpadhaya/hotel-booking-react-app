import React from "react";
import "../styles/about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonHiking,
  faMugSaucer,
  faMountainSun,
  faBellConcierge,
  faSquareParking,
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
            <h2>CAFE</h2>
            <p>
              We have in-house restaurant and cafe offering different cuisines
              that you can choose from.
            </p>
          </div>
          <div className="facility-card">
            <FontAwesomeIcon icon={faMountainSun} className="facility-icon" />
            <h2>TOUR</h2>
            <p>
              Among the scenic beauty of the city we also have an mountain View
              balcony for every suite in our hotel.
            </p>
          </div>
          <div className="facility-card">
            <FontAwesomeIcon icon={faBellConcierge} className="facility-icon" />
            <h2>ROOM SERVICE</h2>
            <p>
              Enjoy dinner without leaving the comfort and privacy of your hotel
              room or suite.
            </p>
          </div>
          <div className="facility-card">
            <FontAwesomeIcon icon={faSquareParking} className="facility-icon" />
            <h2>PARKING</h2>
            <p>
              Want to park your vehicle? All our guests get complimentary access
              to our private parking.
            </p>
          </div>
        </div>
      </div>
      <FacilitySlider />
      <Query />
      <Newsletter />
    </div>
  );
};

export default About;
