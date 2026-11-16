/**
 * The Royal Heritage Sri Lankan Wedding Configuration
 * 100% Original, completely customizable configuration file.
 */

export type RoyalTheme = "swarna" | "nilame" | "haritha";

export interface NakathEvent {
  id: string;
  timeSi: string;
  timeEn: string;
  titleSi: string;
  titleEn: string;
  meaningSi: string;
  meaningEn: string;
  icon: string;
}

export interface WeddingConfig {
  couple: {
    groom: {
      nameSi: string;
      nameEn: string;
      fullNameSi: string;
      fullNameEn: string;
      parentsSi: string;
      parentsEn: string;
      phone: string;
      whatsapp: string;
    };
    bride: {
      nameSi: string;
      nameEn: string;
      fullNameSi: string;
      fullNameEn: string;
      parentsSi: string;
      parentsEn: string;
      phone: string;
      whatsapp: string;
    };
  };
  event: {
    weddingDateIso: string; // ISO 8601
    year: string;
    monthSi: string;
    monthEn: string;
    day: string;
    dayOfWeekSi: string;
    dayOfWeekEn: string;
    auspiciousNoteSi: string;
    auspiciousNoteEn: string;
    venue: {
      nameSi: string;
      nameEn: string;
      hallSi: string;
      hallEn: string;
      addressSi: string;
      addressEn: string;
      googleMapsUrl: string;
      wazeUrl: string;
      embedMapUrl: string;
      parkingNoteSi: string;
      parkingNoteEn: string;
    };
  };
  nakathTimeline: NakathEvent[];
  rsvp: {
    deadlineSi: string;
    deadlineEn: string;
    maxGuests: number;
    whatsappNumber: string;
  };
  gallery: {
    id: string;
    titleSi: string;
    titleEn: string;
    src: string;
    alt: string;
    span?: string;
  }[];
}

