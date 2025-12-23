import React from "react";
import "./home.css";
import heroleft from "../../assets/heroleft.png";
import heroright from "../../assets/yashas.png";
import projectforhome from "../../assets/projectforhome.js";
import { Link } from "react-router-dom";
import Header from "../../component/Header/black_header/header.jsx";

const hero = () => {
  return (
    <div>
      <Header />
      <div className="hero">
        <div className="hero-head">
          <h2>
            Hi I’m Yashas - Brand & UX Designer --- I create identities and
            experiences that make brands clear, distinctive, and memorable.
          </h2>
        </div>
        <div className="second-hero">
          <div className="hero-left">
            <img src={heroleft} alt="" />
          </div>
          <div className="hero-right">
            <img src={heroright} alt="" />

            <p>
              I’m currently leading design for Vacation Village,
              <br /> shaping its identity, communication, and full <br />
              brand experience across digital and print.
            </p>
          </div>
        </div>
      </div>

      <div className="projectforhome" id="work">
        <div className="project-head">
          <h2>Projects</h2>
        </div>

        {projectforhome.map((item, index) => (
          <Link to={item.path} key={index} className="project-item">
            <div className="left-home-project">
              <h1>{item.name}</h1>
              <hr />
              <p>{item.work}</p>
              <p>{item.year}</p>
            </div>
            <div className="right-home-project">
              <img src={item.image} alt="" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default hero;
