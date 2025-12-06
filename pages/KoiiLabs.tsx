import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import About from '../components/About';
import Workshops from '../components/Workshops';
import GreenEmbers from '../components/ui/GreenEmbers';

import KoiiNetworkStats from '../components/koii/KoiiNetworkStats';
import KoiiRoadmap from '../components/koii/KoiiRoadmap';
import KoiiNodeDownload from '../components/koii/KoiiNodeDownload';

const KoiiLabs: React.FC = () => {
    return (
        <main className="relative z-10">
            <GreenEmbers />
            <Hero />
            <About />
            <KoiiNetworkStats />
            <KoiiNodeDownload />
            <KoiiRoadmap />
            <Features />
            <Workshops />
        </main>
    );
};

export default KoiiLabs;
