import {
  TOGGLE_FILTER,
  SEARCH_GUEST,
  CLEAR_SEARCH,
  ADD_GUEST,
  REMOVE_GUEST,
  UPDATE_GUEST,
  EDIT_GUEST,
  CLEAR_GUEST,
  GET_GUESTS,
  GUESTS_ERROR,
  CLEAR_FILTER,
} from "../types";

export default (state, { type, payload }) => {
  switch (type) {
    case GET_GUESTS:
      return {
        ...state,
        guests: payload,
      };
    case GUESTS_ERROR:
      return {
        ...state,
        errors: payload,
      };
    case EDIT_GUEST:
      return {
        ...state,
        editAble: payload,
      };
    case CLEAR_GUEST:
      return {
        ...state,
        editAble: null,
      };
    case CLEAR_FILTER:
      return {
        guests: [],
      };
    case UPDATE_GUEST:
      return {
        ...state,
        guests: state.guests.map((guest) =>
          guest._id === payload._id ? payload : guest
        ),
      };
    case REMOVE_GUEST:
      return {
        ...state,
        guests: state.guests.filter((item) => item._id !== payload),
      };
    case ADD_GUEST:
      return {
        ...state,
        guests: [...state.guests, payload],
      };
    case SEARCH_GUEST:
      const reg = new RegExp(`${payload}`, "gi");
      return {
        ...state,
        search: state.guests.filter((guest) => guest.name.match(reg)),
      };
    case CLEAR_SEARCH:
      return {
        ...state,
        search: null,
      };
    case TOGGLE_FILTER:
      return {
        ...state,
        filterGuest: !state.filterGuest,
      };
    default:
      return state;
  }
};
