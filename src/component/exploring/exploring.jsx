import { useState } from "react";
import "./exploring.css";
import { Link } from "react-router-dom";

import img1 from "../../assets/gmp2.png";
import img2 from "../../assets/crosia2.png";
import img3 from "../../assets/vacation2.png";

import righta from "../../assets/rarrow.png";
import lefta from "../../assets/larrow.png";

export const data = [
  { id: 1, image: img1, link: "/branding/gmp#gmp" },
  { id: 2, image: img2, link: "/branding/crosia#crosia" },
  { id: 3, image: img3, link: "/branding/vacationv#vacationv" },
];

const Exploring = ({ images }) => {
  const [index, setIndex] = useState(0);
  const visible = 2;

  const prev = () => index > 0 && setIndex(index - 1);
  const next = () => index < data.length - visible && setIndex(index + 1);

  return (
    <div className="slider">
      <h1 className="ce">Continue Exploring</h1>
      <div className="slider-window">
        <div
          className="slider-track"
          style={{
            transform: `translateX(-${index * 50}%)`,
          }}
        >
          {images.map((item, i) => (
            <a key={i} className="slide">
              <Link to={item.link}>
                <img src={item.image} alt="" />
              </Link>
            </a>
          ))}
        </div>
      </div>

      <div className="controls">
        {index > 0 && (
          <div onClick={prev}>
            <img src={lefta} alt="" />
          </div>
        )}
        {index < data.length - visible && (
          <div onClick={next}>
            <img src={righta} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Exploring;
