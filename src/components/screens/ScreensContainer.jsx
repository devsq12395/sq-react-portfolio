import React, { useRef, useEffect } from 'react';
import AboutMe from './AboutMe';
import Websites from './Websites';
import Screen from './Screen';

const ScreensContainer = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            const container = containerRef.current;
            if (container) {
                container.style.width = `${window.innerWidth * 2}px`;
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="w-screen h-screen overflow-x-hidden">
            <div ref={containerRef} className="flex h-screen">
                <Screen>
                    <AboutMe />
                </Screen>
                <Screen>
                    <Websites />
                </Screen>
            </div>
        </div>
    );
};

export default ScreensContainer;
