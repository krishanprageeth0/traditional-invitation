"use client";

import React from "react";
import { useRoyal } from "./ThemeAndLangContext";
import { SandakadaPahana } from "./traditional/SandakadaPahana";
import { Punkalasa } from "./traditional/Punkalasa";
import { RoyalDivider, RoyalCorner } from "./traditional/RoyalLiyawel";
import { PersonalizedPlaque } from "./PersonalizedPlaque";
import { Crown, Sparkles, Heart } from "lucide-react";

export const RoyalHero: React.FC = () => {
  const { t, config, isSinhala } = useRoyal();

  return (
    <section id="hero" className="relative pt-6 pb-16 sm:py-20 px-4 sm:px-6 overflow-hidden text-center">
      {/* Top Sandakada Pahana Arc Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 pointer-events-none opacity-25">
        <SandakadaPahana size={680} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* VIP Plaque if link has guest parameter */}
        <PersonalizedPlaque />

        {/* Royal Crest Monogram */}
        <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-gradient-to-br from-[#FFF7D6] via-[#D4AF37] to-[#8C6615] p-0.5 shadow-royal-gold">
          <div className="w-full h-full rounded-full bg-[#FCF9F2] flex items-center justify-center border border-[#D4AF37]/40">
            <span className="font-serif font-black text-sm tracking-widest text-[#8C6615]">
              K &amp; T
            </span>
          </div>
        </div>

        {/* Sub Header */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-xs font-serif font-bold text-[#8C6615] tracking-[0.2em] uppercase mb-2">
          <Sparkles className="w-3.5 h-3.5 text-[#C49A28]" />
          <span>{t.hero.subHeader}</span>
          <Sparkles className="w-3.5 h-3.5 text-[#C49A28]" />
        </div>

        {/* Main Title with Gold Shimmer */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-black gold-text-shimmer tracking-wide mb-3 drop-shadow-sm leading-tight">
          {isSinhala ? "ශ්‍රී රාජකීය මංගල ඇරයුම" : "The Royal Wedding Invitation"}
        </h1>

        <RoyalDivider width={240} className="mb-8 opacity-90" />

        {/* Auspicious Moment Line */}
        <div className="max-w-xl mx-auto p-5 sm:p-6 rounded-3xl bg-[#FFFDF9] border border-[#D4AF37]/45 shadow-[0_12px_32px_-10px_rgba(140,102,21,0.18)] mb-10 text-xs sm:text-base font-sinhala font-medium text-[#2C2214] leading-relaxed relative overflow-hidden">
          {/* Subtle gold ribbon top edge */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#D4AF37] via-[#FFF7D6] to-[#D4AF37]" />
          <span className="font-bold text-[#8C6615] text-xs sm:text-sm uppercase tracking-widest block mb-1">
            ✦ {t.hero.auspiciousPrefix} ✦
          </span>
          <p className="text-sm sm:text-base font-bold text-[#2C2214]">
            {isSinhala ? config.event.auspiciousNoteSi : config.event.auspiciousNoteEn}
          </p>
          <div className="text-xs text-[#786951] font-semibold mt-1.5 flex items-center justify-center gap-2">
            <span>{isSinhala ? config.event.venue.hallSi : config.event.venue.hallEn}</span>
            <span>•</span>
            <span>{isSinhala ? config.event.venue.nameSi : config.event.venue.nameEn}</span>
          </div>
        </div>

        {/* Parents Introductions & Couple Names */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 my-8 px-2 sm:px-6 text-left">
          {/* Groom's Family Card */}
          <div className="p-7 rounded-3xl bg-[#FFFDF9] border border-[#D4AF37]/40 shadow-card-rich hover:border-[#D4AF37] transition-all relative overflow-hidden">
            <div className="absolute top-3 right-3 text-2xl opacity-15">👑</div>
            <span className="text-[11px] font-bold tracking-widest text-[#C49A28] uppercase block mb-1 font-serif">
              {t.hero.groomTitle}
            </span>
            <p className="text-xs sm:text-sm font-sinhala text-[#786951] leading-relaxed mb-4">
              {isSinhala ? config.couple.groom.parentsSi : config.couple.groom.parentsEn}
            </p>
            <h2 className="text-xl sm:text-2xl font-serif font-extrabold text-[#2C2214] tracking-wide">
              {isSinhala ? config.couple.groom.fullNameSi : config.couple.groom.fullNameEn}
            </h2>
          </div>

          {/* Bride's Family Card */}
          <div className="p-7 rounded-3xl bg-[#FFFDF9] border border-[#D4AF37]/40 shadow-card-rich hover:border-[#D4AF37] transition-all relative overflow-hidden">
            <div className="absolute top-3 right-3 text-2xl opacity-15">🪷</div>
            <span className="text-[11px] font-bold tracking-widest text-[#C49A28] uppercase block mb-1 font-serif">
              {t.hero.brideTitle}
            </span>
            <p className="text-xs sm:text-sm font-sinhala text-[#786951] leading-relaxed mb-4">
              {isSinhala ? config.couple.bride.parentsSi : config.couple.bride.parentsEn}
            </p>
            <h2 className="text-xl sm:text-2xl font-serif font-extrabold text-[#2C2214] tracking-wide">
              {isSinhala ? config.couple.bride.fullNameSi : config.couple.bride.fullNameEn}
            </h2>
          </div>
        </div>

        {/* Couple Portrait in Royal Arched Frame with Garland Accents */}
        <div className="relative mx-auto my-12 flex items-center justify-center gap-6 sm:gap-10">
          {/* Left Punkalasa */}
          <div className="hidden md:block w-28 opacity-90 transition-transform hover:scale-105">
            <Punkalasa size={110} />
          </div>

          {/* Center Arched Portrait Frame */}
          <div className="relative w-full max-w-sm sm:max-w-md rounded-t-[220px] rounded-b-[36px] p-4 bg-gradient-to-b from-[#FFF7D6]/60 via-[#D4AF37]/35 to-[#8C6615]/40 border-2 border-[#D4AF37] shadow-[0_25px_50px_-12px_rgba(140,102,21,0.35)]">
            {/* Hanging Garland / Tassel details */}
            <div className="absolute -top-3 left-6 text-xl">🌾</div>
            <div className="absolute -top-3 right-6 text-xl">🌾</div>

            <div className="relative overflow-hidden rounded-t-[210px] rounded-b-3xl aspect-[4/5] bg-[#F4ECD8]">
              <img
                src={config.gallery[0].src}
                alt={`${config.couple.groom.nameEn} & ${config.couple.bride.nameEn}`}
                className="w-full h-full object-cover object-center filter contrast-[1.04] saturate-[1.02] transition-transform duration-700 hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C140A]/60 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Top Crown Medallion */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-gradient-to-br from-[#FFF7D6] via-[#D4AF37] to-[#8C6615] flex items-center justify-center text-[#1C140A] shadow-lg border-2 border-[#FFFDF9] text-xl">
              🪷
            </div>
          </div>

          {/* Right Punkalasa */}
          <div className="hidden md:block w-28 opacity-90 transition-transform hover:scale-105">
            <Punkalasa size={110} />
          </div>
        </div>

        {/* Joining Hands Statement */}
        <p className="text-base sm:text-xl font-sinhala text-[#2C2214] font-bold max-w-md mx-auto my-6 leading-relaxed">
          {t.hero.joiningHands}
        </p>

        {/* Auspicious Monument Calendar Block */}
        <div className="my-10 inline-block max-w-md w-full px-4">
          <div className="p-6 rounded-3xl bg-[#FFFDF9] border-2 border-[#D4AF37]/50 shadow-card-rich relative">
            <div className="text-xs sm:text-sm font-serif font-extrabold text-[#8C6615] tracking-[0.3em] uppercase mb-1">
              {config.event.year}
            </div>

            <div className="flex items-center justify-center gap-4 my-2">
              <span className="flex-1 py-2 text-center font-sinhala font-extrabold text-[#2C2214] text-base sm:text-xl border-y-2 border-[#D4AF37]/60">
                {isSinhala ? config.event.monthSi : config.event.monthEn}
              </span>
              <span className="text-6xl sm:text-7xl font-serif font-black gold-text-shimmer leading-none px-3">
                {config.event.day}
              </span>
              <span className="flex-1 py-2 text-center font-sinhala font-extrabold text-[#2C2214] text-base sm:text-xl border-y-2 border-[#D4AF37]/60">
                {isSinhala ? config.event.dayOfWeekSi : config.event.dayOfWeekEn}
              </span>
            </div>

            <div className="text-xs sm:text-sm font-serif font-bold text-[#8C6615] mt-2">
              {isSinhala ? "පෙරවරු 9:15 ට යෙදෙන සුබ මොහොතින්" : "At the auspicious hour of 9:15 AM"}
            </div>
          </div>
        </div>

        {/* Royal Blessing Verse */}
        <div className="mt-4 p-6 sm:p-7 rounded-3xl bg-[#FFFDF9] border border-[#D4AF37]/35 max-w-xl mx-auto shadow-sm">
          <p className="font-sinhala text-xs sm:text-sm text-[#2C2214] leading-loose whitespace-pre-line italic font-medium">
            &ldquo;{t.hero.royalVerse}&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
};
