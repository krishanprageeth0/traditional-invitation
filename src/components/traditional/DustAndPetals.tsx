"use client";

import React, { useMemo } from "react";

export const DustAndPetals: React.FC = () => {
  // Deterministic petal configurations to avoid hydration mismatch
  const petals = useMemo(() => {
    return [
      { id: 1, left: 8, delay: 0, duration: 15, size: 14, rot: 15 },
      { id: 2, left: 18, delay: 5, duration: 18, size: 18, rot: -25 },
      { id: 3, left: 28, delay: 2, duration: 13, size: 12, rot: 40 },
      { id: 4, left: 42, delay: 8, duration: 20, size: 16, rot: -10 },
      { id: 5, left: 54, delay: 3, duration: 16, size: 15, rot: 30 },
      { id: 6, left: 65, delay: 11, duration: 22, size: 13, rot: -45 },
      { id: 7, left: 75, delay: 1, duration: 17, size: 19, rot: 20 },
      { id: 8, left: 88, delay: 6, duration: 19, size: 14, rot: -30 },
      { id: 9, left: 95, delay: 9, duration: 14, size: 16, rot: 15 },
    ];
  }, []);

  const goldDust = useMemo(() => {
    return [
      { id: "d1", left: 12, top: 25, size: 6, delay: 0 },
      { id: "d2", left: 22, top: 60, size: 8, delay: 1.5 },
      { id: "d3", left: 35, top: 40, size: 5, delay: 3 },
      { id: "d4", left: 48, top: 80, size: 7, delay: 2 },
      { id: "d5", left: 60, top: 30, size: 6, delay: 4 },
      { id: "d6", left: 72, top: 70, size: 9, delay: 0.5 },
      { id: "d7", left: 82, top: 20, size: 5, delay: 2.5 },
      { id: "d8", left: 91, top: 55, size: 7, delay: 3.5 },
    ];
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden z-[4] motion-reduce:hidden"
    >
      {/* 1. Falling Delicate White & Golden Jasmine Petals */}
      {petals.map((p) => (
        <span
          key={p.id}
          className="absolute top-0 select-none"
          style={{
            left: `${p.left}%`,
            animation: `petalFall ${p.duration}s linear ${p.delay}s infinite`,
          }}
        >
          {/* Jasmine Petal SVG */}
          <svg
            width={p.size}
            height={p.size * 1.4}
            viewBox="0 0 24 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: `rotate(${p.rot}deg)` }}
          >
            <path
              d="M 12 0 C 20 8 22 24 12 32 C 2 24 4 8 12 0 Z"
              fill="rgba(255, 253, 245, 0.85)"
              stroke="rgba(212, 175, 55, 0.4)"
              strokeWidth="0.8"
            />
            {/* Center vein */}
            <line x1="12" y1="4" x2="12" y2="28" stroke="rgba(212, 175, 55, 0.3)" strokeWidth="0.6" strokeDasharray="2 3" />
          </svg>
        </span>
      ))}

      {/* 2. Floating Golden Radiance Orbs */}
      {goldDust.map((d) => (
        <span
          key={d.id}
          className="absolute rounded-full animate-pulse"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: `${d.size}px`,
            height: `${d.size}px`,
            background: "radial-gradient(circle, #FFF7D6 0%, #D4AF37 60%, rgba(212, 175, 55, 0) 100%)",
            boxShadow: "0 0 8px rgba(212, 175, 55, 0.6)",
            animationDuration: `${3 + d.size}s`,
            animationDelay: `${d.delay}s`,
          }}
        />
      ))}
    </div>
  );
};
