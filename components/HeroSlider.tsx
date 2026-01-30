import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
    '/assets/Centurion/campus-wide.jpg',
    '/assets/Centurion/campus-entrance.jpg',
    '/assets/Centurion/campus-glass.jpg',
    '/assets/Centurion/campus-wide.jpg'
];

export const HeroSlider = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 4000); // Change every 4 seconds
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="absolute inset-0 z-0 overflow-hidden">
            <AnimatePresence mode="popLayout">
                <motion.img
                    key={index}
                    src={images[index]}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Campus View"
                />
            </AnimatePresence>
            <div className="absolute inset-0 bg-black/60 z-10" />
        </div>
    );
};
