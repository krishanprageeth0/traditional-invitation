"use client";

import React from "react";
import { useRoyal } from "./ThemeAndLangContext";
import { SandakadaPahana } from "./traditional/SandakadaPahana";
import { Punkalasa } from "./traditional/Punkalasa";
import { RoyalDivider } from "./traditional/RoyalLiyawel";
import { PersonalizedPlaque } from "./PersonalizedPlaque";

export const RoyalHero: React.FC = () => {
  const { t, config, isSinhala } = useRoyal();

  return (
    <section id="hero" className="relative pt-8 pb-16 sm:py-20 px-4 sm:px-6 overflow-hidden text-center">
      {/* Top Moonstone Arc (සඳකඩපහණ ආරුක්කුව) Watermark */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 pointer-events-none opacity-20">
        <SandakadaPahana size={640} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* VIP Plaque if link has guest name */}
        <PersonalizedPlaque />

        {/* Sub Header */}
        <p className="text-xs sm:text-sm font-sinhala font-semibold text-royal-goldDark tracking-widest uppercase mb-2">
          {t.hero.subHeader}
        </p>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-extrabold text-royal-goldDark tracking-wide mb-3">
          {isSinhala ? "ශ්‍රී රාජකීය මංගල ඇරයුම" : "The Royal Matrimonial Invitation"}
        </h1>

        <RoyalDivider width={220} className="mb-6 opacity-90" />

        {/* Auspicious Moment Line */}
        <div className="max-w-xl mx-auto p-4 rounded-2xl bg-royal-ivory/80 border border-royal-gold/40 shadow-sm mb-10 text-xs sm:text-base font-sinhala font-medium text-royal-ink leading-relaxed">
          <span className="font-bold text-royal-goldDark block mb-1">
            ✦ {t.hero.auspiciousPrefix} ✦
          </span>
          {isSinhala ? config.event.auspiciousNoteSi : config.event.auspiciousNoteEn}
          <div className="text-xs text-royal-muted mt-1">
            {isSinhala ? config.event.venue.hallSi : config.event.venue.hallEn} — {isSinhala ? config.event.venue.nameSi : config.event.venue.nameEn}
          </div>
        </div>

        {/* Parents Formal Introductions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 my-8 px-2 sm:px-6 text-left">
          {/* Groom's Family */}
          <div className="p-6 rounded-2xl bg-royal-ivory/90 border border-royal-gold/30 shadow-card-rich">
            <span className="text-[11px] font-bold tracking-widest text-royal-gold uppercase block mb-1">
              {t.hero.groomTitle}
            </span>
            <p className="text-xs sm:text-sm font-sinhala text-royal-muted leading-relaxed mb-4">
              {isSinhala ? config.couple.groom.parentsSi : config.couple.groom.parentsEn}
            </p>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-royal-ink tracking-wide">
              {isSinhala ? config.couple.groom.fullNameSi : config.couple.groom.fullNameEn}
            </h2>
          </div>

          {/* Bride's Family */}
          <div className="p-6 rounded-2xl bg-royal-ivory/90 border border-royal-gold/30 shadow-card-rich">
            <span className="text-[11px] font-bold tracking-widest text-royal-gold uppercase block mb-1">
              {t.hero.brideTitle}
            </span>
            <p className="text-xs sm:text-sm font-sinhala text-royal-muted leading-relaxed mb-4">
              {isSinhala ? config.couple.bride.parentsSi : config.couple.bride.parentsEn}
            </p>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-royal-ink tracking-wide">
              {isSinhala ? config.couple.bride.fullNameSi : config.couple.bride.fullNameEn}
            </h2>
          </div>
        </div>

        {/* Couple Portrait in Royal Arched Frame flanked by Punkalasa */}
        <div className="relative mx-auto my-10 flex items-center justify-center gap-4 sm:gap-8">
          {/* Left Punkalasa */}
          <div className="hidden md:block w-24 opacity-85">
            <Punkalasa size={90} />
          </div>

          {/* Center Arched Portrait */}
          <div className="relative w-full max-w-sm rounded-t-[200px] rounded-b-3xl p-3 bg-gradient-to-b from-royal-goldLight/40 via-royal-gold/20 to-royal-goldDark/30 border-2 border-royal-gold shadow-2xl">
            <div className="relative overflow-hidden rounded-t-[190px] rounded-b-2xl aspect-[4/5] bg-royal-parchment">
              <img
                src={config.gallery[0].src}
                alt={`${config.couple.groom.nameEn} & ${config.couple.bride.nameEn}`}
                className="w-full h-full object-cover object-center filter contrast-[1.03] transition-transform duration-700 hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-royal-ink/50 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Top Crown Seal */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-royal-goldLight via-royal-gold to-royal-goldDark flex items-center justify-center text-royal-ivory shadow-royal-gold border-2 border-royal-ivory text-base">
              🪷
            </div>
          </div>

          {/* Right Punkalasa */}
          <div className="hidden md:block w-24 opacity-85">
            <Punkalasa size={90} />
          </div>
        </div>

        {/* Joining Hands Statement */}
        <p className="text-base sm:text-lg font-sinhala text-royal-ink font-semibold max-w-md mx-auto my-6">
          {t.hero.joiningHands}
        </p>

        {/* Auspicious Big Date Calendar Block */}
        <div className="my-8 inline-block max-w-md w-full px-4">
          <div className="text-sm sm:text-base font-serif font-bold text-royal-goldDark tracking-[0.25em] uppercase">
            {config.event.year}
          </div>

          <div className="flex items-center justify-center gap-4 my-2">
            <span className="flex-1 py-1.5 text-center font-sinhala font-bold text-royal-ink text-base sm:text-lg border-y border-royal-gold/60">
              {isSinhala ? config.event.monthSi : config.event.monthEn}
            </span>
            <span className="text-5xl sm:text-6xl font-serif font-black text-royal-goldDark leading-none px-2">
              {config.event.day}
            </span>
            <span className="flex-1 py-1.5 text-center font-sinhala font-bold text-royal-ink text-base sm:text-lg border-y border-royal-gold/60">
              {isSinhala ? config.event.dayOfWeekSi : config.event.dayOfWeekEn}
            </span>
          </div>
        </div>

        {/* Royal Blessing Verse */}
        <div className="mt-6 p-6 rounded-2xl bg-royal-ivory/80 border border-royal-gold/30 max-w-xl mx-auto shadow-sm">
          <p className="font-sinhala text-xs sm:text-sm text-royal-ink leading-loose whitespace-pre-line italic">
            &ldquo;{t.hero.royalVerse}&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
};
