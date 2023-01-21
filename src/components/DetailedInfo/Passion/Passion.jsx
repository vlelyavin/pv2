import mtb from "../../../images/mtbIcon.png";
import travelling from "../../../images/travelling.png";
import technology from "../../../images/technology.png";
import "./Passion.css";

export const Passion = () => {
  return (
    <div className="passion">
      <div className="passion__item">
        <img src={mtb} className="passion__item__image" />
        <div className="passion__item__title">Biking</div>
      </div>

      <div className="passion__item">
        <img src={travelling} className="passion__item__image" />
        <div className="passion__item__title">Travelling</div>
      </div>

      <div className="passion__item">
        <img src={technology} className="passion__item__image" />
        <div className="passion__item__title">Technology</div>
      </div>
    </div>
  );
};
