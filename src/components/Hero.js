import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <div className="content">
        <p></p>
        <p>FULL STACK DEVELOPER</p>
        <p>Lucas Marchetti</p>
        <p>Frontend & Backend</p>
        <button className="hero-button">
          <a href="#contact" className="hero-button-link">Contáctame</a>
        </button>
      </div>
    </div>
  );
};

export default Hero;
