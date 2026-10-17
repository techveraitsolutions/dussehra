import React, { useState, useEffect } from 'react';
import { Lottery3DScene } from './components/Lottery3DScene';
import { FestiveBackground } from './components/FestiveBackground';
import { MarigoldPetals } from './components/MarigoldPetals';
import { FestiveEmblem } from './components/FestiveEmblem';
import { CountdownCard } from './components/CountdownCard';
import { DiyaFlame } from './components/DiyaFlame';
import { HeaderBar } from './components/HeaderBar';
import { useCountdown } from './hooks/useCountdown';
import { soundEngine } from './utils/audio';
import { triggerFestiveFireworks } from './components/CelebrationEffects';

export default function App() {
  const countdown = useCountdown();
  const [isSoundActive, setIsSoundActive] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);

  // Check prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setReducedMotion(true);
    }
  }, []);

  // Cinematic page-load reveal sequence
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRevealed(true);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  // Periodic celebratory fireworks in background
  useEffect(() => {
    if (reducedMotion) return;
    const interval = setInterval(() => {
      triggerFestiveFireworks();
    }, 38000);
    return () => clearInterval(interval);
  }, [reducedMotion]);

  const handleToggleSound = () => {
    const newState = soundEngine.toggleSound(!isSoundActive);
    setIsSoundActive(newState);
  };

  const handleToggleMotion = () => {
    setReducedMotion(prev => !prev);
  };

  return (
    <div className="relative min-h-screen w-full bg-[#180306] text-white flex flex-col justify-between overflow-x-hidden selection:bg-amber-500 selection:text-black">
      
      {/* 1. Cinematic Initial Light Reveal Layer */}
      <div
        className={`fixed inset-0 pointer-events-none z-50 transition-opacity duration-1000 ${
          isRevealed ? 'opacity-0' : 'opacity-100 bg-[#140205]'
        }`}
      />

      {/* 2. Indian Dussehra Layered Background (Temple Arch, Ravan Effigy Silhouette, Diyas & Stage) */}
      <FestiveBackground />

      {/* 3. Falling Marigold Flower Petals (Genda Phool) */}
      <MarigoldPetals count={30} reducedMotion={reducedMotion} />

      {/* 4. Three.js 3D Auspicious Festive Lottery Scene (Decorative) */}
      <Lottery3DScene reducedMotion={reducedMotion} />

      {/* 5. Top Header Bar (Dussehra Maroon & Brass Styling) */}
      <HeaderBar
        isSoundActive={isSoundActive}
        onToggleSound={handleToggleSound}
        reducedMotion={reducedMotion}
        onToggleMotion={handleToggleMotion}
      />

      {/* 6. Main Centerpiece (Hero Stage) */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-2 sm:py-4 text-center max-w-6xl mx-auto w-full">
        
        {/* Step 1: Dussehra Royal Emblem (Surya Mandala, Kodanda Dhanush & Divya Arrow) */}
        <div
          className={`transition-all duration-700 transform ${
            isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <FestiveEmblem />
        </div>

        {/* Step 2 & 3: Royal Dussehra Title inside Traditional Indian Ornamental Jharokha Frame */}
        <div className="relative mt-2 sm:mt-3 max-w-4xl w-full px-2 sm:px-8 py-3 sm:py-5 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#2d070b]/75 via-[#1e0307]/85 to-[#2d070b]/75 border-2 border-amber-500/40 backdrop-blur-sm shadow-[0_15px_40px_rgba(0,0,0,0.85)]">
          
          {/* Ornate Gold Corner Filigrees on Frame */}
          <div className="absolute top-2 left-2 w-5 sm:w-7 h-5 sm:h-7 border-t-2 border-l-2 border-amber-400 rounded-tl-md pointer-events-none" />
          <div className="absolute top-2 right-2 w-5 sm:w-7 h-5 sm:h-7 border-t-2 border-r-2 border-amber-400 rounded-tr-md pointer-events-none" />
          <div className="absolute bottom-2 left-2 w-5 sm:w-7 h-5 sm:h-7 border-b-2 border-l-2 border-amber-400 rounded-bl-md pointer-events-none" />
          <div className="absolute bottom-2 right-2 w-5 sm:w-7 h-5 sm:h-7 border-b-2 border-r-2 border-amber-400 rounded-br-md pointer-events-none" />

          {/* Glowing Diyas flanking the Title */}
          <div className="hidden sm:block absolute left-3 top-1/2 -translate-y-1/2">
            <DiyaFlame size="md" />
          </div>
          <div className="hidden sm:block absolute right-3 top-1/2 -translate-y-1/2">
            <DiyaFlame size="md" />
          </div>

          {/* Heading 1: "DUSSEHRA" in Royal Festive Gold & Saffron */}
          <div
            className={`transition-all duration-700 delay-100 transform ${
              isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            <h1 className="font-decorative font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[0.16em] sm:tracking-[0.22em] text-royal-dussehra uppercase">
              DUSSEHRA
            </h1>
          </div>

          {/* Heading 2: "LUCKY WINNER" (Main Attraction with 3D Antique Gold Extrusion) */}
          <div
            className={`mt-0 sm:mt-1 transition-all duration-1000 delay-200 transform ${
              isRevealed ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <h2 className="font-cinzel font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.08em] sm:tracking-[0.12em] lucky-winner-3d uppercase">
              LUCKY WINNER
            </h2>
          </div>

          {/* Festive Marigold & Gold Beaded Accent Line */}
          <div className="flex items-center justify-center gap-2 mt-2 sm:mt-3 max-w-sm mx-auto opacity-90">
            <div className="h-[1.5px] flex-1 bg-gradient-to-r from-transparent via-amber-500 to-yellow-400" />
            <span className="text-amber-400 text-xs">🪔</span>
            <div className="w-2 h-2 rotate-45 bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.9)]" />
            <span className="text-amber-400 text-xs">🪔</span>
            <div className="h-[1.5px] flex-1 bg-gradient-to-l from-transparent via-amber-500 to-yellow-400" />
          </div>
        </div>

        {/* Step 4 & 5: "WINNER ANNOUNCED ON" + "20 OCTOBER 2026 • 10:00 PM IST" */}
        <div
          className={`mt-3 sm:mt-4 space-y-1 sm:space-y-1.5 transition-all duration-700 delay-300 transform ${
            isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="font-cinzel text-xs sm:text-sm tracking-[0.32em] text-amber-300 font-bold uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
            WINNER ANNOUNCED ON
          </p>
          <div className="inline-block px-5 sm:px-8 py-1.5 sm:py-2 rounded-xl bg-gradient-to-r from-[#3b080e]/90 via-[#4f0c15]/95 to-[#3b080e]/90 border border-amber-400/60 shadow-[0_6px_25px_rgba(0,0,0,0.7)]">
            <p className="font-cinzel font-bold text-base sm:text-xl md:text-2xl tracking-widest text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]">
              20 OCTOBER 2026 <span className="text-amber-400 mx-1 sm:mx-2">•</span> 10:00 PM IST
            </p>
          </div>

          {/* Required Below Date: "VICTORY OF GOOD OVER EVIL • CELEBRATION OF FORTUNE" */}
          <div className="pt-1">
            <p className="font-cinzel text-[11px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.26em] text-amber-200/95 font-semibold uppercase text-gold-glow">
              VICTORY OF GOOD OVER EVIL • CELEBRATION OF FORTUNE
            </p>
          </div>
        </div>

        {/* Step 6: Live Real-Time Countdown in Royal Maroon & Brass Cards */}
        <div
          className={`mt-4 sm:mt-5 w-full max-w-4xl transition-all duration-1000 delay-400 transform ${
            isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          {/* Required Above Timer: "THE GRAND DUSSEHRA REVEAL" */}
          <div className="mb-2.5 sm:mb-3 flex items-center justify-center gap-2">
            <span className="w-8 sm:w-14 h-[1.5px] bg-gradient-to-r from-transparent to-amber-400" />
            <span className="font-cinzel text-xs sm:text-sm tracking-[0.28em] text-amber-300 font-bold uppercase drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
              THE GRAND DUSSEHRA REVEAL
            </span>
            <span className="w-8 sm:w-14 h-[1.5px] bg-gradient-to-l from-transparent to-amber-400" />
          </div>

          {/* If the target time has arrived */}
          {countdown.isArrived ? (
            <div className="py-8 px-6 rounded-2xl bg-gradient-to-r from-[#4a0812]/90 via-[#680b19]/90 to-[#4a0812]/90 border-2 border-amber-400 shadow-[0_0_50px_rgba(245,158,11,0.6)]">
              <p className="font-cinzel font-black text-2xl sm:text-4xl text-metallic-gold tracking-widest animate-pulse">
                THE ANNOUNCEMENT TIME HAS ARRIVED.
              </p>
              <p className="font-outfit text-amber-200 text-sm sm:text-base mt-2">
                The Dussehra Lucky Winner announcement is now live.
              </p>
            </div>
          ) : (
            /* Four-Part Animated Countdown Cards */
            <div className="relative">
              {/* Subtle Diya illumination around countdown */}
              <div className="grid grid-cols-4 gap-2.5 sm:gap-4 md:gap-6 lg:gap-8 justify-center items-center">
                <CountdownCard value={countdown.days} label="DAYS" />
                <CountdownCard value={countdown.hours} label="HOURS" />
                <CountdownCard value={countdown.minutes} label="MINUTES" />
                <CountdownCard value={countdown.seconds} label="SECONDS" />
              </div>
            </div>
          )}

          {/* Subtitle Below Timer */}
          <p className="mt-3 sm:mt-3.5 font-outfit text-xs sm:text-sm text-amber-200/80 font-normal tracking-wide">
            Every second brings us closer to the big moment.
          </p>
        </div>

        {/* Step 7: Supporting Dussehra Message Card */}
        <div
          className={`mt-4 sm:mt-5 max-w-xl mx-auto px-5 py-2.5 sm:py-3 rounded-2xl bg-[#28050a]/85 backdrop-blur-md border border-amber-500/35 shadow-[0_8px_25px_rgba(0,0,0,0.6)] transition-all duration-1000 delay-500 transform ${
            isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="font-cinzel text-xs sm:text-sm font-bold tracking-[0.24em] text-amber-300 uppercase">
            THE WAIT IS ALMOST OVER
          </p>
          <p className="font-outfit text-xs sm:text-sm text-amber-100/90 mt-1 font-normal tracking-wide">
            One Lucky Winner. One Big Moment. The Celebration Begins Soon!
          </p>
        </div>

      </main>

      {/* 7. Bottom Elegant Dussehra Message & Footer */}
      <footer className="relative z-10 w-full px-4 pt-2 pb-6 sm:pb-7 flex flex-col items-center justify-center space-y-1.5 text-center pointer-events-auto">
        <div className="flex items-center justify-center gap-2 text-amber-300 text-xs sm:text-sm font-cinzel font-semibold tracking-[0.24em] uppercase text-gold-glow">
          <span>✨ FESTIVAL OF FORTUNE • MOMENT OF CELEBRATION ✨</span>
        </div>

        <div className="text-amber-400/60 text-[11px] sm:text-xs font-outfit tracking-wider">
          Dussehra Lucky Winner | Official Announcement Countdown
        </div>
      </footer>
    </div>
  );
}
