import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Welcome.css';

const Welcome = () => {
  const navigate = useNavigate();

  // Crear la grilla con parpadeos aleatorios
  const gridItems = Array.from({ length: 400 }, (_, index) => {
    // 8% de probabilidad de parpadear en celeste
    const isBlueBlink = Math.random() < 0.08;
    // 2% de probabilidad de parpadear en rosa
    const isPinkBlink = Math.random() < 0.02;
    
    return (
      <div 
        key={index} 
        className="grid-item"
        style={{
          animation: isBlueBlink 
            ? `blueBlink 2s infinite` 
            : isPinkBlink 
              ? `pinkBlink 2s infinite` 
              : 'none',
          animationDelay: `${Math.random() * 8}s`
        }}
      />
    );
  });

  return (
    <div className="welcome-container">
      <div className="welcome-grid">
        {gridItems}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="welcome-content"
      >
        <motion.h1
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="welcome-title"
        >
          ¡Welcome!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="welcome-subtitle"
        >
          Explore my work
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate('/home')}
          className="welcome-button"
        >
          Enter
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Welcome; 