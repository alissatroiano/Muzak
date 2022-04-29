import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="px-4 py-3 my-3 text-center">
    <div className="img-container">
        <i className="fas fa-headphones-simple fa-8x pb-2 my-2 my-md-4" id="hero-icon"></i>
    </div>
      <h1 className="hero-text my-2">Muzak</h1>
    </div>
  );
};

export default Hero;
