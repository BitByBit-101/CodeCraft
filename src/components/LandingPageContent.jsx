import SplitText from "./reactbits/TextAnimations/SplitText/SplitText.jsx";
import ScrollVelocity from "./reactbits/TextAnimations/ScrollVelocity/ScrollVelocity.jsx";
const LandingPageContent = () => {
  const buttonClass1 =
    "md:mt-4 font-worksans font-semibold text-[#F3F2FF] bg-slate-600 rounded-[10px] flex items-center justify-center text-[0.9rem] sm:text-[1rem] md:text-[1rem] lg:text-[1rem] w-[11rem] h-[3rem] md:w-[12rem] lg:w-[13rem] md:h-[3.25rem] lg:h-[3.5rem] px-3 lg:px-5 py-2 lg:py-3 overflow-hidden hover:cursor-pointer transition-transform hover:scale-[0.93] hover:bg-[#D68D45FF] transition-all duration-500 ease-in-out z-20";
  const textClass1 = "mr-2 px-1 lg:px-2";
  const buttonClass2 =
    "md:mt-4 mr-10 font-worksans font-semibold text-[#6A7BA0FF] bg-black border-2 border-[#6A7282FF] rounded-[10px] flex items-center justify-center text-[0.9rem] sm:text-[1rem] md:text-[1rem] lg:text-[1rem] w-[11rem] h-[3rem] md:w-[12rem] lg:w-[13rem] md:h-[3.25rem] lg:h-[3.5rem] px-3 lg:px-5 py-2 lg:py-3 hover:cursor-pointer transition-transform hover:scale-[0.93] hover:border-[#AE7338FF] hover:text-[#B78655FF] transition-all duration-500 ease-in-out z-20";
  const textClass2 = "px-1 lg:px-2";

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.8" className="min-h-screen flex flex-col-reverse lg:flex-row w-screen overflow-hidden md:flex-row lg:mt-10 -mt-36 mb-32">
      {/* Left Content Section */}
      <div className="md:ml-16 flex flex-col mt-10 mx-6 lg:ml-16 lg:mr-10 w-full lg:w-[50vw]">
        <div className="flex items-center justify-center gap-2 font-worksans font-semibold text-[#161615] bg-[#FFDDBF] rounded-[8px] -mt-3 lg:mt-10 h-10 w-fit px-3 sm:px-4">
          <img
            src="src/assets/images/wave-hand.png"
            alt="Wave Icon"
            className="h-5 w-5 sm:h-6 sm:w-6 object-contain"
          />
          <SplitText
            text="Hello All"
            splitType="chars"
            delay={120}
            duration={2}
            className="text-sm sm:text-base"
          />
        </div>

        <div className="w-full mt-5 mb-3">
  <SplitText
    text="I'm Bhumika,"
    splitType="chars"
    delay={120}
    ease="ease-in-out"
    duration={2}
    className="font-eczar font-semibold text-[10vw] sm:text-[7vw] md:text-[6vw] lg:text-[5vw] text-[#eed6b7] leading-tight text-left"
  />
</div>




        <ScrollVelocity
          texts={["a Software Developer"]}
          velocity={80}
          className="font-eczar font-semibold text-[9.5vw] sm:text-[6vw] lg:text-[5vw] bg-[#FFDDBF] leading-tight "
          numCopies={6}
        />

        <ScrollVelocity
          texts={["and Problem Solver"]}
          velocity={-100} // Opposite direction
          className="font-eczar font-semibold text-[9.5vw] sm:text-[6vw] lg:text-[5vw] bg-[#FFDDBF] leading-tight "
          numCopies={6}
        />

        {/* Buttons */}
        <div className="lg:mt-1 mt-4 flex sm:flex-row gap-4 sm:gap-6 items-start sm:items-center w-full overflow-hidden mb-10">
          <a href="https://github.com/BitByBit-101" className={buttonClass1}>
            <span className={textClass1}>View My Work</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="#FFDDBF"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.7929 15.7071C10.4024 15.3166 10.4024 14.6834 10.7929 14.2929L13.0858 12L10.7929 9.70711C10.4024 9.31658 10.4024 8.68342 10.7929 8.29289C11.1834 7.90237 11.8166 7.90237 12.2071 8.29289L14.9229 11.0087C15.4704 11.5562 15.4704 12.4438 14.9229 12.9913L12.2071 15.7071C11.8166 16.0976 11.1834 16.0976 10.7929 15.7071Z"
                fill="#F3F2FF"
              />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/bhumika-meena-a58843359?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className={buttonClass2}
          >
            <span className={textClass2}>Contact Me</span>
          </a>
        </div>

        {/* Arrow SVG */}
        <div className="hidden lg:block relative left-[51vw] top-16 lg:left-[48vw] lg:top-12 overflow-hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="99"
            height="24"
            viewBox="0 0 88 24"
            fill="#FFDDBF"
          >
            <path
              d="M0.935317 17.6225C3.09917 12.3004 5.6156 7.15472 8.47971 2.17804C10.0275 -0.510709 14.3433 1.77722 12.7917 4.47276C10.4889 8.46922 8.4197 12.5779 6.56836 16.7942C6.78168 16.8223 6.99154 16.8484 7.20141 16.8744C7.08088 16.0576 7.34162 15.1846 8.18309 14.5699C31.6553 -2.51181 64.3816 -1.05338 86.8682 17.7036C89.2883 19.7213 85.9957 23.2458 83.5874 21.2395C63.205 4.23634 33.9832 2.94898 12.433 17.5444C14.5013 17.8101 16.5662 18.0738 18.6344 18.3395C21.7413 18.7383 20.6272 23.4347 17.5396 23.0424C12.5409 22.3982 7.54373 21.7594 2.54311 21.1186C0.838061 20.8996 0.414673 18.898 0.935317 17.6225Z"
              fill="#DEB694FF"
            />
          </svg>
        </div>

        {/* Caption */}
        <h1 className="hidden lg:block relative left-[45vw] md:top-14 lg:top-12 lg:right-5 font-patrick text-[1.6vw] text-[#FFDDBF] overflow-hidden">
          I'm Cheeko
        </h1>
      </div>

      {/* Right Image */}
      <div className=" relative md:right-6 top-2 w-[70vw] lg:w-[45vw] md:w-[45vw] flex justify-center items-center p-4 overflow-hidden">
        <img
          src="src/assets/images/Mask group 2.png"
          alt="Cheeko the Puffer Fish"
          className="w-full max-w-[550px] h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default LandingPageContent;
