import React, { useReducer } from "react";
import GuestContext from "./guestContext";
import guestReducer from "./guestReducer";
import {
  TOGGLE_FILTER,
  SEARCH_GUEST,
  CLEAR_SEARCH,
  ADD_GUEST,
  REMOVE_GUEST,
} from "../types";

const GuestState = (props) => {
  const initialState = {
    filterGuest: false,
    search: null,
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

  return (
    <GuestContext.Provider
      value={{
        guests: state.guests,
        filterGuest: state.filterGuest,
        search: state.search,
        toggleFilter,
        searchGuest,
        clearSearch,
        addGuest,
        removeGuest,
      }}
    >
      {props.children}
    </GuestContext.Provider>
  );
};

export default GuestState;
