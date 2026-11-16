"use client";

import React, { useState } from "react";
import { useRoyal } from "./ThemeAndLangContext";
import { RoyalDivider } from "./traditional/RoyalLiyawel";
import { Sparkles, Sun, Droplets, Flame, Utensils, Info, Check } from "lucide-react";

export const NakathTimeline: React.FC = () => {
  const { t, config, isSinhala } = useRoyal();
  const [selectedRitual, setSelectedRitual] = useState<string>("poruwa-ascent");

  const iconMap: Record<string, React.ReactNode> = {
    Sparkles: <Sparkles className="w-5 h-5 text-[#8C6615]" />,
    Sun: <Sun className="w-5 h-5 text-[#8C6615]" />,
    Droplets: <Droplets className="w-5 h-5 text-[#8C6615]" />,
    Flame: <Flame className="w-5 h-5 text-[#8C6615]" />,
    Utensils: <Utensils className="w-5 h-5 text-[#8C6615]" />,
  };

  return (
    <section id="nakath" className="relative py-12 sm:py-20 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-[#FAF4E6]/50 via-[#F5EDD8]/70 to-[#FAF4E6]/50">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Section Badge */}
        <span className="inline-block text-[11px] sm:text-xs font-serif font-bold tracking-[0.25em] uppercase text-[#8C6615] mb-2">
          {t.nakath.badge}
        </span>

        {/* Section Title */}
        <h2 className="text-2xl sm:text-4xl font-serif font-black text-[#2C2214] mb-2">
          {t.nakath.title}
        </h2>

        <p className="text-xs sm:text-sm font-sinhala text-[#786951] mb-4 max-w-xl mx-auto">
          {t.nakath.subtitle}
        </p>

        <RoyalDivider width={180} className="mb-10 opacity-85" />

        {/* Stepper Timeline */}
        <div className="relative max-w-2xl mx-auto text-left">
          {/* Vertical Golden Connecting Ribbon */}
          <div className="absolute left-6 top-8 bottom-8 w-1 bg-gradient-to-b from-[#FFF7D6] via-[#D4AF37] to-[#8C6615] rounded-full" />

          <div className="space-y-6">
            {config.nakathTimeline.map((item) => {
              const isSelected = selectedRitual === item.id;
              const isSacredNakath = item.id === "poruwa-ascent";

              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedRitual(item.id)}
                  className={`group relative flex items-start gap-4 p-5 sm:p-6 rounded-3xl cursor-pointer transition-all duration-300 border ${
                    isSelected
                      ? "bg-[#FFFDF9] border-2 border-[#D4AF37] shadow-[0_16px_36px_-10px_rgba(140,102,21,0.28)] -translate-y-1"
                      : "bg-[#FFFDF9]/75 border border-[#D4AF37]/30 hover:bg-[#FFFDF9] hover:border-[#D4AF37]/60"
                  }`}
                >
                  {/* Left Illuminated Medallion */}
                  <div
                    className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                      isSelected
                        ? "bg-gradient-to-br from-[#FFF7D6] via-[#D4AF37] to-[#8C6615] text-[#1C140A] shadow-md scale-110"
                        : "bg-[#FCF9F2] border border-[#D4AF37]/50 text-[#8C6615] group-hover:scale-105"
                    }`}
                  >
                    {iconMap[item.icon] || <Sparkles className="w-5 h-5" />}
                  </div>

                  {/* Ritual Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                      <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-[#D4AF37]/20 to-[#FFF7D6]/40 text-[#8C6615] text-xs font-serif font-black tracking-wider border border-[#D4AF37]/40">
                        {isSinhala ? item.timeSi : item.timeEn}
                      </span>
                      {isSacredNakath && (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#B22234] bg-[#B22234]/10 px-2.5 py-0.5 rounded-full border border-[#B22234]/30 animate-pulse">
                          ✦ {isSinhala ? "ප්‍රධාන නැකත" : "Prime Sacred Nakatha"} ✦
                        </span>
                      )}
                    </div>

                    <h3 className="text-base sm:text-xl font-serif font-extrabold text-[#2C2214] group-hover:text-[#8C6615] transition-colors">
                      {isSinhala ? item.titleSi : item.titleEn}
                    </h3>

                    <p className="text-xs sm:text-sm font-sinhala text-[#786951] mt-1 leading-relaxed">
                      {isSinhala ? item.meaningSi : item.meaningEn}
                    </p>

                    {isSelected && (
                      <div className="mt-3.5 pt-3 border-t border-[#D4AF37]/25 flex items-center gap-2 text-xs font-serif font-bold text-[#8C6615] animate-in fade-in duration-300">
                        <Check className="w-4 h-4 text-[#C49A28] flex-shrink-0" />
                        <span>
                          {isSinhala
                            ? "නියමිත නැකත් වේලාවට මංගල පෝරුවේ චාරිත්‍ර ඉටු කෙරේ."
                            : "Traditional rituals will strictly align with the sacred astrological timing."}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
