import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="background-overlay"></div>
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="star">
              <img src="./star.svg" alt="Star Icon"/>
            </div>
            <motion.h2
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "ease-in",
              }}
            >
              Altair Attic
            </motion.h2>
            <motion.h1>Limited</motion.h1>
          </div>
          <div className="flexColStart secondaryText flexhero-des">
            <h2>
              Empowering your world with smart, <br />
              innovative, and reliable tech solutions.
            </h2>
            <span>Where Innovation Meets Everyday Life</span>
          </div>
          {/* <img src="./h.svg" alt="" className="h-img" /> */}
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-containers"
          >
            <img src="./Hero.jpg" alt="houses" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
