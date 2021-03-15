import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/authContext/authContext";
import GuestForm from "../guests/GuestForm/GuestForm";
import GuestCounter from "../guests/GuestCounter/GuestCounter";
import GuestFilter from "../guests/GuestFilter/GuestFilter";
import GuestSearch from "../guests/GuestSearch/GuestSearch";
import Guests from "../guests/GuestsGrid/Guests";

const Home = () => {
  const { getUser } = useContext(AuthContext);

  useEffect(() => {
    getUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="app-container">
      <div className="main">
        <div className="filter">
          <GuestFilter />
          <GuestSearch />
        </div>
        <GuestForm />
        <GuestCounter />
      </div>
      <Guests />
    </div>
  );
};

export default Home;
