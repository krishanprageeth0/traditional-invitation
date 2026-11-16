"use client";

import React, { useState } from "react";
import { useRoyal } from "./ThemeAndLangContext";
import { RoyalDivider } from "./traditional/RoyalLiyawel";
import { MapPin, Navigation, CalendarDays, Car, Check } from "lucide-react";

export const VenueAndCalendar: React.FC = () => {
  const { t, config, isSinhala } = useRoyal();
  const [downloaded, setDownloaded] = useState(false);

  // Generate .ics calendar event
  const handleDownloadIcs = () => {
    const startDate = "20270418T091500";
    const endDate = "20270418T160000";
    const summary = `${config.couple.groom.nameEn} & ${config.couple.bride.nameEn}'s Royal Wedding`;
    const description = `Traditional Sri Lankan Wedding Celebration of ${config.couple.groom.fullNameEn} and ${config.couple.bride.fullNameEn}. Poruwa ceremony at 9:15 AM followed by banquet.`;
    const location = `${config.event.venue.nameEn}, ${config.event.venue.hallEn}, ${config.event.venue.addressEn}`;

    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Royal Heritage Sri Lankan Wedding Invitation//LK",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      "BEGIN:VEVENT",
      `UID:wedding-${Date.now()}@royalwedding.lk`,
      `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, "").split(".")[0]}Z`,
      `DTSTART;TZID=Asia/Colombo:${startDate}`,
      `DTEND;TZID=Asia/Colombo:${endDate}`,
      `SUMMARY:${summary}`,
      `DESCRIPTION:${description}`,
      `LOCATION:${location}`,
      "STATUS:CONFIRMED",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "kavinda-thilini-wedding.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  const googleCalendarUrl = () => {
    const title = encodeURIComponent(`${config.couple.groom.nameEn} & ${config.couple.bride.nameEn}'s Wedding`);
    const details = encodeURIComponent(`Royal Sri Lankan Poruwa Wedding of ${config.couple.groom.fullNameEn} & ${config.couple.bride.fullNameEn}. Poruwa Ceremony: 9:15 AM.`);
    const location = encodeURIComponent(`${config.event.venue.nameEn}, ${config.event.venue.hallEn}`);
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=20270418T034500Z/20270418T103000Z&details=${details}&location=${location}`;
  };

  return (
    <section id="venue" className="relative py-12 sm:py-20 px-4 sm:px-6 overflow-hidden bg-royal-parchment/30">
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <span className="inline-block text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-royal-goldDark mb-2">
          {t.venue.badge}
        </span>

        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-royal-goldDark mb-2">
          {t.venue.title}
        </h2>

        <RoyalDivider width={160} className="mb-10 opacity-80" />

        {/* Venue Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch text-left">
          {/* Details Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-royal-ivory border border-royal-gold/40 shadow-card-rich">
            <div>
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-royal-goldLight to-royal-gold flex items-center justify-center text-royal-ink shadow-md mb-6">
                <MapPin className="w-7 h-7 text-royal-ink" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-royal-goldDark mb-2 leading-tight">
                {isSinhala ? config.event.venue.nameSi : config.event.venue.nameEn}
              </h3>

              <div className="inline-block px-3 py-1 rounded-full bg-royal-gold/15 text-xs font-serif font-bold text-royal-goldDark mb-6 border border-royal-gold/30">
                {isSinhala ? config.event.venue.hallSi : config.event.venue.hallEn}
              </div>

              <div className="space-y-4 text-xs sm:text-sm font-sinhala text-royal-ink">
                <div>
                  <span className="font-bold text-royal-goldDark block mb-0.5">
                    {t.venue.addressLabel}:
                  </span>
                  <p>{isSinhala ? config.event.venue.addressSi : config.event.venue.addressEn}</p>
                </div>

                <div className="pt-2 border-t border-royal-gold/20 flex items-start gap-2 text-royal-muted">
                  <Car className="w-4 h-4 text-royal-gold mt-0.5 flex-shrink-0" />
                  <p>{isSinhala ? config.event.venue.parkingNoteSi : config.event.venue.parkingNoteEn}</p>
                </div>
              </div>
            </div>

            {/* Navigation Shortcuts */}
            <div className="mt-8 pt-6 border-t border-royal-gold/25 space-y-2.5">
              <a
                href={config.event.venue.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-serif font-bold text-xs sm:text-sm text-royal-ivory bg-gradient-to-r from-royal-gold via-royal-goldDark to-[#7A5C10] shadow-sm hover:shadow-royal-gold transition-all hover:scale-[1.02] active:scale-95"
              >
                <Navigation className="w-4 h-4" />
                <span>{t.venue.openGoogleMaps}</span>
              </a>

              <a
                href={config.event.venue.wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-serif font-semibold text-xs text-royal-ink bg-royal-parchment/60 border border-royal-gold/30 hover:bg-royal-parchment transition-all"
              >
                <span>{t.venue.openWaze}</span>
              </a>
            </div>
          </div>

          {/* Embedded Map & Add-to-Calendar */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="rounded-3xl overflow-hidden border border-royal-gold/40 shadow-card-rich min-h-[300px] sm:min-h-[360px] relative bg-royal-parchment">
              <iframe
                title="Venue Map"
                src={config.event.venue.embedMapUrl}
                className="w-full h-full min-h-[300px] sm:min-h-[360px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Calendar Integration Bar */}
            <div className="p-4 rounded-2xl bg-royal-ivory border border-royal-gold/30 flex flex-wrap items-center justify-between gap-3 shadow-sm">
              <div className="flex items-center gap-2.5 text-xs font-serif font-bold text-royal-goldDark">
                <CalendarDays className="w-5 h-5 text-royal-gold" />
                <span>{t.calendar.saveTheDate}</span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={googleCalendarUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-full bg-royal-parchment/60 hover:bg-royal-parchment text-xs font-serif font-semibold text-royal-ink border border-royal-gold/30 transition-all"
                >
                  Google
                </a>
                <button
                  type="button"
                  onClick={handleDownloadIcs}
                  className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-royal-gold to-royal-goldDark text-royal-ivory text-xs font-serif font-bold shadow-sm hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5"
                >
                  {downloaded ? <Check className="w-3.5 h-3.5" /> : null}
                  <span>{downloaded ? (isSinhala ? "බාගන්නා ලදී" : "Saved") : "Apple / .ics"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
