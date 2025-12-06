import React from 'react';
import { motion } from 'framer-motion';

interface CyberSphereProps {
    size?: number;
    className?: string;
}

const CyberSphere: React.FC<CyberSphereProps> = ({ size = 300, className = "" }) => {
    return (
        <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size, perspective: '1000px' }}>
            <motion.div
                className="relative w-full h-full"
                style={{ transformStyle: 'preserve-3d' }}
                animate={{ rotateY: 360, rotateZ: 45 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            >
                {/* Central Core */}
                <motion.div
                    className="absolute top-1/2 left-1/2 w-20 h-20 rounded-full bg-[#34D562]"
                    style={{
                        x: '-50%',
                        y: '-50%',
                        boxShadow: '0 0 80px 30px rgba(52, 213, 98, 0.4)',
                        transform: 'translateZ(0px)',
                    }}
                    animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                />

                {/* Ring 1: Vertical Hexagon-ish */}
                <motion.div
                    className="absolute inset-0 border-[2px] border-[#34D562]/30"
                    style={{
                        transformStyle: 'preserve-3d',
                        rotateX: 90,
                        borderRadius: '40%' // Squircle
                    }}
                    animate={{ rotateZ: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_15px_white]" />
                </motion.div>

                {/* Ring 2: Tilted Ellipse */}
                <motion.div
                    className="absolute inset-[15%] border-[1px] border-white/20 rounded-full"
                    style={{ transformStyle: 'preserve-3d', rotateY: 45, rotateX: 45 }}
                    animate={{ rotateZ: -360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                />

                {/* Ring 3: Complex Geometry */}
                {[0, 60, 120].map((deg, i) => (
                    <motion.div
                        key={i}
                        className="absolute inset-[25%] border-[1px] border-[#34D562]/20"
                        style={{
                            transformStyle: 'preserve-3d',
                            rotateY: deg,
                            rotateX: 30,
                            borderRadius: '30%'
                        }}
                        animate={{ rotateZ: 360 }}
                        transition={{ duration: 20 + i * 5, repeat: Infinity, ease: 'linear' }}
                    />
                ))}

                {/* Floating Data Points */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute top-1/2 left-1/2 w-1 h-1 bg-[#34D562]"
                        style={{
                            x: Math.random() * 200 - 100,
                            y: Math.random() * 200 - 100,
                            z: Math.random() * 200 - 100,
                        }}
                        animate={{
                            opacity: [0, 1, 0],
                            scale: [0, 2, 0]
                        }}
                        transition={{
                            duration: 2 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2
                        }}
                    />
                ))}
            </motion.div>
        </div>
    );
};

export default CyberSphere;
