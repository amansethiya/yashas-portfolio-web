import { useEffect, useRef } from "react";
import "./exploring.css";
import { Link } from "react-router-dom";

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
  const rafRef = useRef(null);
  const isPausedRef = useRef(false);
  const hasFinishedRef = useRef(false);
  const START_DELAY = 800;

  const SPEED = 1.5;

  const animate = () => {
    if (!containerRef.current || hasFinishedRef.current) return;

    const container = containerRef.current;

    if (!isPausedRef.current) {
      container.scrollLeft -= SPEED;

      // Stop autoplay at end (ONE TIME ONLY)
      if (container.scrollLeft <= SPEED) {
        container.scrollLeft = 0;
        hasFinishedRef.current = true;
        cancelAnimationFrame(rafRef.current);
        return;
      }
    }

    rafRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (!containerRef.current) return;

    // Always start perfectly at first slide
    containerRef.current.scrollLeft =
      containerRef.current.scrollWidth - containerRef.current.clientWidth;
    hasFinishedRef.current = false;

    if (images.length > 2) {
      const timeout = setTimeout(() => {
        if (
          containerRef.current.scrollWidth > containerRef.current.clientWidth
        ) {
          rafRef.current = requestAnimationFrame(animate);
        }
      }, START_DELAY);

      return () => {
        clearTimeout(timeout);
        cancelAnimationFrame(rafRef.current);
      };
    }

    return () => cancelAnimationFrame(rafRef.current);
  }, [images]);

  return (
    <section className="slider scroll-section">
      <h1 className="ce">Continue Exploring</h1>

      <div
        ref={containerRef}
        className={`scroll-slider ${images.length <= 2 ? "centered" : ""}`}
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
