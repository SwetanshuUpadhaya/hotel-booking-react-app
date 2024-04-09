import React from "react";
import "./accommodation.css";
import roomImage1 from "../../assets/rooms/roomImg1.jpg";
import roomImage2 from "../../assets/rooms/roomImg2.jpg";
import roomImage3 from "../../assets/rooms/roomImg3.jpg";
import campImage1 from "../../assets/rooms/campImg1.jpg";
import campImage2 from "../../assets/rooms/campImg2.jpg";
import campImage3 from "../../assets/rooms/campImg3.jpg";

const Accommodation = () => {
  const accommodations = [
    {
      title: "Cosy Rooms with Attached Washroom",
      subtitle: "4 rooms available",
      image: roomImage1,
    },
    {
      title: "4-Bed Dorm",
      subtitle: "1 dorm available",
      image: roomImage2,
    },
    {
      title: "Private Room with Common Bathroom",
      subtitle: "1 room available",
      image: roomImage3,
    },
    {
      title: "Couple Sleeping Tents",
      subtitle: "Available on request",
      image: campImage1,
    },
    {
      title: "2 Person Sleeping Tents",
      subtitle: "Available on request",
      image: campImage2,
    },
    {
      title: "6 Person Sleeping Tents",
      subtitle: "Available on request",
      image: campImage3,
    },
  ];

  return (
    <section className="accommodation-cards">
      <div className="accommodation-cards-container">
        {accommodations.map((accommodation, index) => (
          <div className="accommodation-card" key={index}>
            <img src={accommodation.image} alt={accommodation.title} />
            <div className="accommodation-card-content">
              <h2>{accommodation.title}</h2>
              <p>{accommodation.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Accommodation;
