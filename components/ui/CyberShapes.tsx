import React from 'react';
import { motion } from 'framer-motion';

interface ShapeProps {
    size?: number;
    className?: string;
    color?: string;
}

export const CyberHexagon: React.FC<ShapeProps> = ({ size = 300, className = "", color = "#34D562" }) => {
    return (
        <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
            <motion.div
                className="relative w-full h-full flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            >
                {/* SVG Hexagon for perfect rendering */}
                <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path
                        d="M50 5 L93.3 25 V75 L50 95 L6.7 75 V25 Z"
                        stroke={color}
                        strokeWidth="1"
                        strokeDasharray="5 5"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.5 }}
                        transition={{ duration: 2 }}
                    />
                    <motion.path
                        d="M50 15 L80 30 V70 L50 85 L20 70 V30 Z"
                        stroke={color}
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 0.5 }}
                        style={{ filter: `drop-shadow(0 0 10px ${color})` }}
                    />
                </svg>

                {/* Rotating Particles */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-white shadow-[0_0_10px_white]"
                        style={{
                            top: '50%',
                            left: '50%',
                            transform: `rotate(${i * 60}deg) translate(${size * 0.4}px)`
                        }}
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                    />
                ))}
            </motion.div>
        </div>
    );
};

export const CyberSquare: React.FC<ShapeProps> = ({ size = 300, className = "", color = "#34D562" }) => {
    return (
        <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size, perspective: '1000px' }}>
            <motion.div
                className="relative w-full h-full flex items-center justify-center"
                style={{ transformStyle: 'preserve-3d' }}
                animate={{ rotateX: 360, rotateY: 45 }}
                transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
            >
                {/* Core Square */}
                <motion.div
                    className="absolute w-1/2 h-1/2 border-[4px]"
                    style={{
                        borderColor: color,
                        boxShadow: `0 0 40px ${color}`
                    }}
                    animate={{ rotateZ: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                />

                {/* Outer Frame */}
                <motion.div
                    className="absolute inset-0 border-[1px]"
                    style={{
                        borderColor: `${color}30`,
                        transform: 'translateZ(50px)'
                    }}
                />
                <motion.div
                    className="absolute inset-0 border-[1px]"
                    style={{
                        borderColor: `${color}30`,
                        transform: 'translateZ(-50px)'
                    }}
                />

                {/* Connecting Lines */}
                {[0, 90, 180, 270].map((deg, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-full h-[1px] bg-white/20"
                        style={{ rotate: deg }}
                    />
                ))}

            </motion.div>

            {/* Quadrant Dots (Balls) - Outside 3D rotation for visibility */}
            {[45, 135, 225, 315].map((deg, i) => (
                <motion.div
                    key={i}
                    className="absolute w-4 h-4 rounded-full bg-white shadow-[0_0_20px_white]"
                    style={{
                        top: '49%',
                        left: '48%',
                        transform: `rotate(${deg}deg) translate(${size * 0.35}px) rotate(-${deg}deg)`
                    }}
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.8, 1, 0.8],
                        boxShadow: ["0 0 20px white", "0 0 30px white", "0 0 20px white"]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                >
                    {/* Inner shading for 3D ball effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white via-gray-200 to-gray-400 opacity-50" />
                </motion.div>
            ))}
        </div>
    );
};
