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
    description:
      '"Indulge in our delectable homemade specialty: succulent grilled chicken marinated in aromatic spices, served with a side of buttery mashed potatoes and crisp garden salad. A culinary delight awaits!"',
  },
  {
    id: 2,
    src: parking,
    alt: "Image 2",
    title: "Private Parking",
    description:
      '"Experience the convenience and peace of mind with our private parking at The Rudraksha Stays. Nestled amidst serene surroundings, our homestay offers a dedicated parking space exclusively for our guests."',
  },
  {
    id: 3,
    src: balcony,
    alt: "image 3",
    title: "Mountain View Balcony",
    description:
      '"Experience the ultimate retreat with our mountain view balcony at The Rudraksha Stays. Perched amidst the breathtaking beauty of The Dhauladhar, our balcony offers an enchanting panorama of majestic mountains stretching into the horizon"',
  },
  {
    id: 3,
    src: drinks,
    alt: "Image 3",
    title: "Welcome Drinks",
    description:
      '"Step into our serene homestay The Rudraksha Stays where tranquility meets hospitality. Be greeted with our signature welcome drink, a refreshing blend to invigorate your senses and ensure a delightful start to your stay."',
  },
  {
    id: 3,
    src: service,
    alt: "Image 3",
    title: "24/7 Room Service",
    description:
      '"Experience unparalleled comfort and convenience with our 24/7 room service at The Rudraksha Stays. Indulge in the ultimate relaxation as our dedicated team is available around the clock to cater to your every need."',
  },
  {
    id: 3,
    src: storage,
    alt: "Image 3",
    title: "Luggage Storage",
    description: `"Experience convenience at our homestay with our reliable luggage storage service. Travel hassle-free knowing your belongings are secure with us. Enhance your stay with peace of mind and worry-free exploration."`,
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
