import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { toggleListeners } from "../../hooks/toggleListeners";
import mtb from "../../images/mtb.png";
import "./GeneralInfo.css";
import { useSelector } from "react-redux";

export const GeneralInfo = () => {
  const bicycleImageRef = useRef();
  const state = useSelector((state) => state);

  const bicycleInteractionFunc = (e) => {
    bicycleImageRef.current.style.transform = `scale(2) translate(${e.clientX / 900}%, ${e.clientY / 900}%)`;
  };

  useEffect(() => {
    toggleListeners(bicycleInteractionFunc, "mousemove", state);
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
        <img ref={bicycleImageRef} src={mtb} alt="mtb" className="section__image bicycle" />
      </div>
    </section>
  );
};
