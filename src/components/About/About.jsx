import { useEffect, useRef } from "react";
import mtb from "../../images/mtb.png";
import "./About.css";

export const About = () => {
  const bicycle = useRef();
  useEffect(() => {
    window.addEventListener(
      "mousemove",
      (e) => (bicycle.current.style.transform = `scale(2) translate(${e.clientX / 900}%, ${e.clientY / 900}%)`)
    );
  }, []);

  return (
    <section className="section">
      <div className="section__info">
        <div className="title">About</div>
        <p className="text">
          I love technology, biking
          <br /> and travelling
        </p>
        <a href="https://github.com/vlelyavin" className="section__button hovereffect">
          Show me more
        </a>
      </div>
      <div className="section__container">
        <img ref={bicycle} src={mtb} alt="mtb" className="section__image bicycle" />
      </div>
    </section>
  );
};
