import React from "react";
import "./uiux.css";
import uiuxcommingsoon from "../../assets/uiuxcommingsoon.png";
import Header from "../../component/Header/black_header/header.jsx";
import back from "../../assets/wback.png";

const uiux = () => {
  return (
    <div className="uiux">
      <Header />
      <div className="back-branding">
        <a href="/">
          <img src={back} alt="" />
        </a>
        <h1>UI UX</h1>
      </div>
      <img src={uiuxcommingsoon} alt="" className="uiux-img" />
      <h1>UI UX Coming Soon</h1>
    </div>
  );
};

export default uiux;
