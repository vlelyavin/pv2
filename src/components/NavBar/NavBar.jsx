import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIndex, setScrollTop, toggleMenuVisibility } from "../../constants/actions";
import "./NavBar.css";

export const NavBar = () => {
  const index = useSelector((state) => state.index);
  const dispatch = useDispatch();
  const sideNavRef = useRef();

  const scrollToSection = (pixels, index) => {
    window.scrollTo(0, pixels);
    dispatch(toggleMenuVisibility(false));
    dispatch(setIndex(index));
    dispatch(setScrollTop(pixels));
  };

  useEffect(() => {
    for (let item of sideNavRef.current.children) item.classList.remove("current");
    sideNavRef.current.children[index].classList.add("current");
  }, [index]);
  return (
    <nav className="sideNav" ref={sideNavRef}>
      <li className="sideNav__link hovereffect" onClick={() => scrollToSection(0, 0)}></li>
      <li className="sideNav__link hovereffect" onClick={() => scrollToSection(window.innerHeight, 1)}></li>
      <li className="sideNav__link hovereffect" onClick={() => scrollToSection(window.innerHeight * 2, 2)}></li>
      <li className="sideNav__link hovereffect" onClick={() => scrollToSection(window.innerHeight * 3, 3)}></li>
    </nav>
  );
};
