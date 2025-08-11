import React from "react";
import "./WhyChooseSection.css";
import acneImage from "../../images/acne-skin.png"; 

const WhyChooseSection = () => {
  return (
    <section className="why-choose-wrapper">
        <div className="why-choose-header">
            <div className="header">Why Choose Xtragleam?</div>
        </div>
        <div className="why-choose-content-full">
        <img src={acneImage} alt="Acne treatment" />
      <div className="why-choose-content">
        <h3>Struggling with acne issues?</h3>
        <p>
          At Xtragleam Skincare, we understand how frustrating acne can be, and
          we’re here to help you regain confidence in your skin. Our carefully
          designed recovery process targets acne at its root while soothing and
          nourishing your skin for long-term health.
        </p>
        <button className="explore-btn">
          Explore Our Range <span>→</span>
        </button>
      </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
