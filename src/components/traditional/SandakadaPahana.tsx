import React from "react";

interface SandakadaPahanaProps {
  className?: string;
  size?: number | string;
}

/**
 * 100% Original Vector Representation of Sandakada Pahana (Sacred Moonstone)
 * Ancient Sri Lankan architectural masterpiece representing auspicious beginnings and spiritual harmony.
 */
export const SandakadaPahana: React.FC<SandakadaPahanaProps> = ({
  className = "",
  size = 320,
}) => {
  return (
    <svg
      width={size}
      height={typeof size === "number" ? size * 0.55 : "auto"}
      viewBox="0 0 500 270"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none mx-auto ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="moonstoneGold" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#8C6615" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#FFF4D0" />
        </linearGradient>
      </defs>

      {/* Outer Flame Band (ගිනි දැල් පටිය) */}
      <path
        d="M 20 260 C 20 130 120 20 250 20 C 380 20 480 130 480 260"
        stroke="url(#moonstoneGold)"
        strokeWidth="3"
        fill="none"
      />
      {Array.from({ length: 25 }).map((_, i) => {
        const angle = (Math.PI / 24) * i;
        const cx = 250 - 240 * Math.cos(angle);
        const cy = 260 - 240 * Math.sin(angle);
        return (
          <circle
            key={`flame-${i}`}
            cx={cx}
            cy={cy}
            r="3.5"
            fill="url(#moonstoneGold)"
          />
        );
      })}

      {/* Second Arc: Traditional Foliage Liyawel Ring */}
      <path
        d="M 50 260 C 50 150 140 50 250 50 C 360 50 450 150 450 260"
        stroke="url(#moonstoneGold)"
        strokeWidth="1.8"
        strokeDasharray="4 6"
        fill="none"
      />

      {/* Third Arc: Sacred Procession of Swans (හංස පේළිය) */}
      <path
        d="M 80 260 C 80 170 160 85 250 85 C 340 85 420 170 420 260"
        stroke="url(#moonstoneGold)"
        strokeWidth="2"
        fill="none"
      />
      {Array.from({ length: 15 }).map((_, i) => {
        const angle = (Math.PI / 14) * i;
        const x = 250 - 150 * Math.cos(angle);
        const y = 260 - 150 * Math.sin(angle);
        return (
          <g key={`swan-bead-${i}`} transform={`translate(${x}, ${y})`}>
            <circle cx="0" cy="0" r="4.5" fill="url(#moonstoneGold)" />
            <circle cx="0" cy="0" r="1.5" fill="#FFF4D0" />
          </g>
        );
      })}

      {/* Fourth Arc: Inner Lotus Petal Ring (නෙළුම් පෙති පටිය) */}
      <path
        d="M 120 260 C 120 190 180 125 250 125 C 320 125 380 190 380 260"
        stroke="url(#moonstoneGold)"
        strokeWidth="2"
        fill="none"
      />
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (Math.PI / 11) * i;
        const x = 250 - 110 * Math.cos(angle);
        const y = 260 - 110 * Math.sin(angle);
        return (
          <path
            key={`inner-petal-${i}`}
            d={`M ${x} ${y} C ${x - 6} ${y - 12} ${x + 6} ${y - 12} ${x} ${y}`}
            stroke="url(#moonstoneGold)"
            strokeWidth="1.5"
            fill="rgba(212, 175, 55, 0.2)"
          />
        );
      })}

      {/* Core Half-Lotus (කේන්ද්‍රීය අඩ නෙළුම) */}
      <path
        d="M 190 260 C 190 225 215 200 250 200 C 285 200 310 225 310 260 Z"
        fill="url(#moonstoneGold)"
        opacity="0.9"
      />
      <circle cx="250" cy="260" r="25" fill="#FFF4D0" />
      <line x1="20" y1="260" x2="480" y2="260" stroke="url(#moonstoneGold)" strokeWidth="3" />
    </svg>
  );
};
