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
} from "../types";

const GuestState = (props) => {
  const initialState = {
    filterGuest: false,
    search: null,
    editAble: null,
    guests: [
      {
        id: 1,
        name: "Jake Smith",
        phone: "333 444 555",
        dietary: "Vegan",
        isConfirmed: true,
      },
      {
        id: 2,
        name: "Jane Leonida",
        phone: "333 444 555",
        dietary: "Non-Veg",
        isConfirmed: true,
      },
      {
        id: 3,
        name: "Carla Spohr",
        phone: "333 444 555",
        dietary: "Pescetarian",
        isConfirmed: false,
      },
    ],
  };

  const [state, dispatch] = useReducer(guestReducer, initialState);

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
      }}
    >
      {props.children}
    </GuestContext.Provider>
  );
};

export default GuestState;
