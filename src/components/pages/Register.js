import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log("passowords does not match");
    } else {
      console.log(user);
    }
  };

  return (
    <div className="register">
      <h1>Sign Up</h1>
      <form>
        <input type="text" name="name" placeholder="Name" value={name} />
        <input type="email" name="email" placeholder="Email" value={email} />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
        />
        <input
          type="password"
          name="passowrd2"
          placeholder="Confirm Password"
          value={password2}
        />
        <input type="submit" value="Sign Up" className="btn" />
      </form>
      <div className="question">
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