export const royalWeddingConfig: WeddingConfig = {
  couple: {
    groom: {
      nameSi: "කාවින්ද",
      nameEn: "Kavinda",
      fullNameSi: "කාවින්ද ප්‍රබෝධ වික්‍රමසිංහ",
      fullNameEn: "Kavinda Prabodha Wickramasinghe",
      parentsSi: "ධර්මදාස වික්‍රමසිංහ මැතිතුමා සහ චන්ද්‍රා වික්‍රමසිංහ මැතිණියගේ ආදරණීය පුත්",
      parentsEn: "Beloved son of Mr. Dharmadasa Wickramasinghe & Mrs. Chandra Wickramasinghe",
      phone: "+94771234567",
      whatsapp: "94771234567",
    },
    bride: {
      nameSi: "තිළිණි",
      nameEn: "Thilini",
      fullNameSi: "තිළිණි නිම්සරා දිසානායක",
      fullNameEn: "Thilini Nimsara Dissanayake",
      parentsSi: "චන්ද්‍රසිරි දිසානායක මැතිතුමා සහ කුසුම් දිසානායක මැතිණියගේ ආදරණීය දියණිය",
      parentsEn: "Beloved daughter of Mr. Chandrasiri Dissanayake & Mrs. Kusum Dissanayake",
      phone: "+94719876543",
      whatsapp: "94719876543",
    },
  },
  event: {
    weddingDateIso: "2027-04-18T09:15:00+05:30",
    year: "2027",
    monthSi: "බක් මස (අප්‍රේල්)",
    monthEn: "April",
    day: "18",
    dayOfWeekSi: "ඉරිදා",
    dayOfWeekEn: "Sunday",
    auspiciousNoteSi: "දෙදහස් විසිහතක් වූ බක් මස දහඅට වන ඉරිදා පෙරවරු 9.15 ට යෙදෙන සුබ මොහොතින්",
    auspiciousNoteEn: "On the auspicious morning of Sunday, 18th April 2027 at 9:15 AM",
    venue: {
      nameSi: "ෂැංග්‍රි-ලා හෝටලය, කොළඹ",
      nameEn: "Shangri-La Hotel, Colombo",
      hallSi: "ශාන් බෝල්රූම් (Shan Ballroom)",
      hallEn: "Shan Ballroom",
      addressSi: "අංක 1, ගාලු මුවදොර, කොළඹ 02",
      addressEn: "No. 1, Galle Face, Colombo 02, Sri Lanka",
      googleMapsUrl: "https://maps.google.com/?q=Shangri-La+Colombo",
      wazeUrl: "https://waze.com/ul?q=Shangri-La+Colombo",
      embedMapUrl: "https://maps.google.com/maps?q=Shangri-La+Colombo&z=15&output=embed",
      parkingNoteSi: "හෝටල් පරිශ්‍රයේ ප්‍රමාණවත් රථගාල සහ Valet Parking පහසුකම් සලසා ඇත.",
      parkingNoteEn: "Complimentary hotel & valet parking is arranged for all invited guests.",
    },
  },
  nakathTimeline: [
    {
      id: "departure",
      timeSi: "පෙ.ව. 08:30",
      timeEn: "08:30 AM",
      titleSi: "මනාලිය නිවසින් පිටත්වීම",
      titleEn: "Departure of the Bride",
      meaningSi: "දෙමාපිය ආශිර්වාද මැද නව දිවි ගමනට පියනැගීම",
      meaningEn: "Stepping forth into married life with parents' sacred blessings",
      icon: "Sparkles",
    },
    {
      id: "poruwa-ascent",
      timeSi: "පෙ.ව. 09:15",
      timeEn: "09:15 AM",
      titleSi: "මංගල පෝරුවට නැගීම (සුබ නැකත)",
      titleEn: "Ascending the Sacred Poruwa",
      meaningSi: "සිව්දිග දෙවියන් සහ මංගල අෂ්ටක ආශිර්වාද මධ්‍යයේ පෝරුවට සම්ප්‍රාප්ත වීම",
      meaningEn: "The crowning auspicious moment accompanied by Magul Bera and traditional Ashtaka",
      icon: "Sun",
    },
    {
      id: "water-blessing",
      timeSi: "පෙ.ව. 09:35",
      timeEn: "09:35 AM",
      titleSi: "අතපැන් වැක්කිරීම හා මුදු පැළඳවීම",
      titleEn: "Sacred Water Blessing & Rings",
      meaningSi: "කෙන්ඩියෙන් පැන් වත්කර සදාකාලික බැඳීම සහතික කිරීම",
      meaningEn: "The maternal uncle pours water from the sacred Kendra to seal eternal union",
      icon: "Droplets",
    },
    {
      id: "kiribath",
      timeSi: "පෙ.ව. 10:15",
      timeEn: "10:15 AM",
      titleSi: "මංගල කිරිබත් කැවීම හා පහන් දැල්වීම",
      titleEn: "Sharing of Milk Rice & Traditional Oil Lamp",
      meaningSi: "සෞභාග්‍යය හා ප්‍රීතිය ප්‍රාර්ථනා කරමින් සාම්ප්‍රදායික පහන දැල්වීම",
      meaningEn: "Lighting the ceremonial oil lamp for prosperity, light, and enduring harmony",
      icon: "Flame",
    },
    {
      id: "banquet",
      timeSi: "ප.ව. 12:30",
      timeEn: "12:30 PM",
      titleSi: "රාජකීය මංගල භෝජන සංග්‍රහය",
      titleEn: "The Royal Wedding Banquet",
      meaningSi: "ආදරණීය ඥාති හිතමිතුරන් සමඟ ප්‍රීති උත්සවය සහ භෝජනය",
      meaningEn: "Celebration, fine cuisine, and fellowship with beloved family & friends",
      icon: "Utensils",
    },
  ],
  rsvp: {
    deadlineSi: "2027 මාර්තු මස 25 වන දිනට පෙර",
    deadlineEn: "Before March 25, 2027",
    maxGuests: 6,
    whatsappNumber: "94771234567",
  },
  gallery: [
    {
      id: "g1",
      titleSi: "ප්‍රේමනීය බැඳීම",
      titleEn: "A Sacred Bond",
      src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=80",
      alt: "Couple in traditional wedding attire",
      span: "row-span-2",
    },
    {
      id: "g2",
      titleSi: "රන්වන් මතක",
      titleEn: "Golden Memories",
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
      alt: "Wedding celebration details",
    },
    {
      id: "g3",
      titleSi: "ආදර සිනහව",
      titleEn: "Moments of Joy",
      src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80",
      alt: "Couple in romantic embrace",
    },
    {
      id: "g4",
      titleSi: "සදාකාලික වූ දිවුරුම",
      titleEn: "The Lifelong Promise",
      src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=900&q=80",
      alt: "Wedding rings and floral garlands",
      span: "row-span-2",
    },
    {
      id: "g5",
      titleSi: "සෙනෙහසේ ගමන",
      titleEn: "Journey of Love",
      src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=900&q=80",
      alt: "Couple smiling joyfully",
    },
    {
      id: "g6",
      titleSi: "ජය මංගලම්",
      titleEn: "Jaya Mangalam",
      src: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80",
      alt: "Sacred wedding rituals and auspicious blessing",
    },
  ],
};
