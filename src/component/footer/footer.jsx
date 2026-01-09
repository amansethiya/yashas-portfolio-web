import React from "react";
import "./footer.css";
import downarrow from "../../assets/downarroe.png";
import btnicon from "../../assets/logo.png";
import { Link } from "react-router-dom";
const emailAddress = "yashk.design9@gmail.com";
const subject = "Inquiry from website";

const footer = () => {
  return (
    <div className="stfo">
      <div className="studio">
        <div className="arrow">
          <img src={downarrow} alt="" />
        </div>

        <Link to="/studio" className="studio-button">
          <hr />

          <img src={btnicon} alt="" />

          <h1>THE STUDIO</h1>
        </Link>
      </div>
      <div className="footer">
        <div className="f-data">
          <div className="f-left">
            <h1>Contact</h1>
            <p>Bangalore, India</p>
            <p>
              <a
                href={`mailto:${emailAddress}?subject=${encodeURIComponent(
                  subject
                )}`}
                className="f-link"
              >
                {emailAddress}
              </a>
            </p>
          </div>
          <div className="f-center">
            <h1>Social</h1>
            <a
              href="https://www.linkedin.com/in/yashas-k-248b68293/?trk=public-profile-join-page"
              className="f-link"
            >
              <p>LinkedIn</p>
            </a>
            <a
              href="https://www.instagram.com/yashsprivatelife/"
              className="f-link"
            >
              <p>Instagram</p>
            </a>
            <a href="https://www.behance.net/blacksky00" className="f-link">
              <p>Behance</p>
            </a>
            <a href="https://x.com/YashKarne_" className="f-link">
              <p>X</p>
            </a>
          </div>
          <div className="f-right">
            <h1>Explore</h1>
            <Link to={"/branding"} className="f-link">
              {" "}
              <p> Branding</p>
            </Link>
            <Link to={"/uiux"} className="f-link">
              {" "}
              <p> UI/UX</p>
            </Link>
            <Link to={"/casestudies"} className="f-link">
              {" "}
              <p> Case studies</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
