import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';

function App() {
  return (
    <LanguageProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={
          <>
            <Navbar />
            <Home />
          </>
        } />
        <Route path="/about" element={
          <>
            <Navbar />
            <About />
          </>
        } />
        <Route path="/skills" element={
          <>
            <Navbar />
            <Skills />
          </>
        } />
        <Route path="/projects" element={
          <>
            <Navbar />
            <Projects />
          </>
        } />
        <Route path="/contact" element={
          <>
            <Navbar />
            <Contact />
          </>
        } />
      </Routes>
    </Router>
    </LanguageProvider>
  );
}

export default App;
