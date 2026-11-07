export interface NavItem {
  label: string;
  href: string;
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

export interface BrandConfig {
  name: string;
  claim: string;
  taglinePhrases: string[];
  location: string;
  addressShort: string;
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
