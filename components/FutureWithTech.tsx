import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

// @ts-ignore
import DroneImg from '../assets/drone_dark.png';
// @ts-ignore
import BlockchainImg from '../assets/blockchain.png';
// @ts-ignore
import VRImg from '../assets/vr.png';
// @ts-ignore
import RoboticsImg from '../assets/robotics.png';

const FutureWithTech: React.FC = () => {
    const technologies = [
        { title: "Drone Technology", desc: "Revolutionize industries with cutting edge capabilities", image: DroneImg, color: "from-emerald-500 to-green-600" },
        { title: "Blockchain", desc: "Secure decentralized ledger technology", image: BlockchainImg, color: "from-cyan-500 to-blue-600" },
        { title: "AR/VR Reality", desc: "Immersive augmented and virtual experiences", image: VRImg, color: "from-purple-500 to-pink-600" },
        { title: "Robotics & AI", desc: "Advanced automation powering the future", image: RoboticsImg, color: "from-orange-500 to-red-600" },
    ];

    return (
        <section className="relative py-24 px-6 overflow-hidden bg-black">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 mb-6">
                        <Zap className="w-4 h-4 text-[#34D562]" />
                        <span className="text-white/60 text-sm tracking-wide uppercase">Innovation Hub</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">
                        <span className="text-white">Future with </span>
                        <span className="text-[#34D562]">Tech</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-xl mx-auto">
                        Embrace cutting edge technologies driving innovation
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative h-[350px] rounded-2xl overflow-hidden cursor-pointer"
                        >
                            <img
                                src={tech.image}
                                alt={tech.title}
                                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-[#34D562] transition-colors">
                                    {tech.title}
                                </h3>
                                <p className="text-gray-300 text-sm">{tech.desc}</p>
                            </div>
                            <div className="absolute top-4 right-4 w-10 h-10 border-t-2 border-r-2 border-[#34D562]/30 group-hover:border-[#34D562] transition-colors" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FutureWithTech;
