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
                animate={{ rotateY: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            >
                {/* Core Glow */}
                <motion.div
                    className="absolute top-1/2 left-1/2 w-8 h-8 rounded-full bg-primary"
                    // FIX: Replaced invalid `shadowColor` property with a CSS custom property `--tw-shadow-color` and cast style object to `React.CSSProperties` to allow for custom properties.
                    style={{
                        x: '-50%',
                        y: '-50%',
                        boxShadow: '0 0 40px 10px var(--tw-shadow-color)',
                        '--tw-shadow-color': '#34D562',
                        transform: 'translateZ(0px)',
                    } as React.CSSProperties}
                    animate={{ scale: [1, 1.4, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                />

                {/* Outer Ring - Y axis rotation */}
                <motion.div
                    className="absolute inset-0 border-2 border-primary/20 rounded-full"
                    style={{ transformStyle: 'preserve-3d' }}
                    animate={{ rotateY: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                >
                    {/* Particle on this ring */}
                    <motion.div
                        className="absolute top-1/2 left-0 w-3 h-3 rounded-full bg-white"
                        // FIX: Cast style object to `React.CSSProperties` to allow for custom property `--radius`.
                        style={{ y: '-50%', transform: 'translateX(calc(var(--radius) * -1)) rotateY(90deg)', '--radius': '50%' } as React.CSSProperties}
                        animate={{ rotateZ: 360 }}
                        transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                    />
                </motion.div>

                {/* Middle Ring - X axis rotation */}
                <motion.div
                    className="absolute inset-[15%] border border-dashed border-primary/30 rounded-full"
                    style={{ transformStyle: 'preserve-3d' }}
                    animate={{ rotateX: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                >
                    <motion.div
                        className="absolute top-0 left-1/2 w-2 h-2 rounded-full bg-primary"
                        // FIX: Cast style object to `React.CSSProperties` to allow for custom property `--radius`.
                        style={{ x: '-50%', transform: 'translateY(calc(var(--radius) * -1)) rotateX(90deg)', '--radius': '50%' } as React.CSSProperties}
                        animate={{ rotateZ: -360 }}
                        transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
                    />
                </motion.div>

                {/* Inner Ring - Z axis rotation */}
                <motion.div
                    className="absolute inset-[30%] border border-primary/40 rounded-full"
                    style={{ transformStyle: 'preserve-3d' }}
                    animate={{ rotateZ: -360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                >
                </motion.div>

                {/* Angled Ring */}
                <motion.div
                    className="absolute inset-[10%] border-t-2 border-primary/50 rounded-full"
                    style={{ transformStyle: 'preserve-3d', transform: 'rotateX(60deg) rotateY(20deg)' }}
                    animate={{ rotateZ: 360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                >
                    <motion.div
                        className="absolute -top-1 left-1/2 w-4 h-1 rounded-full bg-white/70"
                        // FIX: Cast style object to `React.CSSProperties` to allow for custom property `--radius`.
                        style={{ x: '-50%', transform: 'translateY(calc(var(--radius) * -1))', '--radius': '50%' } as React.CSSProperties}
                        animate={{ rotateZ: 360, scaleX: [1, 0.1, 1] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    />
                </motion.div>

            </motion.div>
        </div>
    );
};

export default DecentralizedNode;
