import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  const { cart } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on navigation (optional, for better UX)
  const handleNavClick = () => setIsOpen(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/" onClick={handleNavClick}>
        E-store
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        aria-controls="navbarNav"
        aria-expanded={isOpen}
        aria-label="Toggle navigation"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse${isOpen ? " show" : ""}`}
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/laptop" onClick={handleNavClick}>
              Laptops
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/pc" onClick={handleNavClick}>
              Pc's
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/mobile" onClick={handleNavClick}>
              Mobiles
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/console" onClick={handleNavClick}>
              Consoles
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart" onClick={handleNavClick}>
              Cart <span className="badge">{cart.length}</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
