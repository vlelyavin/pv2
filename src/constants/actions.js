import { SET_INDEX, SET_SCROLL_TOP, TOGGLE_DETAILED_INFO_VISIBILITY, TOGGLE_MENU_VISIBILITY } from "./actionsTypes";

export const toggleMenuVisibility = (status) => ({
  type: TOGGLE_MENU_VISIBILITY,
  payload: status,
});

export const setScrollTop = (value) => ({
  type: SET_SCROLL_TOP,
  payload: value,
});

export const setIndex = (index) => ({
  type: SET_INDEX,
  payload: index,
});

export const toggleDetailedInfoVisibility = (status) => ({
  type: TOGGLE_DETAILED_INFO_VISIBILITY,
  payload: status,
});
