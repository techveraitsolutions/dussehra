import React from 'react';

interface CountdownCardProps {
  value: number;
  label: string;
}

export const CountdownCard: React.FC<CountdownCardProps> = ({ value, label }) => {
  const formattedValue = String(Math.max(0, value)).padStart(2, '0');

  return (
    <div className="flex flex-col items-center">
      {/* Royal Indian Temple Carved Countdown Card */}
      <div className="relative group w-20 sm:w-28 md:w-36 lg:w-44 h-24 sm:h-32 md:h-40 lg:h-48 rounded-xl sm:rounded-2xl transition-all duration-300">
        
        {/* Diya-Inspired Warm Upward Illumination Glow */}
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-t from-orange-600/35 via-amber-600/15 to-transparent blur-md opacity-85 group-hover:opacity-100 transition-opacity" />

        {/* Outer Card Shell with Royal Antique Gold Frame */}
        <div className="relative w-full h-full rounded-xl sm:rounded-2xl p-[1.5px] bg-gradient-to-b from-amber-300/80 via-amber-600/50 to-amber-900/90 shadow-[0_15px_35px_rgba(0,0,0,0.9)]">
          <div className="maroon-royal-card w-full h-full rounded-xl sm:rounded-2xl flex flex-col items-center justify-center overflow-hidden relative">
            
            {/* Top Carved Palace Arch Motif in Card */}
            <div className="absolute top-0 inset-x-0 h-4 sm:h-6 opacity-40 pointer-events-none">
              <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="w-full h-full text-amber-300" fill="none">
                <path d="M 0 0 L 100 0 L 100 8 C 80 16, 20 16, 0 8 Z" fill="currentColor" />
              </svg>
            </div>

            {/* Corner Traditional Indian Brass Filigree Brackets */}
            <div className="absolute top-1.5 left-1.5 w-3.5 h-3.5 border-t-2 border-l-2 border-amber-400/80 rounded-tl-sm pointer-events-none" />
            <div className="absolute top-1.5 right-1.5 w-3.5 h-3.5 border-t-2 border-r-2 border-amber-400/80 rounded-tr-sm pointer-events-none" />
            <div className="absolute bottom-1.5 left-1.5 w-3.5 h-3.5 border-b-2 border-l-2 border-amber-400/60 rounded-bl-sm pointer-events-none" />
            <div className="absolute bottom-1.5 right-1.5 w-3.5 h-3.5 border-b-2 border-r-2 border-amber-400/60 rounded-br-sm pointer-events-none" />

            {/* Center Split Groove with Golden Brass Notch */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] bg-black shadow-[0_1px_1px_rgba(254,240,138,0.3)] z-10">
              <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-2 h-2 rotate-45 bg-amber-400/80" />
            </div>

            {/* Warm Diya Reflection at bottom of card */}
            <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-orange-600/20 to-transparent pointer-events-none" />

            {/* Large Digit Display with Royal 3D Gold Extrusion */}
            <div className="relative z-0 select-none flex items-center justify-center">
              <span
                key={formattedValue}
                className="font-cinzel font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wider text-metallic-gold transition-all duration-300"
              >
                {formattedValue}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Unit Label with Auspicious Golden Diamonds */}
      <div className="mt-2.5 sm:mt-3 flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rotate-45 bg-amber-400 shadow-[0_0_6px_rgba(245,158,11,0.8)]" />
        <span className="font-cinzel text-[11px] sm:text-xs md:text-sm tracking-[0.25em] sm:tracking-[0.3em] font-bold text-amber-200 uppercase text-gold-glow">
          {label}
        </span>
        <span className="w-1.5 h-1.5 rotate-45 bg-amber-400 shadow-[0_0_6px_rgba(245,158,11,0.8)]" />
      </div>
    </div>
  );
};
