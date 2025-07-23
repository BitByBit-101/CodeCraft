
import {
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFlutter,
  SiExpress,
  SiMongoose,
} from "react-icons/si";
import CircleRow from "./CircleRow";

const skills = [
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Flutter", icon: <SiFlutter /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "Mongoose", icon: <SiMongoose /> },
  { name: "GitHub", icon: <FaGithub /> },
];

const SkillRow2 = () => <CircleRow skills={skills} />;

export default SkillRow2;
