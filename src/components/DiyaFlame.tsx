import React from 'react';

interface DiyaFlameProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const DiyaFlame: React.FC<DiyaFlameProps> = ({ size = 'md', className = '' }) => {
  const sizeMap = {
    sm: { w: 'w-7 sm:w-9', h: 'h-8 sm:h-10', flameH: 'h-4 sm:h-5', flameW: 'w-2.5 sm:w-3' },
    md: { w: 'w-10 sm:w-14', h: 'h-11 sm:h-14', flameH: 'h-6 sm:h-7', flameW: 'w-3.5 sm:w-4' },
    lg: { w: 'w-14 sm:w-18', h: 'h-14 sm:h-18', flameH: 'h-8 sm:h-10', flameW: 'w-5 sm:w-6' },
  };

  const current = sizeMap[size];

  return (
    <div className={`relative flex flex-col items-center justify-end select-none pointer-events-none ${current.w} ${current.h} ${className}`}>
      {/* Diya Ambient Warm Glow */}
      <div className="absolute -top-3 w-12 h-12 rounded-full bg-gradient-to-t from-amber-500/40 via-orange-500/20 to-transparent blur-md" />

      {/* Living Flickering Flame */}
      <div className={`relative z-10 ${current.flameW} ${current.flameH} -mb-1 animate-diya-flame`}>
        {/* Outer Orange/Red Flame Halo */}
        <div className="absolute inset-0 rounded-full rounded-t-full bg-gradient-to-t from-red-600 via-orange-500 to-amber-300 opacity-90 blur-[0.5px]" />
        
        {/* Core Golden Yellow Flame */}
        <div className="absolute inset-x-[15%] bottom-[10%] top-[25%] rounded-full rounded-t-full bg-gradient-to-t from-amber-400 via-yellow-200 to-white" />
        
        {/* White Hot Inner Spark */}
        <div className="absolute inset-x-[30%] bottom-[15%] top-[45%] rounded-full rounded-t-full bg-white opacity-95" />
      </div>

      {/* Traditional Brass / Terracotta Clay Diya (Deepak) Base */}
      <div className="relative z-0 w-full h-4 sm:h-5">
        <svg
          viewBox="0 0 100 45"
          className="w-full h-full drop-shadow-[0_4px_8px_rgba(0,0,0,0.85)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Diya Oil Vessel */}
          <path
            d="M 5 15 C 20 40, 80 40, 95 15 C 80 12, 60 10, 50 18 C 40 10, 20 12, 5 15 Z"
            fill="url(#diyaBrassGrad)"
            stroke="#f59e0b"
            strokeWidth="2"
          />
          {/* Inner Golden Oil Rim */}
          <ellipse cx="50" cy="17" rx="35" ry="7" fill="url(#diyaOilGrad)" opacity="0.9" />
          
          {/* Ornate Engraved Notches */}
          <circle cx="28" cy="22" r="2" fill="#ffd54f" />
          <circle cx="50" cy="26" r="2.5" fill="#ffd54f" />
          <circle cx="72" cy="22" r="2" fill="#ffd54f" />

          {/* Diya Base Stand */}
          <path d="M 38 35 L 62 35 L 56 42 L 44 42 Z" fill="#78350f" stroke="#d97706" strokeWidth="1" />

          <defs>
            <linearGradient id="diyaBrassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="35%" stopColor="#d97706" />
              <stop offset="70%" stopColor="#9a3412" />
              <stop offset="100%" stopColor="#451a03" />
            </linearGradient>
            <linearGradient id="diyaOilGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#78350f" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#78350f" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};
