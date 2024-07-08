import React from "react";
import "./About.css";
import Carousels from "./Carousel";
import Value from "./Value";

const About = () => {
  return (
    <section id="about" className="about-wrapper">
      <div className="paddings innerWidth flexCenter about-container">
        {/* Left Side */}
        <div className="about-left flexColStart">
          <span className="highlightText">About Us</span>
          <span className="primaryText">Value We Bring to You</span>
          <div className="divider" />
          <span className="secondaryText">
            Altair Attic Limited is at the forefront of technological innovation, delivering cutting-edge solutions in smart home automation, software development, IoT, and embedded systems
            integration. Our mission is to seamlessly integrate advanced
            technology into everyday life, making it accessible, efficient, and
            beneficial for all.
          </span>
        </div>

        {/* Right Side */}
        <div className="about-right">
          <div className="about-image-container">
            <img src="./Aboutus.jpg" alt="About Us" />
          </div>
        </div>
      </div>
      <Carousels />
      <Value />
    </section>
  );
};

export default About;
