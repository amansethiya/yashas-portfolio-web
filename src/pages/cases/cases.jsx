import React from "react";
import "./cases.css";
import uiuxcommingsoon from "../../assets/uiuxcommingsoon.png";
import Header from "../../component/Header/black_header/header.jsx";
import back from "../../assets/wback.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const cases = () => {
  const navigate = useNavigate();
  return (
    <div className="uiux" id="uiux">
      <Header />
      <div className="back-branding">
        <img src={back} alt="back" onClick={() => navigate(-1)} />

        <h1>Case Studies</h1>
      </div>
      <img src={uiuxcommingsoon} alt="" className="uiux-img" />
      <h1>Caes Studies Coming Soon</h1>
    </div>
  );
};

export default cases;
