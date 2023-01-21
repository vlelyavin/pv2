import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { NavBar } from "./components/NavBar";
import { Intro } from "./components/Intro";
import { Projects } from "./components/Projects";
import { Info } from "./components/Info";
import { Contact } from "./components/Contact";
import { useReducer } from "react";
import { mainReducer, INITIAL_STATE } from "./reducers/mainReducer";
import "./global.css";
import "./fonts/fonts.css";
import { SET_INDEX, SET_SCROLL_TOP } from "./actions/actions";
export const App = () => {
  const [state, dispatch] = useReducer(mainReducer, INITIAL_STATE);

  const customScrollingFunc = (e) => {
    e.preventDefault();
    if (e.deltaY < 0 && state.scrollTop > 0) {
      state.scrollTop -= window.innerHeight;
      state.index--;
    } else if (e.deltaY > 0 && state.scrollTop < window.innerHeight * 3) {
      state.scrollTop += window.innerHeight;
      state.index++;
    }
    window.scrollTo(0, state.scrollTop);
    dispatch({ type: SET_SCROLL_TOP, payload: state.scrollTop });
    dispatch({ type: SET_INDEX, payload: state.index });
  };

  window.addEventListener("wheel", customScrollingFunc, { passive: false });

  window.addEventListener("load", () => {
    if (window.innerWidth < 1000) {
      window.removeEventListener("wheel", customScrollingFunc, { passive: false });
    } else {
      window.addEventListener("wheel", customScrollingFunc, { passive: false });
    }
  });

  return (
    <>
      <Header state={state} dispatch={dispatch} />
      <Menu state={state} dispatch={dispatch} />
      <NavBar state={state} dispatch={dispatch} />
      <Intro index={state.index} />
      <Projects />
      <Info state={state} dispatch={dispatch} />
      <Contact />
    </>
  );
};
