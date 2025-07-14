import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import TextCursor from "./reactbits/TextAnimations/TextCursor/TextCursor.jsx";

/* ---------------- animation helper ---------------- */
const popVariant = {
  hidden: { scale: 0.8, opacity: 0 },
  show: (i = 0) => ({
    scale: 1,
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut", delay: i * 0.2 },
  }),
};

/* ---------------- component ---------------- */
export default function Contacts() {
  const buttonClass2 =
    "mt-6 md:mt-10 font-worksans font-semibold text-[#6D3923FF] border-2 border-[#B34918FF] rounded-[10px] flex items-center justify-center text-sm sm:text-base md:text-lg w-[10rem] sm:w-[11rem] md:w-[12rem] lg:w-[13rem] h-[3rem] md:h-[3.25rem] lg:h-[3.5rem] px-3 lg:px-5 py-2 lg:py-3 hover:cursor-pointer transition-transform hover:scale-105  border border-orange-100 hover:border-[#c53d3d] transition-all duration-300 ease-in-out";
  const textClass2 = "px-1 lg:px-2";

  return (
    <div
      data-scroll
      data-scroll-speed="-0.1"
      className="w-full min-h-screen bg-orange-300 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 gap-10"
    >
      {/* -------- Left column -------- */}
      <div className="flex flex-col justify-center w-full md:w-1/2 md:mt-20">
        {/* headline with trail effect */}
        <motion.div
          custom={0}
          variants={popVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="relative w-fit"
        >
          {/* 🟢 Trail effect */}
          <TextCursor
            text="sssgucb"
            spacing={100}
            delay={0.01}
            followMouseDirection={true}
            randomFloat={true}
            exitDuration={0.5}
            removalInterval={30}
            maxPoints={5}
            className="absolute top-0 left-0 pointer-events-none text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-eczar text-[#99502d]"
          />

          {/* 🟤 Actual text (not affected by the trail) */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-eczar text-[#99502d]">
            Let’s work together and make everything super cute and super useful.
          </h1>
        </motion.div>

        {/* Button */}
        <motion.a
          custom={1}
          variants={popVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          href="https://www.linkedin.com/in/bhumika-meena-a58843359"
          className={buttonClass2}
          whileHover={{ scale: 1.05 }}
        >
          <span className={textClass2}>Contact Me</span>
        </motion.a>

        {/* Social icons */}
        <motion.div
          custom={2}
          variants={popVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="flex gap-6 mt-6 ml-2"
        >
          <Social href="https://www.linkedin.com/in/bhumika-meena-a58843359">
            <FaLinkedin />
          </Social>
          <Social href="https://leetcode.com/u/Flamingo289/">
            <SiLeetcode />
          </Social>
          <Social href="https://github.com/BitByBit-101">
            <FaGithub />
          </Social>
        </motion.div>
      </div>

      {/* -------- Right column -------- */}
      <div className="flex flex-col items-center w-full md:w-1/2 md:-mt-20">
        <motion.img
          custom={3}
          variants={popVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          src="src/assets/images/Frame 6 9.svg"
          alt="Contact Illustration"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
        />

        <motion.div
          custom={4}
          variants={popVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="relative"
        >
          <h1 className="text-4xl font-eczar text-[#68331a] mb-6 w-96 mt-4 ml-5">
            I’m just a click away!
          </h1>
          <img
            src="src/assets/images/cool.png"
            alt="emoji"
            className="absolute -right-12 -top-6 h-10"
          />
        </motion.div>
      </div>
    </div>
  );
}

/* Social icon wrapper */
function Social({ href, children }) {
  return (
    <motion.a
      custom={0}
      variants={popVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#4a2211] hover:text-[#ff7a75] hover:scale-110 text-2xl transition-colors duration-200"
      whileHover={{ scale: 1.1, color: "#ff7a75" }}
    >
      {children}
    </motion.a>
  );
}
