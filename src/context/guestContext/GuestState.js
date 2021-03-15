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
  const addGuest = (guest) => {
    guest.id = Date.now();
    guest.isConfirmed = false;
    dispatch({
      type: ADD_GUEST,
      payload: guest,
    });
  };

  //! Remove Guest
  const removeGuest = (id) => {
    dispatch({
      type: REMOVE_GUEST,
      payload: id,
    });
  };

  //! Update Guest
  const updateGuest = (guest) => {
    dispatch({
      type: UPDATE_GUEST,
      payload: guest,
    });
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
