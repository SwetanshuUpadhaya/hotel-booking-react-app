import React, { useState, useEffect } from "react";
import "./layout.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Router from "../../router/Router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";

const Layout = () => {
  <FontAwesomeIcon icon={faCircleArrowUp} />;

  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Header />
      <Router />
      <Footer />
      {showScrollToTop && (
        <button
          className="scroll-to-top"
          onClick={scrollToTop}
          title="Scroll to top"
        >
          <FontAwesomeIcon icon={faCircleArrowUp} />
        </button>
      )}
      <div className="whatsapp">
        <a href="whatsapp://send?phone=+918894163563">
          <i className="fab fa-whatsapp" />
        </a>
      </div>
    </>
  );
};

export default Layout;
