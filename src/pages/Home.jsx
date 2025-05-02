import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import GridBackground from "../components/GridBackground";
import "./Home.css";
import CV_EN from '../assets/pdf/CV_Vanessa_Contreras_EN.pdf';
import CV_ES from '../assets/pdf/CV_Vanessa_Contreras_ES.pdf';

const Home = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="home-container">
      <div className="main-section">
        <GridBackground />
        <div className="home-content">
          <div className="home-text-center">
            <h1 className="home-title">{t.homeTitle}</h1>
            <p className="home-subtitle">
              {t.homeSubtitle}
            </p>
            <p className="home-description">
              {t.homeDescription}
            </p>
            <div className="social-links">
              <a
                href="https://github.com/vn-core"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://www.linkedin.com/in/vanessa-nicole-contreras-orellana-041a35346/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href={language === 'en' ? CV_EN : CV_ES}
                download
                className="cv-button"
              >
                <FontAwesomeIcon icon={faFilePdf} />
                <span>{t.downloadCV}</span>
              </a>
            </div>
            <div className="home-grid">
              <a href="#about" className="home-card">
                <h2 className="card-title">{t.aboutCard}</h2>
              </a>
              <a href="#skills" className="home-card">
                <h2 className="card-title">{t.skillsCard}</h2>
              </a>
              <a href="#projects" className="home-card">
                <h2 className="card-title">{t.projectsCard}</h2>
              </a>
              <a href="#contact" className="home-card">
                <h2 className="card-title">{t.contactCard}</h2>
              </a>
            </div>
          </div>
        </div>
      </div>

      <section id="about" className="section-container">
        <About />
      </section>
      <section id="skills" className="section-container">
        <Skills />
      </section>
      <section id="projects" className="section-container">
        <Projects />
      </section>
      <section id="contact" className="section-container">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
