import React from 'react';
import { motion } from 'framer-motion';

interface DecentralizedNodeProps {
    size?: number;
    className?: string;
}

const DecentralizedNode: React.FC<DecentralizedNodeProps> = ({ size = 250, className = "" }) => {
    return (
        <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size, perspective: '1000px' }}>
            <motion.div
                className="relative w-full h-full"
                style={{ transformStyle: 'preserve-3d' }}
                animate={{ rotateY: 360, rotateX: 10 }}
                transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
            >
                {/* Core Glow - Pulsing */}
                <motion.div
                    className="absolute top-1/2 left-1/2 w-12 h-12 rounded-full bg-[#34D562]"
                    style={{
                        x: '-50%',
                        y: '-50%',
                        boxShadow: '0 0 60px 20px rgba(52, 213, 98, 0.6)',
                        transform: 'translateZ(0px)',
                    }}
                    animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />

                {/* Orbit 1: Large, Asymmetrical Arc (Thick) */}
                <motion.div
                    className="absolute inset-0 rounded-full border-[3px] border-[#34D562]/40 border-t-transparent border-l-transparent"
                    style={{ transformStyle: 'preserve-3d', rotateX: 70, rotateY: 10 }}
                    animate={{ rotateZ: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                    <motion.div
                        className="absolute top-[10%] left-[10%] w-4 h-4 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.8)]"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </motion.div>

                {/* Orbit 2: Medium, Off-axis, Dashed (Thinner but bright) */}
                <motion.div
                    className="absolute inset-[10%] rounded-full border-[2px] border-dashed border-white/60"
                    style={{ transformStyle: 'preserve-3d', rotateX: -45, rotateY: 20 }}
                    animate={{ rotateZ: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                />

                {/* Orbit 3: Vertical, Thick Glowy Ring */}
                <motion.div
                    className="absolute inset-[5%] rounded-full border-[4px] border-[#34D562]/20 border-r-[#34D562] border-l-[#34D562]"
                    style={{ transformStyle: 'preserve-3d', rotateY: 90, rotateX: 10 }}
                    animate={{ rotateZ: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                >
                    {/* Satellite */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#34D562] rounded-full blur-sm" />
                </motion.div>

                {/* Orbit 4: Small, Fast, Tilted */}
                <motion.div
                    className="absolute inset-[35%] rounded-full border-[3px] border-white/30 border-b-transparent"
                    style={{ transformStyle: 'preserve-3d', rotateX: 45, rotateY: -45 }}
                    animate={{ rotateZ: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                />

                {/* Floating Particles */}
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute top-1/2 left-1/2 w-2 h-2 bg-[#34D562] rounded-full"
                        style={{
                            x: Math.random() * 100 - 50,
                            y: Math.random() * 100 - 50,
                            z: Math.random() * 100 - 50,
                        }}
                        animate={{
                            x: [null, Math.random() * 200 - 100],
                            y: [null, Math.random() * 200 - 100],
                            opacity: [0, 1, 0],
                            scale: [0, 1.5, 0]
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                            delay: i * 0.5
                        }}
                    />
                ))}

            </motion.div>
        </div>
    );
};

export default DecentralizedNode;
