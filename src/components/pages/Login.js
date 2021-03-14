import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/authContext/authContext";

const Login = (props) => {
  const { loginUser, userAuth, errors, clearError } = useContext(AuthContext);

  useEffect(() => {
    if (userAuth) {
      props.history.push("/");
    }
  }, [userAuth, props.history]);

  //! Clear errors automatically after 2 sec
  if (errors) {
    setTimeout(() => {
      clearError();
    }, 3000);
  }

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    clearError();
  };

  const onSubmit = (e) => {
    e.preventDefault();
    loginUser({ email, password });
    clearError();
  };

  return (
    <div className="login">
      <h1>Sign In</h1>
      <form onSubmit={onSubmit}>
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
          required
          title="6 characters minimum"
          required
        />

        <input type="submit" value="Sign In" className="btn" />
      </form>
      <div className="question">
        {errors !== null && (
          <button className="danger">
            {errors.msg ? errors.msg : errors.msg}
            <span onClick={() => clearError()}>X</span>
          </button>
        )}
        <p>
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
