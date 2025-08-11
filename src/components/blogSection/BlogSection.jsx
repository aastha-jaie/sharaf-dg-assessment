import React from "react";
import "./BlogSection.css";
import skincareImg from "../../images/skincaremodel.png"; // Replace with your actual image path

const BlogSection = () => {
  return (
    <section className="blog-section">
      <div className="blog-content">
        <h1>Your Guide to Radiant Skin</h1>
        <h3>5 Mistakes That Might Be Hurting Your Skin</h3>
        <p>
          Your skincare routine plays a crucial role in maintaining healthy,
          radiant skin. However, some common habits might be doing more harm
          than good. Here are five mistakes to avoid:
          1. Overwashing Your Face <br />
          Washing too often or using harsh cleansers can strip...
          <a href="#" className="continue-link">Continue Reading</a>
        </p>
        <button className="read-more-btn">
          Read More Blog Post →
        </button>
      </div>

      <div className="blog-image">
        <img src={skincareImg} alt="Smiling woman with radiant skin" />
      </div>
    </section>
  );
};

export default BlogSection;
