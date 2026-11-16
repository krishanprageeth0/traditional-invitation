"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useRoyal } from "./ThemeAndLangContext";
import { RoyalDivider } from "./traditional/RoyalLiyawel";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

export const RoyalGallery: React.FC = () => {
  const { t, config, isSinhala } = useRoyal();
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const photos = config.gallery;

  const handleNext = useCallback(() => {
    setActiveIdx((prev) => (prev !== null ? (prev + 1) % photos.length : null));
  }, [photos.length]);

  const handlePrev = useCallback(() => {
    setActiveIdx((prev) => (prev !== null ? (prev - 1 + photos.length) % photos.length : null));
  }, [photos.length]);

  const handleClose = useCallback(() => {
    setActiveIdx(null);
  }, []);

  useEffect(() => {
    if (activeIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIdx, handleClose, handleNext, handlePrev]);

  return (
    <section id="gallery" className="relative py-12 sm:py-20 px-4 sm:px-6 overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <span className="inline-block text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-royal-goldDark mb-2">
          {t.gallery.badge}
        </span>

        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-royal-goldDark mb-2">
          {t.gallery.title}
        </h2>

        <p className="text-xs sm:text-sm font-sinhala text-royal-muted mb-4 max-w-xl mx-auto">
          {t.gallery.subtitle}
        </p>

        <RoyalDivider width={160} className="mb-10 opacity-80" />

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 auto-rows-[180px] sm:auto-rows-[240px]">
          {photos.map((item, index) => {
            const isTall = index === 0 || index === 3;
            return (
              <div
                key={item.id}
                onClick={() => setActiveIdx(index)}
                className={`group relative overflow-hidden cursor-pointer border-2 border-royal-gold/40 shadow-card-rich bg-royal-parchment ${
                  isTall ? "rounded-t-[100px] rounded-b-2xl row-span-2" : "rounded-2xl"
                }`}
              >
                <img
                  src={item.src}
                  alt={isSinhala ? item.titleSi : item.titleEn}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110 filter saturate-[1.05]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-royal-ink/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-serif font-bold text-royal-ivory">
                      {isSinhala ? item.titleSi : item.titleEn}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-royal-gold/30 backdrop-blur-md flex items-center justify-center text-royal-ivory">
                      <ZoomIn className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeIdx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={handleClose}
          className="fixed inset-0 z-[1000] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
        >
          <button
            type="button"
            onClick={handleClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2"
          >
            <X className="w-8 h-8" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 text-white/80 hover:text-white p-2"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 text-white/80 hover:text-white p-2"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
          <img
            src={photos[activeIdx].src}
            alt=""
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl border border-royal-gold/40 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};
