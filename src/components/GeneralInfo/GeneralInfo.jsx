import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import mtb from "../../images/mtb.png";
import "./GeneralInfo.css";

export const GeneralInfo = () => {
  const bicycle = useRef();

  const bicycleInteractionFunc = (e) => {
    bicycle.current.style.transform = `scale(2) translate(${e.clientX / 900}%, ${e.clientY / 900}%)`;
  };

  useEffect(() => {
    if (window.innerWidth > 1000) window.addEventListener("mousemove", bicycleInteractionFunc);
  }, []);

  return (
    <section className="section">
      <div className="section__info">
        <div className="title">About</div>
        <p className="text">
          I love technology, biking
          <br /> and travelling
        </p>
        <Link to="/pv2/detailedInfo/" className="section__button hovereffect">
          Show me more
        </Link>
      </div>
      <div className="section__container">
        <img ref={bicycle} src={mtb} alt="mtb" className="section__image bicycle" />
      </div>
    </section>
  );
};
