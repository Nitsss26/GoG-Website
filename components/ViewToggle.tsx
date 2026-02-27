import React from 'react';
import { motion } from 'framer-motion';
import { LayoutGrid, Box } from 'lucide-react';

interface ViewToggleProps {
    is3D: boolean;
    onToggle: () => void;
}

const ViewToggle: React.FC<ViewToggleProps> = ({ is3D, onToggle }) => {
    return (
        <motion.button
            onClick={onToggle}
            className="group relative flex items-center gap-2.5 px-5 py-2.5 rounded-full border transition-all duration-500 backdrop-blur-xl"
            style={{
                background: is3D
                    ? 'linear-gradient(135deg, rgba(52,213,98,0.15), rgba(52,213,98,0.05))'
                    : 'rgba(255,255,255,0.03)',
                borderColor: is3D ? 'rgba(52,213,98,0.4)' : 'rgba(255,255,255,0.08)',
                boxShadow: is3D ? '0 0 30px rgba(52,213,98,0.15), inset 0 0 20px rgba(52,213,98,0.05)' : 'none',
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
            {/* Icon */}
            <motion.div
                animate={{ rotateY: is3D ? 180 : 0 }}
                transition={{ duration: 0.5, type: 'spring' }}
                style={{ transformStyle: 'preserve-3d' }}
            >
                {is3D ? (
                    <Box className="w-4 h-4 text-[#34D562]" />
                ) : (
                    <LayoutGrid className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                )}
            </motion.div>

            {/* Label */}
            <span className={`text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${is3D ? 'text-[#34D562]' : 'text-gray-400 group-hover:text-white'}`}>
                {is3D ? '3D View' : 'Normal'}
            </span>

            {/* Active indicator dot */}
            {is3D && (
                <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-[#34D562]"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                />
            )}
        </motion.button>
    );
};

export default ViewToggle;
