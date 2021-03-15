import React, { useReducer } from "react";
import GuestContext from "./guestContext";
import guestReducer from "./guestReducer";
import {
  TOGGLE_FILTER,
  SEARCH_GUEST,
  CLEAR_SEARCH,
  ADD_GUEST,
  REMOVE_GUEST,
  UPDATE_GUEST,
  CLEAR_GUEST,
  EDIT_GUEST,
  GUESTS_ERROR,
  GET_GUESTS,
} from "../types";

import axios from "axios";

const GuestState = (props) => {
  const initialState = {
    filterGuest: false,
    search: null,
    editAble: null,
    guests: [],
    errors: null,
  };

  const [state, dispatch] = useReducer(guestReducer, initialState);

  //! Get Guests
  const getGuests = async () => {
    try {
      const res = await axios.get("/guests");
      dispatch({
        type: GET_GUESTS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: GUESTS_ERROR,
        payload: err.response.msg,
      });
    }
  };

  //! Filter Guest
  const toggleFilter = () => {
    dispatch({
      type: TOGGLE_FILTER,
    });
  };

  //! Search Guest
  const searchGuest = (guest) => {
    dispatch({
      type: SEARCH_GUEST,
      payload: guest,
    });
  };

  //! Search Guest
  const clearSearch = () => {
    dispatch({
      type: CLEAR_SEARCH,
    });
  };

  //! Add Guest
  const addGuest = async (guest) => {
    const config = {
      "Content-Type": "application/json",
    };

    try {
      const res = await axios.post("/guests", guest, config);
      dispatch({
        type: ADD_GUEST,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: GUESTS_ERROR,
        payload: err.response.msg,
      });
    }
    guest.isConfirmed = false;
  };

  //! Remove Guest
  const removeGuest = async (id) => {
    const config = {
      "Content-Type": "application/json",
    };
    try {
      await axios.delete(`/guests/${id}`);
      dispatch({
        type: REMOVE_GUEST,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: GUESTS_ERROR,
        payload: err.response.msg,
      });
    }
  };

  //! Update Guest
  const updateGuest = async (guest) => {
    const config = {
      "Content-Type": "application/json",
    };

    try {
      const res = await axios.put(`/guests/${guest._id}`, guest, config);
      dispatch({
        type: UPDATE_GUEST,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: GUESTS_ERROR,
        payload: err.response.msg,
      });
    }
  };

  //! Edit Guest
  const editGuest = (guest) => {
    dispatch({
      type: EDIT_GUEST,
      payload: guest,
    });
  };

  //! Clear Guest
  const clearGuest = (guest) => {
    dispatch({
      type: CLEAR_GUEST,
      payload: guest,
    });
  };

  return (
    <GuestContext.Provider
      value={{
        guests: state.guests,
        filterGuest: state.filterGuest,
        search: state.search,
        editAble: state.editAble,
        toggleFilter,
        searchGuest,
        clearSearch,
        addGuest,
        removeGuest,
        updateGuest,
        clearGuest,
        editGuest,
        getGuests,
      }}
    >
      {props.children}
    </GuestContext.Provider>
  );
};

export default GuestState;
