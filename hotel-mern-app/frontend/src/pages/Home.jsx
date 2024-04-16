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
  faDog,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Newsletter from "../components/newsletter/Newsletter";
import Accommodation from "../components/accommodation/Accommodation";
import Query from "../components/query/Query";
import FacilitySlider from "../components/slider-2/FacilitySlider";
import sliderImage1 from "../assets/slider-images/sliderImg1.jpg";
import sliderImage2 from "../assets/slider-images/sliderImg2.jpg";
import sliderImage3 from "../assets/slider-images/sliderImg3.jpg";
import sliderImage4 from "../assets/slider-images/sliderImg4.jpg";
import sliderImage5 from "../assets/slider-images/sliderImg5.jpg";
import sliderImage6 from "../assets/slider-images/sliderImg6.jpg";

const Home = () => {
  const images = [
    sliderImage1,
    sliderImage2,
    sliderImage3,
    sliderImage4,
    sliderImage5,
    sliderImage6,
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
          "The Nature Haven retreat offers an immersive experience of serene
          tranquility amidst the lush surroundings of McLeod Ganj. Embrace the
          essence of nature and peaceful living, indulging in fresh water,
          oxygen-rich air, and a rejuvenating lifestyle. Immerse yourself in the
          harmonious ambiance, relishing authentic local cuisine and creating
          cherished memories. Surrounded by breathtaking natural beauty and
          rejuvenating attractions, our sanctuary ensures easy access to scenic
          wonders with our knowledgeable guides. Additionally, we provide
          seamless transport arrangements for convenient exploration of nearby
          destinations, fostering a holistic experience of youthfulness and
          vitality."
        </p>

        <Link to="/About" onClick={handleLinkClick}>
          <button className="btn">About Us</button>
        </Link>
      </div>
      <div className="contact-section">
        <img src={sliderImage4} alt="mountains" />
        <div className="img-overlay">
          <div className="img-overlay-text">
            <FontAwesomeIcon icon={faPersonHiking} className="trek-icon" />
            <h1>Plan an Unforgettable Experience in Dharamshala Today!</h1>
            <h2>
              "We can help you fit your stay and experience within your allotted
              budget."
            </h2>
            <h3>BOOK YOUR STAY NOW</h3>
            <p>
              <span>
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <a href="tel:+918894163563">+91 88941-63563</a>
            </p>
            <Link to="/Contact" onClick={handleLinkClick}>
              <button className="btn">Contact Us</button>
            </Link>
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
          <Link to="/Rooms" onClick={handleLinkClick}>
            <button className="btn">View Accommodations</button>
          </Link>
        </div>
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
      <Query />
      <Newsletter />
    </div>
  );
};

export default Home;
