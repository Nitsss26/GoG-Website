import React from 'react';
import { motion } from 'framer-motion';

interface KoiiTokenProps {
  size?: number;
  className?: string;
}

const KoiiToken: React.FC<KoiiTokenProps> = ({ size = 64, className = "" }) => {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <motion.div
        className="w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        {/* Coin Front */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#34D562] to-[#1a6b31] flex items-center justify-center border-4 border-[#4dff7e] shadow-[0_0_30px_rgba(52,213,98,0.6)] backface-hidden">
      <svg width="150" height="125" viewBox="0 0 61 51" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-1/2 h-1/2">
<g filter="url(#filter0_d_5922_1189)">
<path d="M36.4316 26.2619C36.4316 25.1453 37.3251 24.252 38.4418 24.252C39.5586 24.252 40.452 25.1453 40.452 26.2619C40.452 27.3786 39.5586 28.2719 38.4418 28.2719C37.3251 28.2719 36.4316 27.3414 36.4316 26.2619Z" fill="white"/>
</g>
<g filter="url(#filter1_d_5922_1189)">
<path d="M48.5672 31.1379C48.4927 31.7707 48.4183 32.4035 48.2321 32.999C47.6738 35.1207 46.4453 37.0562 44.4351 38.1356C41.6804 39.5501 38.4046 39.029 35.6499 37.9495C33.3791 39.5501 33.3791 39.5501 33.3791 39.5501C32.858 39.8851 32.1879 39.3267 32.4857 38.7684C31.8529 38.8801 31.6667 38.2845 31.8529 37.8006C31.3317 38.2101 30.885 37.4656 31.1828 37.019C31.3689 36.7212 31.6667 36.3862 31.8901 36.1257C28.6887 34.3018 25.7851 32.0685 22.8443 29.8724C24.5194 30.9146 31.22 34.339 32.858 35.0462C34.5703 35.7907 36.2827 36.5351 38.0695 36.9445C39.5586 37.2795 41.4571 37.4656 42.8344 36.6095C44.1001 35.8651 44.584 34.339 44.7702 32.9618C45.2169 29.9841 44.1746 26.6341 42.6111 24.103C40.9731 21.4603 38.2929 19.0781 35.2404 18.2964C34.1236 17.9987 33.0069 17.9987 31.9645 18.1848C29.5449 18.5942 27.3486 20.0831 25.6734 21.9442C23.2538 24.6241 21.5786 27.9369 20.0524 31.2124C19.01 33.4085 17.5582 38.7684 14.1335 36.6468C12.6072 35.679 11.6394 34.004 10.9693 32.3663C10.2248 30.6168 9.70363 28.2719 10.1876 26.3736C11.2299 22.3908 16.8137 25.9269 18.7122 27.1924C18.6006 27.1552 14.1335 25.108 12.4956 26.7086C11.751 27.453 11.7883 28.793 11.8999 29.7607C12.1233 31.5102 12.9795 34.1157 14.6174 35.0834C16.7393 36.3118 17.8188 32.4779 18.3772 31.1379C19.3078 28.8674 20.2013 26.5969 21.2436 24.3636C22.3976 21.9069 23.7749 19.4875 25.6734 17.5148C25.2639 17.0309 24.6683 16.4353 24.6311 15.8026C24.5567 15.0954 25.2639 14.3137 26.0084 14.6859C25.1523 13.7182 26.3063 12.2665 27.423 12.8248C26.9019 12.006 27.7208 10.9637 28.577 11.001C29.0609 11.001 29.5449 11.4104 29.9171 11.671C30.885 12.3037 31.8529 12.9737 32.858 13.6065C42.1271 12.1548 49.3861 22.6886 48.5672 31.1379Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d_5922_1189" x="26.4316" y="13.252" width="26.0205" height="26.02" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1"/>
<feGaussianBlur stdDeviation="5.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.967122 0 0 0 0 0.750204 0 0 0 0 0.153679 0 0 0 0.9 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5922_1189"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5922_1189" result="shape"/>
</filter>
<filter id="filter1_d_5922_1189" x="0" y="0" width="60.6299" height="50.6511" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1"/>
<feGaussianBlur stdDeviation="5.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.967122 0 0 0 0 0.750204 0 0 0 0 0.153679 0 0 0 0.9 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5922_1189"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5922_1189" result="shape"/>
</filter>
</defs>
</svg>

        </div>
      </motion.div>
      
      {/* Outer Glow Ring */}
      <div className="absolute inset-[-10%] rounded-full border border-[#34D562]/30 animate-pulse-slow"></div>
    </div>
  );
};

export default KoiiToken;