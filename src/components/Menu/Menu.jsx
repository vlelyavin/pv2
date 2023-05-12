import { useEffect, useRef } from "react";
import { setIndex, setScrollTop, toggleMenuVisibility } from "../../constants/actions";
import { useDispatch, useSelector } from "react-redux";
import "./Menu.css";

export const Menu = () => {
  const isMenuVisible = useSelector((state) => state.isMenuVisible);
  const dispatch = useDispatch();
  const menuNavRef = useRef();

  const scrollToSection = (pixels, index) => {
    window.scrollTo(0, pixels);
    dispatch(toggleMenuVisibility(false));
    dispatch(setIndex(index));
    dispatch(setScrollTop(pixels));
  };

  useEffect(() => {
    if (isMenuVisible) {
      menuNavRef.current.style.transform = "translateY(0)";
    } else {
      menuNavRef.current.style.transform = "translateY(-120%)";
    }
  }, [isMenuVisible]);
  return (
    <nav className="menu__nav" ref={menuNavRef}>
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
