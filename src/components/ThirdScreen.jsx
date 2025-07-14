import Spline from "@splinetool/react-spline";
import { motion, useAnimation } from "framer-motion";
import { useRef } from "react";

// slide‑in / fade variant
const textVariant = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

/**
 * Reusable text wrapper that
 *  • slides up + fades in when 30 % visible
 *  • resets to "hidden" when it leaves the viewport,
 *    so the animation plays again on re‑entry.
 */
function AnimatedText({ className, children }) {
  const controls = useAnimation();
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      variants={textVariant}
      initial="hidden"
      animate={controls}
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      onViewportLeave={() => controls.start("hidden")}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const ThirdScreen = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="-0.01"
      className="relative w-full h-screen bg-[#ea985e] overflow-hidden"
    >
      {/* 3‑D puffer fish scene */}
      <Spline scene="https://prod.spline.design/9VaaGl6Px7b7P2NK/scene.splinecode" />

      {/* Instruction Text */}
      <AnimatedText className="absolute top-[10%] left-[5%] w-[80%] md:w-[40vw] text-[#fcebda] font-eczar text-xl md:text-3xl font-semibold drop-shadow-md">
        Click to inflate the puffer fish
      </AnimatedText>

      {/* First Flower Image */}
      <img
        className="absolute top-[20%] left-[5%] w-10 h-10 md:w-16 md:h-16"
        src="src/assets/images/flower.png"
        alt="flower"
      />

      {/* Fact Text */}
      <AnimatedText className="absolute top-[20%] right-[1%] w-[80%] md:w-[40vw] text-[#fcebda] font-eczar text-base md:text-2xl drop-shadow-md text-right">
        Puffer fish can inflate to almost three times their normal size to scare off predators.
      </AnimatedText>

      {/* Second Flower Image */}
      <img
        className="absolute top-[28%] right-[10%] w-10 h-10 md:w-16 md:h-16"
        src="src/assets/images/flower.png"
        alt="flower"
      />

      {/* Colored Bar (same as background) */}
      <div className="absolute bottom-[1.2%] right-[1%] bg-[#ea985e] w-72 md:w-60 h-12" />
    </div>
  );
};

export default ThirdScreen;
