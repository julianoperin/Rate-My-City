import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div className="login">
      <h1>Sign In</h1>
      <form>
        <input type="email" name="email" placeholder="Email" value={email} />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
        />

        <input type="submit" value="Sign In" className="btn" />
      </form>
      <div className="question">
        <p>
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
