import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../../utils/wordSlid";
import { sliderSettings } from "../../utils/common";
import "./Work.css";

const Work = () => {
  return (
    <div className="w-wrapper">
      <div className="paddings innerWidth w-container">
        <div className="flexColStart w-head">
          <span className="primaryText">
            <u className="under">Our service</u>
          </span>
          <div className="w-underline"></div>
        </div>
        <Swiper {...sliderSettings}>
          <SlideNextButton />
          {data.map((card, index) => (
            <SwiperSlide key={index}>
              <Link to={card.url} className="flexColCenter w-card">
                <img src={card.image} alt={card.name} />
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.define}</span>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

const SlideNextButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter s-buttons">
      <button onClick={() => swiper.slidePrev()} className="s-prevButton">
        &lt;
      </button>
      <button onClick={() => swiper.slideNext()} className="s-nextButton">
        &gt;
      </button>
    </div>
  );
};

export default Work;
