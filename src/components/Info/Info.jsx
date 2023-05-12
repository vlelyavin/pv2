import { BrowserRouter as Routes, Route } from "react-router-dom";
import { DetailedInfo } from "../DetailedInfo/DetailedInfo";
import { GeneralInfo } from "../GeneralInfo/GeneralInfo";
import "./Info.css";

export const Info = () => {
  return (
    <Routes>
      <Route path="/pv2/" element={<GeneralInfo />} />
      <Route path="/pv2/detailedInfo/" element={<DetailedInfo />} />
    </Routes>
  );
};
