// D3 THE GRAND INTERIOR MALL — CENTRAL CONFIGURATION
// All details are easily editable placeholders for when official business information is updated.

export interface SiteConfig {
  brand: {
    name: string;
    shortName: string;
    monogram: string;
    tagline: string;
    headline: string;
    supportingCopy: string;
    descriptor: string;
    footerStatement: string;
  };
  contact: {
    phoneDisplay: string;
    phoneRaw: string;
    whatsappNumber: string; // international format without + or spaces, e.g. '919876543210'
    email: string;
    addressDisplay: string;
    addressArea: string;
    cityState: string;
    googleMapsUrl: string;
    googleMapsEmbedQuery: string;
    openingHours: {
      days: string;
      hours: string;
    }[];
  };
  social: {
    instagram: string;
    pinterest: string;
    linkedin: string;
    youtube?: string;
  };
  whatsappMessages: {
    general: string;
    planVisit: string;
    livingSpaces: string;
    bedroomComfort: string;
    kitchensDining: string;
    lightingAmbience: string;
    surfacesMaterials: string;
    decorFinishes: string;
    materialInquiry: string;
    galleryLook: string;
  };
}

export const siteConfig: SiteConfig = {
  brand: {
    name: "D3 The Grand Interior Mall",
    shortName: "D3",
    monogram: "D3",
    tagline: "Spaces that inspire. Living that elevates.",
    headline: "Spaces that inspire.\nLiving that elevates.",
    supportingCopy: "Discover a world of interiors, materials, furnishings and ideas designed to transform the way you experience home.",
    descriptor: "Curated Interior Showroom & Living Destination",
    footerStatement: "Where inspiration meets the art of living.",
  },
  contact: {
    phoneDisplay: "+91 98765 43210",
    phoneRaw: "+919876543210",
    whatsappNumber: "919876543210", // EDITABLE: Set client's actual WhatsApp number here
    email: "concierge@d3interiormall.com",
    addressDisplay: "D3 The Grand Interior Mall, Prime Design Boulevard",
    addressArea: "Flagship Showroom District",
    cityState: "India",
    googleMapsUrl: "https://maps.google.com/?q=D3+The+Grand+Interior+Mall",
    googleMapsEmbedQuery: "luxury+interior+showroom",
    openingHours: [
      { days: "Monday – Saturday", hours: "10:00 AM – 8:30 PM" },
      { days: "Sunday & Public Holidays", hours: "11:00 AM – 7:30 PM" }
    ],
  },
  social: {
    instagram: "https://instagram.com/d3interiormall",
    pinterest: "https://pinterest.com/d3interiormall",
    linkedin: "https://linkedin.com/company/d3interiormall",
  },
  whatsappMessages: {
    general: "Hello, I would like to know more about D3 The Grand Interior Mall.",
    planVisit: "Hello, I would like to plan a visit to D3 The Grand Interior Mall showroom.",
    livingSpaces: "Hello, I am interested in exploring Living Space furnishings and layouts at D3.",
    bedroomComfort: "Hello, I would like to know more about Bedroom & Comfort collections at D3.",
    kitchensDining: "Hello, I am interested in Kitchen & Dining concepts at D3.",
    lightingAmbience: "Hello, I would like to explore Architectural Lighting & Ambience at D3.",
    surfacesMaterials: "Hello, I would like to inquire about Surfaces, Stone and Material finishes at D3.",
    decorFinishes: "Hello, I would like to view Décor and Finishing Accents at D3.",
    materialInquiry: "Hello, I would like to inspect material boards and textures at your showroom.",
    galleryLook: "Hello, I saw an interior concept in your Inspiration Gallery and would like to learn more.",
  }
};

/**
 * Helper to build an official WhatsApp direct link with pre-filled message
 */
export const getWhatsAppLink = (customMessage?: string): string => {
  const number = siteConfig.contact.whatsappNumber.replace(/[^0-9]/g, '');
  const text = encodeURIComponent(customMessage || siteConfig.whatsappMessages.general);
  return `https://wa.me/${number}?text=${text}`;
};
