import React, { useContext } from "react";
import "./Navbar.css";
import AuthContext from "../../../context/authContext/authContext";
const Navbar = () => {
  const { logout, clearError } = useContext(AuthContext);

  const onLogout = () => {
    logout();
    clearError();
  };

  return (
    <div className="navbar">
      <div className="logo">
        <h1>
          <i className="fas fa-glass-cheers" />
          Weeding Planner
        </h1>
      </div>
      <ul>
        <li>Hello, Juliano</li>
        <span className="sm-hide">|</span>
        <li>
          <a href="#" onClick={onLogout}>
            <span className="sm-hide">Logout</span>
            <i className="fas fa-sign-out-alt"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
