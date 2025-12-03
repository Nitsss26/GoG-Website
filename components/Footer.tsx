
import React from 'react';
import { Twitter, Linkedin, Facebook, Instagram, Mail, Phone, ExternalLink } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    // Changed bg-[#020202] to bg-black/80 for slight transparency
    <footer className="bg-black/80 backdrop-blur-sm border-t border-[#34D562]/20 pt-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#34D562]/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img src="https://www.geeksofgurukul.com/assets/logo-De_KmFRw.svg" alt="Logo" className="h-8" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 border-l-2 border-[#34D562] pl-4">
              Unleash The Power Of Learning: Discover A World Of Possibilities With Our Cutting-Edge Learning Management System.
            </p>
            <div className="pt-4 flex flex-col md:flex-row justify-between items-center gap-4 w-[200%]">
              <p className="text-gray-500 text-xs whitespace-nowrap">© Copyright 2024 Skillscan Edtech India Private Ltd. All Rights Reserved</p>
            </div>
          </div>

          {/* Connect Column */}
          <div className="ml-24">
            <h4 className="text-[#34D562] font-bold text-lg mb-6 uppercase tracking-wider">Connect</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="/Contact-Us" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-[#34D562] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> Contact</a></li>
              <li><a href="/about" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-[#34D562] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> About Us</a></li>
              <li><a href="/programs" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-[#34D562] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> Programs</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-[#34D562] font-bold text-lg mb-6 uppercase tracking-wider">Resources</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="/FAQ-conditions" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-[#34D562] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> FAQ</a></li>
              <li><a href="/privacy-policy" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-[#34D562] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> Privacy & Policy</a></li>
              <li><a href="/terms-condition" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-[#34D562] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Get In Touch Column */}
          <div>
            <h4 className="text-[#34D562] font-bold text-lg mb-6 uppercase tracking-wider">Get In Touch</h4>

            <div className="flex gap-4 mb-8">
              <a href="#" className="w-10 h-10 rounded-full bg-[#34D562]/10 flex items-center justify-center text-[#34D562] hover:bg-[#34D562] hover:text-black transition-all transform hover:scale-110"><Linkedin size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#34D562]/10 flex items-center justify-center text-[#34D562] hover:bg-[#34D562] hover:text-black transition-all transform hover:scale-110"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#34D562]/10 flex items-center justify-center text-[#34D562] hover:bg-[#34D562] hover:text-black transition-all transform hover:scale-110"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#34D562]/10 flex items-center justify-center text-[#34D562] hover:bg-[#34D562] hover:text-black transition-all transform hover:scale-110"><Facebook size={18} /></a>
            </div>

            <div className="space-y-3 text-sm">
              <p className="flex items-center gap-3 text-gray-300 group hover:text-[#34D562] transition-colors cursor-pointer">
                <Phone size={16} className="text-[#34D562]" /> +91 9109976089
              </p>
              <p className="flex items-center gap-3 text-gray-300 group hover:text-[#34D562] transition-colors cursor-pointer">
                <Mail size={16} className="text-[#34D562]" /> admin@geeksofgurukul.com
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
      </div>
    </footer>
  );
};

export default Footer;
