import React, { useState, useRef, useEffect } from 'react';

const NavBar = () => {
    const [selTab, changeSelTab] = useState("About Me");
    const [selTabInfo, setSelTabInfo] = useState({ left: 0, width: 0 });

    const tabs = ["About Me", "Websites", "Games", "Contact"];
    const tabRefs = useRef([]);
    const navRef = useRef(null);

    const updateTabInfo = (index) => {
        const tabElement = tabRefs.current[index];
        if (tabElement && navRef.current) {
            const tabRect = tabElement.getBoundingClientRect();
            const navRect = navRef.current.getBoundingClientRect();
            setSelTabInfo({ left: tabRect.left - navRect.left, width: tabRect.width });
        }
    };

    const onClickTab = (tabName, index) => {
        changeSelTab(tabName);
        updateTabInfo(index);
    };

    useEffect(() => {
        const initialTabIndex = tabs.indexOf(selTab);
        updateTabInfo(initialTabIndex);
    }, [selTab]);

    useEffect(() => {
        const handleResize = () => {
            const selectedIndex = tabs.indexOf(selTab);
            updateTabInfo(selectedIndex);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [selTab, tabs]);

    return (
        <div className="relative flex justify-center items-center w-full">
            <nav ref={navRef} className="fixed top-0 w-full flex justify-center bg-gray-800 text-white px-10 py-4 gap-x-10 rounded-b-lg">
                {tabs.map((tab, index) => (
                    <NavBarBtn 
                        key={tab} 
                        text={tab} 
                        selectedTab={selTab} 
                        onClick={() => onClickTab(tab, index)}
                        ref={el => tabRefs.current[index] = el}
                    />
                ))}
                <NavBarSelected left={selTabInfo.left} width={selTabInfo.width} />
            </nav>
        </div>
    );
};

const NavBarBtn = React.forwardRef(({ text, onClick }, ref) => {
    return (
        <button 
            ref={ref}
            className="relative text-lg text-blue-400 hover:text-blue-600 focus:outline-none"
            onClick={onClick}
        >
            {text}
        </button>
    );
});

const NavBarSelected = ({ left, width }) => {
    return (
        <span 
            className="absolute bottom-0 h-1 bg-blue-400 transition-all duration-300 ease-in-out"
            style={{ left, width }}
        ></span>
    );
};

export default NavBar;
