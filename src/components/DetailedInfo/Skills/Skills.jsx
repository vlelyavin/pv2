import { IoLogoJavascript } from "react-icons/io";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoSass } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import nextjs from "../../../images/next-js.svg";
import "./Skills.css";

export const Skills = () => {
  const iconStyle = { width: "80px", height: "80px" };
  return (
    <div className="skills">
      <div className="skills__item">
        <div className="skills__item__icon">
          <IoLogoJavascript style={iconStyle} />
        </div>
        <div className="skills__item__inner">
          <div className="skills__item__name">Javascript</div>
          <div className="skills__item__progress js"></div>
        </div>
      </div>

      <div className="skills__item">
        <div className="skills__item__icon">
          <IoLogoHtml5 style={iconStyle} />
        </div>
        <div className="skills__item__inner">
          <div className="skills__item__info">
            <div className="skills__item__name">HTML5</div>
          </div>
          <div className="skills__item__progress js"></div>
        </div>
      </div>

      <div className="skills__item">
        <div className="skills__item__icon">
          <IoLogoCss3 style={iconStyle} />
        </div>
        <div className="skills__item__inner">
          <div className="skills__item__info">
            <div className="skills__item__name">CSS3</div>
          </div>
          <div className="skills__item__progress js"></div>
        </div>
      </div>

      <div className="skills__item">
        <div className="skills__item__icon">
          <IoLogoSass style={iconStyle} />
        </div>
        <div className="skills__item__inner">
          <div className="skills__item__info">
            <div className="skills__item__name">SASS</div>
          </div>
          <div className="skills__item__progress js"></div>
        </div>
      </div>

      <div className="skills__item">
        <div className="skills__item__icon">
          <FaReact style={iconStyle} />
        </div>
        <div className="skills__item__inner">
          <div className="skills__item__info">
            <div className="skills__item__name">React</div>
          </div>
          <div className="skills__item__progress js"></div>
        </div>
      </div>

      <div className="skills__item">
        <div className="skills__item__icon">
          <SiNextdotjs style={iconStyle} />
        </div>
        <div className="skills__item__inner">
          <div className="skills__item__info">
            <div className="skills__item__name">Next.js</div>
          </div>
          <div className="skills__item__progress js"></div>
        </div>
      </div>
    </div>
  );
};
