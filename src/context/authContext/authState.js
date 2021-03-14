import React, { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import {
  SUCCESS_REGISTER,
  SUCCESS_LOGIN,
  FAIL_REGISTER,
  FAIL_LOGIN,
  SET_ERROR,
  CLEAR_ERROR,
} from "../types.js";

import axios from "axios";

const AuthState = (props) => {
  const initialState = {
    userAuth: null,
    errors: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

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

  return (
    <AuthContext.Provider
      value={{
        userAuth: state.userAuth,
        errors: state.errors,
        registerUser,
        loginUser,
        setError,
        clearError,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
