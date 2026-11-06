export interface NavItem {
  label: string;
  href: string;
}

export interface PillarItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: "sprout" | "scale" | "handshake" | "recycle";
}

export interface CategoryItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  highlights: string[];
  imageUrl: string;
  imageAlt: string;
  storeUrl: string;
}

export interface BrandConfig {
  name: string;
  claim: string;
  sector: string;
  location: string;
  storeUrl: string;
  allProductsUrl: string;
  instagramUrl: string;
  instagramHandle: string;
  whatsappUrl: string;
  whatsappDisplay: string;
  mapsUrl: string;
}
