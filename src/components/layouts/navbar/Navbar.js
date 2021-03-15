import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import AuthContext from "../../../context/authContext/authContext";
const Navbar = () => {
  const { logout, clearError, userAuth, user } = useContext(AuthContext);

  const onLogout = () => {
    logout();
    clearError();
  };

  const userLinks = (
    <>
      <li>Hello, {user && user.name}</li>
      <span className="sm-hide">|</span>
      <li>
        <a href="#" onClick={onLogout}>
          <span className="sm-hide">Logout</span>
          <i className="fas fa-sign-out-alt"></i>
        </a>
      </li>
    </>
  );

  const authLinks = (
    <>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <span className="sm-hide">|</span>
      <li>
        <Link to="/">Login</Link>
      </li>
    </>
  );

  return (
    <div className="navbar">
      <div className="logo">
        <h1>
          <i className="fas fa-glass-cheers" />
          Weeding Planner
        </h1>
      </div>
      <ul>{userAuth ? userLinks : authLinks}</ul>
    </div>
  );
};

export default Navbar;
