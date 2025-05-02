import React, { useMemo } from 'react';
import './GridBackground.css';

const GridBackground = () => {
  const cells = useMemo(() => {
    const cellsArray = [];
    for (let i = 0; i < 2500; i++) {
      const isBlueBlink = Math.random() < 0.08;
      const isPinkBlink = Math.random() < 0.02;
      
      cellsArray.push(
        <div
          key={i}
          className="grid-cell"
          style={{
            animation: isBlueBlink
              ? 'blueBlink 2s infinite'
              : isPinkBlink
              ? 'pinkBlink 2s infinite'
              : 'none',
            animationDelay: `${Math.random() * 4}s`,
          }}
        />
      );
    }
    return cellsArray;
  }, []);

  return (
    <div className="grid-background">
      {cells}
    </div>
  );
};

export default React.memo(GridBackground); 