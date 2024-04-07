import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./header.css";

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="navbar-section">
        <div className="nav-logo">
          <Link to="/" onClick={handleLinkClick}>
            <img src={logo} alt="logo" width={100} height={100} />
          </Link>
        </div>
        <div className={`nav-items ${menuOpen ? "active" : ""}`}>
          <Link to="/" className={isActive("/")} onClick={handleLinkClick}>
            <li>HOME</li>
          </Link>
          <Link
            to="/Rooms"
            className={isActive("/Rooms")}
            onClick={handleLinkClick}
          >
            <li>ROOMS</li>
          </Link>
          <Link
            to="/About"
            className={isActive("/About")}
            onClick={handleLinkClick}
          >
            <li>ABOUT</li>
          </Link>
          <Link
            to="/Contact"
            className={isActive("/Contact")}
            onClick={handleLinkClick}
          >
            <li>CONTACT US</li>
          </Link>
        </div>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className={`line ${menuOpen ? "open" : ""}`}></div>
          <div className={`line ${menuOpen ? "open" : ""}`}></div>
          <div className={`line ${menuOpen ? "open" : ""}`}></div>
        </div>
      </div>
    </>
  );
};

export default Header;
