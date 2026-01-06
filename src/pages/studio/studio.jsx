import React, { useState, useEffect } from "react";
import "./studio.css";
import Header from "../../component/Header/black_header/header";

// Still photos
import Still_img1 from "../../assets/Studio/Still_photos_img/1.png";
import Still_img2 from "../../assets/Studio/Still_photos_img/2.png";
import Still_img3 from "../../assets/Studio/Still_photos_img/3.png";
import Still_img4 from "../../assets/Studio/Still_photos_img/4.png";
import Still_img5 from "../../assets/Studio/Still_photos_img/5.png";
import Still_img6 from "../../assets/Studio/Still_photos_img/6.png";
import Still_img7 from "../../assets/Studio/Still_photos_img/7.png";
import Still_img8 from "../../assets/Studio/Still_photos_img/8.png";
import Still_img9 from "../../assets/Studio/Still_photos_img/9.png";
import Still_img10 from "../../assets/Studio/Still_photos_img/10.png";
import Still_img11 from "../../assets/Studio/Still_photos_img/11.png";
import Still_img12 from "../../assets/Studio/Still_photos_img/12.png";
import Still_img13 from "../../assets/Studio/Still_photos_img/13.png";
import Still_img14 from "../../assets/Studio/Still_photos_img/14.png";
import Still_img15 from "../../assets/Studio/Still_photos_img/15.png";
import Still_img16 from "../../assets/Studio/Still_photos_img/16.png";
import Still_img17 from "../../assets/Studio/Still_photos_img/17.png";
import Still_img18 from "../../assets/Studio/Still_photos_img/18.png";
import Still_img19 from "../../assets/Studio/Still_photos_img/19.png";
import Still_img20 from "../../assets/Studio/Still_photos_img/20.png";
import Still_img21 from "../../assets/Studio/Still_photos_img/21.png";

// Posters
import Posters_img1 from "../../assets/Studio/Posters-img/1.png";
import Posters_img2 from "../../assets/Studio/Posters-img/2.png";
import Posters_img3 from "../../assets/Studio/Posters-img/3.png";
import Posters_img4 from "../../assets/Studio/Posters-img/4.png";

// Sketchbook
import Sketchbook_img1 from "../../assets/Studio/Sketchbook-img/1.png";
import Sketchbook_img2 from "../../assets/Studio/Sketchbook-img/2.png";
import Sketchbook_img3 from "../../assets/Studio/Sketchbook-img/3.png";
import Sketchbook_img4 from "../../assets/Studio/Sketchbook-img/4.png";
import Sketchbook_img5 from "../../assets/Studio/Sketchbook-img/5.png";
import Sketchbook_img6 from "../../assets/Studio/Sketchbook-img/6.png";
import Sketchbook_img7 from "../../assets/Studio/Sketchbook-img/7.png";
import Sketchbook_img8 from "../../assets/Studio/Sketchbook-img/8.png";
import Sketchbook_img9 from "../../assets/Studio/Sketchbook-img/9.png";
import Sketchbook_img10 from "../../assets/Studio/Sketchbook-img/10.png";
import Sketchbook_img11 from "../../assets/Studio/Sketchbook-img/11.png";
import Sketchbook_img_last from "../../assets/Studio/Sketchbook-img/last.png";

// Publication
import Publication_img1 from "../../assets/Studio/Publication-img/1.png";
import Publication_img2 from "../../assets/Studio/Publication-img/2.png";
import Publication_img3 from "../../assets/Studio/Publication-img/3.png";

const studio = () => {
  const [activeImg, setActiveImg] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className="studio-bg">
      <Header />

      <div className="studio-page">
        <h1 className="Still-title">Still Photos</h1>
        <div className="Still-Photos">
          <div className="column1">
            <img src={Still_img1} alt=""  />
            <img src={Still_img2} alt="" />
            <img src={Still_img3} alt="" />
            <img src={Still_img4} alt="" />
            <img src={Still_img5} alt="" />
            <img src={Still_img6} alt="" />
          </div>

          <div className="column2">
            <img src={Still_img7} alt="" />
            <img src={Still_img8} alt="" />
            <img src={Still_img9} alt="" />
            <img src={Still_img10} alt="" />
            <img src={Still_img11} alt="" />
            <img src={Still_img12} alt="" />
          </div>

          <div className="column3">
            <img src={Still_img13} alt="" />
            <img src={Still_img14} alt="" />
            <img src={Still_img15} alt="" />
            <img src={Still_img16} alt="" />
            <img src={Still_img17} alt="" />
          </div>

          <div className="column4">
            <img src={Still_img18} alt="" />
            <img src={Still_img19} alt="" />
            <img src={Still_img20} alt="" />
            <img src={Still_img21} alt="" />
          </div>
        </div>

        <h1 className="Posters-title">Posters</h1>
        <div className="Posters">
          <img src={Posters_img1} alt="" />
          <img src={Posters_img2} alt="" />
          <img src={Posters_img3} alt="" />
          <img src={Posters_img4} alt="" />
        </div>

        <h1 className="Sketchbook-title">Sketchbook</h1>
        <div className="Sketchbook">
          <div className="sb-top">
            <div className="col1">
              <img
                src={Sketchbook_img1}
                alt=""
            
              />
              <img
                src={Sketchbook_img2}
                alt=""
                
              />
              <img
                src={Sketchbook_img3}
                alt=""
               
              />
            </div>

            <div className="col2">
              <img
                src={Sketchbook_img4}
                alt=""
              
              />
              <img
                src={Sketchbook_img5}
                alt=""
               
              />
              <img
                src={Sketchbook_img6}
                alt=""
           
              />
            </div>

            <div className="col3">
              <img
                src={Sketchbook_img7}
                alt=""
                
              />
              <img
                src={Sketchbook_img8}
                alt=""
            
              />
              <img
                src={Sketchbook_img9}
                alt=""
              
              />
            </div>

            <div className="col4">
              <img
                src={Sketchbook_img10}
                alt=""
             
              />
              <img
                src={Sketchbook_img11}
                alt=""
               
              />
            </div>
          </div>

          <div className="sb-bottom">
            <img
              src={Sketchbook_img_last}
              alt=""
             
            />
          </div>
        </div>

        <h1 className="Publication-title">Publication</h1>
        <div className="Publication">
          <img src={Publication_img1} alt=""/>
          <img src={Publication_img2} alt="" />
          <img src={Publication_img3} alt="" />
        </div>

        <h1 className="studio-desc">
          Sketching, photography, and posters are not side interests. They train
          my eye, sense of composition, and decision-making.
          <br />
          Every project I design is informed by this practice of observing,
          documenting, and refining.
        </h1>

        <h1 className="studio-exists">
          This space exists to show the raw layer behind the finished work.
        </h1>
      </div>

      {activeImg && isMobile && (
        <div className="img-modal" onClick={closeImage}>
          <span className="close-btn" onClick={closeImage}>
            ×
          </span>

          <div className="img-modal-inner" onClick={(e) => e.stopPropagation()}>
            <img src={activeImg} alt="Preview" />
          </div>
        </div>
      )}
    </div>
  );
};

export default studio;
