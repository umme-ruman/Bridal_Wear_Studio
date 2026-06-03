import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import logo from "../../assets/images/logo.png";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">

        <Link to="/" className="logo">
          <img src={logo} alt="Rume Bridal Studio" />
        </Link>

        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>

          <button className="book-btn">
            Book Now
          </button>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;