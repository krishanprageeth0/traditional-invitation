export type Language = "si" | "en";

export interface Translations {
  scroll: {
    royalBadge: string;
    greeting: string;
    unrollParchment: string;
    cordText: string;
    unrolledNotification: string;
    vipSalutation: string;
  };
  hero: {
    subHeader: string;
    groomTitle: string;
    brideTitle: string;
    auspiciousPrefix: string;
    joiningHands: string;
    royalVerse: string;
  };
  nakath: {
    badge: string;
    title: string;
    subtitle: string;
    activeNotice: string;
    upcomingNotice: string;
  };
  countdown: {
    badge: string;
    title: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
    weddingDayArrived: string;
  };
  blessings: {
    badge: string;
    title: string;
    subtitle: string;
    yourName: string;
    namePlaceholder: string;
    pickSeal: string;
    messagePlaceholder: string;
    sendBlessing: string;
    thankYou: string;
    blessingDelivered: string;
  };
  venue: {
    badge: string;
    title: string;
    hallLabel: string;
    addressLabel: string;
    openGoogleMaps: string;
    openWaze: string;
    parkingTitle: string;
  };
  calendar: {
    saveTheDate: string;
    downloadIcs: string;
    googleCalendar: string;
    addToCalendar: string;
  };
  rsvp: {
    badge: string;
    title: string;
    subtitle: string;
    deadlineNotice: string;
    fullName: string;
    namePlaceholder: string;
    attendingQuestion: string;
    attendingYes: string;
    attendingNo: string;
    guestCount: string;
    phoneLabel: string;
    notesLabel: string;
    notesPlaceholder: string;
    submitDirect: string;
    sendViaWhatsApp: string;
    successTitle: string;
    successMessage: string;
  };
  gallery: {
    badge: string;
    title: string;
    subtitle: string;
  };
  footer: {
    title: string;
    blessingLine: string;
    contactGroom: string;
    contactBride: string;
    craftNote: string;
  };
  audio: {
    play: string;
    pause: string;
    title: string;
  };
  nav: {
    invitation: string;
    nakath: string;
    blessings: string;
    venue: string;
    rsvp: string;
  };
}

