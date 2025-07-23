import Threads from "./reactbits/Backgrounds/Threads/Threads.jsx";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const headlineVariant = {
  enterFromBelow: { y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  enterFromAbove: { y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  exitUp:   { y: -80, transition: { duration: 0.3, ease: "easeIn" } },
  exitDown: { y:  80, transition: { duration: 0.3, ease: "easeIn" } },
};
function AnimatedHeadline({ children }) {
  const controls = useAnimation();
  const direction = useRef("down");
  const [prevY, setPrevY] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      direction.current = currentY > prevY ? "down" : "up";
      setPrevY(currentY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevY]);

  return (
    <motion.h1
      initial={direction.current === "down" ? { y: 80 } : { y: -80 }}
      animate={controls}
      whileInView={() =>
        controls.start(direction.current === "down" ? "enterFromBelow" : "enterFromAbove")
      }
      onViewportLeave={() =>
        controls.start(direction.current === "down" ? "exitUp" : "exitDown")
      }
      variants={headlineVariant}
      viewport={{ once: false, amount: 0.4 }}
      style={{
        backgroundImage:
          "linear-gradient(90deg,#FFDDBF, #FFDDBF, #ea985e, #E09B5EFF, #D95847FF, #FF8A70FF,#FFDDBF)",
        backgroundSize: "300% 300%",
        animation: "gradientShift 8s linear infinite",
        WebkitBackgroundClip: "text",
        color: "transparent",
      }}
      className="font-eczar drop-shadow-xl text-[13vw] max-w-screen-lg leading-tight tracking-wide mt-5"
    >
      {children}
    </motion.h1>
  );
}

const Forthscreen = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes gradientShift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div
      data-scroll
      data-scroll-speed="0.5"
      className="relative min-h-screen w-full overflow-x-hidden overflow-y-hidden bg-black flex justify-center items-center"
    >
      {/* Threads background */}
      <div className="absolute inset-0 z-0">
        <Threads
          color={[0.99, 0.99, 0.99]}
          amplitude={2}
          distance={0.3}
          enableMouseInteraction={true}
        />
      </div>

      {/*overlay */}
      <div className="absolute inset-0 bg-opacity-90 z-10" />

      {/* Foreground content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 mt-24">
        <AnimatedHeadline>Stuff I Can Talk Nerdy About</AnimatedHeadline>
      </div>
    </div>
  );
};

export default Forthscreen;
