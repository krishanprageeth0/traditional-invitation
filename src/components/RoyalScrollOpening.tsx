"use client";

import React, { useState } from "react";
import { useRoyal } from "./ThemeAndLangContext";
import { HansaPuttuwa } from "./traditional/HansaPuttuwa";
import { RoyalDivider, RoyalCorner } from "./traditional/RoyalLiyawel";
import { Sparkles, ScrollText, Crown } from "lucide-react";

interface RoyalScrollOpeningProps {
  isOpen: boolean;
  onOpen: () => void;
}

export const RoyalScrollOpening: React.FC<RoyalScrollOpeningProps> = ({ isOpen, onOpen }) => {
  const { t, config, isSinhala, guestName } = useRoyal();
  const [unrolling, setUnrolling] = useState(false);

  if (isOpen) return null;

  const handleUnroll = () => {
    // Dispatch sound trigger event
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("royal:unroll-scroll"));
    }
    setUnrolling(true);
    setTimeout(() => {
      onOpen();
    }, 700);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={t.scroll.greeting}
      className={`fixed inset-0 z-[950] grid place-items-center p-4 sm:p-6 overflow-hidden transition-all duration-700 ease-in-out ${
        unrolling ? "opacity-0 scale-105 pointer-events-none" : "opacity-100 scale-100"
      }`}
      style={{
        backgroundColor: "#2C2214",
        backgroundImage: "radial-gradient(ellipse at center, rgba(65, 50, 28, 0.95) 0%, rgba(28, 20, 10, 0.98) 100%)",
      }}
    >
      {/* Traditional Wooden Manuscript Covers (පුස්කොල පොතේ කම්බි) Shell */}
      <div className="relative w-full max-w-xl mx-auto rounded-[32px] sm:rounded-[40px] bg-royal-ivory border-4 border-royal-gold/60 shadow-2xl p-6 sm:p-10 flex flex-col items-center text-center overflow-hidden">
        {/* Ornate Corner Accents */}
        <RoyalCorner position="tl" className="absolute top-4 left-4" size={54} />
        <RoyalCorner position="tr" className="absolute top-4 right-4" size={54} />
        <RoyalCorner position="bl" className="absolute bottom-4 left-4" size={54} />
        <RoyalCorner position="br" className="absolute bottom-4 right-4" size={54} />

        {/* Top Royal Seal Emblem */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-royal-gold/15 border border-royal-gold/40 text-[11px] font-semibold text-royal-goldDark tracking-widest uppercase mb-3">
          <Crown className="w-3.5 h-3.5 text-royal-gold" />
          <span>{t.scroll.royalBadge}</span>
        </div>

        {/* VIP Plaque if link has guest name */}
        {guestName && (
          <div className="mb-3 px-4 py-1.5 rounded-full bg-royal-gold/20 border border-royal-gold/50 text-xs font-serif font-bold text-royal-goldDark">
            {t.scroll.vipSalutation}: {guestName}
          </div>
        )}

        {/* Royal Hansa Puttuwa Emblem */}
        <div className="my-2 w-36 sm:w-44 drop-shadow-md">
          <HansaPuttuwa size="100%" />
        </div>

        {/* Sacred Heading */}
        <h1 className="text-2xl sm:text-3xl font-serif font-bold text-royal-goldDark my-1 tracking-wide">
          {t.scroll.greeting}
        </h1>

        <RoyalDivider width={180} className="my-2" />

        {/* Couple Names */}
        <div className="my-3">
          <div className="text-xl sm:text-2xl font-serif font-bold text-royal-ink tracking-wide">
            {isSinhala ? config.couple.groom.fullNameSi : config.couple.groom.fullNameEn}
          </div>
          <div className="my-1 text-sm font-serif font-bold text-royal-gold uppercase tracking-widest">
            {isSinhala ? "සමඟ අතිනත ගන්නා" : "AND"}
          </div>
          <div className="text-xl sm:text-2xl font-serif font-bold text-royal-ink tracking-wide">
            {isSinhala ? config.couple.bride.fullNameSi : config.couple.bride.fullNameEn}
          </div>
        </div>

        {/* Date Reminder */}
        <p className="text-xs sm:text-sm font-sinhala text-royal-muted mb-6">
          {config.event.year} {isSinhala ? config.event.monthSi : config.event.monthEn} {config.event.day} — {config.event.venue.nameSi}
        </p>

        {/* Unroll Button */}
        <button
          type="button"
          onClick={handleUnroll}
          aria-label={t.scroll.unrollParchment}
          className="group relative inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-serif font-bold text-sm sm:text-base text-royal-ivory bg-gradient-to-r from-royal-gold via-royal-goldDark to-[#7A5C10] shadow-royal-gold hover:shadow-royal-glow transition-all duration-300 hover:scale-105 active:scale-95 border border-royal-goldLight/60"
        >
          <ScrollText className="w-5 h-5 text-royal-goldLight group-hover:rotate-6 transition-transform" />
          <span>{t.scroll.unrollParchment}</span>
        </button>

        <p className="text-[11px] font-sinhala text-royal-muted/80 mt-3">
          {t.scroll.cordText}
        </p>
      </div>
    </div>
  );
};
