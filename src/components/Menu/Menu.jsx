import { useEffect, useRef } from "react";
import { SET_INDEX, SET_SCROLL_TOP, SHOW_MENU } from "../../actions/actions";
import "./Menu.css";

export const Menu = (props) => {
  const menuNav = useRef();

  const scrollToSection = (pixels, index) => {
    window.scrollTo(0, pixels);
    props.dispatch({ type: SHOW_MENU, payload: false });
    props.dispatch({ type: SET_INDEX, payload: index });
    props.dispatch({ type: SET_SCROLL_TOP, payload: pixels });
  };

  useEffect(() => {
    if (props.state.showMenu) {
      menuNav.current.style.transform = "translateY(0)";
    } else {
      menuNav.current.style.transform = "translateY(-120%)";
    }
  }, [props.state.showMenu]);
  return (
    <nav className="menu__nav" ref={menuNav}>
      <li className="menu__nav__link" onClick={() => scrollToSection(0, 0)}>
        Intro
      </li>
      <li className="menu__nav__link" onClick={() => scrollToSection(window.innerHeight, 1)}>
        Projects
      </li>
      <li className="menu__nav__link" onClick={() => scrollToSection(window.innerHeight * 2, 2)}>
        About
      </li>
      <li className="menu__nav__link" onClick={() => scrollToSection(window.innerHeight * 3, 3)}>
        Contact
      </li>
    </nav>
  );
};
