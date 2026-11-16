import React from "react";

interface DividerProps {
  className?: string;
  width?: number | string;
}

export const RoyalDivider: React.FC<DividerProps> = ({
  className = "",
  width = 240,
}) => {
  return (
    <svg
      width={width}
      height="36"
      viewBox="0 0 320 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none mx-auto ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="divGold" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#9A7B1C" stopOpacity="0" />
          <stop offset="25%" stopColor="#D4AF37" />
          <stop offset="50%" stopColor="#FFF4D0" />
          <stop offset="75%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#9A7B1C" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Central Gem & Lotus Flower */}
      <circle cx="160" cy="20" r="5" fill="#FFF4D0" stroke="#9A7B1C" strokeWidth="1.2" />
      <path d="M 160 8 C 165 14 165 16 160 20 C 155 16 155 14 160 8 Z" fill="url(#divGold)" />
      <path d="M 148 20 C 154 17 156 18 160 20 C 156 22 154 23 148 20 Z" fill="url(#divGold)" />
      <path d="M 172 20 C 166 17 164 18 160 20 C 164 22 166 23 172 20 Z" fill="url(#divGold)" />

      {/* Left Tendril with spirals */}
      <path
        d="M 145 20 C 120 20 100 12 75 12 C 50 12 30 22 10 22"
        stroke="url(#divGold)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="75" cy="12" r="2.5" fill="url(#divGold)" />
      <circle cx="30" cy="22" r="2" fill="url(#divGold)" />

      {/* Right Tendril with spirals */}
      <path
        d="M 175 20 C 200 20 220 12 245 12 C 270 12 290 22 310 22"
        stroke="url(#divGold)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="245" cy="12" r="2.5" fill="url(#divGold)" />
      <circle cx="290" cy="22" r="2" fill="url(#divGold)" />
    </svg>
  );
};

export const RoyalCorner: React.FC<{
  position: "tl" | "tr" | "bl" | "br";
  className?: string;
  size?: number;
}> = ({ position, className = "", size = 60 }) => {
  const transform = {
    tl: "rotate(0)",
    tr: "rotate(90deg)",
    br: "rotate(180deg)",
    bl: "rotate(270deg)",
  }[position];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none ${className}`}
      style={{ transform }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="cornerGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF4D0" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#8C6615" />
        </linearGradient>
      </defs>

      {/* Double Border Corner */}
      <path d="M 6 74 L 6 6 L 74 6" stroke="url(#cornerGold)" strokeWidth="2.5" />
      <path d="M 12 68 L 12 12 L 68 12" stroke="url(#cornerGold)" strokeWidth="1" strokeDasharray="3 3" />

      {/* Ancient Liyawel Corner Curl */}
      <path
        d="M 12 12 C 22 28 34 32 48 26 C 42 20 28 18 12 12 Z"
        fill="url(#cornerGold)"
        opacity="0.85"
      />
      <circle cx="12" cy="12" r="3.5" fill="#FFF4D0" stroke="url(#cornerGold)" strokeWidth="1" />
      <circle cx="6" cy="6" r="2" fill="#FFF4D0" />
      <path
        d="M 28 12 C 38 22 42 34 36 48 C 30 42 26 28 12 12"
        stroke="url(#cornerGold)"
        strokeWidth="1.2"
      />
    </svg>
  );
};
