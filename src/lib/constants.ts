export const COUPLE = {
  groom: "SANDEEP",
  bride: "ARDRA",
  displayDate: "31st May",
  displayDateShort: "31.05.2026",
  displayDateSlash: "31/05/2026",
  displayTime: "10:30 AM",
  introSubtitle: "Our Wedding on 31st May",
};

export const GROOM = {
  name: COUPLE.groom,
  parents: "S/O SURESH and SASIKALA SURESH.",
};

export const BRIDE = {
  name: COUPLE.bride,
  parents: "D/O NARAYANAN and SHEEBA NARAYANAN.",
};

export const INVITE = {
  familiesLine: "Together with their families",
  message:
    "We cordially invite you to celebrate our special day with us.",
};

export const WEDDING_EVENT = {
  title: "Wedding",
  date: COUPLE.displayDateSlash,
  time: `${COUPLE.displayTime} onwards`,
  venueName: "MEENAKSHI MAHAL",
  venueLines: ["Polpully,", "Palakkad"],
};

export const VENUE = {
  name: WEDDING_EVENT.venueName,
  address: "Meenakshi Mahal, Polpully, Palakkad, Kerala",
  mapUrl:
    "https://maps.app.goo.gl/XgNV2BhwpX23L5FB6",
};

/** Exactly 5 gallery photos — replace src paths with your own images */
export const GALLERY_IMAGES = [
  { src: "/images/couple-intro.png", alt: "Sandeep and Ardra — wedding portrait" },
  {
    src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80",
    alt: "Wedding rings",
  },
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
    alt: "Wedding bouquet",
  },
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    alt: "Couple portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80",
    alt: "Wedding venue",
  },
] as const;

export const THANK_YOU = {
  title: "THANK YOU",
  subtitle: "FOR JOINING OUR SPECIAL DAY",
};

export const SHARE_LINKS = {
  whatsapp: `https://wa.me/?text=${encodeURIComponent(
    `You're invited to ${COUPLE.groom} & ${COUPLE.bride}'s wedding on ${COUPLE.displayDate}!`
  )}`,
  instagram: "https://www.instagram.com/",
  facebook: "https://www.facebook.com/sharer/sharer.php?u=",
};

export const MUSIC_URL = "/music.mp3";