export const translations: Record<Language, Translations> = {
  si: {
    scroll: {
      royalBadge: "ශ්‍රී රාජකීය මංගල පණිවුඩ තල්පත",
      greeting: "සාදර ගෞරවයෙන් කෙරෙන මංගල ඇරයුමයි",
      unrollParchment: "තල්පත ලිහා විවෘත කරන්න",
      cordText: "මංගල රන් නූල ලිහා ඇරයුම් පත කියවීමට මෙහි ඔබන්න",
      unrolledNotification: "මංගල පණිවුඩ තල්පත විවෘත විය",
      vipSalutation: "ගෞරවනීය අමුත්තාණන් වෙත",
    },
    hero: {
      subHeader: "දෙපවුලේ ආශිර්වාද මධ්‍යයේ සපැමිණෙන",
      groomTitle: "මනාල පාර්ශ්වය",
      brideTitle: "මනාලියගේ පාර්ශ්වය",
      auspiciousPrefix: "ශුභ මුහුර්තය",
      joiningHands: "සදාකාලික පෙම් බැම්මෙන් අතිනත ගෙන දිවි ගමන අරඹන්නෙමු.",
      royalVerse: "සිව්දිග දෙවි රැකවරණින්, මව්පිය ගුරු ආශිර්වාදයෙන්,\nඅප එක්වන මේ මංගල මොහොත සැමරීමට\nඔබගේ දයාබර සපැමිණීම ඉමහත් ගෞරවයෙන් ප්‍රාර්ථනා කරමු.",
    },
    nakath: {
      badge: "NAKATH CEREMONIES",
      title: "සාම්ප්‍රදායික පෝරු චාරිත්‍ර හා නැකත් පෙළ",
      subtitle: "පුරාණ ශ්‍රී ලාංකීය චාරිත්‍රානුකූල මංගල සිරිත් විරිත් කාලසටහන",
      activeNotice: "දැනට පැවැත්වෙන චාරිත්‍රය",
      upcomingNotice: "ඉදිරියට පැවැත්වෙන චාරිත්‍රය",
    },
    countdown: {
      badge: "COUNTDOWN",
      title: "සුභ මංගල මොහොත උදාවීමට",
      days: "දින",
      hours: "පැය",
      minutes: "මිනිත්තු",
      seconds: "තත්පර",
      weddingDayArrived: "සුබ මංගල දිනය උදාවිය! සැමට ජය මංගලම්!",
    },
    blessings: {
      badge: "AASHIRWADA MANDAPAYA",
      title: "ආශිර්වාද මණ්ඩපය",
      subtitle: "නව යුවලට ඔබගේ හදපිරි සුබපැතුම් සහ සාම්ප්‍රදායික ආශිර්වාද මුද්‍රාවක් තබන්න",
      yourName: "ඔබගේ නම",
      namePlaceholder: "ඔබගේ නම මෙහි සටහන් කරන්න",
      pickSeal: "ආශිර්වාද මුද්‍රාවක් තෝරන්න",
      messagePlaceholder: "නව යුවලට ඔබේ ආදරණීය සුබපැතුම මෙහි ලියන්න...",
      sendBlessing: "ආශිර්වාදය පුදකරන්න",
      thankYou: "ඔබට හදවතින්ම ස්තූතියි!",
      blessingDelivered: "ඔබගේ ආශිර්වාදය සාදරයෙන් භාරගන්නා ලදී.",
    },
    venue: {
      badge: "ROYAL VENUE",
      title: "මංගල උත්සව මණ්ඩපය",
      hallLabel: "උත්සව ශාලාව",
      addressLabel: "ලිපිනය",
      openGoogleMaps: "Google Maps මඟින් විවෘත කරන්න",
      openWaze: "Waze මඟින් මග සොයන්න",
      parkingTitle: "රථගාල සහ වාහන නැවැත්වීම",
    },
    calendar: {
      saveTheDate: "මංගල දිනය සටහන් කරගන්න",
      downloadIcs: "iCalendar (.ics) ගොනුව බාගන්න",
      googleCalendar: "Google Calendar වෙත එක්කරන්න",
      addToCalendar: "දින දර්ශනයට එක්කරන්න",
    },
    rsvp: {
      badge: "CONFIRM ATTENDANCE",
      title: "ඔබගේ පැමිණීම දන්වන්න",
      subtitle: "අපගේ විශේෂ දිනයේ ඔබේ පැමිණීම අපට මහත් ශක්තියකි",
      deadlineNotice: "කරුණාකර ඔබගේ පැමිණීම පහත දිනයට පෙර දන්වන්න",
      fullName: "සම්පූර්ණ නම",
      namePlaceholder: "ඔබගේ සම්පූර්ණ නම",
      attendingQuestion: "ඔබ සහභාගි වන්නේද?",
      attendingYes: "සතුටින් සහභාගි වෙමි",
      attendingNo: "සහභාගි විය නොහැක",
      guestCount: "පැමිණෙන ගණන (ඔබත් ඇතුළුව)",
      phoneLabel: "දුරකථන අංකය",
      notesLabel: "විශේෂ සටහන් හෝ ආහාර රුචිකත්වයන් (විකල්ප)",
      notesPlaceholder: "විශේෂ අවශ්‍යතා තිබේ නම් මෙහි සටහන් කරන්න...",
      submitDirect: "පිළිතුර සටහන් කරන්න",
      sendViaWhatsApp: "WhatsApp මඟින් ක්ෂණිකව දන්වන්න",
      successTitle: "පිළිතුර සාර්ථකයි!",
      successMessage: "ඔබගේ සහභාගීත්වය සාදරයෙන් සටහන් කරගතිමු. මංගල දිනයේ ඔබව දැකගැනීමට බලාපොරොත්තු වෙමු!",
    },
    gallery: {
      badge: "ROYAL MOMENTS",
      title: "මංගල සේයාරූ එකතුව",
      subtitle: "අපගේ ප්‍රේමනීය මතක සටහන් පෙළ",
    },
    footer: {
      title: "දෙපවුලේ හෘදයාංගම ආරාධනයයි",
      blessingLine: "චිරං ජයතු! සිරි සුභ මංගලම්!",
      contactGroom: "මනාලයා අමතන්න",
      contactBride: "මනාලිය අමතන්න",
      craftNote: "The Royal Heritage Digital Sri Lankan Wedding Experience",
    },
    audio: {
      play: "මංගල නාදය වාදනය කරන්න",
      pause: "නාදය නවත්වන්න",
      title: "ස්වදේශීය මංගල නාදය",
    },
    nav: {
      invitation: "ඇරයුම",
      nakath: "නැකත්",
      blessings: "ආශිර්වාද",
      venue: "ස්ථානය",
      rsvp: "RSVP",
    },
  },
  en: {
    scroll: {
      royalBadge: "ROYAL CULTURAL WEDDING MANUSCRIPT",
      greeting: "Cordially Request the Honour of Your Presence",
      unrollParchment: "Unroll Royal Scroll",
      cordText: "Click to untie the golden royal cord and unveil the invitation",
      unrolledNotification: "Royal manuscript unveiled",
      vipSalutation: "To our Distinguished Guest",
    },
    hero: {
      subHeader: "Blessed by Both Families, We Joyfully Invite You",
      groomTitle: "Groom's Family",
      brideTitle: "Bride's Family",
      auspiciousPrefix: "Auspicious Hour",
      joiningHands: "Join us as we unite in sacred matrimony and begin our lifelong journey.",
      royalVerse: "With the blessings of deities, guidance of parents and teachers,\nwe seek the warmth of your presence and heartfelt blessings\nas we pledge our sacred wedding vows.",
    },
    nakath: {
      badge: "NAKATH CEREMONIES",
      title: "Traditional Nakath & Poruwa Rituals",
      subtitle: "Auspicious Sri Lankan timeline and the deep cultural significance of each custom",
      activeNotice: "Currently Underway",
      upcomingNotice: "Next Auspicious Ceremony",
    },
    countdown: {
      badge: "COUNTDOWN",
      title: "Counting Down to the Sacred Union",
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
      weddingDayArrived: "The Wedding Day has arrived! Wishing boundless joy and prosperity!",
    },
    blessings: {
      badge: "AASHIRWADA MANDAPAYA",
      title: "The Royal Blessing Wall",
      subtitle: "Bestow an auspicious traditional seal and a warm message of congratulations upon the couple",
      yourName: "Your Full Name",
      namePlaceholder: "Enter your name",
      pickSeal: "Select an Auspicious Cultural Seal",
      messagePlaceholder: "Write your heartfelt wish for the newlyweds...",
      sendBlessing: "Present Your Blessing",
      thankYou: "Heartfelt Gratitude!",
      blessingDelivered: "Your sacred blessing has been warmly added to the royal registry.",
    },
    venue: {
      badge: "ROYAL VENUE",
      title: "The Wedding Celebration Venue",
      hallLabel: "Ballroom",
      addressLabel: "Address",
      openGoogleMaps: "Open in Google Maps",
      openWaze: "Navigate with Waze",
      parkingTitle: "Parking & Valet Services",
    },
    calendar: {
      saveTheDate: "Save the Date",
      downloadIcs: "Download iCalendar (.ics)",
      googleCalendar: "Add to Google Calendar",
      addToCalendar: "Add to Calendar",
    },
    rsvp: {
      badge: "CONFIRM ATTENDANCE",
      title: "Confirm Your Attendance",
      subtitle: "Your esteemed presence will grace our celebrations with joy and blessings",
      deadlineNotice: "Kindly respond before the designated deadline",
      fullName: "Full Name",
      namePlaceholder: "Your full name",
      attendingQuestion: "Will you be attending?",
      attendingYes: "Joyfully Attending",
      attendingNo: "Regretfully Unable to Attend",
      guestCount: "Number of Guests (including yourself)",
      phoneLabel: "Phone Number",
      notesLabel: "Dietary preferences or special notes (Optional)",
      notesPlaceholder: "Let us know of any special dietary notes...",
      submitDirect: "Submit RSVP",
      sendViaWhatsApp: "Send 1-Click WhatsApp RSVP",
      successTitle: "Response Received!",
      successMessage: "Thank you for confirming. We eagerly anticipate celebrating our union with you!",
    },
    gallery: {
      badge: "ROYAL MOMENTS",
      title: "The Photographic Gallery",
      subtitle: "Cherished pre-wedding moments and visual memories",
    },
    footer: {
      title: "With the Warmest Compliments of Both Families",
      blessingLine: "May peace, health, and prosperity be upon you all!",
      contactGroom: "Call Groom",
      contactBride: "Call Bride",
      craftNote: "The Royal Heritage Digital Sri Lankan Wedding Experience",
    },
    audio: {
      play: "Play Auspicious Melodies",
      pause: "Pause Melodies",
      title: "Traditional Heritage Melody",
    },
    nav: {
      invitation: "Invite",
      nakath: "Nakath",
      blessings: "Wishes",
      venue: "Venue",
      rsvp: "RSVP",
    },
  },
};
