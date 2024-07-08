import React from "react";
import Companies from "../components/Companies/Companies";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import GetStarted from "../components/GetStarted/GetStarted";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Value from "../components/Value/Value";
import Email from "../components/Email/Email";
import MissionVision from "../components/MissionVision";
import AboutUs from "../components/About/About";
import "../App.css";

function Home() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient-left" />
        <div className="white-gradient-right" />
        <Header />
        <Hero />
      </div>
      <AboutUs />
      <MissionVision />
      <Services />
      <Value />
      <Contact />
      {/* <Email /> */}
      <GetStarted />
      <Footer />
    </div>
  );
}

export default Home;
