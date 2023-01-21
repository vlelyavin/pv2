import { useEffect, useRef } from "react";
import "./Intro.css";

export const Intro = () => {
  const text = useRef();
  const circle = useRef();

  const planetInteractionFunc = (e) => {
    text.current.style.transform = `translate(-${e.x / 100}px, -${e.y / 100}px)`;
    circle.current.style.transform = `translate(-${e.x / 40}px, -${e.y / 40}px)`;
  };

  useEffect(() => {
    if (window.innerWidth > 1000) window.addEventListener("mousemove", planetInteractionFunc);
  }, []);

  return (
    <section className="section">
      <div className="section__info">
        <div className="title">Vladimir Lelyavin</div>
        <p className="text">web developer</p>
      </div>
      <div className="container">
        <div className="intro__text" ref={text}>
          PORTFOLIO
        </div>
        <div className="intro__circle" ref={circle}></div>
      </div>
    </section>
  );
};
