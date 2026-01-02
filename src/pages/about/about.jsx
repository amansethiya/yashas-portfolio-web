import React from "react";
import "./about.css";
import Header from "../../component/Header/black_header/header";
import yash_abt from "../../assets/yashas.png";
import work_abt from "../../assets/work-abt.png";
import resume from "../../assets/resume.pdf";

const about = () => {
  return (
    <div>
      <Header />
      <div className="about">
        <h1 className="abt-heading scroll-section">
          I’m a designer focused on building clear, intentional brand and
          product experiences.
        </h1>
        <div className="hero-abt scroll-section">
          <div className="left-abt">
            <p>
              My work sits at the intersection of branding, UX, and UI. I take
              projects from problem framing to final execution, shaping how a
              product looks, feels, and communicates. I care about structure,
              clarity, and systems that scale, not just visual output.
            </p>
            <p>
              I’ve worked on brand identities, product concepts, and real-estate
              brand experiences, often owning projects end to end. My approach
              balances aesthetics with user needs and business goals.
            </p>
            <p>
              This portfolio showcases selected projects and case studies that
              reflect my approach and process.
            </p>
          </div>
          <div className="right-abt">
            <img src={yash_abt} alt="" />
            <a href={resume} target="_blank" rel="noopener noreferrer">
              <button> Download Resume</button>
            </a>
          </div>
        </div>
        <div className="abt-sec2">
          <h1 className="scroll-section">Where it started</h1>
          <p className="scroll-section">
            Before design became digital for me, it was physical.
          </p>
          <p className="scroll-section">
            There was a pause where I spent my time drawing. Paper, pencil,
            charcoal. The grain of the paper mattered. Pressure mattered.
            Mistakes stayed visible. I couldn’t clean things up or move fast.
            That slowness taught me how to look properly. How to build depth
            over time and stay with something even when it felt unresolved.
          </p>
          <img src={work_abt} alt="" className="scroll-section" />
          <h1 className="scroll-section">
            That way of working never left. It shows up in how I design today.
            I’m comfortable starting slow, staying with uncertainty, and letting
            things take shape through attention and care.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default about;
