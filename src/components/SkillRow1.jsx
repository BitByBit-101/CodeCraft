
import {
  FaJsSquare,
  FaHtml5,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import CircleRow from "./CircleRow";

const skills = [
  { name: "C++", icon: <SiCplusplus /> },
  { name: "JavaScript", icon: <FaJsSquare /> },
  { name: "Python", icon: <FaPython /> },
  { name: "HTML/CSS", icon: <FaHtml5 /> },
  { name: "React", icon: <FaReact /> },
];

const SkillRow1 = () => <CircleRow skills={skills} />;

export default SkillRow1;
