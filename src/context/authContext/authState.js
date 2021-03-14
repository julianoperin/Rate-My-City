import React, { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import {SUCCESS_REGISTER,SUCCESS_LOGIN,FAIL_REGISTER,FAIL_LOGIN} from "../types.js";

import axios from 'axios'

const authState = (props) => {
  const initialState = {
    userAuth: null,
    errors: null,
  };

  const [state, dispatch] = useReducer(guestReducer, initialState);

  //! Register User
  const registerUser = (userData) => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    try {
        const res = await axios.post("/register", userData, config);
        //! res.data is from the BackEnd
        dispatch(
            {
                type: SUCCESS_REGISTER,
                payload: res.data
            })

    } catch (error) {
        
    }
  }

  return (
    <AuthContext.Provider
      value={{
        userAuth: state.userAuth,
        errors: state.errors,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default authState;
