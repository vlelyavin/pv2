import {
  SET_INDEX,
  SET_SCROLL_TOP,
  TOGGLE_MENU_VISIBILITY,
  TOGGLE_DETAILED_INFO_VISIBILITY,
} from "../constants/actionsTypes";

export const INITIAL_STATE = {
  isDetailedInfoVisible: false,
  isMenuVisible: false,
  scrollTop: 0,
  index: 0,
};

export const mainReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_DETAILED_INFO_VISIBILITY:
      return { ...state, isDetailedInfoVisible: action.payload };
    case TOGGLE_MENU_VISIBILITY:
      return { ...state, isMenuVisible: action.payload };
    case SET_INDEX:
      return { ...state, index: action.payload };
    case SET_SCROLL_TOP:
      return { ...state, scrollTop: action.payload };
    default:
      return state;
  }
};
