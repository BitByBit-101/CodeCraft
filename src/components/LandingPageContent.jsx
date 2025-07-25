import SplitText from "./reactbits/TextAnimations/SplitText/SplitText.jsx";
import ScrollVelocity from "./reactbits/TextAnimations/ScrollVelocity/ScrollVelocity.jsx";

const LandingPageContent = () => {
  const buttonClass1 =
    "md:mt-4 font-worksans font-semibold text-[#F3F2FF] bg-slate-600 rounded-[10px] flex items-center justify-center text-[0.85rem] sm:text-[0.95rem] md:text-[1rem] w-full sm:w-[11rem] h-[2.75rem] sm:h-[3rem] md:w-[12rem] md:h-[3.25rem] px-3 py-2 hover:cursor-pointer transition-transform hover:scale-[0.93] hover:bg-[#D68D45FF] transition-all duration-500 ease-in-out z-20";

  const buttonClass2 =
    "md:mt-4 font-worksans font-semibold text-[#6A7BA0FF] bg-black border-2 border-[#6A7282FF] rounded-[10px] flex items-center justify-center text-[0.85rem] sm:text-[0.95rem] md:text-[1rem] w-full sm:w-[11rem] h-[2.75rem] sm:h-[3rem] md:w-[12rem] md:h-[3.25rem] px-3 py-2 hover:cursor-pointer transition-transform hover:scale-[0.93] hover:border-[#AE7338FF] hover:text-[#B78655FF] transition-all duration-500 ease-in-out z-20";

  const textClass1 = "mr-2 px-1";
  const textClass2 = "px-1";

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.8"
      className="flex flex-col-reverse lg:flex-row w-full min-h-screen overflow-visible px-4 pt-6 pb-10 justify-between"
    >
      {/* Left Section */}
      <div className="mx-auto sm:mx-6 mt-4 md:mt-6 lg:mt-20 lg:ml-16 lg:mr-10 flex flex-col w-full lg:w-[50vw] gap-4 mb-6 sm:mb-12">
        {/* Greeting Badge */}
        <div className="flex items-center justify-center gap-2 font-worksans font-semibold text-[#161615] bg-[#FFDDBF] rounded-[8px] h-9 sm:h-10 w-fit px-2 sm:px-3">
          <img
            src="/images/wave-hand.png"
            alt="Wave Icon"
            className="h-5 w-5 sm:h-6 sm:w-6 object-contain"
          />
          <SplitText
            text="Hello All"
            splitType="chars"
            delay={120}
            duration={2}
            className="text-xs sm:text-base"
          />
        </div>

        {/* Main Intro Text */}
        <div className="w-full mt-4 mb-1">
          <SplitText
            text="I'm Bhumika,"
            splitType="chars"
            delay={120}
            ease="ease-in-out"
            duration={3}
            className="font-eczar font-semibold text-[11vw] sm:text-[7vw] md:text-[6vw] lg:text-[5vw] text-[#eed6b7] leading-tight text-left"
          />
        </div>

        {/* Scrolling Titles */}
        <ScrollVelocity
          texts={["a Software Developer"]}
          velocity={80}
          className="font-eczar font-semibold text-[10vw] sm:text-[6vw] lg:text-[5vw] bg-[#FFDDBF] leading-tight"
          numCopies={6}
        />
        <ScrollVelocity
          texts={["and Problem Solver"]}
          velocity={-100}
          className="font-eczar font-semibold text-[10vw] sm:text-[6vw] lg:text-[5vw] bg-[#FFDDBF] leading-tight"
          numCopies={6}
        />

        {/* Buttons */}
        <div className="mt-6 sm:mt-8 flex flex-row gap-4 sm:gap-6 w-full items-center">
          <a href="https://github.com/BitByBit-101" className={buttonClass1}>
            <span className={textClass1}>View My Work</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 25 24"
              fill="#FFDDBF"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.7929 15.7071C10.4024 15.3166 10.4024 14.6834 10.7929 14.2929L13.0858 12L10.7929 9.70711C10.4024 9.31658 10.4024 8.68342 10.7929 8.29289C11.1834 7.90237 11.8166 7.90237 12.2071 8.29289L14.9229 11.0087C15.4704 11.5562 15.4704 12.4438 14.9229 12.9913L12.2071 15.7071C11.8166 16.0976 11.1834 16.0976 10.7929 15.7071Z"
              />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/bhumika-meena-a58843359"
            className={buttonClass2}
          >
            <span className={textClass2}>Contact Me</span>
          </a>
        </div>

        {/* Optional tagline */}
        <div className="hidden lg:block relative left-[48vw] top-10 overflow-hidden">
          <h1 className="font-patrick text-[1.6vw] text-[#FFDDBF] mt-2">
            I'm Cheeko
          </h1>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full sm:w-[80%] md:w-[40vw] lg:w-[45vw] flex justify-center items-start sm:items-end pt-2">
        <img
          src="/images/Mask group 2.png"
          alt="Cheeko the Puffer Fish"
          className="w-full max-w-[440px] sm:max-w-[500px] md:max-w-[560px] object-contain"
        />
      </div>
    </div>
  );
};

export default LandingPageContent;
