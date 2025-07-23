import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import TextCursor from "./reactbits/TextAnimations/TextCursor/TextCursor.jsx";
import Squares from "./reactbits/Backgrounds/Squares/Squares.jsx";


const popVariant = {
  hidden: { scale: 0.95, opacity: 0, y: 20 },
  show: (i = 0) => ({
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.8, 0.25, 1],
      delay: i * 0.15,
    },
  }),
};


export default function Contacts() {
  const buttonClass =
    "mt-6 md:mt-10 font-worksans font-semibold text-[#D59C83FF] border-2 border-[#B34918FF] rounded-[10px] flex items-center justify-center text-sm sm:text-base md:text-lg w-[10rem] sm:w-[11rem] md:w-[12rem] lg:w-[13rem] h-[3rem] md:h-[3.25rem] lg:h-[3.5rem] px-3 lg:px-5 py-2 lg:py-3 hover:cursor-pointer hover:scale-85 border-orange-100 hover:border-[#ff7a75] hover:text-[#FFA7A3FF] transition-all duration-300 ease-in-out";
  const textClass = "px-1 lg:px-2";

  return (
    <div className="relative w-full min-h-screen overflow-hidden">

      <div className="absolute inset-0 -z-20 bg-[#000000]" />

      <div className="absolute inset-0 -z-10 pointer-events-none">
        <Squares
          direction="right"
          squareSize={40}
          speed={0.8}
          borderColor="#8B7171FF" 
          hoverFillColor="#000" 
          className="w-full h-full"
        />
      </div>

      {/* Main layout wrapper */}
      <div
        data-scroll
        data-scroll-speed="-0.1"
        className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 gap-10"
      >
        {/* ---------- Left column ---------- */}
        <div className="flex flex-col justify-center w-full md:w-1/2 md:mt-20">
          <motion.div
            custom={0}
            variants={popVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="relative w-fit"
          >
            <TextCursor
              text="sssgucb"
              spacing={100}
              delay={0.01}
              followMouseDirection={true}
              randomFloat={true}
              exitDuration={0.5}
              removalInterval={30}
              maxPoints={5}
              className="absolute top-0 left-0 pointer-events-none text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-eczar text-[#f3cbb8]"
            />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-eczar text-[#ffc9b0]">
              Let’s work together and make everything super cute and super useful.
            </h1>
          </motion.div>

          <motion.a
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            href="https://www.linkedin.com/in/bhumika-meena-a58843359"
            className={buttonClass}
            whileHover={{ scale: 0.85 }}
          >
            <span className={textClass}>Contact Me</span>
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

        {/* ---------- Right column ---------- */}
        <div className="flex flex-col items-center w-full md:w-1/2 md:-mt-20">
          <motion.img
            custom={3}
            variants={popVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            src="/images/Frame 6 9.svg"
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
            <h1 className="text-4xl font-eczar text-[#fdc5ab] mb-6 w-96 mt-5 ml-5 text-center">
              I’m just a click away!
            </h1>
            <img
              src="/images/cool.png"
              alt="emoji"
              className="absolute -right-4 bottom-7 h-10"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

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
      className="text-[#fd9666] hover:text-[#ff7a75] hover:scale-110 text-2xl transition-colors duration-200"
      whileHover={{ scale: 1.1, color: "#ff7a75" }}
    >
      {children}
    </motion.a>
  );
}