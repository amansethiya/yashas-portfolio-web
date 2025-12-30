import { useState } from "react";
import "./exploring.css";
import img1 from "../../assets/gmp.png";
import img2 from "../../assets/crosia.png";
import img3 from "../../assets/vacation.png";

const data = [
  {
    image: img1,
    link: "#",
  },
  {
    image: img2,
    link: "#",
  },
  {
    image: img3,
    link: "#",
  },
];

const CARD_WIDTH = 420; // width + gap

const ExploreSlider = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < data.length - 1) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="explore-wrapper">
      <h2>Continue Exploring</h2>

      <div className="slider-window">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${index * CARD_WIDTH}px)` }}
        >
          {data.map((item, i) => (
            <a
              href={item.link}
              className="card"
              key={i}
              target="_blank"
              rel="noreferrer"
            >
              <img src={item.image} alt={item.title} />
            </a>
          ))}
        </div>
      </div>

      <div className="nav-arrows">
        <button onClick={prev}>←</button>
        <button onClick={next}>→</button>
      </div>
    </div>
  );
};

export default ExploreSlider;
