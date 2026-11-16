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

    try {
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#D4AF37", "#F6E79D", "#FFF4D0", "#B89222"],
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
        <span className="inline-block text-[11px] sm:text-xs font-serif font-bold tracking-[0.25em] uppercase text-[#8C6615] mb-2">
          {t.blessings.badge}
        </span>

        <h2 className="text-2xl sm:text-4xl font-serif font-black text-[#2C2214] mb-2">
          {t.blessings.title}
        </h2>

        <p className="text-xs sm:text-sm font-sinhala text-[#786951] mb-4 max-w-xl mx-auto">
          {t.blessings.subtitle}
        </p>

        <RoyalDivider width={160} className="mb-10 opacity-85" />

        {/* Input Form Card */}
        <div className="max-w-xl mx-auto p-7 sm:p-9 rounded-[32px] bg-[#FFFDF9] border border-[#D4AF37]/45 shadow-card-rich text-left mb-12 relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#D4AF37] via-[#FFF7D6] to-[#D4AF37]" />

          {submitted ? (
            <div className="py-8 text-center animate-in fade-in zoom-in-95 duration-300">
              <CheckCircle2 className="w-14 h-14 text-[#8C6615] mx-auto mb-2" />
              <h3 className="text-2xl font-serif font-bold text-[#8C6615] mb-1">
                {t.blessings.thankYou}
              </h3>
              <p className="text-xs sm:text-sm font-sinhala text-[#786951]">
                {t.blessings.blessingDelivered}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Seal Selection */}
              <div>
                <label className="block text-xs font-serif font-bold text-[#8C6615] mb-2 uppercase tracking-wider">
                  {t.blessings.pickSeal}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {seals.map((s, idx) => {
                    const isSelected = selectedSeal.textSi === s.textSi;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedSeal(s)}
                        className={`p-3 rounded-2xl border transition-all text-center ${
                          isSelected
                            ? "bg-gradient-to-b from-[#FFF7D6] to-[#F6E79D] border-2 border-[#D4AF37] shadow-md scale-105"
                            : "bg-[#FAF5E8] border-[#D4AF37]/30 hover:bg-[#FAF5E8]/80"
                        }`}
                      >
                        <span className="text-2xl block mb-1 drop-shadow-sm">{s.icon}</span>
                        <span className="text-[11px] font-sinhala font-extrabold text-[#2C2214] block leading-tight">
                          {isSinhala ? s.textSi : s.textEn}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="block text-xs font-serif font-bold text-[#8C6615] mb-1.5 uppercase tracking-wider">
                  {t.blessings.yourName} *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.blessings.namePlaceholder}
                  className="w-full px-4 py-3 rounded-2xl bg-[#FAF5E8] border border-[#D4AF37]/45 text-[#2C2214] font-sinhala text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                />
              </div>

              {/* Wish Message */}
              <div>
                <label className="block text-xs font-serif font-bold text-[#8C6615] mb-1.5 uppercase tracking-wider">
                  {isSinhala ? "ඔබගේ සුබපැතුම් පණිවුඩය" : "Your Wedding Wish"}
                </label>
                <textarea
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t.blessings.messagePlaceholder}
                  className="w-full px-4 py-3 rounded-2xl bg-[#FAF5E8] border border-[#D4AF37]/45 text-[#2C2214] font-sinhala text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 rounded-full font-serif font-extrabold text-sm text-[#1C140A] bg-gradient-to-r from-[#F6E79D] via-[#D4AF37] to-[#B89222] shadow-[0_10px_25px_rgba(212,175,55,0.4)] hover:shadow-[0_14px_30px_rgba(212,175,55,0.6)] transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 border border-[#FFF7D6]"
              >
                <Sparkles className="w-4 h-4 text-[#6D4E08]" />
                <span>{t.blessings.sendBlessing}</span>
              </button>
            </form>
          )}
        </div>

        {/* Live Blessing Feed Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-left">
          {blessings.map((b) => (
            <div
              key={b.id}
              className="p-6 rounded-3xl bg-[#FFFDF9] border border-[#D4AF37]/40 shadow-sm flex flex-col justify-between hover:border-[#D4AF37] transition-all relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl drop-shadow-sm">{b.seal}</span>
                    <span className="text-xs font-serif font-bold text-[#8C6615]">
                      {b.sealText}
                    </span>
                  </div>
                  <span className="text-[10px] text-[#8A7960] font-medium">{b.time}</span>
                </div>

                <p className="text-xs sm:text-sm font-sinhala text-[#2C2214] leading-relaxed italic">
                  &ldquo;{b.message}&rdquo;
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#D4AF37]/20 flex items-center justify-between text-xs font-serif font-extrabold text-[#8C6615]">
                <span>— {b.name}</span>
                <Heart className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
