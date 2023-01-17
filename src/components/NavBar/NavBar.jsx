import { useEffect, useRef } from "react";
import { SHOW_MENU, SET_INDEX, SET_SCROLL_TOP } from "../../actions/actions";
import "./NavBar.css";

export const NavBar = (props) => {
  const sideNav = useRef();

  const scrollToSection = (pixels, index) => {
    window.scrollTo(0, pixels);
    props.dispatch({ type: SHOW_MENU, payload: false });
    props.dispatch({ type: SET_INDEX, payload: index });
    props.dispatch({ type: SET_SCROLL_TOP, payload: pixels });
  };

  useEffect(() => {
    for (let item of sideNav.current.children) item.classList.remove("current");
    sideNav.current.children[props.state.index].classList.add("current");
  }, [props.state.index]);
  return (
    <nav className="sideNav" ref={sideNav}>
      <li className="sideNav__link hovereffect" onClick={() => scrollToSection(0, 0)}></li>
      <li className="sideNav__link hovereffect" onClick={() => scrollToSection(window.innerHeight, 1)}></li>
      <li className="sideNav__link hovereffect" onClick={() => scrollToSection(window.innerHeight * 2, 2)}></li>
      <li className="sideNav__link hovereffect" onClick={() => scrollToSection(window.innerHeight * 3, 3)}></li>
    </nav>
  );
};
