import React, { useState } from "react";
import "./navbar.css";
import { FiShoppingBag, FiHeart, FiUser, FiSearch, FiGrid } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      {/* Top Row */}
      <div className="navbar-top">
        <div className="logo">
          <h2>
            <span className="logo-x">X</span>tragleam
          </h2>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-links">
          <a href="#" className="active">Home</a>
          <a href="#">Shop</a>
          <a href="#">Spa</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>

        {/* Desktop Icons */}
        <div className="nav-icons">
          <FiShoppingBag className="icon" />
          <FiHeart className="icon" />
          <FiUser className="icon" />
        </div>

        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          <FiGrid />
        </div>
      </div>

      {/* Desktop Category Row */}
      <div className="navbar-row-2">
        <div className="navbar-categories">
          <button>Women</button>
          <button>Men</button>
          <button>Kiddies</button>
          <button>New</button>
          <button>Popular</button>
        </div>
        <FiSearch className="icon" />
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="mobile-menu">
          <nav>
            <a href="#">Home</a>
            <a href="#">Shop</a>
            <a href="#">Spa</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </nav>
          <div className="mobile-categories">
            <button>Women</button>
            <button>Men</button>
            <button>Kiddies</button>
            <button>New</button>
            <button>Popular</button>
          </div>
          <div className="mobile-icons">
            <FiShoppingBag className="icon" />
            <FiHeart className="icon" />
            <FiUser className="icon" />
            <FiSearch className="icon" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
