import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link to="/" className="nav-item nav-link active">
            Home
          </Link>
          <Link to="/news" className="nav-item nav-link">
            News
          </Link>
          <Link to="/contact" className="nav-item nav-link">
            Contact
          </Link>
          <Link to="/about" className="nav-item nav-link">
            About
          </Link>
          <Link to="/login" className="nav-item nav-link">Login</Link>
          <Link to="/signup" className="nav-item nav-link">Signup</Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;

