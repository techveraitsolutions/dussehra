import React from 'react';

export const FestiveEmblem: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 select-none">
      {/* Royal Dussehra Victory Emblem (Lord Rama's Vijayadashami Bow & Radiant Arrow) */}
      <div className="relative w-16 h-16 sm:w-22 sm:h-22 flex items-center justify-center">
        {/* Ambient Saffron Aura */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-600/30 via-amber-500/40 to-yellow-500/30 blur-lg animate-pulse-glow" />
        
        {/* Rotating Sacred Surya Mandala */}
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full animate-rotate-slow text-amber-400 drop-shadow-[0_0_12px_rgba(245,158,11,0.8)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Beaded Sun Ring */}
          <circle cx="50" cy="50" r="46" stroke="#fef08a" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.7" />
          <circle cx="50" cy="50" r="41" stroke="#f59e0b" strokeWidth="1.4" opacity="0.9" />
          
          {/* 16 Sacred Lotus Petals */}
          {Array.from({ length: 16 }).map((_, i) => (
            <path
              key={i}
              d="M 50 8 C 54 20, 54 26, 50 32 C 46 26, 46 20, 50 8 Z"
              fill="url(#emblemGoldGrad)"
              transform={`rotate(${i * 22.5} 50 50)`}
              opacity="0.9"
            />
          ))}

          <defs>
            <linearGradient id="emblemGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="30%" stopColor="#fde047" />
              <stop offset="70%" stopColor="#ea580c" />
              <stop offset="100%" stopColor="#991b1b" />
            </linearGradient>
            <linearGradient id="arrowGold" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#fef08a" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
          </defs>
        </svg>

        {/* Center Dussehra Golden Bow & Celestial Arrow (Kodanda Dhanush) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            viewBox="0 0 44 44"
            className="w-9 h-9 sm:w-12 sm:h-12 text-amber-200 drop-shadow-[0_0_10px_rgba(254,240,138,0.95)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Sacred Bow (Dhanush) */}
            <path
              d="M 9 35 C 6 22, 7 13, 22 8 C 37 13, 38 22, 35 35"
              stroke="url(#arrowGold)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Ornamental Bow String (Pratyancha) */}
            <line x1="9" y1="35" x2="35" y2="35" stroke="#fef08a" strokeWidth="1" opacity="0.9" />
            
            {/* Celestial Radiant Arrow (Baan) of Lord Rama */}
            <line x1="22" y1="35" x2="22" y2="3" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />
            
            {/* Arrowhead (Divya Astra) */}
            <polygon points="22,1 17,10 27,10" fill="#fde047" stroke="#ea580c" strokeWidth="0.8" />
            {/* Glowing Gem Medallion */}
            <circle cx="22" cy="22" r="3.2" fill="#fffbeb" stroke="#ea580c" strokeWidth="1" />
            <circle cx="22" cy="22" r="1.5" fill="#dc2626" />
          </svg>
        </div>
      </div>

      {/* Auspicious Dussehra Label */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-red-950/80 via-[#3b080e]/90 to-red-950/80 border border-amber-500/50 shadow-[0_0_20px_rgba(234,88,12,0.35)]">
        <span className="text-amber-300 text-xs sm:text-sm tracking-[0.28em] font-cinzel font-bold uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
          ✨ THE GRAND DRAW ✨
        </span>
      </div>
    </div>
  );
};
