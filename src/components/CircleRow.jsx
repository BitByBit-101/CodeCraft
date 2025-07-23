import { useEffect, useRef } from "react";
import "/CardsSection.css";

const CircleRow = ({ skills }) => {
  const containerRef = useRef(null);
  const circleRefs = useRef([]);

  useEffect(() => {
    const animate = () => {
      const viewportCenterX = window.innerWidth / 2;
      const viewportCenterY = window.innerHeight / 2;

      circleRefs.current.forEach((circle) => {
        if (!circle) return;
        const rect = circle.getBoundingClientRect();
        const circleCenterX = rect.left + rect.width / 2;
        const circleCenterY = rect.top + rect.height / 2;

        const xDist = Math.abs(viewportCenterX - circleCenterX);
        const yDist = Math.abs(viewportCenterY - circleCenterY);

        const xScale = 1.3 - (xDist / viewportCenterX) * 0.3;
        const yScale = 1.5 - (yDist / viewportCenterY) * 0.7;

        const combinedScale = Math.max(0.5, Math.min(1.5, xScale * yScale));

        circle.dataset.scale = combinedScale;
        circle.style.transform = `scale(${combinedScale})`; 

        circle.style.opacity = `${combinedScale - 0.3}`;
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="scroll-strip-wrapper ">
      <div className="scroll-strip-container" ref={containerRef}>
        {skills.map((skill, i) => (
          <div
            className="circle"
            key={i}
            ref={(el) => (circleRefs.current[i] = el)}
          >
            <div className="skill-icon">{skill.icon}</div>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CircleRow; 