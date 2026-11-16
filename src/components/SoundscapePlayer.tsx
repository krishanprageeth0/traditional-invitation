"use client";

import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { useRoyal } from "./ThemeAndLangContext";

export const SoundscapePlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const isPlayingRef = useRef(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const { t } = useRoyal();

  // Auspicious Sri Lankan Raga Notes (Golden Bells: C4, D4, F4, G4, A4, C5, D5)
  const bellFrequencies = [261.63, 293.66, 349.23, 392.0, 440.0, 523.25, 587.33];

  const playTempleBell = (ctx: AudioContext, freq: number, time: number) => {
    // 1. Fundamental chime
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    // 2. High Shimmer overtone (Mani Kinkini)
    const overtone = ctx.createOscillator();
    const overtoneGain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, time);

    overtone.type = "triangle";
    overtone.frequency.setValueAtTime(freq * 2.76, time);

    // Envelope
    gain.gain.setValueAtTime(0.001, time);
    gain.gain.exponentialRampToValueAtTime(0.12, time + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 2.8);

    overtoneGain.gain.setValueAtTime(0.001, time);
    overtoneGain.gain.exponentialRampToValueAtTime(0.03, time + 0.02);
    overtoneGain.gain.exponentialRampToValueAtTime(0.0001, time + 1.2);

    osc.connect(gain);
    overtone.connect(overtoneGain);
    gain.connect(ctx.destination);
    overtoneGain.connect(ctx.destination);

    osc.start(time);
    overtone.start(time);
    osc.stop(time + 3.0);
    overtone.stop(time + 3.0);
  };

  const scheduleMelody = () => {
    if (!audioCtxRef.current || !isPlayingRef.current) return;
    const ctx = audioCtxRef.current;
    const now = ctx.currentTime;

    // Peaceful 5-note melodic sequence
    const pattern = [0, 2, 4, 3, 5, 4, 1, 0];
    pattern.forEach((noteIdx, idx) => {
      const freq = bellFrequencies[noteIdx % bellFrequencies.length];
      playTempleBell(ctx, freq, now + idx * 0.75);
    });

    timerRef.current = setTimeout(() => {
      if (isPlayingRef.current) {
        scheduleMelody();
      }
    }, 7000);
  };

  const startAudio = () => {
    try {
      if (!audioCtxRef.current) {
        const AudioCtx =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (!AudioCtx) return;
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }
      isPlayingRef.current = true;
      setIsPlaying(true);
      scheduleMelody();
    } catch (e) {
      console.warn("Audio init prevented:", e);
    }
  };

  const stopAudio = () => {
    isPlayingRef.current = false;
    setIsPlaying(false);
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const toggleSound = () => {
    if (isPlaying) {
      stopAudio();
    } else {
      startAudio();
    }
  };

  useEffect(() => {
    // Listen for scroll unroll to start music automatically on user click
    const handleUnroll = () => {
      if (!isPlayingRef.current) {
        startAudio();
      }
    };

    window.addEventListener("royal:unroll-scroll", handleUnroll);
    return () => {
      window.removeEventListener("royal:unroll-scroll", handleUnroll);
      stopAudio();
    };
  }, []);

  return (
    <div className="fixed bottom-24 right-4 sm:right-6 z-[600]">
      <button
        type="button"
        onClick={toggleSound}
        aria-label={isPlaying ? t.audio.pause : t.audio.play}
        title={isPlaying ? t.audio.pause : t.audio.play}
        className={`group relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 active:scale-95 border ${
          isPlaying
            ? "bg-gradient-to-br from-royal-goldLight via-royal-gold to-royal-goldDark text-royal-ink border-royal-goldLight shadow-royal-gold animate-pulse"
            : "bg-royal-ivory/90 text-royal-goldDark border-royal-gold/40 backdrop-blur-md hover:bg-royal-ivory shadow-sm"
        }`}
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5" />
        ) : (
          <VolumeX className="w-5 h-5 opacity-75 group-hover:opacity-100" />
        )}
      </button>
    </div>
  );
};
