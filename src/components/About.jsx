import { useState } from "react";
import { motion } from "framer-motion";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faNodeJs,
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
import perfilImage from "../assets/img/perfil.jpg";
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

const programmingSkills = [
  { name: "HTML5", icon: faHtml5, type: "font" },
  { name: "CSS3", icon: faCss3, type: "font" },
  { name: "JavaScript", icon: faJs, type: "font" },
  { name: "React", icon: faReact, type: "font" },
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

const About = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 3);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 3) % 3);
  };

  return (
    <div className="about-container" style={{ width: '100%', maxWidth: '1140px', margin: '0 auto' }}>
      <GridBackground />
      <div className="about-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="about-card"
          style={{ width: "100%" }}
        >
          <h1 className="about-title">{t.aboutTitle}</h1>
          <div className="about-section">
            <div className="carousel-container">
              <div
                className="carousel-slides"
                style={{
                  transform: `translateX(-${currentSlide * 33.333}%)`,
                  transition: "transform 0.5s ease-in-out",
                }}
              >
                {/* Slide 1: Profile & Photo */}
                <div className="carousel-slide">
                  <div className="about-section-content">
                    <div className="profile-container">
                      <div className="profile-header">
                      <img
                        src={perfilImage}
                        alt="Profile"
                        className="profile-photo"
                      />
                        <h2 className="profile-name">Vanessa Contreras</h2>
                      </div>
                      <h2 className="about-section-title">
                        {t.aboutDescription}
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Slide 2: Education */}
                <div className="carousel-slide">
                  <div className="about-section-content">
                    <h2 className="about-section-title">{t.educationTitle}</h2>
                    <div className="education-list">
                      <div className="education-item">
                        <h2 className="education-title">{t.fullStackTitle}</h2>
                        <p className="education-subtitle">
                          {t.fullStackSubtitle}
                        </p>
                        <p className="education-description">
                          {t.fullStackDescription}
                        </p>
                        <h4 className="certification-title">{t.certificationsTitle}:</h4>
                        <p className="certification-description">
                          {t.fullStackCertifications}
                          <br/>
                          {t.fullStackWebDev}
                          <br/>
                          {t.backendDev}
                          <br/>
                          {t.sqlCert}
                          <br/>
                          {t.frontEndReact}
                          <br/>
                          {t.reactDev}
                          <br/>
                          {t.webDevJS}
                          <br/>
                          {t.advancedCSS}
                          <br/>
                          {t.introWebDev}
                        </p>
                      </div>
                      <div className="education-item">
                        <h2 className="education-title">{t.architectureTitle}</h2>
                        <p className="education-subtitle">
                          {t.architectureSubtitle}
                        </p>
                        <p className="education-description">
                          {t.architectureDescription}
                        </p>
                        <h4 className="certification-title">{t.certificationsTitle}:</h4>
                        <p className="certification-description">
                          {t.architectureCertifications}
                          <br/>
                          {t.architectCert}
                          <br/>
                          {t.bachelorsArch}
                          <br/>
                          {t.drawing3DCert}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide 3: Experience */}
                <div className="carousel-slide">
                  <div className="about-section-content">
                    <h2 className="about-section-title">{t.experienceTitle}</h2>
                    <div className="experience-list">
                      <div className="experience-item">
                        <h3 className="experience-title">{t.developerTitle}</h3>
                        <p className="experience-subtitle">
                          {t.developerSubtitle}
                        </p>
                        <p className="experience-description">
                          {t.developerDescription}
                        </p>
                      </div>
                      <div className="experience-item">
                        <h3 className="experience-title">{t.illustratorTitle}</h3>
                        <p className="experience-subtitle">
                          {t.illustratorSubtitle}
                        </p>
                        <p className="experience-description">
                          {t.illustratorDescription}
                        </p>
                      </div>
                      <div className="experience-item">
                        <h3 className="experience-title">{t.visualizerTitle}</h3>
                        <p className="experience-subtitle">
                          {t.visualizerSubtitle}
                        </p>
                        <p className="experience-description">
                          {t.visualizerDescription}
                        </p>
                      </div>
                      <div className="experience-item">
                        <h3 className="experience-title">{t.regulatoryTitle}</h3>
                        <p className="experience-subtitle">
                          {t.regulatorySubtitle}
                        </p>
                        <p className="experience-description">
                          {t.regulatoryDescription}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-controls">
              <button onClick={prevSlide} className="carousel-button">
                {'<<'}
              </button>
              <div className="carousel-dots">
                {[0, 1, 2].map((dot) => (
                  <button
                    key={dot}
                    className={`carousel-dot ${
                      currentSlide === dot ? "active" : ""
                    }`}
                    onClick={() => setCurrentSlide(dot)}
                  />
                ))}
              </div>
              <button onClick={nextSlide} className="carousel-button">
                {'>>'}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
