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
      description:
        '"Discover comfort in our mountain retreat with four cozy rooms, each featuring an attached washroom for your convenience and relaxation."',
      subtitle: "4 rooms available",
      image: roomImage1,
    },
    {
      title: "4-Bed Dorm",
      description:
        '"Experience companionship in our 4-bed dorm, situated amidst picturesque mountains, providing cozy comfort and affordable lodging for your mountain getaway."',
      subtitle: "1 dorm available",
      image: roomImage2,
    },
    {
      title: "Private Room with Common Bathroom",
      description:
        '"Discover comfort in our private room with shared bathroom, nestled in the picturesque mountain range of our cozy homestay. Enjoy tranquility."',
      subtitle: "1 room available",
      image: roomImage3,
    },
    {
      title: "Couple Sleeping Tents",
      description:
        '"Cozy couple sleeping tents available upon request in our mountain homestay, offering intimate comfort amidst breathtaking natural surroundings."',
      subtitle: "Available on request",
      image: campImage1,
    },
    {
      title: "2 Person Sleeping Tents",
      description: `"Experience cozy comfort in our mountain homestay with 2-person sleeping tents, available upon request for an adventurous stay amidst nature's beauty."`,
      subtitle: "Available on request",
      image: campImage2,
    },
    {
      title: "6 Person Sleeping Tents",
      description:
        '"Experience cozy comfort in our 6-person sleeping tents, available upon request at our homestay nestled in the picturesque mountain range."',
      subtitle: "Available on request",
      image: campImage3,
    },
  ];

  return (
    <section className="accommodation-cards">
      <div className="accommodation-cards-container">
        {accommodations.map((accommodation, index) => (
          <div className="accommodation-card" key={index}>
            <div className="accommodation-img">
              <img src={accommodation.image} alt={accommodation.title} />
            </div>
            <div className="accommodation-card-content">
              <h2>{accommodation.title}</h2>
              <p>{accommodation.description}</p>
              <button className="btn">{accommodation.subtitle}</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Accommodation;
