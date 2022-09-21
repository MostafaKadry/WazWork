import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="py-3">
      <a href="/" className="navbar-brand">
        WAZWORK
      </a>
      <div>
        <ul>
          <li className="mx-3">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-3">
            <Link to="/services">Services</Link>
          </li>
          <li className="mx-3">
            <Link to="/team">Our Team</Link>
          </li>
          <li className="mx-3">
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
