import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";
import { Carousel } from "react-responsive-carousel";

const Carousels = () => {
  const items = [
    {
      title: "Homeowners and Real Estate Developers",
      description:
        "Seeking cutting-edge smart home automation solutions to enhance security, convenience, and energy efficiency, making properties more attractive and sustainable.",
      image: "/S1.jpg",
    },
    {
      title: "Businesses and Enterprises",
      description:
        "In need of tailored software development, IoT solutions, and embedded systems to optimize operations, improve efficiency, and drive product innovation.",
      image: "/S2.jpg",
    },
    {
      title: "Tech Enthusiasts and Professionals",
      description:
        "Seeking to acquire new IT skills and stay updated with the latest technological advancements.",
      image: "/S3.jpg",
    },
    {
      title: "General Consumers",
      description:
        "Interested in high-quality merchandise that complements their tech-savvy lifestyle.",
      image: "/S4.jpg",
    },
  ];

  return (
    <Carousel showThumbs={false} autoPlay infiniteLoop>
      {items.map((item, index) => (
        <div key={index} className="carousel-slide">
          <h2 className="primaryText">Our Businesses</h2>
          <img src={item.image} alt={item.title} className="carousel-image" />
          <div className="carousel-caption">
            <h3 className="carousel-title">{item.title}</h3>
            <p className="carousel-description">{item.description}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Carousels;
