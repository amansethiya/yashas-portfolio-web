import React from "react";
import "./cases.css";
import uiuxcommingsoon from "../../assets/uiuxcommingsoon.png";
import Header from "../../component/Header/black_header/header.jsx";
import back from "../../assets/wback.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Exploring, { data } from "../../component/exploring/exploring.jsx";

const cases = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const casestudiesImages = data.filter((img) => img.id);

  return (
    <div className="uiux" id="casestudies">
      <Header />
      <div className="back-branding">
        <img src={back} alt="back" onClick={() => navigate(-1)} />

        <h1>Case Studies</h1>
      </div>
      <img src={uiuxcommingsoon} alt="" className="uiux-img" />
      <h1>Caes Studies Coming Soon</h1>
      <Exploring images={casestudiesImages} />
    </div>
  );
};

export default cases;
