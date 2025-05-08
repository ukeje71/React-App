import React, { useState } from "react";
import "../components/Header.css";

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <header>
      <nav>
        <span className="hidden">
          <div className="dropdown">
            <a href="#" className="dropbtn">About</a>
            <ul className="dropdown-content">
              <li>About Phil's</li>
              <li>Team</li>
              <li>Awards & Press</li>
            </ul>
          </div>
          <div className="dropdown">
            <a href="#" className="dropbtn">Services</a>
            <ul className="dropdown-content">
              <li>Gourmet Catering</li>
              <li>Home Service</li>
              <li>Design & Production</li>
            </ul>
          </div>
          <div className="dropdown">
            <a href="#" className="dropbtn">Events</a>
            <ul className="dropdown-content">
              <li>Weddings</li>
              <li>Social</li>
              <li>Corporate</li>
            </ul>
          </div>
        </span>

        <span className="logo">
          <h3>Phil's Confectories</h3>
          <p>Catering & Events</p>
        </span>

        <span className="hidden">
          <a href="#">Venues</a>
          <div className="dropdown">
            <a href="#">Careers</a>
            <ul className="dropdown-content">
              <li>Open Positions</li>
              <li>Apprentice</li>
            </ul>
          </div>
          <a href="#">
            <button>Get in touch</button>
          </a>
        </span>

        {/* Mobile Menu */}
        <div className="menu-bar" onClick={handleClick}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`link-list ${nav ? "active" : ""}`}>
          <li className="links"><a href="#" className="navlinks">About</a></li>
          <li className="links"><a href="#" className="navlinks">Services</a></li>
          <li className="links"><a href="#" className="navlinks">Events</a></li>
          <li className="links"><a href="#" className="navlinks">Venues</a></li>
          <li className="links"><a href="#" className="navlinks">Careers</a></li>
        </ul>

      </nav>
    </header>
  );
};

export default Header;
