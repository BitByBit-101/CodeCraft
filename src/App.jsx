import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

import Contacts from "./components/Contacts";
import FifthScreen from "./components/FifthScreen";
import Forthscreen from "./components/Forthscreen";
import InfiniteScroller from "./components/InfiniteScroller";
import LandingPageContent from "./components/LandingPageContent";
import MyWorks from "./components/MyWorks";
import Secondsection from "./components/Secondsection";
import SkillRow1 from "./components/SkillRow1";
import SkillRow2 from "./components/SkillRow2";
import ThirdScreen from "./components/ThirdScreen";
import WhatIBuild from "./components/WhatIBuild";

import "/CardsSection.css";

export default function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    // Only initialize Locomotive Scroll on desktop (width >= 768px)
    if (typeof window !== "undefined" && window.innerWidth >= 768) {
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });

      return () => {
        scroll.destroy();
      };
    }
  }, []);

  return (
    <div ref={scrollRef} {...(typeof window !== "undefined" && window.innerWidth >= 768 ? { "data-scroll-container": true } : {})}>
      <LandingPageContent />
      <Secondsection />
      <ThirdScreen />
      <Forthscreen />
      <FifthScreen />
      <SkillRow1 />
      <SkillRow2 />
      <InfiniteScroller />
      <WhatIBuild />
      <MyWorks />
      <Contacts />
    </div>
  );
}
