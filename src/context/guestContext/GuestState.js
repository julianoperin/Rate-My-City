import React, { useReducer } from "react";
import GuestContext from "./guestContext";
import guestReducer from "./guestReducer";

const GuestState = (props) => {
  const initialState = {
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

  return (
    <GuestContext.Provider value={{ guests: state.guests }}>
      {props.children}
    </GuestContext.Provider>
  );
};

export default GuestState;
