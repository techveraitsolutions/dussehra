import React, { useMemo } from 'react';

interface MarigoldPetalsProps {
  count?: number;
  reducedMotion?: boolean;
}

export const MarigoldPetals: React.FC<MarigoldPetalsProps> = ({ count = 28, reducedMotion = false }) => {
  if (reducedMotion) return null;

  const petals = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 10 + Math.random() * 14,
      duration: 10 + Math.random() * 16,
      delay: Math.random() * 12,
      rotation: Math.random() * 360,
      colorType: i % 3 === 0 ? '#f97316' : i % 3 === 1 ? '#eab308' : '#ea580c',
      swayAmount: 30 + Math.random() * 50,
    }));
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden" aria-hidden="true">
      {petals.map(petal => (
        <div
          key={petal.id}
          className="absolute -top-8"
          style={{
            left: `${petal.left}%`,
            width: `${petal.size}px`,
            height: `${petal.size * 1.3}px`,
            animation: `petalFall ${petal.duration}s linear infinite`,
            animationDelay: `${petal.delay}s`,
          }}
        >
          {/* Marigold Petal Shape */}
          <svg
            viewBox="0 0 24 32"
            className="w-full h-full opacity-80 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
            style={{
              transform: `rotate(${petal.rotation}deg)`,
            }}
          >
            <path
              d="M 12 0 C 18 6, 24 16, 20 26 C 16 32, 8 32, 4 26 C 0 16, 6 6, 12 0 Z"
              fill={petal.colorType}
            />
            {/* Inner Petal Vein / Glow */}
            <path
              d="M 12 3 C 15 10, 16 20, 12 28"
              stroke="#fef08a"
              strokeWidth="1.2"
              strokeLinecap="round"
              opacity="0.6"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};
