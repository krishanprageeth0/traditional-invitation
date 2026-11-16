"use client";

import React, { useState, useEffect } from "react";
import { useRoyal } from "./ThemeAndLangContext";
import { RoyalDivider } from "./traditional/RoyalLiyawel";

export const AuspiciousCountdown: React.FC = () => {
  const { t, config, isSinhala } = useRoyal();
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
    isPast: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      const target = new Date(config.event.weddingDateIso).getTime();
      const now = new Date().getTime();
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
          isPast: true,
        });
        return;
      }

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({
        days: d.toString().padStart(2, "0"),
        hours: h.toString().padStart(2, "0"),
        minutes: m.toString().padStart(2, "0"),
        seconds: s.toString().padStart(2, "0"),
        isPast: false,
      });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [config.event.weddingDateIso]);

  return (
    <section id="countdown" className="relative py-12 sm:py-16 px-4 sm:px-6 overflow-hidden text-center">
      <div className="relative z-10 max-w-2xl mx-auto">
        <span className="inline-block text-[11px] sm:text-xs font-serif font-bold tracking-[0.25em] uppercase text-[#8C6615] mb-2">
          {t.countdown.badge}
        </span>

        <h2 className="text-2xl sm:text-4xl font-serif font-extrabold text-[#2C2214] mb-2">
          {t.countdown.title}
        </h2>

        <RoyalDivider width={160} className="mb-8 opacity-85" />

        {timeLeft.isPast ? (
          <div className="p-8 rounded-3xl bg-[#FFFDF9] border-2 border-[#D4AF37] shadow-card-rich">
            <p className="text-xl font-serif font-extrabold gold-text-shimmer">
              {t.countdown.weddingDayArrived}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-2.5 sm:gap-4 max-w-lg mx-auto">
            {/* Days Tile */}
            <div className="flex flex-col items-center justify-center p-3 sm:p-5 rounded-3xl bg-[#FFFDF9] border border-[#D4AF37]/50 shadow-[0_12px_28px_-8px_rgba(140,102,21,0.22)] aspect-[4/5] sm:aspect-square relative overflow-hidden group hover:border-[#D4AF37] transition-all">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#D4AF37] via-[#FFF7D6] to-[#D4AF37]" />
              <span className="text-2xl sm:text-4xl md:text-5xl font-serif font-black gold-text-shimmer tabular-nums leading-none">
                {timeLeft.days}
              </span>
              <span className="my-2 w-7 sm:w-9 h-0.5 bg-[#D4AF37]/60" />
              <span className="text-[11px] sm:text-xs font-sinhala font-bold text-[#786951] uppercase tracking-wider">
                {t.countdown.days}
              </span>
            </div>

            {/* Hours Tile */}
            <div className="flex flex-col items-center justify-center p-3 sm:p-5 rounded-3xl bg-[#FFFDF9] border border-[#D4AF37]/50 shadow-[0_12px_28px_-8px_rgba(140,102,21,0.22)] aspect-[4/5] sm:aspect-square relative overflow-hidden group hover:border-[#D4AF37] transition-all">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#D4AF37] via-[#FFF7D6] to-[#D4AF37]" />
              <span className="text-2xl sm:text-4xl md:text-5xl font-serif font-black gold-text-shimmer tabular-nums leading-none">
                {timeLeft.hours}
              </span>
              <span className="my-2 w-7 sm:w-9 h-0.5 bg-[#D4AF37]/60" />
              <span className="text-[11px] sm:text-xs font-sinhala font-bold text-[#786951] uppercase tracking-wider">
                {t.countdown.hours}
              </span>
            </div>

            {/* Minutes Tile */}
            <div className="flex flex-col items-center justify-center p-3 sm:p-5 rounded-3xl bg-[#FFFDF9] border border-[#D4AF37]/50 shadow-[0_12px_28px_-8px_rgba(140,102,21,0.22)] aspect-[4/5] sm:aspect-square relative overflow-hidden group hover:border-[#D4AF37] transition-all">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#D4AF37] via-[#FFF7D6] to-[#D4AF37]" />
              <span className="text-2xl sm:text-4xl md:text-5xl font-serif font-black gold-text-shimmer tabular-nums leading-none">
                {timeLeft.minutes}
              </span>
              <span className="my-2 w-7 sm:w-9 h-0.5 bg-[#D4AF37]/60" />
              <span className="text-[11px] sm:text-xs font-sinhala font-bold text-[#786951] uppercase tracking-wider">
                {t.countdown.minutes}
              </span>
            </div>

            {/* Seconds Tile */}
            <div className="flex flex-col items-center justify-center p-3 sm:p-5 rounded-3xl bg-[#FFFDF9] border border-[#D4AF37]/50 shadow-[0_12px_28px_-8px_rgba(140,102,21,0.22)] aspect-[4/5] sm:aspect-square relative overflow-hidden group hover:border-[#D4AF37] transition-all">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#D4AF37] via-[#FFF7D6] to-[#D4AF37]" />
              <span className="text-2xl sm:text-4xl md:text-5xl font-serif font-black gold-text-shimmer tabular-nums leading-none">
                {timeLeft.seconds}
              </span>
              <span className="my-2 w-7 sm:w-9 h-0.5 bg-[#D4AF37]/60" />
              <span className="text-[11px] sm:text-xs font-sinhala font-bold text-[#786951] uppercase tracking-wider">
                {t.countdown.seconds}
              </span>
            </div>
          </div>
        )}

        <p className="mt-7 text-xs sm:text-sm font-serif font-semibold text-[#786951]">
          {config.event.year} {isSinhala ? config.event.monthSi : config.event.monthEn} {config.event.day} — {isSinhala ? config.event.dayOfWeekSi : config.event.dayOfWeekEn}
        </p>
      </div>
    </section>
  );
};
