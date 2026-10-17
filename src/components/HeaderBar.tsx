import React, { useState } from 'react';
import { Volume2, VolumeX, Calendar, Maximize2, Minimize2, Sparkles, Clock, Check, Download } from 'lucide-react';
import { soundEngine } from '../utils/audio';
import { getGoogleCalendarUrl, downloadIcsFile } from '../utils/calendar';
import { triggerFestiveFireworks } from './CelebrationEffects';

interface HeaderBarProps {
  isSoundActive: boolean;
  onToggleSound: () => void;
  reducedMotion: boolean;
  onToggleMotion: () => void;
}

export const HeaderBar: React.FC<HeaderBarProps> = ({
  isSoundActive,
  onToggleSound,
  reducedMotion,
  onToggleMotion,
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showCalendarMenu, setShowCalendarMenu] = useState(false);
  const [copied, setCopied] = useState(false);

  const toggleFullscreen = () => {
    soundEngine.playClickBeep();
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  const handleFireworks = () => {
    soundEngine.playCelebrationFanfare();
    triggerFestiveFireworks();
  };

  const handleCopyLink = () => {
    soundEngine.playClickBeep();
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="relative z-30 w-full px-4 sm:px-8 py-3 sm:py-4 flex items-center justify-between pointer-events-auto">
      {/* Timezone Status Indicator with Dussehra Maroon & Brass Styling */}
      <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2a060b]/80 backdrop-blur-md border border-amber-500/40 text-xs text-amber-200/90 font-cinzel shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
        <Clock className="w-3.5 h-3.5 text-amber-400" />
        <span className="hidden sm:inline">OFFICIAL TIMEZONE:</span>
        <span className="font-bold text-amber-300">IST (UTC+05:30)</span>
      </div>

      {/* Action Controls */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Celebrate / Fireworks Trigger */}
        <button
          onClick={handleFireworks}
          type="button"
          aria-label="Celebrate with fireworks"
          className="cursor-pointer flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-orange-700/80 via-amber-600/80 to-yellow-600/80 hover:from-orange-600 hover:to-amber-500 border border-amber-300/60 text-white text-xs font-cinzel font-semibold transition-all shadow-[0_0_15px_rgba(245,158,11,0.35)] active:scale-95"
        >
          <Sparkles className="w-3.5 h-3.5 text-yellow-200" />
          <span className="hidden md:inline">Celebrate</span>
        </button>

        {/* Set Reminder Button with Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowCalendarMenu(!showCalendarMenu)}
            type="button"
            aria-label="Set Reminder"
            className="cursor-pointer flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#2a060b]/80 hover:bg-[#3d0910] border border-amber-500/40 text-amber-200 text-xs font-cinzel transition-all active:scale-95 shadow-[0_2px_10px_rgba(0,0,0,0.6)]"
          >
            <Calendar className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">Set Reminder</span>
          </button>

          {showCalendarMenu && (
            <div className="absolute right-0 mt-2 w-60 rounded-xl bg-[#26050a]/95 border border-amber-500/50 shadow-[0_12px_35px_rgba(0,0,0,0.95)] p-2 z-50 text-xs font-cinzel backdrop-blur-lg">
              <div className="px-3 py-1.5 text-[10px] text-amber-400/80 border-b border-amber-500/25 uppercase tracking-wider font-semibold">
                Dussehra Reveal: 20 Oct 2026 10:00 PM IST
              </div>
              <a
                href={getGoogleCalendarUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowCalendarMenu(false)}
                className="flex items-center gap-2 w-full px-3 py-2 text-left text-amber-200 hover:bg-amber-500/20 rounded-lg transition-colors mt-1"
              >
                <span>📅 Google Calendar</span>
              </a>
              <button
                onClick={() => {
                  downloadIcsFile();
                  setShowCalendarMenu(false);
                }}
                className="flex items-center gap-2 w-full px-3 py-2 text-left text-amber-200 hover:bg-amber-500/20 rounded-lg transition-colors"
              >
                <span>📥 Apple / Outlook (.ics)</span>
              </button>
              <button
                onClick={handleCopyLink}
                className="flex items-center gap-2 w-full px-3 py-2 text-left text-amber-200 hover:bg-amber-500/20 rounded-lg transition-colors border-t border-amber-500/20 pt-2"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : null}
                <span>{copied ? 'Link Copied!' : '🔗 Copy Announcement Link'}</span>
              </button>
              <a
                href="/dussehra-lucky-winner.zip"
                download="dussehra-lucky-winner.zip"
                onClick={() => setShowCalendarMenu(false)}
                className="flex items-center gap-2 w-full px-3 py-2 text-left text-amber-300 font-semibold hover:bg-amber-500/20 rounded-lg transition-colors border-t border-amber-500/20 mt-1"
              >
                <Download className="w-3.5 h-3.5 text-amber-400" />
                <span>📦 Download Code (.ZIP)</span>
              </a>
            </div>
          )}
        </div>

        {/* Direct Download ZIP Button */}
        <a
          href="/dussehra-lucky-winner.zip"
          download="dussehra-lucky-winner.zip"
          className="cursor-pointer flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#3b080e]/90 hover:bg-[#520c15] border border-amber-400/60 text-amber-200 text-xs font-cinzel font-semibold transition-all shadow-[0_2px_10px_rgba(0,0,0,0.6)] active:scale-95"
          title="Download complete project source code ZIP"
        >
          <Download className="w-3.5 h-3.5 text-amber-300" />
          <span className="hidden sm:inline">ZIP Code</span>
        </a>

        {/* Audio Toggle (Default Silent) */}
        <button
          onClick={onToggleSound}
          type="button"
          aria-label={isSoundActive ? 'Mute Celebration Sound' : 'Enable Celebration Sound'}
          title={isSoundActive ? 'Mute Celebration Sound' : 'Enable Festive Celebration Sound'}
          className={`cursor-pointer flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border text-xs font-cinzel transition-all active:scale-95 ${
            isSoundActive
              ? 'bg-gradient-to-r from-orange-900/90 to-red-900/90 border-amber-400 text-amber-200 shadow-[0_0_15px_rgba(245,158,11,0.4)]'
              : 'bg-[#2a060b]/80 hover:bg-[#3d0910] border-amber-500/40 text-amber-400/80'
          }`}
        >
          {isSoundActive ? (
            <>
              <Volume2 className="w-3.5 h-3.5 text-amber-300 animate-bounce" />
              <span className="hidden sm:inline">Audio On</span>
            </>
          ) : (
            <>
              <VolumeX className="w-3.5 h-3.5 text-amber-400/60" />
              <span className="hidden sm:inline">Sound</span>
            </>
          )}
        </button>

        {/* Fullscreen Button */}
        <button
          onClick={toggleFullscreen}
          type="button"
          aria-label={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
          className="cursor-pointer p-2 rounded-full bg-[#2a060b]/80 hover:bg-[#3d0910] border border-amber-500/40 text-amber-300 hover:text-amber-100 transition-all active:scale-95 hidden sm:flex"
        >
          {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
        </button>

        {/* Motion Preference Toggle */}
        <button
          onClick={onToggleMotion}
          type="button"
          aria-label="Toggle motion effects"
          title={reducedMotion ? 'Enable Full 3D Motion' : 'Reduce Motion'}
          className={`cursor-pointer px-2.5 py-1.5 rounded-full text-[10px] font-cinzel border transition-all ${
            reducedMotion
              ? 'bg-[#4a0812] border-amber-500/60 text-amber-300'
              : 'bg-[#2a060b]/60 border-amber-500/25 text-amber-400/60 hover:text-amber-300'
          }`}
        >
          {reducedMotion ? 'Static' : '3D FX'}
        </button>
      </div>
    </header>
  );
};
