import React from "react";
import "./hero-section.css";
import productImage from "../../images/hero.png"; // replace with your image path

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>
          Glow Beyond <br /> Expectations
        </h1>
        <p>
          Clean, effective, and cruelty-free skincare made to deliver visible results.
        </p>
        <button className="shop-btn">
          Shop Now →
        </button>
      </div>

      <div className="hero-image">
        <img src={productImage} alt="Skincare Products" />
      </div>
    </section>
  );
};

export default HeroSection;
