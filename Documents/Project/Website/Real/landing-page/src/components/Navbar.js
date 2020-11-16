import React, { useState, useEffect } from "react";
import { Button } from "./Button.js";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import "../styles/components/Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const reactClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <span>Study</span>ink
            <i className="fa fa-pied-piper-alt" />
          </Link>

          <div className="menu-icon" onClick={reactClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"} />
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/brand" className="nav-links" onClick={closeMobileMenu}>
                Brand
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/rank" className="nav-links" onClick={closeMobileMenu}>
                Rank
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-links" onClick={closeMobileMenu}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Contact Me
              </Link>
            </li>
          </ul>
          {button && (
            <button className="sec-outline">
              <FaPhoneAlt /> +6 012 - 641 - 087
            </button>
          )}

          {button && <Button buttonStyle="btn--outline">CONTACT ME</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
