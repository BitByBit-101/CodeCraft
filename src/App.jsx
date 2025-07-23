import Contacts from "./components/Contacts"
import FifthScreen from "./components/FifthScreen"
import Forthscreen from "./components/Forthscreen"
import InfiniteScroller from "./components/InfiniteScroller"
import LandingPageContent from "./components/LandingPageContent"
import MyWorks from "./components/MyWorks"
import Secondsection from "./components/Secondsection"
import SkillRow1 from "./components/SkillRow1"
import SkillRow2 from "./components/SkillRow2"
import ThirdScreen from "./components/ThirdScreen"
import WhatIBuild from "./components/WhatIBuild"
import '/CardsSection.css'
import LocomotiveScroll from 'locomotive-scroll';
export default function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
    <LandingPageContent/>
    <Secondsection/>
    <ThirdScreen/>
    <Forthscreen />
    <FifthScreen/>
    <SkillRow1/>
    <SkillRow2/>
    <InfiniteScroller/>
    <WhatIBuild/>
    <MyWorks/>
    <Contacts/>
    </>
  )
}
