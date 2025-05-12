import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faNodeJs,
  faAngular,
} from "@fortawesome/free-brands-svg-icons";
import pgAdminIcon from "../assets/img/pgadmin.png";
import mysqlIcon from "../assets/img/mysql.png";
import uiux from "../assets/img/uxui.png";
import figma from "../assets/img/figma.png";
import photoshop from "../assets/img/photoshop.png";
import illustrator from "../assets/img/illustrator.png";
import procreate from "../assets/img/procreate.png";
import responsive from "../assets/img/responsive.png";
import github from "../assets/img/github.png";
import bootstrap from "../assets/img/bootstrap.png";
import tailwind from "../assets/img/tailwind.png";
import trello from "../assets/img/trello.png";
import jira from "../assets/img/jira.png";
import GridBackground from "./GridBackground";
import "./Skills.css";
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

const programmingSkills = [
  { name: "HTML5", icon: faHtml5, type: "font" },
  { name: "CSS3", icon: faCss3, type: "font" },
  { name: "JavaScript", icon: faJs, type: "font" },
  { name: "React", icon: faReact, type: "font" },
  { name: "Angular", icon: faAngular, type: "font" },
  { name: "Node.js", icon: faNodeJs, type: "font" },
  { name: "PG Admin", icon: pgAdminIcon, type: "image" },
  { name: "My SQL", icon: mysqlIcon, type: "image" },
];

const designSkills = [
  { name: "UI/UX", icon: uiux, type: "image" },
  { name: "Figma", icon: figma, type: "image" },
  { name: "Photoshop", icon: photoshop, type: "image" },
  { name: "Illustrator", icon: illustrator, type: "image" },
  { name: "Procreate", icon: procreate, type: "image" },
  { name: "Responsive Design", icon: responsive, type: "image" },
];

const agileSkills = [
  { name: "GitHub", icon: github, type: "image" },
  { name: "Bootstrap", icon: bootstrap, type: "image" },
  { name: "Tailwind", icon: tailwind, type: "image" },
  { name: "Trello", icon: trello, type: "image" },
  { name: "Jira", icon: jira, type: "image" },
];

const Skills = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="skills-container">
      <GridBackground />
      <div className="skills-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="skills-card"
        >
          <h1 className="skills-title">{t.skillsTitle}</h1>
          <div className="skills-section">
            <div className="skills-category">
              <h2 className="skills-category-title">{t.programmingSkills}</h2>
              <div className="skills-grid">
                {programmingSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    className="skill-tag programming"
                  >
                    {skill.type === "font" ? (
                      <FontAwesomeIcon
                        icon={skill.icon}
                        className="skill-icon"
                      />
                    ) : (
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="skill-icon"
                      />
                    )}
                    <span className="skill-name">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="skills-category">
              <h2 className="skills-category-title">{t.designSkills}</h2>
              <div className="skills-grid">
                {designSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    className="skill-tag design"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="skill-icon"
                    />
                    <span className="skill-name">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="skills-category">
              <h2 className="skills-category-title">{t.agileSkills}</h2>
              <div className="skills-grid">
                {agileSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    className="skill-tag agile"
                  >
                    {skill.type === "font" ? (
                      <FontAwesomeIcon
                        icon={skill.icon}
                        className="skill-icon"
                      />
                    ) : (
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="skill-icon"
                      />
                    )}
                    <span className="skill-name">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills; 