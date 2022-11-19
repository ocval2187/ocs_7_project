import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logoRed from "../../assets/logo_red.png";

function Navbar() {
  return (
    <nav className="Navbar"> 
      <div className="Navbar-container"> 
        <Link to="/" className="Navbar-logo"> 
          <img src={logoRed} alt="Logo" className="logo" />
        </Link>

        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Accueil
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              A Propos
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
