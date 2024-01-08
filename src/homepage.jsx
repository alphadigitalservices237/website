import React from "react";
import About from "./components/About";
import Team from "./components/Team";
import Contact from "./components/contact";
import Map from "./components/Map";
import Image_rotation from "./components/normal_components/Image_rotation";
import About_description from "./components/normal_components/About_description";
import Footer from "./components/normal_components/Footer";
import Hero from "./components/Hero"
import Portfolio from "./components/Portfolio"
import Service from "./components/Service"
const Homepage = () => {
  return (
    <div className="container_page">
      <div className="wrapper">
        <Hero/>
        <div className="aboutsection" id="about">
        <Image_rotation />
        <About_description />
        </div>
        <Service/>
        <Portfolio/>
        <Team />
        <Contact />
        <Map />
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
