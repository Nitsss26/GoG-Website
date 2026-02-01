import React from 'react';
import HomeHero from '../components/HomeHero';
import HomeAwardsPremium from '../components/HomeAwardsPremium';
import FutureWithTech from '../components/FutureWithTech';
import TeamVideos from '../components/TeamVideos';
import SEO from '../components/SEO';

const Home: React.FC = () => {
    return (
        <main className="relative bg-[#030303] min-h-screen">
            <SEO
                title="Geeks of Gurukul - India's Premier Education Platform"
                description="Learn AI, ML, Web3, Blockchain with 250+ IIT mentors at 30+ partnered institutes. Industry-aligned courses with placement support."
                keywords="Geeks of Gurukul, AI courses, ML programs, Web3 education, blockchain courses, IIT mentors, India"
                canonical="/"
            />
            <div className="absolute inset-0 bg-[#020202] z-0" /> {/* Clean Dark Background */}
            <HomeHero />
            {/* Awards section now comes before Future with Tech */}
            <HomeAwardsPremium />
            <FutureWithTech />
            <TeamVideos />
        </main>
    );
};

export default Home;
