import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Spline from "@splinetool/react-spline";

const Secondsection = () => {
  // Refs for scroll-based animation
  const pRef = useRef(null);
  const iRef = useRef(null);

  const pInView = useInView(pRef, { once: false, margin: "-20% 0px" });
  const iInView = useInView(iRef, { once: false, margin: "-20% 0px" });

  const pControls = useAnimation();
  const iControls = useAnimation();

  useEffect(() => {
    if (pInView) {
      pControls.start({ opacity: 1, y: 0 });
    } else {
      pControls.start({ opacity: 0, y: 40 });
    }
  }, [pInView]);

  useEffect(() => {
    if (iInView) {
      iControls.start({ opacity: 1, y: 0 });
    } else {
      iControls.start({ opacity: 0, y: 40 });
    }
  }, [iInView]);

  return (
    <div
      data-scroll
      data-scroll-speed="-0.01"
      className="relative min-h-screen w-full flex flex-wrap items-center justify-center bg-[#FFDDBF] rounded-tl-2xl rounded-tr-2xl px-4 py-0 md:justify-between overflow-x-hidden"
    >
      {/* Text Section */}
      <div className="w-full md:w-[55vw] lg:pl-16 h-auto mb-12 md:mb-0">
        <div className="flex items-center gap-4">
          <h1 className="font-eczar font-semibold text-[9vw] md:text-[7vw] text-[#403930] leading-tight md:mt-0 mt-5">
            Why I Build ?
          </h1>
        </div>
        <motion.p
          ref={pRef}
          initial={{ opacity: 0, y: 40 }}
          animate={pControls}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          className="leading-relaxed mt-8 font-eczar text-lg md:text-2xl max-w-2xl"
        >
          Because there’s nothing more satisfying than turning caffeine and
          curiosity into code that actually works (
          <i className="text-xl">most of the time</i> ) :
          <img
            className="h-12 w-12 mt-4"
            src="src/assets/images/smiling.png"
            alt="smiling"
          />
        </motion.p>
        <motion.i
          ref={iRef}
          initial={{ opacity: 0, y: 40 }}
          animate={iControls}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
          className="block leading-relaxed mt-10 font-eczar text-base md:text-xl max-w-2xl relative"
        >
          I build because the web is my favorite kind of chaos — flexible,
          expressive, and a little unpredictable. Every project is a chance to
          mix creativity with clean logic, and make something people can
          actually use (or at least admire and click around on for a bit).
          <img
            className="h-12 w-12 md:h-16 md:w-16 relative md:-right-64 md:bottom-2 right-[-2%] bottom-[-9%] animate-magnify"
            src="src/assets/images/dog.png"
            alt="dog"
          />
        </motion.i>
      </div>

      {/* Spline + Image Section */}
      <div className="relative w-full md:w-[40vw] h-[60vh] md:h-[70vh] flex items-center justify-center">
        <Spline scene="https://prod.spline.design/bZnVMyzZONCAgwJM/scene.splinecode" />

        <img
          className="absolute bottom-16 right-8 h-12 w-12 md:h-14 md:w-14 animate-spin-reverse"
          src="src/assets/images/spiral-galaxy.png"
          alt="spiral galaxy"
        />

        <div className="h-12 absolute bottom-4 right-3 md:right-5 sm:w-48 md:-bottom-5 sm:-bottom-5 sm:h-20 text-center font-patrick text-coffee text-sm md:text-lg p-2 bg-[#FFDDBF] w-40 rounded font-bold">
          <h1>"Give the ice cream a swirl!"</h1>
        </div>
      </div>
    </div>
  );
};

export default Secondsection;
