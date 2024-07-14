import React, { useRef, useEffect, useContext } from 'react';
import MyContext from '../../MyContext';
import Screen from './Screen';
import AboutMe from './AboutMe';
import Websites from './Websites';
import Contact from './Contact';

const ScreensContainer = () => {
  const { selTab } = useContext(MyContext);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const container = containerRef.current;
      if (container) {
        container.style.width = `${window.innerWidth * 4}px`; // Adjusted to accommodate four screens
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const moveAmount = selTab * -25;
      container.style.transform = `translateX(${moveAmount}%)`;
    }
  }, [selTab]);

  return (
    <div className="w-screen h-90vh overflow-x-hidden pt-16">
      <div ref={containerRef} className="flex h-full transition-transform duration-300 ease-in-out">
        <div className="w-screen">
          <Screen>
            <AboutMe />
          </Screen>
        </div>
        <div className="w-screen">
          <Screen>
            <Websites />
          </Screen>
        </div>
        <div className="w-screen">
          <Screen>
            <Contact />
          </Screen>
        </div>
        <div className="w-screen">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default ScreensContainer;
