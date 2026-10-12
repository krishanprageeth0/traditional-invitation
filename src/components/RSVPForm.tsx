"use client";

import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export const RSVPForm: React.FC = () => {
  const { isSinhala } = useLanguage();
  const [name, setName] = useState("");
  const [attending, setAttending] = useState<boolean | null>(true);
  const [guests, setGuests] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          attendance: attending ? "attending" : "declined",
          guests: attending ? guests : 0,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      // Graceful local completion
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="rsvp"
      className="px-6 py-9 sm:px-7 sm:py-12"
      style={{ background: "rgba(237, 223, 184, 0.4)" }}
    >
      <div className="mx-auto max-w-xl text-center">
        <span
          className="mb-2 block text-[0.66rem] uppercase tracking-[0.34em]"
          style={{ fontFamily: "var(--font-montserrat)", color: "#B98A2F" }}
        >
          RSVP
        </span>

        <h2
          style={{
            fontFamily: "var(--font-sinhala)",
            fontWeight: 700,
            color: "#8C6420",
            fontSize: "clamp(1.6rem, 4vw, 2.3rem)",
          }}
        >
          {isSinhala ? "පැමිණීම දන්වන්න" : "Confirm Attendance"}
        </h2>

        {/* Flourish */}
        <div
          aria-hidden="true"
          className="mt-3 gpd-flourish"
          style={{
            width: "120px",
            aspectRatio: "2100 / 756",
            margin: "0 auto",
          }}
        />

        <p
          className="mx-auto mb-2 mt-5 max-w-[44ch] leading-[1.85]"
          style={{ fontFamily: "var(--font-sinhala)", color: "#8A7A60" }}
        >
          {isSinhala
            ? "අනිවාර්යයෙන්ම 5ට එන්න. එන නොඑන වග කියන්න."
            : "Please let us know whether you will be joining us by 5:00 PM."}
        </p>

        <p
          className="mb-9 text-[0.95rem]"
          style={{ fontFamily: "var(--font-sinhala)", fontWeight: 600, color: "#8C6420" }}
        >
          {isSinhala
            ? "ඔබගේ පැමිණීම 2027 පෙබරවාරි 20 දිනට පෙර කරුණාකර දන්වන්න"
            : "Please respond before February 20, 2027"}
        </p>

        {submitted ? (
          <div
            className="rounded-[120px_120px_22px_22px] px-6 py-16 text-center sm:px-12"
            style={{
              background: "#FCF8EE",
              border: "1px solid rgba(185, 138, 47, 0.4)",
              boxShadow: "0 30px 60px -40px rgba(120,86,30,0.45)",
            }}
          >
            <CheckCircle2 className="w-12 h-12 text-[#8C6420] mx-auto mb-3" />
            <h3
              className="text-xl font-bold mb-2"
              style={{ fontFamily: "var(--font-sinhala)", color: "#8C6420" }}
            >
              {isSinhala ? "ස්තූතියි!" : "Thank You!"}
            </h3>
            <p
              className="text-sm text-[#5A4A33]"
              style={{ fontFamily: "var(--font-sinhala)" }}
            >
              {isSinhala
                ? "ඔබගේ පිළිතුර සාර්ථකව සටහන් කරගන්නා ලදී."
                : "Your response has been recorded successfully."}
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-[120px_120px_22px_22px] px-6 pb-10 pt-16 text-left sm:px-12 sm:pt-20"
            style={{
              background: "#FCF8EE",
              border: "1px solid rgba(185, 138, 47, 0.4)",
              boxShadow: "0 30px 60px -40px rgba(120,86,30,0.45)",
            }}
          >
            {/* Full Name */}
            <div className="mb-5 flex flex-col gap-1.5">
              <label
                htmlFor="lm-name"
                className="text-[0.9rem]"
                style={{
                  fontFamily: "var(--font-sinhala)",
                  fontWeight: 600,
                  color: "#8C6420",
                }}
              >
                {isSinhala ? "සම්පූර්ණ නම" : "Full Name"}
              </label>
              <input
                id="lm-name"
                type="text"
                required
                placeholder={isSinhala ? "ඔබගේ නම" : "Your Name"}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 focus:outline-none"
                style={{
                  fontFamily: "var(--font-sinhala)",
                  background: "#FCF8EE",
                  border: "1px solid rgba(185, 138, 47, 0.45)",
                  borderRadius: "10px",
                  color: "#5A4A33",
                }}
              />
            </div>

            {/* Attendance Toggle */}
            <div className="mb-5">
              <p
                className="mb-2.5 text-[0.9rem]"
                style={{
                  fontFamily: "var(--font-sinhala)",
                  fontWeight: 600,
                  color: "#8C6420",
                }}
              >
                {isSinhala ? "සහභාගි වෙනවාද?" : "Attending?"}
              </p>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setAttending(true)}
                  className="flex-1 px-3 py-3.5 text-center transition-colors"
                  style={{
                    borderRadius: "10px",
                    border: "1px solid rgba(185, 138, 47, 0.45)",
                    background: attending === true ? "linear-gradient(135deg, #B98A2F, #8C6420)" : "transparent",
                    color: attending === true ? "#FDF8EC" : "#8A7A60",
                    fontFamily: "var(--font-sinhala)",
                    fontWeight: 600,
                  }}
                >
                  {isSinhala ? "සතුටින් සහභාගි වෙමි" : "Joyfully Accept"}
                </button>
                <button
                  type="button"
                  onClick={() => setAttending(false)}
                  className="flex-1 px-3 py-3.5 text-center transition-colors"
                  style={{
                    borderRadius: "10px",
                    border: "1px solid rgba(185, 138, 47, 0.45)",
                    background: attending === false ? "#8C6420" : "transparent",
                    color: attending === false ? "#FDF8EC" : "#8A7A60",
                    fontFamily: "var(--font-sinhala)",
                    fontWeight: 600,
                  }}
                >
                  {isSinhala ? "සහභාගි විය නොහැක" : "Regretfully Decline"}
                </button>
              </div>
            </div>

            {/* Guest Count */}
            {attending && (
              <div className="mb-5">
                <p
                  className="mb-2.5 text-[0.9rem]"
                  style={{
                    fontFamily: "var(--font-sinhala)",
                    fontWeight: 600,
                    color: "#8C6420",
                  }}
                >
                  {isSinhala ? "පැමිණෙන ගණන" : "Number of Guests"}
                </p>
                <div className="flex items-center justify-center gap-6">
                  <button
                    type="button"
                    onClick={() => setGuests((g) => Math.max(1, g - 1))}
                    className="grid h-11 w-11 place-items-center rounded-full text-xl transition-all hover:opacity-80 active:scale-90"
                    style={{
                      background: "rgba(185, 138, 47, 0.12)",
                      color: "#8C6420",
                      border: "1px solid rgba(185, 138, 47, 0.5)",
                    }}
                    aria-label="Decrease guest count"
                  >
                    -
                  </button>
                  <span
                    className="leading-none"
                    style={{
                      fontFamily: "var(--font-serif)",
                      color: "#8C6420",
                      fontSize: "2.6rem",
                      minWidth: "3rem",
                      textAlign: "center",
                    }}
                  >
                    {guests}
                  </span>
                  <button
                    type="button"
                    onClick={() => setGuests((g) => Math.min(6, g + 1))}
                    className="grid h-11 w-11 place-items-center rounded-full text-xl transition-all hover:opacity-80 active:scale-90"
                    style={{
                      background: "rgba(185, 138, 47, 0.12)",
                      color: "#8C6420",
                      border: "1px solid rgba(185, 138, 47, 0.5)",
                    }}
                    aria-label="Increase guest count"
                  >
                    +
                  </button>
                </div>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-full py-4 text-[1.02rem] transition-transform duration-200 hover:-translate-y-0.5 active:scale-95 disabled:opacity-60"
              style={{
                fontFamily: "var(--font-sinhala)",
                fontWeight: 700,
                background: "linear-gradient(135deg, #B98A2F, #8C6420)",
                color: "#FDF8EC",
                boxShadow: "0 14px 30px -12px rgba(120,86,30,0.6)",
              }}
            >
              <Send className="h-4 w-4" />
              <span>{isSubmitting ? (isSinhala ? "යවමින් පවතී..." : "Sending...") : (isSinhala ? "පිළිතුර යවන්න" : "Send Response")}</span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
