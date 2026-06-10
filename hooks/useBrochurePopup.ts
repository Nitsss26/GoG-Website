import { useState, useEffect, useRef } from 'react';

export const useBrochurePopup = (fallbackThreshold: number = 600) => {
    const [isBrochureOpen, setIsBrochureOpen] = useState(false);
    const hasShownThisLoad = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            // Only show automatically once per page load to avoid spamming the user on every scroll
            if (hasShownThisLoad.current) {
                return;
            }

            // Trigger right when they scroll past the hero section (roughly 80% of viewport)
            const dynamicThreshold = window.innerHeight ? window.innerHeight * 0.8 : fallbackThreshold;

            if (window.scrollY > dynamicThreshold && !isBrochureOpen) {
                setIsBrochureOpen(true);
                hasShownThisLoad.current = true;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isBrochureOpen, fallbackThreshold]);

    const closeBrochure = () => {
        setIsBrochureOpen(false);
    };

    const markBrochureSubmitted = () => {
        // Optional: you can add localStorage logic here if you want to permanently stop it
    };

    // Trigger manually from the global button
    const openBrochure = () => {
        setIsBrochureOpen(true);
    };

    return {
        isBrochureOpen,
        openBrochure,
        closeBrochure,
        markBrochureSubmitted
    };
};
