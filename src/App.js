import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { NavBar } from "./components/NavBar";
import { Intro } from "./components/Intro";
import { Projects } from "./components/Projects";
import { Info } from "./components/Info";
import { Contact } from "./components/Contact";
import { useEffect, useReducer } from "react";
import { mainReducer, INITIAL_STATE } from "./reducers/mainReducer";
import { SET_INDEX, SET_SCROLL_TOP } from "./constants/actionsTypes";
import { toggleListeners } from "./hooks/toggleListeners";
import "./global.css";
import "./fonts/fonts.css";
import { Route, Routes } from "react-router-dom";
import { GeneralInfo } from "./components/GeneralInfo/GeneralInfo";
import { DetailedInfo } from "./components/DetailedInfo/DetailedInfo";

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

  useEffect(() => {
    toggleListeners(customScrollingFunc, "wheel", state, { passive: false });
  }, []);

  return (
    <>
      <Header />
      <Menu />
      <NavBar />
      <Intro />
      <Projects />
      <Routes>
        <Route path="/pv2/" element={<GeneralInfo />} />
        <Route path="/pv2/detailedInfo//*" element={<DetailedInfo />} />
      </Routes>
      <Contact />
    </>
  );
};
