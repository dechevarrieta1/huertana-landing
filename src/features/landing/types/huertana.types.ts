export interface NavItem {
  label: string;
  href: string;
}

export interface MomentOption {
  slug: string;
  phrase: string;
  fullTrigger: string;
  solution: string;
  productLine: string;
  storeUrl: string;
  badge: string;
  hint: string;
  placeholderLabel: string;
}

export interface CategoryItem {
  id: string;
  title: string;
  momentTrigger: string;
  momentSolution: string;
  subtitle: string;
  description: string;
  badge: string;
  highlights: string[];
  placeholderLabel: string;
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: string;
  storeUrl: string;
}

export interface GoogleReviewItem {
  id: string;
  author: string;
  relativeTime: string;
  rating: number;
  productMentioned: string;
  text: string;
}

export interface BrandPrinciple {
  num: string;
  title: string;
  detail: string;
}

export interface TourismReason {
  id: string;
  title: string;
  description: string;
  icon: "leaf" | "award" | "star" | "users";
}

export interface TourismStep {
  number: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: string;
}

export interface TourismItineraryField {
  label: string;
  value: string;
}

export interface TourismConfig {
  eyebrow: string;
  title: string;
  tagline: string;
  intro: string;
  experienceTitle: string;
  reasons: TourismReason[];
  steps: TourismStep[];
  essenceTitle: string;
  essenceSubtitle: string;
  essenceDescription: string;
  essenceBadges: string[];
  itinerary: TourismItineraryField[];
  tariff: {
    label: string;
    price: string;
    taxNote: string;
    unit: string;
    conditions: string[];
  };
  contact: {
    email: string;
    phoneDisplay: string;
    whatsappUrl: string;
    address: string;
    instagramHandle: string;
    instagramUrl: string;
  };
}

export type BrochureIconKind =
  | "plant-based"
  | "no-preservatives"
  | "gluten-free"
  | "artisan-craft"
  | "aove"
  | "mendoza-fruit"
  | "star-quality"
  | "gift-share";

export interface CategoryPropertyBadge {
  icon: BrochureIconKind;
  label: string;
  detail: string;
}

export interface ProductItem {
  slug: string;
  categoryId: "dulces" | "salados" | "seleccion-tomate" | "gif-card";
  name: string;
  botanicalName?: string;
  origin?: string;
  weightLabel: string;
  summary: string;
  processNote?: string;
  ingredients?: string;
  pairings: string[];
  properties: string[];
  nutritionNote?: string;
  conservation: string;
  storeUrl: string;
}

export interface BrandConfig {
  name: string;
  originSubtitle: string;
  claim: string;
  familyTagline: string;
  moments: MomentOption[];
  location: string;
  addressShort: string;
  streetAddress: string;
  gps: string;
  schedule: string;
  storeUrl: string;
  allProductsUrl: string;
  instagramUrl: string;
  instagramHandle: string;
  whatsappUrl: string;
  whatsappDisplay: string;
  mapsUrl: string;
  googleRating: number;
  googleReviewCount: number;
}
