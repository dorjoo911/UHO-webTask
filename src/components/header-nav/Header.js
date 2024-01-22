import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const logo =
    "/assets/Logos/College of Optometry Logo/PNG/UH-Primary-Extensions-CMYK-College of Optometry-horizontal-reversed_black.png";

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <header className="header">
      <img
        src={logo}
        alt="University of Houston"
        className="logo"
        onClick={handleLogoClick}
      />
      <button
        className="burger-menu"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={`navigation ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <a href="/lab-description">Lab Description</a>
          </li>
          <li>
            <a href="/research">Research</a>
          </li>
          <li>
            <a href="/personnel">Personnel</a>
          </li>
          <li>
            <a href="/publications">Publications</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
