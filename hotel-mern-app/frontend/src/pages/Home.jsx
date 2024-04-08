import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css"; // Import CSS file for styling
import Slider from "../components/slider/Slider";
import BookNowForm from "../components/BookNowForm/BookNowForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonHiking,
  faMugSaucer,
  faMountainSun,
  faBellConcierge,
  faSquareParking,
} from "@fortawesome/free-solid-svg-icons";
import Newsletter from "../components/newsletter/Newsletter";
import Accommodation from "../components/accommodation/Accommodation";
import Query from "../components/query/Query";
import FacilitySlider from "../components/slider-2/FacilitySlider";

const Home = () => {
  const images = [
    "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1532339142463-fd0a8979791a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1606456817825-a0a0d88ae727?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1503265192943-9d7eea6fc77a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1609410065485-332392feb93b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="home-container">
      <Slider images={images} />
      <BookNowForm className="book-now-form" />
      <div className="about">
        <h1>Welcome to The Rudraksha Stays</h1>
        <h2>Experience the best Homestay & Cafe in Mcleod Ganj</h2>
        <p>
          The Nature Haven retreat offers an immersive experience of serene
          tranquility amidst the lush surroundings of McLeod Ganj. Embrace the
          essence of nature and peaceful living, indulging in fresh water,
          oxygen-rich air, and a rejuvenating lifestyle. Immerse yourself in the
          harmonious ambiance, relishing authentic local cuisine and creating
          cherished memories. Surrounded by breathtaking natural beauty and
          rejuvenating attractions, our sanctuary ensures easy access to scenic
          wonders with our knowledgeable guides. Additionally, we provide
          seamless transport arrangements for convenient exploration of nearby
          destinations, fostering a holistic experience of youthfulness and
          vitality.
        </p>
        <button className="btn">
          <Link to="/About" onClick={handleLinkClick}>
            About Us
          </Link>
        </button>
      </div>
      <div className="contact-section">
        <img
          src="https://images.unsplash.com/photo-1626621338418-713655538d99?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="church"
        />
        <div className="img-overlay">
          <div className="img-overlay-text">
            <FontAwesomeIcon icon={faPersonHiking} className="trek-icon" />
            <h1>Plan an Unforgettable Experience in Dharamshala Today!</h1>
            <h2>
              We can help you fit your stay and experience within your allotted
              budget.
            </h2>
            <h3>BOOK YOUR STAY NOW</h3>
            <p>Customer Care: +91 88941-63563</p>
            <p>Sales Manager: +91 88941-63563</p>
            <button className="btn">
              <Link to="/Contact" onClick={handleLinkClick}>
                Contact Us
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="rooms-section">
        <div className="rooms-text">
          <h2>Discover</h2>
          <h3>Rooms & Camps</h3>
        </div>
        <Accommodation />
        <div className="rooms-btn">
          <button className="btn">
            <Link to="/rooms" onClick={handleLinkClick}>
              View Accommodations
            </Link>
          </button>
        </div>
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

export default Home;
