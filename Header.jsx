import React, { useState } from "react";
import "./Header.css";
import logo from "./image/logo.png"; // Add your logo image path here

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <h1 className="fire">Kundan Kitchen's</h1>
      <img src={logo} alt="Logo" className="logo" />
      <nav>
        <div className={`nav-list ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="menu-button" onClick={toggleMenu}>
          <span className="menu-icon"></span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
