"use client";

import React from "react";
import { useRoyal } from "./ThemeAndLangContext";
import { Sparkles, Crown } from "lucide-react";

export const PersonalizedPlaque: React.FC = () => {
  const { guestName, isSinhala } = useRoyal();

  if (!guestName) return null;

  return (
    <div className="relative mx-auto my-6 max-w-xl px-4 animate-in fade-in slide-in-from-top-4 duration-700">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-royal-goldLight/20 via-royal-gold/15 to-royal-goldLight/20 border-2 border-royal-gold/60 p-5 text-center shadow-royal-gold backdrop-blur-md">
        {/* Decorative corner dots */}
        <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-royal-gold" />
        <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-royal-gold" />
        <div className="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-royal-gold" />
        <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-royal-gold" />

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-royal-gold/20 text-royal-goldDark text-xs font-semibold tracking-widest uppercase mb-2">
          <Crown className="w-3.5 h-3.5 text-royal-gold" />
          <span>{isSinhala ? "විශේෂිත රාජකීය ආරාධනය" : "Distinguished Guest Invitation"}</span>
        </div>

        <p className="text-xs sm:text-sm font-sinhala text-royal-muted">
          {isSinhala ? "ගෞරවනීය" : "Warmly Welcoming"}
        </p>

        <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-royal-goldDark my-1 tracking-wide">
          {guestName}
        </h3>

        <p className="text-xs sm:text-sm font-sinhala text-royal-ink font-medium">
          {isSinhala
            ? "ඇතුළු පවුලේ සැමට අපගේ මංගලෝත්සවය සඳහා සාදරයෙන් ඇරයුම් කරමු."
            : "and Family are cordially invited to celebrate our wedding."}
        </p>
      </div>
    </div>
  );
};

export const ThemeAndLangControls: React.FC<{ className?: string }> = ({ className = "" }) => {
  const { lang, setLang, theme, setTheme } = useRoyal();

  return (
    <div className={`flex flex-wrap items-center justify-center gap-2 sm:gap-3 ${className}`}>
      {/* Language Switcher */}
      <div className="inline-flex items-center p-1 rounded-full bg-royal-ivory/90 border border-royal-gold/40 shadow-sm backdrop-blur-md">
        <button
          type="button"
          onClick={() => setLang("si")}
          className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
            lang === "si"
              ? "bg-gradient-to-r from-royal-gold to-royal-goldDark text-royal-ivory shadow-sm"
              : "text-royal-goldDark hover:text-royal-ink"
          }`}
        >
          සිංහල
        </button>
        <button
          type="button"
          onClick={() => setLang("en")}
          className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
            lang === "en"
              ? "bg-gradient-to-r from-royal-gold to-royal-goldDark text-royal-ivory shadow-sm"
              : "text-royal-goldDark hover:text-royal-ink"
          }`}
        >
          English
        </button>
      </div>

      {/* Theme Picker Pill */}
      <div className="inline-flex items-center gap-1 p-1 rounded-full bg-royal-ivory/90 border border-royal-gold/40 shadow-sm backdrop-blur-md text-[11px] font-semibold text-royal-goldDark">
        <button
          type="button"
          onClick={() => setTheme("swarna")}
          title="ස්වර්ණ තේමාව (Gold & Ivory)"
          className={`px-2.5 py-1 rounded-full transition-all ${
            theme === "swarna"
              ? "bg-royal-gold text-royal-ink font-bold shadow-sm"
              : "hover:bg-black/5"
          }`}
        >
          ස්වර්ණ
        </button>
        <button
          type="button"
          onClick={() => setTheme("nilame")}
          title="නීලමේ තේමාව (Kandyan Maroon & Gold)"
          className={`px-2.5 py-1 rounded-full transition-all ${
            theme === "nilame"
              ? "bg-royal-maroon text-royal-goldLight font-bold shadow-sm"
              : "hover:bg-black/5"
          }`}
        >
          නීලමේ
        </button>
        <button
          type="button"
          onClick={() => setTheme("haritha")}
          title="හරිත තේමාව (Emerald & Champagne)"
          className={`px-2.5 py-1 rounded-full transition-all ${
            theme === "haritha"
              ? "bg-royal-emerald text-royal-goldLight font-bold shadow-sm"
              : "hover:bg-black/5"
          }`}
        >
          හරිත
        </button>
      </div>
    </div>
  );
};
