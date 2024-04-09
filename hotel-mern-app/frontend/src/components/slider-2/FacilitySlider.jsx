import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./facilityslider.css";
import food from "../../assets/slider2-images/food.jpg";
import parking from "../../assets/slider2-images/parking.jpg";
import balcony from "../../assets/slider2-images/balcony.jpg";
import drinks from "../../assets/slider2-images/drinks.jpg";
import service from "../../assets/slider2-images/service.jpg";
import storage from "../../assets/slider2-images/storage.jpg";

const Images = [
  {
    id: 1,
    src: food,
    alt: "Image 1",
    title: "Delicious Food",
    description: "There is no love sincerer than the love of food.",
  },
  {
    id: 2,
    src: parking,
    alt: "Image 2",
    title: "Private Parking",
    description: "The perfect parking spot you can count on!",
  },
  {
    id: 3,
    src: balcony,
    alt: "image 3",
    title: "Mountain View Balcony",
    description: "Somewhere between heaven and earth.",
  },
  {
    id: 3,
    src: drinks,
    alt: "Image 3",
    title: "Welcome Drinks",
    description: "The Perfect Blend of Refreshment and Professionalism",
  },
  {
    id: 3,
    src: service,
    alt: "Image 3",
    title: "24/7 Room Service",
    description: "Your comfort is our passion at Room Service!",
  },
  {
    id: 3,
    src: storage,
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
