import { Routes, Route, Link } from "react-router-dom";
import { About } from "./About";
import { Passion } from "./Passion";
import { Skills } from "./Skills";
import { VscClose } from "react-icons/vsc";
import "./DetailedInfo.css";

export const DetailedInfo = () => {
  return (
    <section className="section">
      <div className="detailedInfo">
        <header className="detailedInfo__header">
          <Link className="detailedInfo__header__link hovereffect" to="/pv2/detailedInfo/">
            About me
          </Link>
          <Link className="detailedInfo__header__link hovereffect" to="/pv2/detailedInfo/skills">
            Skills
          </Link>
          <Link className="detailedInfo__header__link hovereffect" to="/pv2/detailedInfo/passion">
            Passion
          </Link>
        </header>
        <div className="detailedInfo__container">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/passion" element={<Passion />} />
          </Routes>
        </div>
        <Link to="/pv2" className="detailedInfo__button__container hovereffect">
          <VscClose className="detailedInfo__button" />
        </Link>
      </div>
    </section>
  );
};
