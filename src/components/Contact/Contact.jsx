import { useEffect, useRef } from "react";
import { toggleListeners } from "../../hooks/toggleListeners";
import spacemanDark from "../../images/contact_dark.webp";
import git from "../../images/git.webp";
import inst from "../../images/inst.webp";
import "./Contact.css";

export const Contact = (props) => {
  const spacemanImageRef = useRef();

  const spacemanInteractionFunc = (e) => {
    spacemanImageRef.current.style.transform = `scale(1.2) translate(${e.clientX / 900}%, ${e.clientY / 900}%)`;
  };

  useEffect(() => {
    toggleListeners(spacemanInteractionFunc, "mousemove", props.state);
  }, []);

  return (
    <section className="section">
      <div className="section__info">
        <div className="title">Contact</div>
        <p className="text">vlelyavin@gmail.com</p>
        <div className="section__icons">
          <a href="https:github.com/vlelyavin">
            <img src={git} alt="git" className="section__icon hovereffect" />
          </a>
          <a href="https:instagram.com/v._lelyavin">
            <img src={inst} alt="inst" className="section__icon hovereffect" />
          </a>
        </div>
      </div>
      <div className="section__container">
        <img ref={spacemanImageRef} src={spacemanDark} alt="spaceman" className="section__image spaceman" />
      </div>
    </section>
  );
};
