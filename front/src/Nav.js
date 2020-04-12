import React from "react";
import "./App.css";
import {Link} from "react-router-dom";

const Nav = () => {

  const navStyle={
    color:"white"
  };

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
      );
};

export default Nav;