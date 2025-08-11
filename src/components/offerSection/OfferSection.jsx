import React from "react";
import './offer-section.css';

const OfferSection = ()=>{
   return (
    <div className="offer-container">
      <div className="offer-box">
        <h2 className="offer-heading">
          Don’t Miss Out: Limited-Time Offer!
        </h2>
        <p className="offer-subtext">
          Enjoy 20% Off Your First Purchase With Code <span className="offer-code">GLOW20</span>
        </p>
        <h3 className="offer-timer">
          Hurry, Offer Ends In <span className="highlight">12hrs 30mins 56sec</span>
        </h3>
        <button className="offer-button">
          Shop the Sale →
        </button>
      </div>
    </div>
  );
}
export default OfferSection