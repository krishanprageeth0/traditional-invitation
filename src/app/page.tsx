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

export default function Home() {
  const [scrollOpened, setScrollOpened] = useState(false);

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      {/* 1. Royal Palm-Leaf Scroll Opening Experience */}
      <RoyalScrollOpening
        isOpen={scrollOpened}
        onOpen={() => setScrollOpened(true)}
      />

      {/* 2. Top Bar: Theme Switcher & Language Switcher */}
      <header className="relative z-30 pt-6 px-4 flex justify-center items-center">
        <ThemeAndLangControls />
      </header>

      {/* 3. Royal Hero Section */}
      <RoyalHero />

      {/* 4. Auspicious Countdown Timer */}
      <AuspiciousCountdown />

      {/* 5. Interactive Nakath & Poruwa Rituals Timeline (Innovative Feature) */}
      <NakathTimeline />

      {/* 6. Virtual Aashirwada Mandapaya (Guest Blessing Wall with Cultural Seals) */}
      <BlessingWall />

      {/* 7. Venue Guide with Maps, Waze & Calendar Generation */}
      <VenueAndCalendar />

      {/* 8. Royal Photo Gallery with Lightbox */}
      <RoyalGallery />

      {/* 9. Smart RSVP with 1-Click WhatsApp Direct Confirmation */}
      <SmartRSVP />

      {/* 10. Royal Footer & Call Buttons */}
      <RoyalFooter />

      {/* 11. Pure Web Audio API Auspicious Soundscape */}
      <SoundscapePlayer />

      {/* 12. Floating Bottom Pill Navigation */}
      <RoyalFloatingNav />
    </main>
  );
}
