import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import AnimatedLine from "./AnimatedLine";
import RotatingCardGrid from "./RotatingCardGrid";

/* --------------- reusable icon with shake on hover --------------- */
function ShakingIcon({ src, alt, className }) {
  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      whileHover={{
        rotate: [0, 4, -4, 4, -4, 0],
        transition: { duration: 0.3, repeat: 10 },
      }}
    />
  );
}

/* --------------- reusable card popping in each view --------------- */
function AnimatedCard({ children, className = "" }) {
  const controls = useAnimation();
  const ref = useRef(null);

  const variants = {
    hidden: {
      scale: 0.9,
      opacity: 0,
      y: 30,
    },
    show: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      whileInView="show"
      onViewportLeave={() => controls.start("hidden")}
      viewport={{ once: false, amount: 0.35 }}
      whileHover={{ scale: 0.9, rotate: 0.2 }}
      className={`will-change-transform rounded-2xl shadow-xl font-eczar cursor-pointer transition-transform duration-300 ease-out ${className}`}
      style={{ transformOrigin: "center center" }}
    >
      {children}
    </motion.div>
  );
}

/* --------------- swap two cards in place every 2s --------------- */
function SwapCards({ children, className }) {
  const [swap, setSwap] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setSwap((s) => !s), 2000);
    return () => clearInterval(id);
  }, []);

  const items = React.Children.toArray(children);
  if (items.length !== 2) return <div className={className}>{children}</div>;
  const ordered = swap ? [items[1], items[0]] : [items[0], items[1]];

  return (
    <div className={`flex flex-col gap-5 ${className}`}>
      {ordered.map((child, idx) => (
        <motion.div
          key={idx}
          layout
          transition={{ type: "spring", stiffness: 80, damping: 18 }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}

const MyWorks = () => (
  <div
    data-scroll
    data-scroll-speed="0.01"
    className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[#ff9c4c] relative"
  >
    {/* Heading */}
    <div className="text-[6vw] font-eczar text-[#fff1e5] px-4 md:ml-5 mb-3 mt-1 md:-mb-4 flex items-center">
      <h1>My Recent Works</h1>
      <ShakingIcon
        src="/icons/donut.png"
        alt="Hii"
        className="h-20 w-20 ml-4"
      />
    </div>

    {/* Animated vertical line */}
    <AnimatedLine />

    {/* Top 3 cards */}
    <div className="flex flex-col lg:flex-row items-stretch gap-5 px-4 md:px-5 mt-5 max-w-[100vw] overflow-hidden">
      {/* Weebify */}
      <AnimatedCard className="bg-[#ffdab0] rounded-[20px] flex-1 p-7 flex flex-col justify-center">
        <h1 className="font-eczar text-2xl md:text-3xl text-[#96572a]">
          Weebify
          <i className="text-base text-[#bd6c32]"> - Anime Discovery/Rating Platform</i>
        </h1>
        <p className="mt-4 font-eczar text-base md:text-lg text-[#b06533]">
          An anime hub where users can discover, rate, and review anime, maintain watchlists, and take quizzes.
        </p>
        <i className="mt-4 text-sm text-[#875029]">
          (TailwindCSS, Node.js, GSAP, Express.js, LocomotiveScroll, MongoDB + Mongoose)
        </i>
      </AnimatedCard>

      {/* Bytefolio */}
      <AnimatedCard className="bg-[#fec37f] rounded-[20px] flex-1 p-4 pt-1 flex flex-col justify-center relative">
        <h1 className="font-eczar text-2xl md:text-3xl text-[#915931]">
          Bytefolio<i className="text-base text-[#bd6c32]"> - Dev Portfolio</i>
        </h1>
        <p className="mt-2 font-eczar text-base text-[#b06533]">
          A creative portfolio with 3D elements, scroll animations, and a polished design.
        </p>
        <i className="mt-4 text-sm text-[#875029]">(React, FramerMotion, Spline, GSAP)</i>
        <ShakingIcon
          src="/icons/apple.png"
          alt="Apple"
          className="absolute top-2 right-2 h-10 w-10 z-20"
        />
      </AnimatedCard>

      {/* CodeCraft */}
      <AnimatedCard className="bg-[#ffc88a] rounded-[20px] flex-1 p-5 flex flex-col justify-center relative">
        <h1 className="font-eczar text-2xl md:text-3xl text-[#915931]">
          CodeCraft<i className="text-base text-[#bd6c32]"> – Developer Showcase</i>
        </h1>
        <p className="mt-2 font-eczar text-base text-[#b06533]">
          Portfolio project showcasing frontend finesse using GSAP, Framer Motion, and React.
        </p>
        <i className="mt-4 text-sm text-[#875029]">(React, FramerMotion, Spline, GSAP, ReactBits)</i>
        <ShakingIcon
          src="/icons/chick.png"
          alt="Chick"
          className="absolute top-2 right-4 h-10 w-10 z-20"
        />
      </AnimatedCard>
    </div>

    {/* Bottom section */}
    <div className="flex flex-col lg:flex-row items-start gap-5 px-4 md:px-5 mt-5 w-full mb-6 max-w-[100vw] overflow-hidden">
      {/* Left grid */}
      <div className="w-full lg:w-[31%] flex justify-center items-center">
        <RotatingCardGrid />
      </div>

      {/* Center card */}
      <AnimatedCard className="w-full lg:w-[32%] bg-[#ffcb9a] rounded-[20px] p-14 flex flex-col justify-center relative">
        <h1 className="font-eczar text-2xl md:text-3xl text-[#96572a]">
          Garud<i className="text-base text-[#bd6c32]"> - Smart Campus Transport App</i>
        </h1>
        <p className="mt-4 font-eczar text-base md:text-lg text-[#b06533]">
          A smart, location-aware transportation app focused on IIT Mandi. Features include live bus tracking, bookings, emergency alerts, and schedule management.
        </p>
        <i className="mt-4 text-sm text-[#875029]">(Flutter, Firebase, Dart)</i>
        <ShakingIcon
          src="/icons/popsicle.png"
          alt="Popsicle"
          className="absolute md:top-60 top-64 right-20 h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 lg:h-16 lg:w-16"
        />
      </AnimatedCard>

      {/* Right text swap */}
      <div className="block w-full lg:w-[37%]">
        <SwapCards className="h-40 w-full">
          <div className="h-40 w-full bg-[#ffdbad] rounded-[20px] font-eczar text-base lg:text-xl text-[#96572a] flex flex-col justify-center items-center text-center px-4 break-words">
            This isn’t just dev work. It’s pixel poetry with a hint of caffeine.
            <ShakingIcon
              src="/icons/coffee-cup.png"
              alt="Coffee"
              className="mt-2 w-10 h-10"
            />
          </div>
          <div className="h-40 w-full bg-[#fec37f] rounded-[20px] font-eczar text-base lg:text-xl text-[#90472a] flex flex-col justify-center items-center text-center px-4 break-words">
            Built with Tailwind, animated by GSAP, powered by ‘omg this is cool!’ energy.
            <ShakingIcon
              src="/icons/flash.png"
              alt="Flash"
              className="mt-2 w-10 h-10"
            />
          </div>
        </SwapCards>
      </div>
    </div>
  </div>
);

export default MyWorks;
