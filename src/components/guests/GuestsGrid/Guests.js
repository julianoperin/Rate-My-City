import React, { useContext, useEffect } from "react";
import GuestContext from "../../../context/guestContext/guestContext";
import Guest from "../Guest/Guest";

const Guests = () => {
  const { guests, filterGuest, search, getGuests } = useContext(GuestContext);
  useEffect(() => {
    getGuests();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="guests">
      {search !== null
        ? search.map((guest) => <Guest key={guest.id} guest={guest} />)
        : guests
            .filter((guest) => !filterGuest || guest.isConfirmed)
            .map((guest) => {
              return <Guest key={guest.id} guest={guest} />;
            })}
    </div>
  );
};
export default Guests;
