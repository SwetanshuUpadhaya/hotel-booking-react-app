import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./facilityslider.css";

const Images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1535567465397-7523840f2ae9?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Image 1",
    title: "Delicious Food",
    description: "There is no love sincerer than the love of food.",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1634514311538-2cc4f25b6d1c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Image 2",
    title: "Private Parking",
    description: "The perfect parking spot you can count on!",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1668350201658-2e0d0e59d7e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "image 3",
    title: "Mountain View Balcony",
    description: "Somewhere between heaven and earth.",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1481671703460-040cb8a2d909?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Image 3",
    title: "Welcome Drinks",
    description: "The Perfect Blend of Refreshment and Professionalism",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1580842402762-6f5868c17412?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Image 3",
    title: "24/7 Room Service",
    description: "Your comfort is our passion at Room Service!",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1639597784674-431b34cec7a8?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Image 3",
    title: "Luggage Storage",
    description: "Storing your luggage safely is our passion",
  },
  // add more images as you like
];

const CarouselItem = ({ item }) => (
  <div className="carousel-item">
    <img src={item.src} alt={item.alt} />
    <div className="carousel-text">
      <h1>{item.title}</h1>
      <p>{item.description}</p>
    </div>
  </div>
);

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2500,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const MultiItemCarousel = ({ images }) => {
  return (
    <Slider {...settings}>
      {images.map((item) => (
        <CarouselItem key={item.id} item={item} />
      ))}
    </Slider>
  );
};

const FacilitySlider = () => {
  return (
    <div className="carousel-section">
      <div className="carousel-container">
        <h1>Our Facilities</h1>
        <MultiItemCarousel images={Images} />
      </div>
    </div>
  );
};

export default FacilitySlider;
