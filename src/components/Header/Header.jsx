import theme from "../../images/moon.png";
import git from "../../images/git.webp";
import "./Header.css";
import { useRef } from "react";
import { SET_INDEX, SET_SCROLL_TOP, SHOW_MENU } from "../../actions/actions";
import classNames from "classnames";

export const Header = (props) => {
  const upperLine = useRef();
  const lowerLine = useRef();

  let upperLineClassName = classNames("header__menu__upper", { upperRotation: props.state.showMenu });
  let lowerLineClassName = classNames("header__menu__lower", { lowerRotation: props.state.showMenu });

  const handleClick = () => {
    window.scrollTo(0, 0);
    props.dispatch({ type: SET_SCROLL_TOP, payload: 0 });
    props.dispatch({ type: SET_INDEX, payload: 0 });
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
        <div
          className="header__menu hovereffect"
          onClick={() => props.dispatch({ type: SHOW_MENU, payload: !props.state.showMenu })}
        >
          <div className={upperLineClassName} ref={upperLine}></div>
          <div className={lowerLineClassName} ref={lowerLine}></div>
        </div>
      </div>
    </header>
  );
};
