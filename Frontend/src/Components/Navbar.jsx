import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import "./Navbar.scss";

function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        E-store
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/laptop">
              Laptops
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/pc">
              Pc's
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/mobile">
              Mobiles
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/console">
              Consoles
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart">
              Cart <span className="badge">{cart.length}</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
