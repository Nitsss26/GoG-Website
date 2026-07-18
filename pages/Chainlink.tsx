import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ChevronRight, CheckCircle2, ArrowRightLeft, LineChart, ShieldCheck, Code, Zap, Dices } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const HexagonLogo = () => (
  <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 5L90 27.5V72.5L50 95L10 72.5V27.5L50 5Z" stroke="#0847F7" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M50 25L75 39V61L50 75L25 61V39L50 25Z" stroke="#0847F7" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Chainlink = () => {
  return (
    <div className="bg-[#0E1119] text-[#F5F7FA] min-h-screen font-sans selection:bg-[#0847F7] selection:text-white">
      <Helmet>
        <title>Chainlink | The Decentralized Computing Platform</title>
        <meta name="theme-color" content="#0E1119" />
      </Helmet>

      {/* 1. Header/Nav */}
      <header className="sticky top-0 z-50 bg-[#0E1119]/80 backdrop-blur-md border-b border-[#DCEBFF]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <HexagonLogo />
              <span className="text-2xl font-bold tracking-tight">Chainlink</span>
            </div>
            <nav className="hidden md:flex gap-8 items-center">
              <a href="#products" className="text-sm font-medium hover:text-[#0847F7] transition-colors">Products</a>
              <a href="#ecosystem" className="text-sm font-medium hover:text-[#0847F7] transition-colors">Ecosystem</a>
              <a href="https://docs.chain.link/" target="_blank" rel="noopener noreferrer" className="bg-[#0847F7] hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all shadow-[0_0_15px_rgba(8,71,247,0.3)] hover:shadow-[0_0_25px_rgba(8,71,247,0.5)] flex items-center gap-2">
                Developer Docs
                <ExternalLink size={16} />
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#DCEBFF05_1px,transparent_1px),linear-gradient(to_bottom,#DCEBFF05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              The Decentralized <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0847F7] to-[#80a0ff]">Computing Platform</span> Powering Onchain Finance.
            </h1>
            <p className="text-xl text-[#DCEBFF]/70 mb-10 max-w-lg">
              Connect any blockchain with real-world data, secure off-chain computation, and universal cross-chain interoperability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://docs.chain.link/" target="_blank" rel="noopener noreferrer" className="bg-[#0847F7] hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-medium transition-all shadow-[0_0_20px_rgba(8,71,247,0.4)] hover:shadow-[0_0_30px_rgba(8,71,247,0.6)] flex items-center justify-center gap-2">
                Start Building
                <ChevronRight size={20} />
              </a>
              <a href="#data-feeds" className="bg-transparent border border-[#DCEBFF]/20 hover:border-[#DCEBFF]/50 hover:bg-[#DCEBFF]/5 text-white px-8 py-4 rounded-xl text-lg font-medium transition-all flex items-center justify-center gap-2">
                Explore Data Feeds
              </a>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] w-full flex justify-center items-center"
          >
            {/* Abstract Network Graphic */}
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 border-2 border-[#0847F7]/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-4 border border-[#0847F7]/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#0847F7] rounded-full shadow-[0_0_50px_rgba(8,71,247,0.8)] flex items-center justify-center">
                 <HexagonLogo />
              </div>
              
              {/* Nodes */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#0E1119] border border-[#0847F7] rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(8,71,247,0.4)]">API</div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 bg-[#0E1119] border border-[#0847F7] rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(8,71,247,0.4)]">ETH</div>
              <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#0E1119] border border-[#0847F7] rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(8,71,247,0.4)]">SOL</div>
              <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#0E1119] border border-[#0847F7] rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(8,71,247,0.4)]">ARB</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Tech Intro (What is Chainlink?) */}
      <section className="py-24 bg-[#0E1119] border-y border-[#DCEBFF]/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Solving the Oracle Problem</h2>
              <div className="space-y-6 text-[#DCEBFF]/70 text-lg">
                <p>
                  <strong className="text-white block mb-1">The Core Concept:</strong>
                  Blockchains are intentionally closed, secure systems. They cannot natively read outside data (like stock prices, weather, or banking transactions).
                </p>
                <p>
                  <strong className="text-white block mb-1">The Solution:</strong>
                  Chainlink is a Decentralized Oracle Network (DON). It acts as the secure, tamper-resistant bridge bringing premium real-world data and advanced compute services onchain without compromising blockchain security.
                </p>
              </div>
            </div>
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-[#0847F7]/10 to-transparent border border-[#0847F7]/20">
               <div className="flex justify-between items-center relative z-10">
                 <div className="text-center">
                   <div className="w-16 h-16 bg-[#0E1119] border border-[#DCEBFF]/20 rounded-xl flex items-center justify-center mb-3 mx-auto">
                     <span className="font-mono text-xs">Off-chain APIs</span>
                   </div>
                   <span className="text-sm text-[#DCEBFF]/50">Real-world Data</span>
                 </div>
                 <div className="flex-1 flex items-center justify-center px-4">
                   <div className="h-px bg-gradient-to-r from-transparent via-[#0847F7] to-transparent w-full relative">
                     <motion.div 
                       className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-[#0847F7] rounded-full shadow-[0_0_10px_#0847F7]"
                       animate={{ left: ['0%', '100%'] }}
                       transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                     />
                   </div>
                 </div>
                 <div className="text-center">
                   <div className="w-16 h-16 bg-[#0E1119] border border-[#0847F7] rounded-xl flex items-center justify-center mb-3 mx-auto shadow-[0_0_15px_rgba(8,71,247,0.3)]">
                     <HexagonLogo />
                   </div>
                   <span className="text-sm font-medium text-[#0847F7]">Chainlink DON</span>
                 </div>
                 <div className="flex-1 flex items-center justify-center px-4">
                   <div className="h-px bg-gradient-to-r from-transparent via-[#0847F7] to-transparent w-full relative">
                     <motion.div 
                       className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-[#0847F7] rounded-full shadow-[0_0_10px_#0847F7]"
                       animate={{ left: ['0%', '100%'] }}
                       transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
                     />
                   </div>
                 </div>
                 <div className="text-center">
                   <div className="w-16 h-16 bg-[#0E1119] border border-[#DCEBFF]/20 rounded-xl flex items-center justify-center mb-3 mx-auto">
                     <Code size={24} className="text-[#DCEBFF]" />
                   </div>
                   <span className="text-sm text-[#DCEBFF]/50">Smart Contract</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Product Showcase */}
      <section id="products" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Core Product Suite</h2>
            <p className="text-lg text-[#DCEBFF]/70">Everything you need to build feature-rich, highly secure decentralized applications.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* CCIP */}
            <div className="group p-8 rounded-2xl bg-[#131722] border border-[#DCEBFF]/10 hover:border-[#0847F7]/50 hover:shadow-[0_0_30px_rgba(8,71,247,0.15)] transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-[#0847F7]/10 text-[#0847F7] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ArrowRightLeft size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">CCIP (Cross-Chain Interoperability Protocol)</h3>
              <p className="text-[#DCEBFF]/60 mb-4 h-20 text-sm">Secure cross-chain token transfers and programmable messaging through a unified standard.</p>
              <div className="pt-4 border-t border-[#DCEBFF]/10 text-xs font-medium text-[#DCEBFF]/40">
                BEST FOR: Token bridging, multi-chain dApps, capital markets.
              </div>
            </div>

            {/* Data Feeds */}
            <div className="group p-8 rounded-2xl bg-[#131722] border border-[#DCEBFF]/10 hover:border-[#0847F7]/50 hover:shadow-[0_0_30px_rgba(8,71,247,0.15)] transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-[#0847F7]/10 text-[#0847F7] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <LineChart size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Data Feeds & Streams</h3>
              <p className="text-[#DCEBFF]/60 mb-4 h-20 text-sm">Ultra-reliable, manipulation-resistant market reference prices and asset data.</p>
              <div className="pt-4 border-t border-[#DCEBFF]/10 text-xs font-medium text-[#DCEBFF]/40">
                BEST FOR: DeFi lending, options markets, derivatives.
              </div>
            </div>

            {/* Proof of Reserve */}
            <div className="group p-8 rounded-2xl bg-[#131722] border border-[#DCEBFF]/10 hover:border-[#0847F7]/50 hover:shadow-[0_0_30px_rgba(8,71,247,0.15)] transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-[#0847F7]/10 text-[#0847F7] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Proof of Reserve (PoR)</h3>
              <p className="text-[#DCEBFF]/60 mb-4 h-20 text-sm">Automated, cryptographically secure audits tracking real-world asset collateralization.</p>
              <div className="pt-4 border-t border-[#DCEBFF]/10 text-xs font-medium text-[#DCEBFF]/40">
                BEST FOR: Stablecoins, tokenized gold/real estate (RWAs).
              </div>
            </div>

            {/* Functions */}
            <div className="group p-8 rounded-2xl bg-[#131722] border border-[#DCEBFF]/10 hover:border-[#0847F7]/50 hover:shadow-[0_0_30px_rgba(8,71,247,0.15)] transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-[#0847F7]/10 text-[#0847F7] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Code size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Chainlink Functions</h3>
              <p className="text-[#DCEBFF]/60 mb-4 h-20 text-sm">Allows smart contracts to fetch any data from any traditional Web2 API using custom JavaScript.</p>
              <div className="pt-4 border-t border-[#DCEBFF]/10 text-xs font-medium text-[#DCEBFF]/40">
                BEST FOR: Custom Web2 API integrations, weather data, sports scores.
              </div>
            </div>

            {/* Automation */}
            <div className="group p-8 rounded-2xl bg-[#131722] border border-[#DCEBFF]/10 hover:border-[#0847F7]/50 hover:shadow-[0_0_30px_rgba(8,71,247,0.15)] transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-[#0847F7]/10 text-[#0847F7] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Automation</h3>
              <p className="text-[#DCEBFF]/60 mb-4 h-20 text-sm">Highly reliable, decentralized node triggers to execute smart contract functions automatically.</p>
              <div className="pt-4 border-t border-[#DCEBFF]/10 text-xs font-medium text-[#DCEBFF]/40">
                BEST FOR: Liquidations, yield harvesting, automated rebalancing.
              </div>
            </div>

            {/* VRF */}
            <div className="group p-8 rounded-2xl bg-[#131722] border border-[#DCEBFF]/10 hover:border-[#0847F7]/50 hover:shadow-[0_0_30px_rgba(8,71,247,0.15)] transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-[#0847F7]/10 text-[#0847F7] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Dices size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">VRF (Verifiable Random Function)</h3>
              <p className="text-[#DCEBFF]/60 mb-4 h-20 text-sm">Tamper-proof, cryptographically provable random number generation.</p>
              <div className="pt-4 border-t border-[#DCEBFF]/10 text-xs font-medium text-[#DCEBFF]/40">
                BEST FOR: Web3 gaming mints, fair NFT distributions, raffles.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Ecosystem Impact */}
      <section id="ecosystem" className="py-24 bg-[#131722] border-y border-[#DCEBFF]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Securing the Web3 Economy</h2>
            <p className="text-lg text-[#DCEBFF]/70">Trusted by the world's most innovative DeFi protocols and global traditional financial institutions.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-10 rounded-3xl bg-[#0E1119] border border-[#DCEBFF]/10">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#0847F7] shadow-[0_0_10px_#0847F7]"></div>
                Decentralized Finance (DeFi)
              </h3>
              <p className="text-[#DCEBFF]/70 mb-8 leading-relaxed">
                Powering major protocols to secure tens of billions of dollars across the Web3 economy. Ensuring accurate liquidations, pricing, and automated yield strategies.
              </p>
              <div className="flex gap-4">
                <div className="px-4 py-2 rounded-lg bg-[#131722] border border-[#DCEBFF]/10 font-medium">Aave</div>
                <div className="px-4 py-2 rounded-lg bg-[#131722] border border-[#DCEBFF]/10 font-medium">Synthetix</div>
              </div>
            </div>
            
            <div className="p-10 rounded-3xl bg-[#0E1119] border border-[#DCEBFF]/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#0847F7]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-white shadow-[0_0_10px_white]"></div>
                Institutions & Capital Markets
              </h3>
              <p className="text-[#DCEBFF]/70 mb-8 leading-relaxed relative z-10">
                Unlocking global market liquidity by connecting massive traditional networks to public and private tokenized asset structures.
              </p>
              <div className="flex flex-wrap gap-4 relative z-10">
                <div className="px-4 py-2 rounded-lg bg-[#131722] border border-[#DCEBFF]/10 font-medium">Swift</div>
                <div className="px-4 py-2 rounded-lg bg-[#131722] border border-[#DCEBFF]/10 font-medium">ANZ Bank</div>
                <div className="px-4 py-2 rounded-lg bg-[#131722] border border-[#DCEBFF]/10 font-medium">Bank of England</div>
                <div className="px-4 py-2 rounded-lg bg-[#131722] border border-[#DCEBFF]/10 font-medium">Deloitte</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Token Utility ($LINK) */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0847F7]/5 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="p-12 rounded-3xl bg-gradient-to-b from-[#131722] to-[#0E1119] border border-[#0847F7]/30 text-center shadow-[0_0_50px_rgba(8,71,247,0.1)]">
            <div className="w-20 h-20 mx-auto bg-[#0847F7]/10 rounded-2xl flex items-center justify-center mb-8 border border-[#0847F7]/30">
               <span className="text-3xl font-bold text-[#0847F7]">$LINK</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">The Economic Engine of Decentralized Security</h2>
            <p className="text-xl text-[#DCEBFF]/70 mb-12 max-w-2xl mx-auto">
              The native LINK token utility is split into two critical actions within the ecosystem:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="p-6 rounded-2xl bg-[#0E1119] border border-[#DCEBFF]/5">
                <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-[#0847F7]" />
                  Payment Asset
                </h4>
                <p className="text-[#DCEBFF]/60">
                  Used by developers to pay Chainlink Node Operators for processing smart contract data queries and computing tasks.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-[#0E1119] border border-[#DCEBFF]/5">
                <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-[#0847F7]" />
                  Staking Layer
                </h4>
                <p className="text-[#DCEBFF]/60">
                  Staked by node operators as cryptographic collateral to back the security and uptime guarantees of the oracle networks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Footer */}
      <footer className="border-t border-[#DCEBFF]/10 py-12 bg-[#0E1119]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 opacity-50">
              <HexagonLogo />
              <span className="text-sm font-medium">© 2026 Chainlink</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-[#DCEBFF]/60">
              <a href="#" className="hover:text-white transition-colors">Documentation</a>
              <a href="#" className="hover:text-white transition-colors">Data Feeds</a>
              <a href="#" className="hover:text-white transition-colors">Blog</a>
              <a href="#" className="hover:text-white transition-colors">Community</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Chainlink;
