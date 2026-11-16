import React from "react";

interface HansaPuttuwaProps {
  className?: string;
  size?: number | string;
}

/**
 * 100% Original Vector Representation of Hansa Puttuwa
 * Ancient Sri Lankan emblem of divine fidelity, truth, and lifelong matrimonial bond.
 */
export const HansaPuttuwa: React.FC<HansaPuttuwaProps> = ({
  className = "",
  size = 180,
}) => {
  return (
    <svg
      width={size}
      height={typeof size === "number" ? size * 0.9 : "auto"}
      viewBox="0 0 400 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none mx-auto drop-shadow-md ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="hansaGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF4D0" />
          <stop offset="30%" stopColor="#E5C158" />
          <stop offset="70%" stopColor="#C49A28" />
          <stop offset="100%" stopColor="#8C6615" />
        </linearGradient>

        <linearGradient id="royalHalo" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F6E79D" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      {/* Aura Circle */}
      <circle cx="200" cy="180" r="160" fill="url(#royalHalo)" />
      <circle cx="200" cy="180" r="158" stroke="url(#hansaGold)" strokeWidth="1.5" strokeDasharray="6 6" />
      <circle cx="200" cy="180" r="148" stroke="url(#hansaGold)" strokeWidth="0.8" />

      {/* Central Sacred Lotus Core Blossom */}
      <g transform="translate(200, 190)">
        <path
          d="M 0 -25 C 10 -12 12 5 0 16 C -12 5 -10 -12 0 -25 Z"
          fill="url(#hansaGold)"
        />
        <path
          d="M 0 16 C -18 12 -26 -4 -16 -18 C -9 -8 -4 3 0 16 Z"
          fill="url(#hansaGold)"
          opacity="0.9"
        />
        <path
          d="M 0 16 C 18 12 26 -4 16 -18 C 9 -8 4 3 0 16 Z"
          fill="url(#hansaGold)"
          opacity="0.9"
        />
        <circle cx="0" cy="16" r="4" fill="#FFF4D0" stroke="#8C6615" strokeWidth="1" />
      </g>

      {/* LEFT SACRED SWAN (HANSA) */}
      <g id="left-swan">
        {/* Head and Crown */}
        <circle cx="155" cy="85" r="15" fill="url(#hansaGold)" />
        <circle cx="150" cy="82" r="2.5" fill="#2C2214" />
        {/* Beak with flower bud */}
        <path d="M 166 85 L 188 88 L 168 93 Z" fill="url(#hansaGold)" />
        {/* Graceful Crown Feather Crest */}
        <path
          d="M 148 72 C 140 50 120 52 110 60 C 122 66 135 68 145 74 Z"
          fill="url(#hansaGold)"
        />
        {/* Curving Intertwined Neck */}
        <path
          d="M 152 98 C 145 130 185 155 170 190 C 158 215 110 210 95 190 C 80 170 100 135 125 120"
          stroke="url(#hansaGold)"
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
        />
        {/* Body Feathers */}
        <path
          d="M 85 185 C 60 210 50 250 85 270 C 130 290 170 250 160 215 C 130 205 105 180 85 185 Z"
          fill="url(#hansaGold)"
          opacity="0.95"
        />
        {/* Ornamental Wing Plumes (Liyawel Flow) */}
        <path
          d="M 75 220 C 40 210 25 240 35 260 C 45 280 80 275 85 260 C 65 260 50 240 75 220 Z"
          fill="url(#hansaGold)"
        />
        <path
          d="M 65 245 C 30 245 15 275 30 295 C 45 310 85 295 90 280"
          stroke="url(#hansaGold)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
      </g>

      {/* RIGHT SACRED SWAN (HANSA) - Intertwined */}
      <g id="right-swan">
        {/* Head and Crown */}
        <circle cx="245" cy="85" r="15" fill="url(#hansaGold)" />
        <circle cx="250" cy="82" r="2.5" fill="#2C2214" />
        {/* Beak with flower bud */}
        <path d="M 234 85 L 212 88 L 232 93 Z" fill="url(#hansaGold)" />
        {/* Graceful Crown Feather Crest */}
        <path
          d="M 252 72 C 260 50 280 52 290 60 C 278 66 265 68 255 74 Z"
          fill="url(#hansaGold)"
        />
        {/* Curving Intertwined Neck */}
        <path
          d="M 248 98 C 255 130 215 155 230 190 C 242 215 290 210 305 190 C 320 170 300 135 275 120"
          stroke="url(#hansaGold)"
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
        />
        {/* Body Feathers */}
        <path
          d="M 315 185 C 340 210 350 250 315 270 C 270 290 230 250 240 215 C 270 205 295 180 315 185 Z"
          fill="url(#hansaGold)"
          opacity="0.95"
        />
        {/* Ornamental Wing Plumes (Liyawel Flow) */}
        <path
          d="M 325 220 C 360 210 375 240 365 260 C 355 280 320 275 315 260 C 335 260 350 240 325 220 Z"
          fill="url(#hansaGold)"
        />
        <path
          d="M 335 245 C 370 245 385 275 370 295 C 355 310 315 295 310 280"
          stroke="url(#hansaGold)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
      </g>

      {/* Ornate Pedestal Footing with Lotus Leaves */}
      <path
        d="M 120 305 C 160 295 200 295 240 295 C 280 295 320 305 330 320 L 70 320 C 80 305 100 295 120 305 Z"
        fill="url(#hansaGold)"
      />
      <circle cx="200" cy="308" r="4" fill="#FFF4D0" />
    </svg>
  );
};
