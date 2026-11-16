"use client";

import React, { useState } from "react";
import { RoyalScrollOpening } from "@/components/RoyalScrollOpening";
import { ThemeAndLangControls } from "@/components/PersonalizedPlaque";
import { RoyalHero } from "@/components/RoyalHero";
import { AuspiciousCountdown } from "@/components/AuspiciousCountdown";
import { NakathTimeline } from "@/components/NakathTimeline";
import { BlessingWall } from "@/components/BlessingWall";
import { VenueAndCalendar } from "@/components/VenueAndCalendar";
import { RoyalGallery } from "@/components/RoyalGallery";
import { SmartRSVP } from "@/components/SmartRSVP";
import { RoyalFooter } from "@/components/RoyalFooter";
import { SoundscapePlayer } from "@/components/SoundscapePlayer";
import { RoyalFloatingNav } from "@/components/RoyalFloatingNav";
import { DustAndPetals } from "@/components/traditional/DustAndPetals";

export default function Home() {
  const [scrollOpened, setScrollOpened] = useState(false);

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      {/* 1. Floating Golden Stardust & Delicate Falling Jasmine Petals */}
      <DustAndPetals />

      {/* 2. Royal Palm-Leaf Scroll Opening Experience */}
      <RoyalScrollOpening
        isOpen={scrollOpened}
        onOpen={() => setScrollOpened(true)}
      />

      {/* 3. Top Floating Bar: Theme Switcher & Language Switcher */}
      <header className="relative z-30 pt-6 px-4 flex justify-center items-center">
        <ThemeAndLangControls />
      </header>

      {/* 4. Royal Hero Section with Couple Monogram, Punkalasa & Arched Portrait */}
      <RoyalHero />

      {/* 5. Auspicious Countdown Timer Jewel Tiles */}
      <AuspiciousCountdown />

      {/* 6. Interactive Nakath & Poruwa Rituals Timeline (Auspicious Moments) */}
      <NakathTimeline />

      {/* 7. Virtual Aashirwada Mandapaya (Blessing Wall with Cultural Seals & Confetti) */}
      <BlessingWall />

      {/* 8. Venue Guide with Maps, Waze & Calendar Generation */}
      <VenueAndCalendar />

      {/* 9. Royal Photo Gallery with Lightbox */}
      <RoyalGallery />

      {/* 10. Smart RSVP with 1-Click WhatsApp Direct Confirmation */}
      <SmartRSVP />

      {/* 11. Royal Footer & Call Buttons */}
      <RoyalFooter />

      {/* 12. Pure Web Audio API Auspicious Soundscape */}
      <SoundscapePlayer />

      {/* 13. Floating Bottom Luxury Pill Navigation */}
      <RoyalFloatingNav />
    </main>
  );
}
