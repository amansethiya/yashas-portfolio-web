import React, { useEffect, useState } from "react";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);
  /*
  const [activeImg, setActiveImg] = useState(null);
  const [isMobile, setIsMobile] = useState(false);*/
  const onInit = (detail) => {
    console.log("lightGallery has been initialized", detail);
    try {
      const anchors = document.querySelectorAll(".studio-page a");
      anchors.forEach((a) =>
        console.log("anchor:", {
          href: a.href,
          dataSrc: a.getAttribute("data-src"),
        })
      );
    } catch (e) {
      console.error("Failed to log anchors", e);
    }
  };

  return (
    <div className="studio-bg">
      <Header />
      <div className="studio-page">
        <h1 className="Still-title">Still Photos</h1>
        {isMobile ? (
          <LightGallery
            selector="a"
            onInit={onInit}
            speed={500}
            plugins={[lgThumbnail]}
            controls={true}
            closable={true}
            hideBarsDelay={0}
            mobileSettings={{
              controls: false,
              showCloseIcon: true,
              download: false,
            }}
          >
            <div className="Still-Photos">
              <div className="column1">
                <a href={Still_img1} data-src={Still_img1}>
                  {" "}
                  <img src={Still_img1} alt="" />
                </a>
                <a href={Still_img2} data-src={Still_img2}>
                  <img src={Still_img2} alt="" />
                </a>
                <a href={Still_img3} data-src={Still_img3}>
                  <img src={Still_img3} alt="" />
                </a>
                <a href={Still_img4} data-src={Still_img4}>
                  <img src={Still_img4} alt="" />
                </a>
                <a href={Still_img5} data-src={Still_img5}>
                  <img src={Still_img5} alt="" />
                </a>
                <a href={Still_img6} data-src={Still_img6}>
                  <img src={Still_img6} alt="" />
                </a>
              </div>

              <div className="column2">
                <a href={Still_img7} data-src={Still_img7}>
                  <img src={Still_img7} alt="" />
                </a>
                <a href={Still_img8} data-src={Still_img8}>
                  <img src={Still_img8} alt="" />
                </a>
                <a href={Still_img9} data-src={Still_img9}>
                  <img src={Still_img9} alt="" />
                </a>
                <a href={Still_img10} data-src={Still_img10}>
                  <img src={Still_img10} alt="" />
                </a>
                <a href={Still_img11} data-src={Still_img11}>
                  <img src={Still_img11} alt="" />
                </a>
                <a href={Still_img12} data-src={Still_img12}>
                  <img src={Still_img12} alt="" />
                </a>
              </div>

              <div className="column3">
                <a href={Still_img13} data-src={Still_img13}>
                  <img src={Still_img13} alt="" />
                </a>
                <a href={Still_img14} data-src={Still_img14}>
                  <img src={Still_img14} alt="" />
                </a>
                <a href={Still_img15} data-src={Still_img15}>
                  <img src={Still_img15} alt="" />
                </a>
                <a href={Still_img16} data-src={Still_img16}>
                  <img src={Still_img16} alt="" />
                </a>
                <a href={Still_img17} data-src={Still_img17}>
                  <img src={Still_img17} alt="" />
                </a>
              </div>

              <div className="column4">
                <a href={Still_img18} data-src={Still_img18}>
                  <img src={Still_img18} alt="" />
                </a>
                <a href={Still_img19} data-src={Still_img19}>
                  <img src={Still_img19} alt="" />
                </a>
                <a href={Still_img20} data-src={Still_img20}>
                  <img src={Still_img20} alt="" />
                </a>
                <a href={Still_img21} data-src={Still_img21}>
                  <img src={Still_img21} alt="" />
                </a>
              </div>
            </div>
          </LightGallery>
        ) : (
          <div className="Still-Photos">
            <div className="column1">
              <img src={Still_img1} alt="" />
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
        )}

        <h1 className="Posters-title">Posters</h1>
        {isMobile ? (
          <LightGallery
            selector="a"
            onInit={onInit}
            speed={500}
            plugins={[lgThumbnail]}
            controls={true}
            closable={true}
            hideBarsDelay={0}
            mobileSettings={{
              controls: false,
              showCloseIcon: true,
              download: false,
            }}
          >
            <div className="Posters">
              <a href={Posters_img1} data-src={Posters_img1}>
                <img src={Posters_img1} alt="" />
              </a>
              <a href={Posters_img2} data-src={Posters_img2}>
                <img src={Posters_img2} alt="" />
              </a>
              <a href={Posters_img3} data-src={Posters_img3}>
                <img src={Posters_img3} alt="" />
              </a>
              <a href={Posters_img4} data-src={Posters_img4}>
                <img src={Posters_img4} alt="" />
              </a>
            </div>
          </LightGallery>
        ) : (
          <div className="Posters">
            <img src={Posters_img1} alt="" />
            <img src={Posters_img2} alt="" />
            <img src={Posters_img3} alt="" />
            <img src={Posters_img4} alt="" />
          </div>
        )}

        <h1 className="Sketchbook-title">Sketchbook</h1>
        {isMobile ? (
          <LightGallery
            selector="a"
            onInit={onInit}
            speed={500}
            plugins={[lgThumbnail]}
            controls={true}
            closable={true}
            hideBarsDelay={0}
            mobileSettings={{
              controls: false,
              showCloseIcon: true,
              download: false,
            }}
          >
            <div className="Sketchbook">
              <div className="sb-top">
                <div className="col1">
                  <a href={Sketchbook_img1} data-src={Sketchbook_img1}>
                    <img src={Sketchbook_img1} alt="" />
                  </a>
                  <a href={Sketchbook_img2} data-src={Sketchbook_img2}>
                    <img src={Sketchbook_img2} alt="" />
                  </a>
                  <a href={Sketchbook_img3} data-src={Sketchbook_img3}>
                    <img src={Sketchbook_img3} alt="" />
                  </a>
                </div>

                <div className="col2">
                  <a href={Sketchbook_img4} data-src={Sketchbook_img4}>
                    <img src={Sketchbook_img4} alt="" />
                  </a>
                  <a href={Sketchbook_img5} data-src={Sketchbook_img5}>
                    <img src={Sketchbook_img5} alt="" />
                  </a>
                  <a href={Sketchbook_img6} data-src={Sketchbook_img6}>
                    <img src={Sketchbook_img6} alt="" />
                  </a>
                </div>

                <div className="col3">
                  <a href={Sketchbook_img7} data-src={Sketchbook_img7}>
                    <img src={Sketchbook_img7} alt="" />
                  </a>
                  <a href={Sketchbook_img8} data-src={Sketchbook_img8}>
                    <img src={Sketchbook_img8} alt="" />
                  </a>
                  <a href={Sketchbook_img9} data-src={Sketchbook_img9}>
                    <img src={Sketchbook_img9} alt="" />
                  </a>
                </div>

                <div className="col4">
                  <a href={Sketchbook_img10} data-src={Sketchbook_img10}>
                    <img src={Sketchbook_img10} alt="" />
                  </a>
                  <a href={Sketchbook_img11} data-src={Sketchbook_img11}>
                    <img src={Sketchbook_img11} alt="" />
                  </a>
                </div>
              </div>

              <div className="sb-bottom">
                <a href={Sketchbook_img_last} data-src={Sketchbook_img_last}>
                  <img src={Sketchbook_img_last} alt="" />
                </a>
              </div>
            </div>
          </LightGallery>
        ) : (
          <div className="Sketchbook">
            <div className="sb-top">
              <div className="col1">
                <img src={Sketchbook_img1} alt="" />
                <img src={Sketchbook_img2} alt="" />
                <img src={Sketchbook_img3} alt="" />
              </div>

              <div className="col2">
                <img src={Sketchbook_img4} alt="" />
                <img src={Sketchbook_img5} alt="" />
                <img src={Sketchbook_img6} alt="" />
              </div>

              <div className="col3">
                <img src={Sketchbook_img7} alt="" />
                <img src={Sketchbook_img8} alt="" />
                <img src={Sketchbook_img9} alt="" />
              </div>

              <div className="col4">
                <img src={Sketchbook_img10} alt="" />
                <img src={Sketchbook_img11} alt="" />
              </div>
            </div>

            <div className="sb-bottom">
              <img src={Sketchbook_img_last} alt="" />
            </div>
          </div>
        )}

        <h1 className="Publication-title">Publication</h1>
        {isMobile ? (
          <LightGallery
            selector="a"
            onInit={onInit}
            speed={500}
            plugins={[lgThumbnail]}
            controls={true}
            closable={true}
            hideBarsDelay={0}
            mobileSettings={{
              controls: false,
              showCloseIcon: true,
              download: false,
            }}
          >
            <div className="Publication">
              <a href={Publication_img1} data-src={Publication_img1}>
                <img src={Publication_img1} alt="" />
              </a>
              <a href={Publication_img2} data-src={Publication_img2}>
                <img src={Publication_img2} alt="" />
              </a>
              <a href={Publication_img3} data-src={Publication_img3}>
                <img src={Publication_img3} alt="" />
              </a>
            </div>
          </LightGallery>
        ) : (
          <div className="Publication">
            <img src={Publication_img1} alt="" />
            <img src={Publication_img2} alt="" />
            <img src={Publication_img3} alt="" />
          </div>
        )}

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
    </div>
  );
};

export default studio;
