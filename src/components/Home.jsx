import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import './Home.css';
import GridBackground from './GridBackground';
import CV_EN from '../assets/pdf/CV_EN.pdf';
import CV_ES from '../assets/pdf/CV_ES.pdf';

const Home = () => {
  const { language } = useLanguage();
  const t = translations[language];

  console.log('Home rendering with language:', language);
  console.log('Current translations:', t);

  return (
    <div className="home-container">
      <GridBackground />
      <div className="home-content">
        <motion.div
          key={language}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="home-card"
        >
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="home-title"
          >
            {t.homeTitle}
          </motion.h1>
          <motion.h2
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="home-subtitle"
          >
            {t.homeSubtitle}
          </motion.h2>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="home-description"
          >
            {t.homeDescription}
          </motion.p>
          <div className="social-links">
            <a
              href="https://github.com/vn-core"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/vanessa-contreras-hernandez/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href={language === 'en' ? CV_EN : CV_ES}
              download
              className="cv-button"
            >
              <i className="fas fa-file-pdf"></i> {t.downloadCV}
            </a>
          </div>
          <div className="home-cards">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.3 }}
              className="home-card"
            >
              <Link to="/about" className="home-card-link">
                <h3>{t.aboutCard}</h3>
              </Link>
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="home-card"
            >
              <Link to="/skills" className="home-card-link">
                <h3>{t.skillsCard}</h3>
              </Link>
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.7 }}
              className="home-card"
            >
              <Link to="/projects" className="home-card-link">
                <h3>{t.projectsCard}</h3>
              </Link>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.9 }}
              className="home-card"
            >
              <Link to="/contact" className="home-card-link">
                <h3>{t.contactCard}</h3>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home; 