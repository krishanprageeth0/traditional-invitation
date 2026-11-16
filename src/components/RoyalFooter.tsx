"use client";

import React from "react";
import { useRoyal } from "./ThemeAndLangContext";
import { HansaPuttuwa } from "./traditional/HansaPuttuwa";
import { RoyalDivider } from "./traditional/RoyalLiyawel";
import { Phone, Heart } from "lucide-react";

export const RoyalFooter: React.FC = () => {
  const { t, config, isSinhala } = useRoyal();

  return (
    <footer id="footer" className="relative overflow-hidden bg-gradient-to-b from-[#2C2214] via-[#1E170C] to-[#140F08] text-royal-ivory pt-16 pb-24 sm:pb-28 px-4 sm:px-6 text-center">
      <div className="relative z-10 max-w-2xl mx-auto">
        <span className="text-[11px] font-serif font-bold tracking-[0.3em] uppercase text-royal-gold block mb-2">
          SAVE THE DATE
        </span>

        <div className="text-4xl sm:text-6xl font-serif font-bold text-royal-goldLight tracking-wider my-3">
          {config.event.day} . 04 . {config.event.year}
        </div>

        <p className="text-sm sm:text-base font-serif font-medium text-royal-ivory/90 my-3">
          {t.footer.title}
        </p>

        <div className="w-28 mx-auto my-4 opacity-80">
          <HansaPuttuwa size="100%" />
        </div>

        <RoyalDivider width={160} className="my-4 opacity-75" />

        {/* Couple Names */}
        <div className="text-xl sm:text-2xl font-serif font-bold text-royal-goldLight my-4">
          <span>{isSinhala ? config.couple.groom.fullNameSi : config.couple.groom.fullNameEn}</span>
          <span className="mx-2 text-royal-gold font-normal">&amp;</span>
          <span>{isSinhala ? config.couple.bride.fullNameSi : config.couple.bride.fullNameEn}</span>
        </div>

        {/* Call Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 my-6">
          <a
            href={`tel:${config.couple.groom.phone}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-royal-ivory/10 hover:bg-royal-ivory/20 text-royal-ivory text-xs font-serif font-semibold border border-royal-gold/40 backdrop-blur-sm transition-all hover:scale-105 active:scale-95"
          >
            <Phone className="w-3.5 h-3.5 text-royal-gold" />
            <span>{t.footer.contactGroom}</span>
          </a>

          <a
            href={`tel:${config.couple.bride.phone}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-royal-ivory/10 hover:bg-royal-ivory/20 text-royal-ivory text-xs font-serif font-semibold border border-royal-gold/40 backdrop-blur-sm transition-all hover:scale-105 active:scale-95"
          >
            <Phone className="w-3.5 h-3.5 text-royal-gold" />
            <span>{t.footer.contactBride}</span>
          </a>
        </div>

        <p className="text-xs sm:text-sm font-sinhala text-royal-goldLight/80 italic mb-6">
          {t.footer.blessingLine}
        </p>

        <div className="pt-8 border-t border-royal-ivory/15 text-[11px] text-royal-ivory/50 flex items-center justify-center gap-1.5">
          <span>{t.footer.craftNote}</span>
          <Heart className="w-3 h-3 text-royal-gold fill-royal-gold" />
        </div>
      </div>
    </footer>
  );
};
