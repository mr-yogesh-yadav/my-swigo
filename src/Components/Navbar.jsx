import { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo-nav.webp";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {showNavbar && (
        <nav>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <ul>
            <li>
              <a href="#about">DEMO</a>
            </li>
            <li>
              <a href="#exclusive">Features</a>
            </li>
            <li>
              <a href="#">Documentation</a>
            </li>
          </ul>
          <button>
            <span>Buy Now</span>
          </button>
        </nav>
      )}
    </>
  );
}

export default Navbar;
