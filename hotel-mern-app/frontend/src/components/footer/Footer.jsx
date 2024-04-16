import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./footer.css";

const Footer = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="footer-section">
        <div className="footer-container">
          <div className="footer-logo">
            <Link to="/" onClick={handleLinkClick}>
              <img src={logo} alt="logo" width={150} height={150} />
            </Link>
          </div>
          <div className="footer-nav-items">
            <h3>Navigation</h3>
            <Link to="/" onClick={handleLinkClick}>
              <li>Home</li>
            </Link>
            <Link to="/Rooms" onClick={handleLinkClick}>
              <li>Rooms</li>
            </Link>
            <Link to="/About" onClick={handleLinkClick}>
              <li>About</li>
            </Link>
            <Link to="/Contact" onClick={handleLinkClick}>
              <li>Contact Us</li>
            </Link>
          </div>
          <div className="footer-nav-social">
            <h3>Social Media</h3>
            <a href="https://www.instagram.com/therudrakshastays/">
              <i className="fab fa-facebook-f" />
              <span>Facebook</span>
            </a>
            <a href="https://www.instagram.com/therudrakshastays/">
              <i className="fab fa-twitter" />
              <span>Twitter</span>
            </a>
            <a href="https://www.instagram.com/therudrakshastays/">
              <i className="fab fa-instagram" />
              <span>Instagram</span>
            </a>
            <a href="whatsapp://send?phone=+918894163563">
              <i className="fab fa-whatsapp" />
              <span>WhatsApp</span>
            </a>
          </div>
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>
              <span>
                <i className="fas fa-map-marker"></i>
              </span>
              Balreh, Naddi, Dharamshala, Himachal Pradesh
            </p>
            <p>
              <span>
                <i className="fas fa-phone"></i>
              </span>
              <a href="tel:+918894163563">+91 88941-63563</a>
            </p>
            <p>
              <span>
                <i className="fas fa-envelope"></i>
              </span>
              <a href="mailto:theradrakshastays@gmail.com">
                theradrakshastays@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="footer-text">
          <p>
            &copy; {new Date().getFullYear()} The Rudraksha Stays. All rights
            reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
