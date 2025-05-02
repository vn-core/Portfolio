import { useState } from "react";
import { Link } from "react-scroll";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import "./Navbar.css";

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="flex">
          <div className="navbar-left">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="navbar-brand"
            >
              Vanessa Contreras
            </Link>
            <button 
              className="language-switcher" 
              onClick={toggleLanguage}
            >
              {t.language}
            </button>
          </div>

          <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.about}
            </Link>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.skills}
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.projects}
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.contact}
            </Link>
          </div>

          <button className="hamburger-button" onClick={toggleMenu}>
            <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
            <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
            <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 