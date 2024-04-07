import React from "react";
import "./accommodation.css";

const Accommodation = () => {
  const accommodations = [
    {
      title: "Cosy Rooms with Attached Washroom",
      subtitle: "4 rooms available",
      image:
        "https://images.unsplash.com/photo-1595161695996-f746349f4945?q=80&w=1914&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "4-Bed Dorm",
      subtitle: "1 dorm available",
      image:
        "https://images.unsplash.com/photo-1655287330904-8c03daa84d14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Private Room with Common Bathroom",
      subtitle: "1 room available",
      image:
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Couple Sleeping Tents",
      subtitle: "Available on request",
      image:
        "https://images.pexels.com/photos/5993944/pexels-photo-5993944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "2 Person Sleeping Tents",
      subtitle: "Available on request",
      image:
        "https://images.unsplash.com/photo-1624923686627-514dd5e57bae?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "6 Person Sleeping Tents",
      subtitle: "Available on request",
      image:
        "https://images.pexels.com/photos/45241/tent-camp-night-star-45241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
