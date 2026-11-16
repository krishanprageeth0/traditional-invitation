"use client";

import React, { useState } from "react";
import { useRoyal } from "./ThemeAndLangContext";
import { RoyalDivider } from "./traditional/RoyalLiyawel";
import { Sparkles, Sun, Droplets, Flame, Utensils, Info } from "lucide-react";

export const NakathTimeline: React.FC = () => {
  const { t, config, isSinhala } = useRoyal();
  const [selectedRitual, setSelectedRitual] = useState<string>("poruwa-ascent");

  const iconMap: Record<string, React.ReactNode> = {
    Sparkles: <Sparkles className="w-5 h-5" />,
    Sun: <Sun className="w-5 h-5" />,
    Droplets: <Droplets className="w-5 h-5" />,
    Flame: <Flame className="w-5 h-5" />,
    Utensils: <Utensils className="w-5 h-5" />,
  };

  return (
    <section id="nakath" className="relative py-12 sm:py-20 px-4 sm:px-6 overflow-hidden bg-royal-parchment/40">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Section Badge */}
        <span className="inline-block text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-royal-goldDark mb-2">
          {t.nakath.badge}
        </span>

        {/* Section Title */}
        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-royal-goldDark mb-2">
          {t.nakath.title}
        </h2>

        <p className="text-xs sm:text-sm font-sinhala text-royal-muted mb-4 max-w-xl mx-auto">
          {t.nakath.subtitle}
        </p>

        <RoyalDivider width={160} className="mb-10 opacity-80" />

        {/* Stepper Grid / Timeline */}
        <div className="relative max-w-2xl mx-auto text-left">
          {/* Vertical Golden Connecting Line */}
          <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-royal-goldLight via-royal-gold to-royal-goldDark" />

          <div className="space-y-6">
            {config.nakathTimeline.map((item, index) => {
              const isSelected = selectedRitual === item.id;
              const isSacredNakath = item.id === "poruwa-ascent";

              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedRitual(item.id)}
                  className={`group relative flex items-start gap-4 p-4 sm:p-5 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    isSelected
                      ? "bg-royal-ivory border-royal-gold shadow-royal-gold -translate-y-0.5"
                      : "bg-royal-ivory/60 border-royal-gold/25 hover:bg-royal-ivory/90 hover:border-royal-gold/50"
                  }`}
                >
                  {/* Left Circle Node */}
                  <div
                    className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                      isSelected
                        ? "bg-gradient-to-br from-royal-goldLight to-royal-gold text-royal-ink shadow-md scale-110"
                        : "bg-royal-ivory border border-royal-gold/50 text-royal-goldDark group-hover:scale-105"
                    }`}
                  >
                    {iconMap[item.icon] || <Sparkles className="w-5 h-5" />}
                  </div>

                  {/* Ritual Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-royal-gold/15 text-royal-goldDark text-xs font-serif font-bold tracking-wider">
                        {isSinhala ? item.timeSi : item.timeEn}
                      </span>
                      {isSacredNakath && (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-royal-maroon bg-royal-maroon/10 px-2 py-0.5 rounded-full border border-royal-maroon/20">
                          {isSinhala ? "ප්‍රධාන නැකත" : "Prime Nakatha"}
                        </span>
                      )}
                    </div>

                    <h3 className="text-base sm:text-lg font-serif font-bold text-royal-ink group-hover:text-royal-goldDark transition-colors">
                      {isSinhala ? item.titleSi : item.titleEn}
                    </h3>

                    <p className="text-xs sm:text-sm font-sinhala text-royal-muted mt-1 leading-relaxed">
                      {isSinhala ? item.meaningSi : item.meaningEn}
                    </p>

                    {isSelected && (
                      <div className="mt-3 pt-3 border-t border-royal-gold/20 flex items-center gap-1.5 text-[11px] font-sinhala text-royal-goldDark animate-in fade-in duration-300">
                        <Info className="w-3.5 h-3.5 flex-shrink-0" />
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
