import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo */}
        <div className="footer-logo">
          <h2><span className="logo-x">X</span>tragleam</h2>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <div className="footer-links-col-1">
            <h4>Quick Link</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">Spa</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Career</a></li>
            </ul>
          </div>

          <div className="footer-links-col-2">
            <h4>Company</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Legal</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <p>Be the first to get notification about our upcoming event</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Email" />
            <button type="submit">Submit</button>
          </form>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2024, Xtragleam Skincare. All Right Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
