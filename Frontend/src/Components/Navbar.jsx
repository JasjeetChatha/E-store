import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        E-store
      </a>
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
            <a className="nav-link" href="/laptop">
              Laptops
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/pc">
              Pc's
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/mobile">
              Mobiles
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/console">
              Consoles
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/cart">
              Cart
            </a>
          </li>
          <li className="nav-item">
            
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
