import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="wrapper">
        <div className="logo">
          <h1>
            Hotel.<span>05</span>
          </h1>
        </div>
        <div className="nav">
          <a href="/" className="nav-link">
            Home
          </a>
          <a href="/" className="nav-link">
            Rooms
          </a>
          <a href="/" className="nav-link">
            Services
          </a>
          <a href="/" className="nav-link">
            Booking
          </a>
          <a href="/" className="nav-link">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
