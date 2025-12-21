import React from "react";
import "./footer.css";
import downarrow from "../../assets/downarroe.png";
import btnicon from "../../assets/logo.png";

const footer = () => {
  return (
    <div>
      <div className="studio">
        <div className="arrow">
          <img src={downarrow} alt="" />
        </div>
        <div className="studio-button">
          <hr />
          <img src={btnicon} alt="" />
          <h1>THE STUDIO</h1>
        </div>
      </div>
      <div className="footer">
        <div className="footer-name">
          <h1>get in touch</h1>
        </div>
        <div className="footer-connect">
          <div className="left-footer">
            <h2>contact</h2>
            <p>abc, 12548, india</p>
            <p>yash@gmail.com</p>
            <p>987456123</p>
          </div>
          <div className="right-footer">
            <h2>Know More</h2>
            <div className="social">
              <img
                src="https://www.kindpng.com/picc/m/36-368497_instagram-link-logo-instagram-png-transparent-png.png"
                alt=""
              />
              <img
                src="https://toppng.com/public/uploads/preview/twitter-x-icon-logo-116902890413xbfexhf8l.webp"
                alt=""
              />
              <img
                src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG8.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
