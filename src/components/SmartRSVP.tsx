"use client";

import React, { useState } from "react";
import { useRoyal } from "./ThemeAndLangContext";
import { RoyalDivider } from "./traditional/RoyalLiyawel";
import { Send, CheckCircle2, MessageCircle, UserCheck, HeartHandshake } from "lucide-react";

export const SmartRSVP: React.FC = () => {
  const { t, config, isSinhala } = useRoyal();

  const [name, setName] = useState("");
  const [attending, setAttending] = useState<"attending" | "declined">("attending");
  const [guests, setGuests] = useState(1);
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setIsSubmitting(true);
    try {
      await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          attendance: attending,
          guests: attending === "declined" ? 0 : guests,
          phone: phone.trim(),
          message: notes.trim(),
        }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // WhatsApp 1-Click Message Generator
  const sendWhatsAppRSVP = () => {
    if (!name.trim()) return;
    const groomPhone = config.rsvp.whatsappNumber;

    const messageText = isSinhala
      ? `ආයුබෝවන්! මම ${name.trim()} (කාවින්ද සහ තිළිණිගේ මංගල ආරාධනයට ප්‍රතිචාරය):
- තත්ත්වය: ${attending === "attending" ? "සතුටින් සහභාගි වෙමි" : "සහභාගි විය නොහැක"}
- පැමිණෙන ගණන: ${attending === "attending" ? `${guests} දෙනෙකි` : "0"}
- දුරකථන: ${phone || "සඳහන් කර නැත"}
${notes ? `- සටහන්: ${notes}` : ""}

ඔබ දෙපලට ජය මංගලම්!`
      : `Dear Kavinda & Thilini, this is ${name.trim()} regarding your wedding invitation:
- Attendance: ${attending === "attending" ? "Joyfully Attending" : "Regretfully Declining"}
- Guests: ${attending === "attending" ? guests : 0}
- Contact: ${phone || "N/A"}
${notes ? `- Notes: ${notes}` : ""}

Wishing you both a blessed union!`;

    const encoded = encodeURIComponent(messageText);
    window.open(`https://wa.me/${groomPhone}?text=${encoded}`, "_blank");
  };

  return (
    <section id="rsvp" className="relative py-12 sm:py-20 px-4 sm:px-6 overflow-hidden">
      <div className="relative z-10 max-w-xl mx-auto text-center">
        <span className="inline-block text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-royal-goldDark mb-2">
          {t.rsvp.badge}
        </span>

        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-royal-goldDark mb-2">
          {t.rsvp.title}
        </h2>

        <p className="text-xs sm:text-sm font-sinhala text-royal-muted mb-2">
          {t.rsvp.subtitle}
        </p>

        <p className="text-xs sm:text-sm font-serif font-bold text-royal-goldDark mb-4">
          {t.rsvp.deadlineNotice}: {isSinhala ? config.rsvp.deadlineSi : config.rsvp.deadlineEn}
        </p>

        <RoyalDivider width={140} className="mb-8 opacity-80" />

        {/* Card Form */}
        <div className="p-6 sm:p-10 rounded-3xl bg-royal-ivory border border-royal-gold/40 shadow-card-rich text-left">
          {submitted ? (
            <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
              <CheckCircle2 className="w-14 h-14 text-royal-goldDark mx-auto" />
              <h3 className="text-2xl font-serif font-bold text-royal-goldDark">
                {t.rsvp.successTitle}
              </h3>
              <p className="text-xs sm:text-sm font-sinhala text-royal-ink max-w-sm mx-auto leading-relaxed">
                {t.rsvp.successMessage}
              </p>

              {/* Optional WhatsApp backup confirmation */}
              <div className="pt-4">
                <button
                  type="button"
                  onClick={sendWhatsAppRSVP}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white text-xs font-serif font-bold shadow-sm hover:scale-105 active:scale-95 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{isSinhala ? "WhatsApp මඟින්ද තහවුරු කරන්න" : "Send Copy to Couple via WhatsApp"}</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-xs font-serif font-bold text-royal-goldDark mb-1.5 uppercase tracking-wider">
                  {t.rsvp.fullName} *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.rsvp.namePlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-royal-parchment/40 border border-royal-gold/40 text-royal-ink font-sinhala text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-royal-gold"
                />
              </div>

              {/* Attending Toggle */}
              <div>
                <label className="block text-xs font-serif font-bold text-royal-goldDark mb-2 uppercase tracking-wider">
                  {t.rsvp.attendingQuestion} *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setAttending("attending")}
                    className={`py-3 px-3 rounded-xl border text-xs sm:text-sm font-serif font-bold transition-all text-center flex items-center justify-center gap-1.5 ${
                      attending === "attending"
                        ? "bg-gradient-to-r from-royal-gold to-royal-goldDark text-royal-ivory border-royal-goldDark shadow-sm"
                        : "bg-royal-parchment/40 text-royal-ink border-royal-gold/30 hover:bg-royal-parchment/70"
                    }`}
                  >
                    <UserCheck className="w-4 h-4 flex-shrink-0" />
                    <span>{t.rsvp.attendingYes}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setAttending("declined")}
                    className={`py-3 px-3 rounded-xl border text-xs sm:text-sm font-serif font-bold transition-all text-center flex items-center justify-center gap-1.5 ${
                      attending === "declined"
                        ? "bg-royal-ink text-royal-ivory border-royal-ink shadow-sm"
                        : "bg-royal-parchment/40 text-royal-ink border-royal-gold/30 hover:bg-royal-parchment/70"
                    }`}
                  >
                    <HeartHandshake className="w-4 h-4 flex-shrink-0" />
                    <span>{t.rsvp.attendingNo}</span>
                  </button>
                </div>
              </div>

              {/* Guests Count */}
              {attending === "attending" && (
                <div>
                  <label className="block text-xs font-serif font-bold text-royal-goldDark mb-1.5 uppercase tracking-wider">
                    {t.rsvp.guestCount}
                  </label>
                  <div className="flex items-center justify-center gap-6 p-2 rounded-xl bg-royal-parchment/40 border border-royal-gold/30">
                    <button
                      type="button"
                      onClick={() => setGuests((g) => Math.max(1, g - 1))}
                      disabled={guests <= 1}
                      className="w-10 h-10 rounded-full border border-royal-gold/50 bg-royal-ivory text-royal-goldDark font-bold text-lg disabled:opacity-30 hover:bg-royal-gold/15 active:scale-95 transition-all"
                    >
                      -
                    </button>
                    <span className="font-serif text-3xl font-bold text-royal-goldDark w-12 text-center tabular-nums">
                      {guests}
                    </span>
                    <button
                      type="button"
                      onClick={() => setGuests((g) => Math.min(config.rsvp.maxGuests, g + 1))}
                      disabled={guests >= config.rsvp.maxGuests}
                      className="w-10 h-10 rounded-full border border-royal-gold/50 bg-royal-ivory text-royal-goldDark font-bold text-lg disabled:opacity-30 hover:bg-royal-gold/15 active:scale-95 transition-all"
                    >
                      +
                    </button>
                  </div>
                </div>
              )}

              {/* Phone */}
              <div>
                <label className="block text-xs font-serif font-bold text-royal-goldDark mb-1.5 uppercase tracking-wider">
                  {t.rsvp.phoneLabel}
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="07X XXX XXXX"
                  className="w-full px-4 py-2.5 rounded-xl bg-royal-parchment/40 border border-royal-gold/40 text-royal-ink font-sinhala text-sm focus:outline-none focus:ring-2 focus:ring-royal-gold"
                />
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-serif font-bold text-royal-goldDark mb-1.5 uppercase tracking-wider">
                  {t.rsvp.notesLabel}
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={t.rsvp.notesPlaceholder}
                  className="w-full px-4 py-2.5 rounded-xl bg-royal-parchment/40 border border-royal-gold/40 text-royal-ink font-sinhala text-sm focus:outline-none focus:ring-2 focus:ring-royal-gold resize-none"
                />
              </div>

              {/* Dual Submit Actions: Direct & WhatsApp */}
              <div className="pt-2 space-y-2.5">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-full font-serif font-bold text-sm text-royal-ivory bg-gradient-to-r from-royal-gold via-royal-goldDark to-[#7A5C10] shadow-royal-gold hover:shadow-royal-glow transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2 border border-royal-goldLight/40"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? "Submitting..." : t.rsvp.submitDirect}</span>
                </button>

                <button
                  type="button"
                  onClick={sendWhatsAppRSVP}
                  className="w-full py-2.5 px-6 rounded-full font-serif font-bold text-xs text-white bg-[#25D366] hover:bg-[#20BA5A] shadow-sm transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t.rsvp.sendViaWhatsApp}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
