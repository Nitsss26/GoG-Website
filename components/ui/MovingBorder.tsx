import React from 'react';
import { motion } from 'framer-motion';

interface MovingBorderProps {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  className?: string;
  startAngle?: number; // NEW
}

export const MovingBorder: React.FC<MovingBorderProps> = ({
  children,
  duration = 20000,
  rx = "30%",
  ry = "30%",
  className = "",
  startAngle = 0, // NEW
}) => {
  return (
    <div className={`relative p-[1px] overflow-hidden rounded-xl ${className}`}>
      <div className="absolute inset-0 rounded-xl overflow-hidden">
        <motion.div
          className="absolute inset-0 w-full h-full opacity-100"
          style={{
            // start the conic gradient from startAngle
            background: `conic-gradient(from ${startAngle}deg at 50% 50%, transparent 0%, #34D562 10%, transparent 20%)`,
          }}
          animate={{
            // rotate a full circle but offset by startAngle
            rotate: [startAngle, startAngle + 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
      <div className="relative bg-dark-card backdrop-blur-xl rounded-xl h-full w-full z-10">
        {children}
      </div>
    </div>
  );
};


export const HoverGlowBtn: React.FC<{ children: React.ReactNode; onClick?: () => void; className?: string }> = ({ children, onClick, className = "" }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`relative group px-8 py-3 rounded-full font-bold text-black overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 bg-primary opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Moving shine effect */}
      <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 group-hover:animate-[shimmer_1s_infinite]"></div>
      
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  )
}