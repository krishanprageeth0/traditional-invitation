"use client";

import React, { useState, useEffect } from "react";
import { useRoyal } from "./ThemeAndLangContext";
import { RoyalDivider } from "./traditional/RoyalLiyawel";
import { Send, Heart, Sparkles, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";

interface Blessing {
  id: string;
  name: string;
  seal: string;
  sealText: string;
  message: string;
  time: string;
}

export const BlessingWall: React.FC = () => {
  const { t, isSinhala } = useRoyal();

  const seals = [
    { icon: "🪷", textSi: "ජය මංගලම්!", textEn: "Jaya Mangalam!" },
    { icon: "🌾", textSi: "සිරි සුබ මංගලම්!", textEn: "Prosperity & Blessings" },
    { icon: "🪔", textSi: "දීර්ඝායු වේවා!", textEn: "Long Life & Health" },
    { icon: "🕊️", textSi: "සදා සතුට!", textEn: "Eternal Happiness" },
  ];

  const [selectedSeal, setSelectedSeal] = useState(seals[0]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [blessings, setBlessings] = useState<Blessing[]>([]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Initial sample blessings so the wall looks festive from day 1
    const initial: Blessing[] = [
      {
        id: "b1",
        name: isSinhala ? "ආචාර්ය නිමල් සේනාරත්න" : "Dr. Nimal Senaratne",
        seal: "🪷",
        sealText: isSinhala ? "ජය මංගලම්!" : "Jaya Mangalam!",
        message: isSinhala
          ? "නව යුවලට දෙවි රැකවරණින් යුතු දීර්ඝායුෂ සහ සදාකාලික සතුට පිරි යුග දිවියක් ප්‍රාර්ථනා කරමි!"
          : "Wishing the radiant couple a lifetime of boundless joy, harmony, and eternal love!",
        time: "Just now",
      },
      {
        id: "b2",
        name: isSinhala ? "මාලිනී වික්‍රමආරච්චි" : "Malini Wickramaarachchi",
        seal: "🌾",
        sealText: isSinhala ? "සිරි සුබ මංගලම්!" : "Prosperity & Blessings",
        message: isSinhala
          ? "දෙපවුලටම ආශිර්වාද වේවා! අලුත් කැදැල්ලට සෞභාග්‍යය උදාවේවා!"
          : "Heartiest congratulations and warmest blessings for a prosperous future together!",
        time: "10 mins ago",
      },
    ];

    try {
      const stored = localStorage.getItem("royal_wedding_blessings");
      if (stored) {
        setBlessings(JSON.parse(stored));
      } else {
        setBlessings(initial);
      }
    } catch {
      setBlessings(initial);
    }
  }, [isSinhala]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    // Trigger Golden Confetti Shower
    try {
      confetti({
        particleCount: 75,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#D4AF37", "#F6E79D", "#FFF4D0", "#6B1426"],
      });
    } catch {}

    const newBlessing: Blessing = {
      id: `blessing_${Date.now()}`,
      name: name.trim(),
      seal: selectedSeal.icon,
      sealText: isSinhala ? selectedSeal.textSi : selectedSeal.textEn,
      message: message.trim() || (isSinhala ? "නව යුවලට හදපිරි සුබපැතුම්!" : "Heartfelt congratulations to the happy couple!"),
      time: "Just now",
    };

    const updated = [newBlessing, ...blessings];
    setBlessings(updated);
    try {
      localStorage.setItem("royal_wedding_blessings", JSON.stringify(updated));
    } catch {}

    setSubmitted(true);
    setName("");
    setMessage("");
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="blessings" className="relative py-12 sm:py-20 px-4 sm:px-6 overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <span className="inline-block text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-royal-goldDark mb-2">
          {t.blessings.badge}
        </span>

        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-royal-goldDark mb-2">
          {t.blessings.title}
        </h2>

        <p className="text-xs sm:text-sm font-sinhala text-royal-muted mb-4 max-w-xl mx-auto">
          {t.blessings.subtitle}
        </p>

        <RoyalDivider width={160} className="mb-10 opacity-80" />

        {/* Input Form Card */}
        <div className="max-w-xl mx-auto p-6 sm:p-8 rounded-3xl bg-royal-ivory border border-royal-gold/40 shadow-card-rich text-left mb-12">
          {submitted ? (
            <div className="py-6 text-center animate-in fade-in zoom-in-95 duration-300">
              <CheckCircle2 className="w-12 h-12 text-royal-goldDark mx-auto mb-2" />
              <h3 className="text-xl font-serif font-bold text-royal-goldDark mb-1">
                {t.blessings.thankYou}
              </h3>
              <p className="text-xs sm:text-sm font-sinhala text-royal-muted">
                {t.blessings.blessingDelivered}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Seal Selection */}
              <div>
                <label className="block text-xs font-serif font-bold text-royal-goldDark mb-2 uppercase tracking-wider">
                  {t.blessings.pickSeal}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {seals.map((s, idx) => {
                    const isSelected = selectedSeal.textSi === s.textSi;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedSeal(s)}
                        className={`p-2.5 rounded-xl border text-center transition-all ${
                          isSelected
                            ? "bg-royal-gold/20 border-royal-gold shadow-sm scale-105"
                            : "bg-royal-parchment/30 border-royal-gold/25 hover:bg-royal-parchment/60"
                        }`}
                      >
                        <span className="text-2xl block mb-1">{s.icon}</span>
                        <span className="text-[11px] font-sinhala font-bold text-royal-ink block leading-tight">
                          {isSinhala ? s.textSi : s.textEn}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="block text-xs font-serif font-bold text-royal-goldDark mb-1.5 uppercase tracking-wider">
                  {t.blessings.yourName}
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.blessings.namePlaceholder}
                  className="w-full px-4 py-2.5 rounded-xl bg-royal-parchment/40 border border-royal-gold/40 text-royal-ink font-sinhala text-sm focus:outline-none focus:ring-2 focus:ring-royal-gold"
                />
              </div>

              {/* Wish Message */}
              <div>
                <label className="block text-xs font-serif font-bold text-royal-goldDark mb-1.5 uppercase tracking-wider">
                  {isSinhala ? "ඔබගේ සුබපැතුම් පණිවුඩය" : "Your Wedding Wish"}
                </label>
                <textarea
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t.blessings.messagePlaceholder}
                  className="w-full px-4 py-2.5 rounded-xl bg-royal-parchment/40 border border-royal-gold/40 text-royal-ink font-sinhala text-sm focus:outline-none focus:ring-2 focus:ring-royal-gold resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-full font-serif font-bold text-sm text-royal-ivory bg-gradient-to-r from-royal-gold via-royal-goldDark to-[#7A5C10] shadow-royal-gold hover:shadow-royal-glow transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 border border-royal-goldLight/40"
              >
                <Sparkles className="w-4 h-4 text-royal-goldLight" />
                <span>{t.blessings.sendBlessing}</span>
              </button>
            </form>
          )}
        </div>

        {/* Live Blessing Feed Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          {blessings.map((b) => (
            <div
              key={b.id}
              className="p-5 rounded-2xl bg-royal-ivory border border-royal-gold/30 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{b.seal}</span>
                    <span className="text-xs font-serif font-bold text-royal-goldDark">
                      {b.sealText}
                    </span>
                  </div>
                  <span className="text-[10px] text-royal-muted">{b.time}</span>
                </div>

                <p className="text-xs sm:text-sm font-sinhala text-royal-ink leading-relaxed italic">
                  &ldquo;{b.message}&rdquo;
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-royal-gold/15 flex items-center justify-between text-xs font-serif font-bold text-royal-goldDark">
                <span>— {b.name}</span>
                <Heart className="w-3.5 h-3.5 text-royal-gold fill-royal-gold" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
