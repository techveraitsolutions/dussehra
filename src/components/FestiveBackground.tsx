import React from 'react';
import { DiyaFlame } from './DiyaFlame';

export const FestiveBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none" aria-hidden="true">
      {/* 1. Deep Festive Night Sky & Royal Maroon/Saffron Atmospheric Nebula */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#180306] via-[#26050a] to-[#0d0103]" />
      
      {/* Saffron & Royal Amber Volumetric Glows */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[1100px] h-[750px] rounded-full bg-gradient-to-b from-amber-600/20 via-orange-600/12 to-transparent blur-[140px]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[450px] rounded-full bg-gradient-to-t from-red-950/60 via-amber-900/20 to-transparent blur-[120px]" />
      
      {/* Subtle Rangoli Sacred Geometry in Background Centers */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] sm:w-[900px] sm:h-[900px] opacity-15">
        <svg viewBox="0 0 400 400" className="w-full h-full animate-rotate-slow text-amber-400" fill="none">
          <circle cx="200" cy="200" r="190" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" />
          <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="200" cy="200" r="110" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
          {Array.from({ length: 24 }).map((_, i) => (
            <path
              key={i}
              d="M 200 40 C 215 90, 215 110, 200 130 C 185 110, 185 90, 200 40 Z"
              fill="currentColor"
              transform={`rotate(${i * 15} 200 200)`}
            />
          ))}
          {Array.from({ length: 12 }).map((_, i) => (
            <circle
              key={i}
              cx={200 + Math.cos((i * Math.PI) / 6) * 150}
              cy={200 + Math.sin((i * Math.PI) / 6) * 150}
              r="6"
              fill="currentColor"
            />
          ))}
        </svg>
      </div>

      {/* 2. Distant Dussehra 10-Headed Ravan Effigy Silhouette (Celebration of Ramleela) */}
      <div className="absolute top-[18%] sm:top-[22%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[500px] md:w-[620px] opacity-25 md:opacity-30 flex flex-col items-center pointer-events-none">
        <svg viewBox="0 0 600 320" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Ambient Fire Aura behind Effigy */}
          <radialGradient id="ravanFireGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
            <stop offset="40%" stopColor="#dc2626" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#1e0407" stopOpacity="0" />
          </radialGradient>
          <circle cx="300" cy="160" r="150" fill="url(#ravanFireGlow)" />

          {/* Golden Sparks from Effigy Fireworks */}
          <circle cx="160" cy="70" r="2.5" fill="#fef08a" className="animate-ping" style={{ animationDuration: '2.5s' }} />
          <circle cx="440" cy="75" r="2" fill="#ffd54f" className="animate-ping" style={{ animationDuration: '3.1s' }} />
          <circle cx="290" cy="40" r="3" fill="#ffffff" className="animate-ping" style={{ animationDuration: '1.9s' }} />
          <circle cx="350" cy="60" r="2" fill="#f97316" className="animate-ping" style={{ animationDuration: '2.2s' }} />

          {/* 10-Headed Ravan Silhouette with Traditional Royal Crowns */}
          <g fill="#1a0408" stroke="#f59e0b" strokeWidth="1.2">
            {/* 10 Heads Row: 4 left, 1 central king head, 4 right, 1 donkey head on top */}
            {/* Top symbolic head */}
            <path d="M 290 85 C 290 75, 310 75, 310 85 C 310 93, 290 93, 290 85 Z" />
            
            {/* Center Royal Crown & Head (Dashanana) */}
            <polygon points="300,70 286,95 314,95" fill="#d97706" />
            <circle cx="300" cy="85" r="2" fill="#fef08a" />
            <path d="M 284 98 C 284 88, 316 88, 316 98 C 316 115, 284 115, 284 98 Z" />
            {/* Royal Mustache */}
            <path d="M 290 106 C 295 103, 305 103, 310 106 C 305 109, 295 109, 290 106 Z" fill="#f59e0b" />

            {/* Left 4 Heads with Crowns */}
            {[-1, -2, -3, -4].map((idx) => {
              const cx = 300 + idx * 28;
              const cy = 100 + Math.abs(idx) * 4;
              return (
                <g key={idx}>
                  <polygon points={`${cx},${cy - 20} ${cx - 9},${cy - 5} ${cx + 9},${cy - 5}`} fill="#b45309" />
                  <path d={`M ${cx - 10} ${cy} C ${cx - 10} ${cy - 8}, ${cx + 10} ${cy - 8}, ${cx + 10} ${cy} C ${cx + 10} ${cy + 12}, ${cx - 10} ${cy + 12}, ${cx - 10} ${cy} Z`} />
                </g>
              );
            })}

            {/* Right 4 Heads with Crowns */}
            {[1, 2, 3, 4].map((idx) => {
              const cx = 300 + idx * 28;
              const cy = 100 + Math.abs(idx) * 4;
              return (
                <g key={idx}>
                  <polygon points={`${cx},${cy - 20} ${cx - 9},${cy - 5} ${cx + 9},${cy - 5}`} fill="#b45309" />
                  <path d={`M ${cx - 10} ${cy} C ${cx - 10} ${cy - 8}, ${cx + 10} ${cy - 8}, ${cx + 10} ${cy} C ${cx + 10} ${cy + 12}, ${cx - 10} ${cy + 12}, ${cx - 10} ${cy} Z`} />
                </g>
              );
            })}

            {/* Powerful Broad Shoulders & Royal Festive Robes (Vastra) */}
            <path d="M 170 145 C 220 125, 380 125, 430 145 L 450 250 C 350 270, 250 270, 150 250 Z" fill="#2d050c" stroke="#d97706" strokeWidth="1.5" />
            
            {/* Royal Gold Chest Armor (Kavach) */}
            <path d="M 270 140 L 330 140 L 320 200 L 280 200 Z" fill="#9a3412" stroke="#fbbf24" strokeWidth="1.5" />
            <circle cx="300" cy="165" r="12" fill="#d97706" />

            {/* Bow (Dhanush) in Effigy Hand */}
            <path d="M 140 110 C 110 180, 110 240, 140 300" stroke="#f59e0b" strokeWidth="3" fill="none" />
            <line x1="140" y1="110" x2="140" y2="300" stroke="#fef08a" strokeWidth="1" strokeDasharray="3 3" />
            {/* Sword (Chandrahas) on right */}
            <line x1="460" y1="120" x2="480" y2="280" stroke="#eab308" strokeWidth="3" />
            <line x1="450" y1="260" x2="490" y2="260" stroke="#f59e0b" strokeWidth="3" />
          </g>
        </svg>
      </div>

      {/* 3. Magnificent Indian Temple-Inspired Arch (Torana / Mandap) Framing Viewport */}
      {/* Top Intricate Golden Carved Arch */}
      <div className="absolute top-0 inset-x-0 h-16 sm:h-24 md:h-32">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full text-amber-500/80 drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]" fill="none">
          <defs>
            <linearGradient id="templeGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fff8b5" />
              <stop offset="30%" stopColor="#f59e0b" />
              <stop offset="70%" stopColor="#b45309" />
              <stop offset="100%" stopColor="#78350f" />
            </linearGradient>
            <pattern id="archFloral" width="40" height="20" patternUnits="userSpaceOnUse">
              <path d="M 0 10 Q 10 0, 20 10 Q 30 20, 40 10" stroke="#fde047" strokeWidth="1.5" fill="none" />
              <circle cx="20" cy="10" r="2" fill="#ea580c" />
            </pattern>
          </defs>

          {/* Top Structural Carved Band */}
          <rect x="0" y="0" width="1200" height="14" fill="#3b080e" stroke="url(#templeGoldGrad)" strokeWidth="1.5" />
          <rect x="0" y="14" width="1200" height="10" fill="url(#archFloral)" />
          
          {/* Cusped Indian Palace / Mandap Arch Outline */}
          <path
            d="M 0 24 
               L 180 24 
               C 240 24, 270 55, 340 55 
               C 420 55, 460 30, 530 30 
               C 570 30, 580 48, 600 52 
               C 620 48, 630 30, 670 30 
               C 740 30, 780 55, 860 55 
               C 930 55, 960 24, 1020 24 
               L 1200 24 
               L 1200 0 
               L 0 0 Z"
            fill="#280509"
            stroke="url(#templeGoldGrad)"
            strokeWidth="2.5"
          />

          {/* Hanging Bell (Ghanti) Carvings & Lotus Buds */}
          {[220, 340, 470, 600, 730, 860, 980].map((cx, idx) => (
            <g key={idx} transform={`translate(${cx}, 42)`}>
              <line x1="0" y1="0" x2="0" y2="16" stroke="#f59e0b" strokeWidth="1.5" />
              {/* Temple Bell */}
              <path d="M -5 16 C -6 24, -9 26, -10 28 L 10 28 C 9 26, 6 24, 5 16 Z" fill="url(#templeGoldGrad)" stroke="#78350f" strokeWidth="1" />
              <circle cx="0" cy="30" r="2" fill="#fef08a" />
            </g>
          ))}
        </svg>
      </div>

      {/* 4. Traditional Marigold Flower Garlands (Genda Phool) & Mango Leaves Hanging from Upper Corners */}
      {/* Left Hanging Marigold Garland */}
      <div className="absolute top-0 left-0 w-36 sm:w-56 md:w-72 h-48 sm:h-64 pointer-events-none">
        <svg viewBox="0 0 240 220" className="w-full h-full drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]" fill="none">
          {/* Swag 1: Top Marigold Curve */}
          <path d="M 0 20 Q 80 50, 160 20" stroke="#f97316" strokeWidth="14" strokeLinecap="round" strokeDasharray="3 14" />
          <path d="M 0 20 Q 80 50, 160 20" stroke="#eab308" strokeWidth="12" strokeLinecap="round" strokeDasharray="3 14" strokeDashoffset="7" />
          
          {/* Swag 2: Deeper Marigold Curve */}
          <path d="M 0 50 Q 70 120, 140 40" stroke="#ea580c" strokeWidth="15" strokeLinecap="round" strokeDasharray="3 15" />
          <path d="M 0 50 Q 70 120, 140 40" stroke="#facc15" strokeWidth="12" strokeLinecap="round" strokeDasharray="3 15" strokeDashoffset="7" />
          
          {/* Mango Leaves (Toran) */}
          {[25, 60, 95, 130].map((x, i) => (
            <path
              key={i}
              d={`M ${x} ${30 + i * 2} C ${x - 5} ${45 + i * 4}, ${x - 4} ${60 + i * 4}, ${x} ${70 + i * 4} C ${x + 4} ${60 + i * 4}, ${x + 5} ${45 + i * 4}, ${x} ${30 + i * 2} Z`}
              fill="#15803d"
              stroke="#14532d"
              strokeWidth="0.8"
            />
          ))}

          {/* Vertical Hanging Flower Tassels */}
          <line x1="20" y1="20" x2="20" y2="180" stroke="#f97316" strokeWidth="10" strokeDasharray="2 12" strokeLinecap="round" />
          <line x1="20" y1="20" x2="20" y2="180" stroke="#fde047" strokeWidth="8" strokeDasharray="2 12" strokeDashoffset="6" strokeLinecap="round" />
          
          <line x1="55" y1="50" x2="55" y2="140" stroke="#ea580c" strokeWidth="9" strokeDasharray="2 12" strokeLinecap="round" />
          <line x1="55" y1="50" x2="55" y2="140" stroke="#facc15" strokeWidth="7" strokeDasharray="2 12" strokeDashoffset="6" strokeLinecap="round" />
          
          {/* Hanging Bell at tip */}
          <circle cx="20" cy="188" r="7" fill="#f59e0b" stroke="#78350f" strokeWidth="1.5" />
          <circle cx="55" cy="148" r="6" fill="#f59e0b" stroke="#78350f" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Right Hanging Marigold Garland */}
      <div className="absolute top-0 right-0 w-36 sm:w-56 md:w-72 h-48 sm:h-64 pointer-events-none transform -scale-x-100">
        <svg viewBox="0 0 240 220" className="w-full h-full drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]" fill="none">
          <path d="M 0 20 Q 80 50, 160 20" stroke="#f97316" strokeWidth="14" strokeLinecap="round" strokeDasharray="3 14" />
          <path d="M 0 20 Q 80 50, 160 20" stroke="#eab308" strokeWidth="12" strokeLinecap="round" strokeDasharray="3 14" strokeDashoffset="7" />
          <path d="M 0 50 Q 70 120, 140 40" stroke="#ea580c" strokeWidth="15" strokeLinecap="round" strokeDasharray="3 15" />
          <path d="M 0 50 Q 70 120, 140 40" stroke="#facc15" strokeWidth="12" strokeLinecap="round" strokeDasharray="3 15" strokeDashoffset="7" />
          
          {[25, 60, 95, 130].map((x, i) => (
            <path
              key={i}
              d={`M ${x} ${30 + i * 2} C ${x - 5} ${45 + i * 4}, ${x - 4} ${60 + i * 4}, ${x} ${70 + i * 4} C ${x + 4} ${60 + i * 4}, ${x + 5} ${45 + i * 4}, ${x} ${30 + i * 2} Z`}
              fill="#15803d"
              stroke="#14532d"
              strokeWidth="0.8"
            />
          ))}

          <line x1="20" y1="20" x2="20" y2="180" stroke="#f97316" strokeWidth="10" strokeDasharray="2 12" strokeLinecap="round" />
          <line x1="20" y1="20" x2="20" y2="180" stroke="#fde047" strokeWidth="8" strokeDasharray="2 12" strokeDashoffset="6" strokeLinecap="round" />
          <line x1="55" y1="50" x2="55" y2="140" stroke="#ea580c" strokeWidth="9" strokeDasharray="2 12" strokeLinecap="round" />
          <line x1="55" y1="50" x2="55" y2="140" stroke="#facc15" strokeWidth="7" strokeDasharray="2 12" strokeDashoffset="6" strokeLinecap="round" />

          <circle cx="20" cy="188" r="7" fill="#f59e0b" stroke="#78350f" strokeWidth="1.5" />
          <circle cx="55" cy="148" r="6" fill="#f59e0b" stroke="#78350f" strokeWidth="1.5" />
        </svg>
      </div>

      {/* 5. Left & Right Carved Indian Temple Pillars with Torches */}
      <div className="hidden lg:block absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#2a060b] to-transparent border-r border-amber-600/30 opacity-70">
        <div className="h-full w-full flex flex-col justify-between py-12 items-center">
          <DiyaFlame size="sm" />
          <DiyaFlame size="sm" />
          <DiyaFlame size="sm" />
        </div>
      </div>
      <div className="hidden lg:block absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#2a060b] to-transparent border-l border-amber-600/30 opacity-70">
        <div className="h-full w-full flex flex-col justify-between py-12 items-center">
          <DiyaFlame size="sm" />
          <DiyaFlame size="sm" />
          <DiyaFlame size="sm" />
        </div>
      </div>

      {/* 6. Cinematic Ramleela Festive Stage & Carpet at the Bottom with Glowing Diyas */}
      <div className="absolute bottom-0 inset-x-0 h-14 sm:h-20 bg-gradient-to-t from-[#200407] via-[#2f060b] to-transparent border-t border-amber-500/40">
        {/* Ornate Gold Border Runner */}
        <div className="w-full h-1.5 bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-600 opacity-80" />
        
        {/* Row of Glowing Clay Diyas along the festive stage */}
        <div className="max-w-6xl mx-auto h-full flex items-center justify-between px-4 sm:px-12 md:px-20">
          <DiyaFlame size="md" />
          <DiyaFlame size="sm" className="hidden sm:flex" />
          <DiyaFlame size="md" />
          <DiyaFlame size="sm" className="hidden md:flex" />
          <DiyaFlame size="lg" />
          <DiyaFlame size="sm" className="hidden md:flex" />
          <DiyaFlame size="md" />
          <DiyaFlame size="sm" className="hidden sm:flex" />
          <DiyaFlame size="md" />
        </div>
      </div>
    </div>
  );
};
