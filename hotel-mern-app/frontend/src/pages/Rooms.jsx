import React from "react";
import Accommodation from "../components/accommodation/Accommodation";
import "../styles/rooms.css";
import FacilitySlider from "../components/slider-2/FacilitySlider";
import Query from "../components/query/Query";
import Newsletter from "../components/newsletter/Newsletter";
import HeroImage from "../components/hero-image/HeroImage";
import BookNowForm from "../components/BookNowForm/BookNowForm";

const Rooms = () => {
  return (
    <div className="rooms-page">
      <HeroImage title={"Rooms & Tents"} />
      <div className="rooms-section">
        <div className="rooms-text">
          <h2>Discover</h2>
          <h3>Rooms & Camps</h3>
        </div>
        <Accommodation />
      </div>
      <BookNowForm />
      <FacilitySlider />
      <Newsletter />
    </div>
  );
};

export default Rooms;
