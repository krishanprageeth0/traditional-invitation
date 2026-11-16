import React from "react";

interface PunkalasaProps {
  className?: string;
  size?: number | string;
}

/**
 * 100% Original Vector Representation of Punkalasa (Pot of Abundance)
 * Sacred Sri Lankan symbol of fertility, prosperity, and blessings for the new family.
 */
export const Punkalasa: React.FC<PunkalasaProps> = ({
  className = "",
  size = 140,
}) => {
  return (
    <svg
      width={size}
      height={typeof size === "number" ? size * 1.15 : "auto"}
      viewBox="0 0 240 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none mx-auto ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="punkalasaGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF2D1" />
          <stop offset="30%" stopColor="#E2BD68" />
          <stop offset="70%" stopColor="#B98A2F" />
          <stop offset="100%" stopColor="#7E5616" />
        </linearGradient>
      </defs>

      {/* COCONUT FLOWER SPIKES & BLOOMS (පොල් මල) */}
      <g stroke="url(#punkalasaGold)" strokeWidth="2" strokeLinecap="round">
        {/* Central Top Spikes */}
        <line x1="120" y1="95" x2="120" y2="20" strokeWidth="2.5" />
        <circle cx="120" cy="18" r="3.5" fill="#FFF2D1" />
        <line x1="120" y1="95" x2="95" y2="35" />
        <circle cx="95" cy="33" r="3" fill="#FFF2D1" />
        <line x1="120" y1="95" x2="145" y2="35" />
        <circle cx="145" cy="33" r="3" fill="#FFF2D1" />

        {/* Outer Flaring Tendrils */}
        <path d="M 120 95 C 100 70 70 55 50 65" fill="none" />
        <circle cx="50" cy="65" r="3" fill="#FFF2D1" />
        <path d="M 120 95 C 140 70 170 55 190 65" fill="none" />
        <circle cx="190" cy="65" r="3" fill="#FFF2D1" />

        {/* Traditional Betel Leaves (බුලත් කොළ) framing the flower */}
        <path
          d="M 120 95 C 80 80 65 110 90 120 Z"
          fill="url(#punkalasaGold)"
          opacity="0.8"
        />
        <path
          d="M 120 95 C 160 80 175 110 150 120 Z"
          fill="url(#punkalasaGold)"
          opacity="0.8"
        />
      </g>

      {/* POT NECK & MOUTH */}
      <ellipse cx="120" cy="115" rx="36" ry="10" fill="url(#punkalasaGold)" />
      <ellipse cx="120" cy="115" rx="28" ry="7" fill="#2C2214" opacity="0.3" />
      <rect x="96" y="115" width="48" height="15" fill="url(#punkalasaGold)" />

      {/* POT BODY (ROUND CLAY/BRASS BELLY) */}
      <path
        d="M 96 128 C 50 145 45 205 85 230 C 105 240 135 240 155 230 C 195 205 190 145 144 128 Z"
        fill="url(#punkalasaGold)"
      />

      {/* Traditional Carved Belly Band & Lotus Petals */}
      <ellipse cx="120" cy="175" rx="42" ry="14" stroke="#FFF2D1" strokeWidth="1.5" strokeDasharray="3 4" fill="none" />
      <circle cx="120" cy="175" r="6" fill="#FFF2D1" />
      <circle cx="95" cy="172" r="3.5" fill="#FFF2D1" />
      <circle cx="145" cy="172" r="3.5" fill="#FFF2D1" />

      {/* PEDESTAL / STAND (පීඨය) */}
      <path d="M 95 232 L 80 252 L 160 252 L 145 232 Z" fill="url(#punkalasaGold)" />
      <rect x="65" y="252" width="110" height="12" rx="4" fill="url(#punkalasaGold)" />
      <circle cx="120" cy="258" r="3" fill="#FFF2D1" />
    </svg>
  );
};
