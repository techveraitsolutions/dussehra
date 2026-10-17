/**
 * Procedural Web Audio API sound generator for Dussehra Lucky Winner.
 * Zero external audio files, zero 404 dependencies.
 * Default is strictly silent until user explicitly toggles sound on.
 */

class CelebrationSoundEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = true;
  private masterGain: GainNode | null = null;
  private droneNodes: OscillatorNode[] = [];
  private droneGain: GainNode | null = null;
  private chimeTimer: ReturnType<typeof setInterval> | null = null;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.35, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public toggleSound(enabled: boolean): boolean {
    this.isMuted = !enabled;
    if (enabled) {
      this.initContext();
      this.startAmbient();
      this.playGentleChime(587.33); // D5 golden note
    } else {
      this.stopAmbient();
    }
    return !this.isMuted;
  }

  public getIsPlaying(): boolean {
    return !this.isMuted;
  }

  private startAmbient() {
    if (!this.ctx || !this.masterGain || this.isMuted) return;

    // Stop existing drone if any
    this.stopAmbient();

    // Drone fundamental in Indian classical tuning (D = 146.83 Hz, A = 220 Hz, D = 293.66 Hz, F# = 369.99 Hz)
    const freqs = [73.42, 146.83, 220.0, 293.66, 440.0];
    this.droneGain = this.ctx.createGain();
    this.droneGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
    this.droneGain.gain.exponentialRampToValueAtTime(0.12, this.ctx.currentTime + 3.0);
    this.droneGain.connect(this.masterGain);

    // Warm low-pass filter
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(450, this.ctx.currentTime);
    filter.Q.setValueAtTime(2.5, this.ctx.currentTime);
    this.droneGain.disconnect();
    this.droneGain.connect(filter);
    filter.connect(this.masterGain);

    freqs.forEach((freq, idx) => {
      if (!this.ctx || !this.droneGain) return;
      const osc = this.ctx.createOscillator();
      const oscGain = this.ctx.createGain();
      
      // Warm blend of sine and triangle
      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq + (Math.random() - 0.5) * 0.8, this.ctx.currentTime);

      // Gentle LFO for warm breathing swell
      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      lfo.frequency.setValueAtTime(0.15 + idx * 0.04, this.ctx.currentTime);
      lfoGain.gain.setValueAtTime(0.02, this.ctx.currentTime);
      lfo.connect(oscGain.gain);
      lfo.start();

      oscGain.gain.setValueAtTime(0.06 / (idx + 1), this.ctx.currentTime);
      osc.connect(oscGain);
      oscGain.connect(this.droneGain);
      osc.start();
      this.droneNodes.push(osc);
    });

    // Schedule periodic ethereal golden chimes every 5-9 seconds
    this.chimeTimer = setInterval(() => {
      if (!this.isMuted && this.ctx) {
        // Pentatonic golden scale notes (D, E, F#, A, B, D)
        const scale = [293.66, 329.63, 369.99, 440.0, 493.88, 587.33, 659.25, 739.99, 880.0];
        const randomNote = scale[Math.floor(Math.random() * scale.length)];
        this.playGentleChime(randomNote, 0.08);
      }
    }, 6500);
  }

  private stopAmbient() {
    if (this.chimeTimer) {
      clearInterval(this.chimeTimer);
      this.chimeTimer = null;
    }
    if (this.droneGain && this.ctx) {
      try {
        this.droneGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.8);
      } catch {
        // Safe catch
      }
    }
    setTimeout(() => {
      this.droneNodes.forEach(node => {
        try { node.stop(); node.disconnect(); } catch {}
      });
      this.droneNodes = [];
    }, 900);
  }

  public playGentleChime(freq: number = 587.33, gainMultiplier: number = 0.15) {
    if (this.isMuted || !this.ctx || !this.masterGain) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);
      // Subtle pitch drift like bell strike
      osc.frequency.exponentialRampToValueAtTime(freq * 0.998, now + 1.8);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(gainMultiplier, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.5);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 2.6);
    } catch {
      // Audio error safe ignore
    }
  }

  public playCelebrationFanfare() {
    if (this.isMuted || !this.ctx || !this.masterGain) return;
    try {
      const chords = [
        [293.66, 369.99, 440.0, 587.33], // D Major
        [369.99, 440.0, 587.33, 739.99], // D / F#
        [440.0, 587.33, 739.99, 880.0],  // High celebration
      ];

      chords.forEach((chord, step) => {
        setTimeout(() => {
          if (!this.ctx || !this.masterGain) return;
          chord.forEach(freq => {
            this.playGentleChime(freq, 0.12);
          });
        }, step * 220);
      });
    } catch {
      // Audio error safe ignore
    }
  }

  public playClickBeep() {
    if (this.isMuted || !this.ctx || !this.masterGain) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(880, now);
      osc.frequency.exponentialRampToValueAtTime(440, now + 0.08);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(now);
      osc.stop(now + 0.09);
    } catch {}
  }
}

export const soundEngine = new CelebrationSoundEngine();
