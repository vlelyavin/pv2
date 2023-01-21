import { SET_INDEX, SET_SCROLL_TOP, SHOW_MENU, SHOW_DETAILED_INFO } from "../actions/actions";

export const INITIAL_STATE = {
  showDetailedInfo: false,
  showMenu: false,
  scrollTop: 0,
  index: 0,
};

export const mainReducer = (state, action) => {
  switch (action.type) {
    case SHOW_DETAILED_INFO:
      return { ...state, showDetailedInfo: action.payload };
    case SHOW_MENU:
      return { ...state, showMenu: action.payload };
    case SET_INDEX:
      return { ...state, index: action.payload };
    case SET_SCROLL_TOP:
      return { ...state, scrollTop: action.payload };
    default:
      return state;
  }
};
