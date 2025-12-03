import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import About from '../components/About';
import Workshops from '../components/Workshops';
import GreenEmbers from '../components/ui/GreenEmbers';

const KoiiLabs: React.FC = () => {
    return (
        <main className="relative z-10">
            <GreenEmbers />
            <Hero />
            <About />
            <Features />
            <Workshops />
        </main>
    );
};

export default KoiiLabs;
