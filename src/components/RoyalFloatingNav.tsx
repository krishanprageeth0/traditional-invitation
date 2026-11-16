"use client";

import React, { useState, useEffect } from "react";
import { useRoyal } from "./ThemeAndLangContext";
import { Scroll, Clock, Heart, MapPin, Send } from "lucide-react";

export const RoyalFloatingNav: React.FC = () => {
  const { t } = useRoyal();
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "nakath", "blessings", "venue", "rsvp"];
      const scrollPos = window.scrollY + 200;

      for (const s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(s);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: t.nav.invitation, icon: Scroll },
    { id: "nakath", label: t.nav.nakath, icon: Clock },
    { id: "blessings", label: t.nav.blessings, icon: Heart },
    { id: "venue", label: t.nav.venue, icon: MapPin },
    { id: "rsvp", label: t.nav.rsvp, icon: Send },
  ];

  return (
    <nav
      aria-label="Royal navigation"
      className="fixed bottom-4 left-1/2 z-[500] flex -translate-x-1/2 items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full bg-royal-ivory/95 border border-royal-gold/50 shadow-royal-gold backdrop-blur-md"
      style={{ marginBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeSection === item.id;

        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            aria-label={item.label}
            title={item.label}
            className={`flex items-center gap-1 px-3 py-2 rounded-full transition-all duration-300 text-xs font-serif font-bold ${
              isActive
                ? "bg-gradient-to-r from-royal-gold to-royal-goldDark text-royal-ivory shadow-sm -translate-y-0.5"
                : "text-royal-goldDark hover:bg-royal-gold/15"
            }`}
          >
            <Icon className="w-4 h-4" />
            <span className="hidden sm:inline">{item.label}</span>
          </a>
        );
      })}
    </nav>
  );
};
