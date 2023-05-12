import theme from "../../images/moon.png";
import git from "../../images/git.webp";
import { useRef } from "react";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { setIndex, setScrollTop, toggleMenuVisibility } from "../../constants/actions";
import "./Header.css";

export const Header = () => {
  const isMenuVisible = useSelector((state) => state.isMenuVisible);
  const dispatch = useDispatch();
  const upperLineRef = useRef();
  const lowerLineRef = useRef();

  const handleClick = () => {
    window.scrollTo(0, 0);
    dispatch(setScrollTop(0));
    dispatch(setIndex(0));
  };

  return (
    <header className="header">
      <p className="header__title hovereffect" onClick={handleClick}>
        vlelyavin
      </p>
      <div className="header__right">
        <img className="header__icon hovereffect" src={theme} alt="themeIcon" />
        <a href="https:github.com/vlelyavin">
          <img className="header__icon hovereffect" src={git} alt="git" />
        </a>
        <div className="header__menu hovereffect" onClick={() => dispatch(toggleMenuVisibility(!isMenuVisible))}>
          <div className={classNames("header__menu__upper", { upperRotation: isMenuVisible })} ref={upperLineRef}></div>
          <div className={classNames("header__menu__lower", { lowerRotation: isMenuVisible })} ref={lowerLineRef}></div>
        </div>
      </div>
    </header>
  );
};
