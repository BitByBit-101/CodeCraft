import Spline from "@splinetool/react-spline";
import { motion, useAnimation } from "framer-motion";
import { useRef } from "react";

const textVariant = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

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
      className="relative w-full h-auto lg:h-screen bg-[#ea985e] overflow-hidden"
    >
      {/* 3D Pufferfish */}
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/9VaaGl6Px7b7P2NK/scene.splinecode" />
      </div>
      <div className="relative z-10 flex flex-col lg:hidden px-6 pt-12 pb-28 space-y-8">
        <div className="flex items-center gap-4">
          <img src="/images/flower.png" alt="flower" className="w-10 h-10" />
          <AnimatedText className="text-[#fcebda] font-eczar text-lg font-semibold drop-shadow-md">
            Click the pufferfish to see it puff up with ideas!
          </AnimatedText>
        </div>

        <div className="flex items-center gap-4">
          <img src="/images/carrot.png" alt="carrot" className="w-10 h-10" />
          <AnimatedText className="text-[#fcebda] font-eczar text-base drop-shadow-md">
            It’s shy, but full of creativity under pressure.
          </AnimatedText>
        </div>

        <div className="flex items-center gap-4">
          <img src="/images/whale.png" alt="whale" className="w-10 h-10" />
          <AnimatedText className="text-[#fcebda] font-eczar text-base drop-shadow-md">
            Puffer fish can inflate to almost three times their normal size to scare off predators.
          </AnimatedText>
        </div>

        <div className="flex items-start gap-4">
          <img src="/images/star_proud.png" alt="star" className="w-10 h-10 mt-1" />
          <AnimatedText className="text-[#fcebda] font-eczar text-sm drop-shadow-md">
            With a love for playful design and thoughtful user experiences, I believe—just like
            this pufferfish—that the right touch can reveal something surprising, delightful, and
            full of life.
          </AnimatedText>
        </div>

        <AnimatedText className="text-[#fcebda] font-eczar text-2xl font-bold text-center drop-shadow-lg w-full pt-6">
          Playful. Purposeful. Puff-ready.
        </AnimatedText>
      </div>

      <div className="hidden lg:block">
        <AnimatedText className="absolute top-[10%] left-[5%] w-[40vw] text-[#fcebda] font-eczar text-3xl font-semibold drop-shadow-md">
          Click the pufferfish to see it puff up with ideas!
        </AnimatedText>
        <AnimatedText className="absolute top-[40%] left-[5%] w-[40vw] text-[#fcebda] font-eczar text-xl drop-shadow-md">
          It’s shy, but full of creativity under pressure.
        </AnimatedText>

        <img
          className="absolute top-[15%] left-[12%] w-12 h-12"
          src="/images/flower.png"
          alt="flower"
        />
        <img
          className="absolute top-[45%] left-[15%] w-12 h-12"
          src="/images/carrot.png"
          alt="carrot"
        />

        <AnimatedText className="absolute top-[20%] right-[1%] w-[40vw] text-[#fcebda] font-eczar text-2xl drop-shadow-md text-center">
          Puffer fish can inflate to almost three times their normal size to scare off predators.
        </AnimatedText>
        <AnimatedText className="absolute top-[40%] right-[1%] w-[30vw] text-[#fcebda] font-eczar text-lg drop-shadow-md text-center">
          With a love for playful design and thoughtful user experiences, I believe—just like this
          pufferfish—that the right touch can reveal something surprising, delightful, and full of
          life.
        </AnimatedText>
        <AnimatedText className="absolute top-[80%] w-full text-[#fcebda] font-eczar text-7xl mt-5 drop-shadow-lg text-center">
          Playful. Purposeful. Puff-ready.
        </AnimatedText>

        <img
          className="absolute top-[29%] right-[15%] w-12 h-12"
          src="/images/whale.png"
          alt="whale"
        />
        <img
          className="absolute top-[55%] right-[15%] w-12 h-12"
          src="/images/star_proud.png"
          alt="star"
        />
      </div>

      <div className="absolute bottom-[1.6%] sm:bottom-[1.7%] md:bottom-[1.6%] right-[1%] bg-[#ea985e] w-72 lg:w-60 h-12" />
    </div>
  );
};

export default ThirdScreen;
