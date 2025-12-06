import React from 'react';
import { motion } from 'framer-motion';
import { Check, Circle } from 'lucide-react';

const KoiiRoadmap: React.FC = () => {
    const roadmapItems = [
        {
            year: "2020",
            items: [
                "K0 Testnet",
                "Compute Security Primitives",
                "1,000,000 On-Chain Transactions",
                "10+ Ecosystem Projects"
            ],
            completed: true
        },
        {
            year: "2021",
            items: [
                "K1 Testnet",
                "Launch the Desktop Node",
                "1,000+ Nodes",
                "100 PB Data Capacity"
            ],
            completed: true
        },
        {
            year: "2024",
            items: [
                "K2 Testnet",
                "Microsecond Finality",
                "75,000+ Nodes",
                "KPL Token Launches",
                "1st Koii Ocean Cohort",
                "10,000+ AI Agents for Marketing and Growth"
            ],
            completed: true
        },
        {
            year: "2025",
            items: [
                "Koii Mainnet",
                "Koii Token Launch",
                "100,000+ Nodes",
                "Marketplace Automation AI",
                "Native DEX Launch on K2",
                "Prometheus Builds TVL via Dev DAO Partnerships",
                "KOII Launches on DEXs on Other L1's (ETH and SOL)",
                "Direct Integrations of Other DePINs into Koii Build TVL",
                "Trading Bots on Koii Build TVL by Extracting Cross-Chain Value"
            ],
            active: true,
            completedCount: 3 // Only the first 3 items are completed
        }
    ];

    return (
        <section className="py-24 bg-transparent relative">
            <div className="w-[95%] max-w-[1800px] mx-auto relative z-10">
                <div className="text-center mb-20">
                    <p className="text-[#34D562] uppercase tracking-[0.2em] mb-4 text-sm font-bold">KOII ROADMAP</p>
                    <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight">
                        WHERE WE'RE HEADING NEXT
                    </h2>
                </div>

                {/* Timeline Connector (Desktop) */}
                <div className="hidden lg:block relative mb-12">
                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#34D562]/30 to-transparent"></div>
                    <div className="grid grid-cols-4 relative z-10">
                        {roadmapItems.map((column, index) => (
                            <div key={index} className="flex justify-center">
                                <div className={`w-4 h-4 rounded-full border-2 ${column.completed || column.active ? 'bg-[#34D562] border-[#34D562] shadow-[0_0_15px_#34D562]' : 'bg-[#0A0A0A] border-[#34D562]/50'}`}></div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
                    {roadmapItems.map((column, colIndex) => (
                        <div key={column.year} className="flex flex-col gap-6 relative">
                            {/* Year Header */}
                            <div className="text-center lg:mb-4">
                                <h3 className={`text-4xl font-display font-bold ${column.completed || column.active ? 'text-[#34D562]' : 'text-white/50'}`}>
                                    {column.year}
                                </h3>
                            </div>

                            {/* Items */}
                            <div className="flex flex-col gap-3">
                                {column.items.map((item, itemIndex) => {
                                    // Determine if this specific item is completed
                                    const isItemCompleted = column.completed || (column.active && itemIndex < (column.completedCount || 0));

                                    return (
                                        <motion.div
                                            key={itemIndex}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: colIndex * 0.1 + itemIndex * 0.05 }}
                                            className={`p-4 rounded-xl border backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] flex items-start gap-3 ${isItemCompleted
                                                    ? 'bg-[#34D562]/5 border-[#34D562]/30 hover:bg-[#34D562]/10 hover:border-[#34D562]'
                                                    : 'bg-white/5 border-white/5 hover:border-white/20'
                                                }`}
                                        >
                                            <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${isItemCompleted
                                                    ? 'text-[#34D562]'
                                                    : 'text-gray-500'
                                                }`}>
                                                {isItemCompleted ? <Check size={14} strokeWidth={3} /> : <Circle size={10} strokeWidth={2} />}
                                            </div>
                                            <span className={`text-sm font-medium leading-snug ${isItemCompleted ? 'text-white' : 'text-gray-400'}`}>
                                                {item}
                                            </span>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KoiiRoadmap;
