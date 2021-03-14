import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/authContext/authContext";

const Register = () => {
  const { registerUser, userAuth, errors } = useContext(AuthContext);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log("passowords does not match");
    } else {
      registerUser({ name, email, password });
    }
  };

  return (
    <div className="register">
      <h1>Sign Up</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
          pattern=".{6,}"
          required
          title="6 characters minimum"
        />
        <input
          type="password"
          name="password2"
          placeholder="Confirm Password"
          value={password2}
          onChange={handleChange}
          pattern=".{6,}"
          required
          title="6 characters minimum"
        />
        <input type="submit" value="Sign Up" className="btn" />
      </form>
      <div className="question">
        {errors !== null && (
          <button className="danger">
            {errors.length > 0 ? errors[0].msg : errors.msg}
            <span>X</span>
          </button>
        )}
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
