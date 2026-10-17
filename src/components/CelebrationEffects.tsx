import confetti from 'canvas-confetti';

/**
 * Fires a spectacular Dussehra golden celebratory fireworks burst
 */
export const triggerFestiveFireworks = () => {
  const goldColors = ['#ffd700', '#f59e0b', '#fbbf24', '#ffffff', '#dc2626', '#f97316'];

  // Left cannon burst
  confetti({
    particleCount: 60,
    angle: 60,
    spread: 75,
    origin: { x: 0.1, y: 0.75 },
    colors: goldColors,
    ticks: 200,
    gravity: 0.8,
    shapes: ['circle', 'square'],
    scalar: 1.1,
  });

  // Right cannon burst
  confetti({
    particleCount: 60,
    angle: 120,
    spread: 75,
    origin: { x: 0.9, y: 0.75 },
    colors: goldColors,
    ticks: 200,
    gravity: 0.8,
    shapes: ['circle', 'square'],
    scalar: 1.1,
  });

  // Center golden starburst
  setTimeout(() => {
    confetti({
      particleCount: 75,
      spread: 100,
      origin: { x: 0.5, y: 0.4 },
      colors: ['#ffe066', '#f59e0b', '#ffffff', '#e11d48'],
      ticks: 220,
      gravity: 0.6,
      scalar: 1.25,
    });
  }, 300);
};
