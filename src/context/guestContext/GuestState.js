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
        isconfirmed: false,
      },
      {
        id: 2,
        name: "Jane Leonida",
        phone: "333 444 555",
        dietary: "Vegan",
        isconfirmed: false,
      },
      {
        id: 3,
        name: "Carla Spohr",
        phone: "333 444 555",
        dietary: "Vegan",
        isconfirmed: true,
      },
      {
        id: 4,
        name: "Ana Maria",
        phone: "333 444 555",
        dietary: "Vegan",
        isconfirmed: false,
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
