import React from "react";
import "./uiux.css";
import uiuxcommingsoon from "../../assets/uiuxcommingsoon.png";
import Header from "../../component/Header/black_header/header.jsx";
import back from "../../assets/wback.png";
import { Link } from "react-router-dom";

const uiux = () => {
  return (
    <div className="uiux">
      <Header />
      <div className="back-branding">
        <Link to={import.meta.env.BASE_URL}>
          <img src={back} alt="back" />
        </Link>
        <h1>UI UX</h1>
      </div>
      <img src={uiuxcommingsoon} alt="" className="uiux-img" />
      <h1>UI UX Coming Soon</h1>
    </div>
  );
};

export default uiux;
