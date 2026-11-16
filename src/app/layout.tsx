import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeAndLangProvider } from "@/components/ThemeAndLangContext";

export const viewport: Viewport = {
  themeColor: "#D4AF37",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Kavinda & Thilini — Royal Heritage Sri Lankan Wedding Invitation",
  description:
    "Cordially inviting you to celebrate the traditional Sri Lankan Poruwa wedding celebration of Kavinda & Thilini at Shangri-La Colombo.",
  keywords: [
    "Sri Lankan Wedding",
    "Royal Poruwa Ceremony",
    "Sinhala Wedding Invitation",
    "Traditional Wedding Invitation",
    "Shangri-La Colombo",
    "Kavinda and Thilini",
  ],
  authors: [{ name: "Kavinda & Thilini" }],
  openGraph: {
    title: "Kavinda & Thilini — The Royal Wedding Invitation",
    description:
      "Join us as we step onto the sacred Poruwa on Sunday, 18th April 2027 at Shan Ballroom, Shangri-La Colombo.",
    type: "website",
    locale: "si_LK",
    alternateLocale: "en_US",
    images: [
      {
        url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Kavinda & Thilini Royal Wedding Invitation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kavinda & Thilini — Royal Wedding Invitation",
    description: "Traditional Sri Lankan Poruwa Wedding Invitation on April 18, 2027.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Royal Wedding of Kavinda & Thilini",
    startDate: "2027-04-18T09:15:00+05:30",
    endDate: "2027-04-18T16:00:00+05:30",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: "Shangri-La Hotel Colombo (Shan Ballroom)",
      address: {
        "@type": "PostalAddress",
        streetAddress: "No. 1, Galle Face",
        addressLocality: "Colombo",
        postalCode: "00200",
        addressCountry: "LK",
      },
    },
    description:
      "The Royal Sri Lankan Poruwa ceremony and wedding banquet of Kavinda and Thilini.",
  };

  return (
    <html lang="si" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen text-royal-ink antialiased selection:bg-royal-gold/30 selection:text-royal-goldDark">
        <ThemeAndLangProvider>{children}</ThemeAndLangProvider>
      </body>
    </html>
  );
}
