"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, translations, Translations } from "@/translations";
import { royalWeddingConfig, WeddingConfig, RoyalTheme } from "@/config/wedding";

interface ThemeAndLangContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  theme: RoyalTheme;
  setTheme: (theme: RoyalTheme) => void;
  guestName: string | null;
  t: Translations;
  config: WeddingConfig;
  isSinhala: boolean;
}

const ThemeAndLangContext = createContext<ThemeAndLangContextType | undefined>(undefined);

export const ThemeAndLangProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>("si");
  const [theme, setThemeState] = useState<RoyalTheme>("swarna");
  const [guestName, setGuestName] = useState<string | null>(null);

  useEffect(() => {
    // 1. Language preference
    const savedLang = localStorage.getItem("royal_wedding_lang") as Language;
    if (savedLang === "si" || savedLang === "en") {
      setLangState(savedLang);
    }

    // 2. Theme preference
    const savedTheme = localStorage.getItem("royal_wedding_theme") as RoyalTheme;
    if (savedTheme === "swarna" || savedTheme === "nilame" || savedTheme === "haritha") {
      setThemeState(savedTheme);
    }

    // 3. VIP Personalized Guest Name from URL query (?to= or ?guest=)
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const toParam = params.get("to") || params.get("guest") || params.get("name");
      if (toParam) {
        // Clean up underscores and pluses
        const cleanName = decodeURIComponent(toParam).replace(/[_+]/g, " ");
        setGuestName(cleanName);
      }
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem("royal_wedding_lang", newLang);
    } catch {}
  };

  const toggleLang = () => {
    setLang(lang === "si" ? "en" : "si");
  };

  const setTheme = (newTheme: RoyalTheme) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem("royal_wedding_theme", newTheme);
    } catch {}
  };

  const isSinhala = lang === "si";
  const t = translations[lang];

  return (
    <ThemeAndLangContext.Provider
      value={{
        lang,
        setLang,
        toggleLang,
        theme,
        setTheme,
        guestName,
        t,
        config: royalWeddingConfig,
        isSinhala,
      }}
    >
      <div className={`theme-${theme} min-h-screen transition-colors duration-500`}>
        {children}
      </div>
    </ThemeAndLangContext.Provider>
  );
};

export const useRoyal = (): ThemeAndLangContextType => {
  const context = useContext(ThemeAndLangContext);
  if (!context) {
    throw new Error("useRoyal must be used within a ThemeAndLangProvider");
  }
  return context;
};
