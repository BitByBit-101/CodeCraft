import { useEffect, useRef } from "react";
import "../InfiniteScroller.css";
import {
  SiPostman,
  SiVercel,
  SiRender,
  SiJsonwebtokens,
  SiPython,
  SiNumpy,
  SiPandas,
  SiMongodb,
} from "react-icons/si";

const InfiniteScroller = () => {
  const scrollersRef = useRef([]);

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      scrollersRef.current.forEach((scroller) => {
        if (!scroller) return;

        scroller.setAttribute("data-animated", true);
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const items = Array.from(scrollerInner.children);

        items.forEach((item) => {
          const clone = item.cloneNode(true);
          clone.setAttribute("aria-hidden", "true");
          scrollerInner.appendChild(clone);
        });
      });
    }
  }, []);

const rows = [
  {
    content: [
      "Postman",
      "Vercel",
      "Render",
      "JWT",
      "Bcrypt.js",
      "Dotenv",
      "Pandas",
      "NumPy",
      "Matplotlib",
    ],
    direction: "left",
    speed: "fast",
    className: "top-row",
  },
  {
    content: [
      <SiPostman />,
      <SiVercel />,
      <SiRender />,
      <SiJsonwebtokens />,
      <SiPython />,
      <SiNumpy />,
      <SiPandas />,
      <SiMongodb />,
    ],
    direction: "right",
    speed: "slow",
    className: "middle-row",
  },
  {
    content: [
      "React Router",
      "Firebase SDK",
      "Linux",
      "Figma",
      "Git",
    ],
    direction: "left",
    speed: "fast",
    className: "bottom-row",
  },
];


  return (
    <div className="scroll-container mt-10 mb-10 ">
      {rows.map((row, i) => (
        <div
          key={i}
          className={`scroller ${row.className}`}
          data-direction={row.direction}
          data-speed={row.speed}
          ref={(el) => (scrollersRef.current[i] = el)}
        >
          <div className="scroller__inner ">
            {row.content.map((item, j) => (
              <div key={j} className="card">
                {item}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfiniteScroller;
