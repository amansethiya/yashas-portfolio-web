import React from "react";
import "./branding.css";
import brandingproject from "../../assets/branding.js";
import { Link } from "react-router-dom";
import rightarrow from "../../assets/downarroe.png";

const branding = () => {
  return (
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
  );
};

export default branding;
