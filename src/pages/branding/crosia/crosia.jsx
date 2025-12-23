import React from "react";
import "./crosia.css";
import hero_cover from "../../../assets/crosiaimg/cover.png";
import white_sec from "../../../assets/crosiaimg/2sec.png";
import color from "../../../assets/crosiaimg/colorgroup.js";
import sqrimg from "../../../assets/crosiaimg/sqrwb.png";
import camping1 from "../../../assets/crosiaimg/cdr1.png";
import camping2 from "../../../assets/crosiaimg/cdr2.png";
import camping3 from "../../../assets/crosiaimg/cdr3.png";
import lgm1 from "../../../assets/crosiaimg/lm01.png";
import lgm2 from "../../../assets/crosiaimg/lm02.png";
import lgm3 from "../../../assets/crosiaimg/lm03.png";
import lgm4 from "../../../assets/crosiaimg/lm04.png";
import hookimg from "../../../assets/crosiaimg/hook01.png";
import crg1 from "../../../assets/crosiaimg/crg1.png";
import crg2 from "../../../assets/crosiaimg/crg2.png";
import crg3 from "../../../assets/crosiaimg/crg3.png";
import lv1 from "../../../assets/crosiaimg/lv1.png";
import lv2 from "../../../assets/crosiaimg/lv2.png";
import lv3 from "../../../assets/crosiaimg/lv3.png";
import pv from "../../../assets/crosiaimg/pv.png";
import thankyou from "../../../assets/crosiaimg/thankyou.png";
import Header from "../../../component/Header/red_header/header.jsx";

const crosia = () => {
  return (
    <div className="crosia">
      <Header />
      <div className="cover">
        <img src={hero_cover} alt="" />
      </div>

      <div className="white-sec">
        <div className="sec1">
          <img src={white_sec} alt="" className="sec1img1" />
          <p className="sec1p1">
            Crosia is positioned as a sensual, editorial luxury brand built
            around elegance, intimacy, and bold typography. The identity focuses
            on contrast, flow, and expressive letterforms.
          </p>
          <div className="color-group">
            {color.map((item, index) => (
              <div key={index} className="color-index">
                <img src={item.c_img} alt="" />
                <p>{item.c_name}</p>
              </div>
            ))}
          </div>
          <div className="sqimg">
            <img src={sqrimg} alt="" />
          </div>
        </div>
        <div className="sec2">
          <div className="camping-red">
            <h1>CAMPING RED</h1>
          </div>
          <div className="camping-images">
            <img src={camping1} alt="" />
            <img src={camping2} alt="" />
            <img src={camping3} alt="" />
          </div>
          <div className="typography">
            <h1>Typography</h1>
            <h2>Resehot</h2>
            <p>Custom ligature between "R" and "S" for soft movement</p>
          </div>
          <div className="logomark">
            <h2>LOGO MARK</h2>
            <div className="logomark-images">
              <img src={lgm1} alt="" />
              <img src={lgm2} alt="" />
              <img src={lgm3} alt="" />
              <img src={lgm4} alt="" />
            </div>
          </div>
          <div className="hooks">
            <h2>hooks</h2>
            <div className="hookimages">
              <img src={hookimg} alt="" className="hookimg" />
              <img src={crg1} alt="" />
              <img src={crg2} alt="" />
              <img src={crg3} alt="" />
            </div>
          </div>
        </div>
        <div className="sec3">
          <div className="logo-var">
            <h2>logo variation</h2>
            <div className="lv-images">
              <img src={lv1} alt="" />
              <img src={lv2} alt="" />
              <img src={lv3} alt="" />
            </div>
          </div>
          <div className="product-vision">
            <img src={pv} alt="" />
            <h2>Product Vision</h2>

            <p>
              Crosia is shaped as an emotionally driven, editorial luxury brand
              that elevates handcrafted crochet into refined, contemporary
              fashion. The identity balances sensuality with restraint, using
              bold typography, minimal palettes, and tactile forms to create a
              visual language that feels intimate, confident, and timeless.
              Every element is designed to express feeling first, allowing the
              craft to exist as quiet luxury rather than decoration.
            </p>
            <p>
              Crosia began as an exploration of how handcrafted crochet could
              exist within a luxury, editorial fashion world. I led the brand
              direction end-to-end defining the identity system, visual
              language, and first product vision with a focus on intimacy,
              confidence, and emotional resonance. The project allowed me to
              explore the intersection of brand thinking, materiality, and
              product-led storytelling.
            </p>
          </div>
          <div className="thankyou-c">
            <img src={thankyou} alt="" />
            <h1>Thank You</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default crosia;
