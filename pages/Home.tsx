import React from 'react';
import HomeHero from '../components/HomeHero';
import HomeAwardsPremium from '../components/HomeAwardsPremium';
import FutureWithTech from '../components/FutureWithTech';

const Home: React.FC = () => {
    return (
        <main className="relative bg-[#030303] min-h-screen">
            <div className="absolute inset-0 bg-[#020202] z-0" /> {/* Clean Dark Background */}
            <HomeHero />
            {/* Awards section now comes before Future with Tech */}
            <HomeAwardsPremium />
            <FutureWithTech />
        </main>
    );
};

export default Home;
