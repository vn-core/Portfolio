import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import "./Projects.css";
import GridBackground from "./GridBackground";
import TrendsImage from "../assets/img/Trends.png";
import PokedexImage from "../assets/img/pokedex.png";
import ClpConversorImage from "../assets/img/clpconversor.png"

const Projects = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="projects-container">
      <GridBackground />
      <div className="projects-content">
        <div className="projects-card">
          <h1 className="projects-title">{t.projectsTitle}</h1>
          <div className="projects-grid">
            <div className="project-card">
              <h2 className="project-title">{t.project1Title}</h2>
              <div className="project-image-container">
                <img src={TrendsImage} alt="Trends Marketplace" className="project-image" />
              </div>
              <p className="project-description">{t.project1Description}</p>
              <div className="project-skills">
                <span className="skill-tag">React</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">CSS</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Express</span>
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">Figma</span>
                <span className="skill-tag">GitHub</span>
                <span className="skill-tag">Netlify</span>
                <span className="skill-tag">Railway</span>
              </div>
              <div className="project-links">
                <a 
                  href="https://marketplace-trends.netlify.app" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link"
                >
                  <i className="fas fa-external-link-alt"></i> {t.viewProject}
                </a>
              </div>
            </div>
            <div className="project-card">
              <h2 className="project-title">{t.project2Title}</h2>
              <div className="project-image-container">
                <img src={PokedexImage} alt="Project Preview" className="project-image" />
              </div>
              <p className="project-description">{t.project2Description}</p>
              <div className="project-skills">
                <span className="skill-tag">HTML5</span>
                <span className="skill-tag">CSS</span>
                <span className="skill-tag">JavaScript</span>
              </div>
              <div className="project-links">
                <a 
                  href="https://vn-core.github.io/Pokedex/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link"
                >
                  <i className="fas fa-external-link-alt"></i> {t.viewProject}
                </a>
              </div>
            </div>
            <div className="project-card">
              <h2 className="project-title">{t.project3Title}</h2>
              <div className="project-image-container">
                <img src={ClpConversorImage} alt="Project Preview" className="project-image" />
              </div>
              <p className="project-description">{t.project3Description}</p>
              <div className="project-skills">
                <span className="skill-tag">HTML5</span>
                <span className="skill-tag">CSS</span>
                <span className="skill-tag">JavaScript</span>
              </div>
              <div className="project-links">
                <a 
                  href="https://vn-core.github.io/CLPConversor/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link"
                >
                  <i className="fas fa-external-link-alt"></i> {t.viewProject}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects; 