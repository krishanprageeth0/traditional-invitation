"use client";

import React, { useState } from "react";
import { useRoyal } from "./ThemeAndLangContext";
import { HansaPuttuwa } from "./traditional/HansaPuttuwa";
import { RoyalDivider, RoyalCorner } from "./traditional/RoyalLiyawel";
import { Sparkles, ScrollText, Crown, Heart } from "lucide-react";

interface RoyalScrollOpeningProps {
  isOpen: boolean;
  onOpen: () => void;
}

export const RoyalScrollOpening: React.FC<RoyalScrollOpeningProps> = ({ isOpen, onOpen }) => {
  const { t, config, isSinhala, guestName } = useRoyal();
  const [unrolling, setUnrolling] = useState(false);

  if (isOpen) return null;

  const handleUnroll = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("royal:unroll-scroll"));
    }
    setUnrolling(true);
    setTimeout(() => {
      onOpen();
    }, 750);
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
        backgroundColor: "#1C140A",
        backgroundImage:
          "radial-gradient(circle at 50% 30%, rgba(95, 70, 30, 0.95) 0%, rgba(32, 22, 10, 0.98) 70%, #100B05 100%)",
      }}
    >
      {/* Floating Gold Lights in Backdrop */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-royal-gold/15 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-royal-gold/15 blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      {/* LUXURY ROYAL FOLIO CARD SHELL */}
      <div className="relative w-full max-w-lg sm:max-w-xl mx-auto rounded-[36px] sm:rounded-[44px] bg-[#FCF9F2] p-8 sm:p-11 flex flex-col items-center text-center shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] border-2 border-[#D4AF37]/50 overflow-hidden">
        
        {/* Embossed Inner Gold Lines */}
        <div className="absolute inset-3 sm:inset-4 rounded-[28px] sm:rounded-[36px] border border-[#D4AF37]/40 pointer-events-none" />
        <div className="absolute inset-4 sm:inset-5 rounded-[24px] sm:rounded-[32px] border border-[#D4AF37]/25 border-dashed pointer-events-none" />

        {/* 4 Traditional Corner Filigree */}
        <RoyalCorner position="tl" className="absolute top-5 left-5" size={56} />
        <RoyalCorner position="tr" className="absolute top-5 right-5" size={56} />
        <RoyalCorner position="bl" className="absolute bottom-5 left-5" size={56} />
        <RoyalCorner position="br" className="absolute bottom-5 right-5" size={56} />

        {/* Silk Ribbon Accent behind seal */}
        <div className="absolute top-0 bottom-0 w-8 bg-gradient-to-r from-[#D4AF37]/15 via-[#FFF4D0]/30 to-[#D4AF37]/15 pointer-events-none opacity-60" />

        {/* Top Royal Crest Badge */}
        <div className="relative z-10 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#D4AF37]/20 via-[#FFF4D0]/30 to-[#D4AF37]/20 border border-[#D4AF37]/50 text-xs font-serif font-bold text-[#8C6615] tracking-[0.2em] uppercase mb-3 shadow-sm">
          <Crown className="w-4 h-4 text-[#C49A28]" />
          <span>{t.scroll.royalBadge}</span>
        </div>

        {/* VIP Plaque if guest parameter provided */}
        {guestName && (
          <div className="relative z-10 mb-3 px-5 py-2 rounded-2xl bg-gradient-to-r from-[#FFF4D0] to-[#F6E79D] border border-[#C49A28]/40 shadow-sm text-xs sm:text-sm font-serif font-bold text-[#6D4E08] animate-pulse">
            ✦ {t.scroll.vipSalutation}: {guestName} ✦
          </div>
        )}

        {/* 3D Wax Seal Style Medallion with Hansa Puttuwa */}
        <div className="relative z-10 my-2 sm:my-3 w-40 sm:w-48 drop-shadow-xl transition-transform hover:scale-105 duration-500">
          <div className="relative">
            <HansaPuttuwa size="100%" />
          </div>
        </div>

        {/* Sacred Greeting in Golden Typography */}
        <h1 className="relative z-10 text-2xl sm:text-4xl font-serif font-extrabold gold-text-shimmer leading-tight my-1 drop-shadow-sm">
          {t.scroll.greeting}
        </h1>

        <RoyalDivider width={190} className="my-2.5 opacity-90" />

        {/* Couple Names */}
        <div className="relative z-10 my-3">
          <div className="text-2xl sm:text-3xl font-serif font-extrabold text-[#2C2214] tracking-wide">
            {isSinhala ? config.couple.groom.fullNameSi : config.couple.groom.fullNameEn}
          </div>
          <div className="my-1.5 flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-[#D4AF37]/60" />
            <span className="text-xs sm:text-sm font-serif font-bold text-[#C49A28] uppercase tracking-[0.25em]">
              {isSinhala ? "සමඟ අතිනත ගන්නා" : "AND"}
            </span>
            <span className="w-8 h-px bg-[#D4AF37]/60" />
          </div>
          <div className="text-2xl sm:text-3xl font-serif font-extrabold text-[#2C2214] tracking-wide">
            {isSinhala ? config.couple.bride.fullNameSi : config.couple.bride.fullNameEn}
          </div>
        </div>

        {/* Auspicious Date snippet */}
        <div className="relative z-10 text-xs sm:text-sm font-sinhala text-[#786951] font-semibold mb-6">
          {config.event.year} {isSinhala ? config.event.monthSi : config.event.monthEn} {config.event.day} — {config.event.venue.nameSi}
        </div>

        {/* Open Button with Glowing Pulsating Effect */}
        <button
          type="button"
          onClick={handleUnroll}
          aria-label={t.scroll.unrollParchment}
          className="group relative z-10 inline-flex items-center justify-center gap-3 px-9 sm:px-12 py-4 rounded-full font-serif font-extrabold text-sm sm:text-base text-[#1C140A] bg-gradient-to-r from-[#F6E79D] via-[#D4AF37] to-[#B89222] shadow-[0_12px_28px_rgba(212,175,55,0.45)] hover:shadow-[0_16px_36px_rgba(212,175,55,0.65)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300 border-2 border-[#FFF7D6]"
          style={{ animation: "goldPulseGlow 3s infinite" }}
        >
          <Sparkles className="w-5 h-5 text-[#6D4E08] group-hover:rotate-12 transition-transform" />
          <span className="tracking-wide">{t.scroll.unrollParchment}</span>
        </button>

        <p className="relative z-10 text-[11px] font-sinhala text-[#8A7960] mt-3">
          {t.scroll.cordText}
        </p>
      </div>
    </div>
  );
};
