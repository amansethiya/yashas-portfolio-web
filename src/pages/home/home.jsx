import React, { useRef } from "react";
import "./home.css";
import "../../index.css";
import heroleft from "../../assets/heroleft.png";
import heroright from "../../assets/yashas.png";
import projectforhome from "../../assets/projectforhome.js";
import { Link } from "react-router-dom";
import Header from "../../component/Header/black_header/header.jsx";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const hero = () => {
  const location = useLocation();

  const textRef = useRef(null);

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  useEffect(() => {
    if (!textRef.current) return;

    // prevent double execution
    if (textRef.current.dataset.animated === "true") return;

    const text = textRef.current.innerText;
    const words = text.split(" ");

    textRef.current.innerHTML = words
      .map(
        (word, i) =>
          `<span style="animation-delay:${i * 0.2}s">${word}&nbsp;</span>`
      )
      .join("");

    textRef.current.dataset.animated = "true";
  }, []);

  return (
    <div>
      <Header />
      <div className="hero ">
        <div className="hero-head">
          <h2 className="reveal-text" ref={textRef}>
            Hi I’m Yashas - Brand & UX Designer &mdash; I create identities and
            experiences that make brands clear, distinctive, and memorable.
          </h2>
        </div>
        <div className="second-hero scroll-section">
          <div className="hero-left">
            <img src={heroleft} alt="" />
          </div>
          <div className="hero-right">
            <img src={heroright} alt="" />

            <p>
              I’m currently leading design for <span> Vacation Village</span>,
              shaping its identity, communication, and full brand experience
              across digital and print.
            </p>
          </div>
        </div>
      </div>

      <div className="projectforhome" id="work">
        <div className="project-head scroll-section">
          <h2>Projects</h2>
        </div>

        {projectforhome.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            className="project-item scroll-section"
          >
            <div className="left-home-project ">
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
