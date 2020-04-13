import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const navStyle = {
    color: "white",
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">
        MicroShopping
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

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <Link to="/" className="nav-link">
            <li className="nav-item active">Inicio</li>
            <span className="sr-only">(current)</span>
          </Link>
        </ul>
      </div>

      <div id="navbarNav">
        <ul className="navbar-nav navbar-right">
          <Link to="/signup" className="nav-link btn-info navbar-btn">
            <li>Registrarse</li>
            <span className="sr-only">(current)</span>
          </Link>
          <Link to="/login" className="nav-link">
            <li>Ingresar</li>
            <span className="sr-only">(current)</span>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
