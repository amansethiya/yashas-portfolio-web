import React from "react";
import "./branding.css";
import brandingproject from "../../assets/branding.js";
import { Link } from "react-router-dom";
import rightarrow from "../../assets/downarroe.png";
import Header from "../../component/Header/black_header/header.jsx";
import back from "../../assets/wback.png";
import { useNavigate } from "react-router-dom";

const branding = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className="back-branding">
        <a href="/">
          <img src={back} alt="" onClick={() => navigate(-1)} />
        </a>
        <h1>Branding</h1>
      </div>
      <div className="branding">
        {brandingproject.map((item, index) => (
          <Link to={item.path} key={index} className="brand-link">
            <div className="b-card">
              <img src={item.p_image} alt="" className="p_image" />
              <div className="brand-data">
                <div className="b-left">
                  <h1>{item.p_name}</h1>
                  <p>{item.p_desc}</p>
                </div>
                <div className="b-right">
                  <img src={rightarrow} alt="" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default branding;
