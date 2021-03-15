import React, { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import setToken from "../../utils/setToken";
import {
  SUCCESS_REGISTER,
  SUCCESS_LOGIN,
  FAIL_REGISTER,
  FAIL_LOGIN,
  SET_ERROR,
  CLEAR_ERROR,
  LOG_OUT,
  SET_USER,
  AUTH_ERROR,
} from "../types.js";

import axios from "axios";

const AuthState = (props) => {
  const initialState = {
    user: null,
    userAuth: null,
    errors: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  //! Get User to display on navbar
  const getUser = async () => {
    if (localStorage.token) {
      setToken(localStorage.token);
    }

    try {
      const res = await axios.get("/auth");

      dispatch({
        type: SET_USER,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: AUTH_ERROR,
        payload: err,
      });
    }
  };

  //! Register User
  const registerUser = async (userData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/register", userData, config);
      // res.data is from the BackEnd
      dispatch({
        type: SUCCESS_REGISTER,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: FAIL_REGISTER,
        payload: error.response.data,
      });
    }
  };

  //! Login User
  const loginUser = async (userData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/auth", userData, config);
      // res.data is from the BackEnd
      dispatch({
        type: SUCCESS_LOGIN,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: FAIL_LOGIN,
        payload: error.response.data,
      });
    }
  };

  const setError = (err) => {
    dispatch({
      type: SET_ERROR,
      payload: err,
    });
  };

  const clearError = () => {
    dispatch({
      type: CLEAR_ERROR,
    });
  };

  const logout = () => {
    dispatch({
      type: LOG_OUT,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        userAuth: state.userAuth,
        errors: state.errors,
        registerUser,
        loginUser,
        setError,
        clearError,
        logout,
        getUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
