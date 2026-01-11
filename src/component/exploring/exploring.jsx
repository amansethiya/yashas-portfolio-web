import { useEffect, useRef } from "react";
import "./exploring.css";
import { Link } from "react-router-dom";
import React from "react";
import img1 from "../../assets/gmp2.png";
import img2 from "../../assets/crosia2.png";
import img3 from "../../assets/vacation2.png";

export const data = [
  { id: 1, image: img1, link: "/branding/gmp#gmp" },
  { id: 2, image: img2, link: "/branding/crosia#crosia" },
  { id: 3, image: img3, link: "/branding/vacationv#vacationv" },
];

const Exploring = ({ images }) => {
  const containerRef = useRef(null);
  const isPausedRef = useRef(false);
  const START_DELAY = 800;
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);
  const currentIndexRef = useRef(0);

  const pause = () => clearInterval(intervalRef.current);
  const resume = () => {
    intervalRef.current = setInterval(slideOnce, 3000);
  };

  const slideOnce = () => {
    const container = containerRef.current;
    if (!container) return;

    const slides = container.children;
    if (!slides.length) return;

    const slideWidth = slides[0].offsetWidth + 68; // gap
    const maxIndex = slides.length - 1;

    // move backward (last → first)
    currentIndexRef.current--;

    if (currentIndexRef.current < 0) {
      currentIndexRef.current = maxIndex;
    }

    container.scrollTo({
      left: slideWidth * currentIndexRef.current,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // start from LAST slide
    currentIndexRef.current = images.length - 1;
    slideOnce();

    intervalRef.current = setInterval(slideOnce, 3000); // 3 sec

    return () => clearInterval(intervalRef.current);
  }, [images]);

  return (
    <section ref={sectionRef} className="slider scroll-section">
      <h1 className="ce">Continue Exploring</h1>
      <div
        ref={containerRef}
        className="scroll-slider"
        onMouseEnter={pause}
        onMouseLeave={resume}
        onTouchStart={pause}
        onTouchEnd={resume}
      >
        {images.map((item, index) => (
          <div key={index} className="slide">
            <Link to={item.link}>
              <img
                src={item.image}
                alt=""
                onMouseEnter={() => (isPausedRef.current = true)}
                onMouseLeave={() => (isPausedRef.current = false)}
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Exploring;
