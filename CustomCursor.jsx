// CustomCursor.js
import React, { useEffect, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const clickCursor = () => {
      setIsClicked(true);
      setTimeout(() => {
        setIsClicked(false);
      }, 150);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', clickCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', clickCursor);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${isClicked ? 'animate' : ''}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
};

export default CustomCursor;
