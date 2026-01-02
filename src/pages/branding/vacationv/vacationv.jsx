import React from "react";
import "./vacationv.css";
import Header from "../../../component/Header/white_header/header";
import hero_img from "../../../assets/vacationv/vvhero.png";
import ii_img from "../../../assets/vacationv/img2.png";
import iii_img from "../../../assets/vacationv/img3.png";
import vd1_img from "../../../assets/vacationv/vd1.png";
import vd3_img from "../../../assets/vacationv/vd3.png";
import vd2_img from "../../../assets/vacationv/vd2.png";
import vd4_img from "../../../assets/vacationv/vd4.png";
import Exploring, { data } from "../../../component/exploring/exploring.jsx";

const Vacationv = () => {
  const vacationvImages = data.filter((img) => img.id !== 3);

  return (
    <div>
      <Header />
      <div className="vacationv" id="vacationv">
        <div className="vv-hero">
          <img src={hero_img} alt="" />
          <p>Real Estate Brand Experience & Marketing Design</p>
        </div>
        <div className="vv-sec2">
          <img src={ii_img} alt="" className="vv2img1" />
          <p className="vv2p1">
            Vacation Village is a luxury second-home real estate development
            located in Chikkamagaluru, Karnataka. <br /> The project blends
            nature, wellness, hospitality, and long-term investment value into a
            single lifestyle ecosystem.
          </p>
          <p className="vv2p2">
            My role focused on supporting marketing visuals and defining
            early-stage visual consistency across digital touchpoints.
          </p>
          <img src={iii_img} alt="" className="vv2img2" />
          <p className="vv2p3">
            Vacation Village is positioned as more than a residential
            development. <br /> It is designed as a managed lifestyle
            destination combining private residences, hospitality spaces,
            wellness experiences, and long-term asset value.
          </p>
        </div>
        <div className="vvsec-3 vd">
          <h1 className="vd-title">Visual Direction</h1>
          <div className="vd-bgb">
            <div className="vdimgs">
              <img src={vd1_img} alt="" />
              <img src={vd2_img} alt="" />
              <img src={vd3_img} alt="" />
              <img src={vd4_img} alt="" />
            </div>
            <p className="vdp1">
              Real estate brands often struggle with fragmented visuals across
              campaigns, themes, and phases of development. <br /> For Vacation
              Village, the focus was on supporting a cohesive visual experience
              that reflects calm, luxury, and nature-driven living.
            </p>
            <p className="vdp2">
              Design decisions prioritized emotional storytelling, spatial
              breathing, and premium restraint rather than aggressive selling.
            </p>
          </div>
        </div>
        <div className="vvsec-4">
          <div className="det">
            <h1>Design & Experience Thinking</h1>
            <p>
              Vacation Village operates across multiple offerings including
              residential plots, hospitality spaces, wellness amenities, and
              curated community experiences. <br /> The design approach focused
              on maintaining a single master brand feel while allowing different
              themes and offerings to communicate without visual inconsistency.{" "}
              <br />
              This ensures long-term scalability across locations and future
              developments.
            </p>
          </div>
          <div className="fs">
            <h1>Future Scope</h1>
            <p>
              With deeper involvement, this project could evolve into a
              structured digital brand system covering campaign templates,
              social storytelling formats, and long-term visual guidelines
              aligned with the brand’s growth roadmap.
            </p>
          </div>
          <h1 className="l2nd">
            This project sits at the intersection of brand experience, marketing
            design, and real-world execution.
          </h1>
          <h1 className="l1st">Work in progress</h1>
        </div>
      </div>
      <Exploring images={vacationvImages} />
    </div>
  );
};

export default Vacationv;
