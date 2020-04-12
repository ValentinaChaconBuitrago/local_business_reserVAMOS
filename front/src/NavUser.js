import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

const NavUser = () => {
  const navStyle = {
    color: "white",
  };

  /*

  return (
    <nav className="nav-bar">
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link style={navStyle} to="/">
          <li>Home</li>
        </Link>
        <Link style={navStyle} to="/login">
          <li>Login</li>
        </Link>
        <Link style={navStyle} to="/signup">
          <li>Signup</li>
        </Link>
      </ul>
    </nav>
  );*/

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
            <li className="nav-item active">Home</li>
            <span className="sr-only">(current)</span>
          </Link>
        </ul>
      </div>

      <div id="navbarNav">
        <ul className="navbar-nav navbar-right">
          <Link to="/login" className="nav-link btn-info navbar-btn">
            <li>Profile</li>
            <span className="sr-only">(current)</span>
          </Link>
          <Link to="/formAddStore" className="nav-link">
            <li>Add Business</li>
            <span className="sr-only">(current)</span>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default NavUser;
