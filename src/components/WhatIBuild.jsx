import { motion, useAnimation } from "framer-motion";
import { useRef } from "react";
import scrollIcon from "/icons/scroll.png";
import portfolioIcon from "/icons/portfolio.png";
import microappsIcon from "/icons/lightbulb.png";
import reactIcon from "/icons/software-application.png";
import flutterIcon from "/icons/flutter.png";
import dashboardIcon from "/icons/dashboard.png";

/* --------------- reusable icon with shake on hover --------------- */
function ShakingIcon({ src, alt, className }) {
  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      whileHover={{
        rotate: [0, 4, -4, 4, -4, 0],
        transition: { duration: 0.4, repeat: 1 },
      }}
    />
  );
}

/* --------------- reusable card popping in each view --------------- */
function AnimatedCard({ children }) {
  const controls = useAnimation();
  const ref = useRef(null);

  const variants = {
    hidden: { scale: 0.8, opacity: 0 },
    show:   { scale: 1, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      whileInView="show"
      viewport={{ once: false, amount: 0.35 }}
      onViewportLeave={() => controls.start("hidden")}
      whileHover={{ scale: 1.08, rotate: 0.5 }}
      className="bg-[#ffecd7] shadow-xl rounded-2xl p-6 border border-orange-100 font-eczar hover:border-orange-400 cursor-pointer"
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------- main section ------------------------------- */
const WhatIBuild = () => {
  const sections = [
    {
      title: "Scroll‑Magical Websites",
      icon: scrollIcon,
      desc:
        "I’m obsessed with scroll‑based animations, creative transitions, and layouts that move. Think parallax, pinning sections, and buttery‑smooth GSAP or Locomotive Scroll moments.",
    },
    {
      title: "Portfolio Sites that Slap",
      icon: portfolioIcon,
      desc:
        'Helping creatives show off their work with bold, pixel‑perfect, "this‑looks‑too‑good‑to‑be‑real" kind of portfolios? Yes please!',
    },
    {
      title: "Mini‑Tools & Micro‑Apps",
      icon: microappsIcon,
      desc:
        'Tiny tools with big personality — like quote generators, weather dashboards, color pickers, or "I‑made‑this‑in‑a‑day" experiments.',
    },
    {
      title: "Full‑Stack React Apps",
      icon: reactIcon,
      desc:
        'Give me a blank terminal and a good idea, and I’ll whip up a full‑stack app with auth, real‑time features, MongoDB, and a clean UI faster than you can say "npm install."',
    },
    {
      title: "Flutter Mobile Apps",
      icon: flutterIcon,
      desc:
        "Cross‑platform cuteness! I enjoy turning simple ideas into beautiful mobile apps that work on both iOS and Android.",
    },
    {
      title: "Dashboards That Actually Look Good",
      icon: dashboardIcon,
      desc:
        "Why should admin panels be boring? I like making them sleek, stylish, and fun to use.",
    },
  ];

  return (
    <motion.section
      data-scroll
      data-scroll-section
      data-scroll-speed="-.08"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full min-h-screen md:min-h-0 px-6 py-12 sm:px-10 md:px-16 lg:px-24 bg-[#ffd4af] text-[#1a1a1a] rounded-t-2xl mt-20 overflow-x-hidden"


    >
      {/* Header */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80 }}
        className="flex items-center justify-center gap-3 flex-wrap text-center mt-4 mb-12"
      >
        <h2 className="text-4xl sm:text-5xl font-semibold font-eczar text-orange-950 leading-tight">
          What I Love to Build
        </h2>

        {/* star now shakes on hover */}
        <ShakingIcon
          src="/images/star_proud.png"
          alt="star icon"
          className="ml-2 w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain"
        />
      </motion.div>

      {/* Card Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-5 mb-12">
        {sections.map(({ title, icon, desc }, i) => (
          <AnimatedCard key={i}>
            <ShakingIcon src={icon} alt={title} className="w-10 h-10 mb-3 object-contain" />
            <h3 className="font-semibold text-xl mb-2">{title}</h3>
            <p className="text-sm font-worksans text-gray-600 leading-relaxed">
              {desc}
            </p>
          </AnimatedCard>
        ))}
      </div>
    </motion.section>
  );
};

export default WhatIBuild;
