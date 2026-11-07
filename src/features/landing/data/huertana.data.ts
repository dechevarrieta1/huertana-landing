import { env } from "@/lib/env";
import type {
  BrandConfig,
  CategoryItem,
  GoogleReviewItem,
  NavItem,
} from "../types/huertana.types";

export const HUERTANA_BRAND: BrandConfig = {
  name: "Huertana",
  claim: "Nutrir el cuerpo, cuidar la tierra",
  taglinePhrases: [
    "tostada crocante",
    "picada entre amigos",
    "pasta de domingo",
    "queso y pan de campo",
    "buena mesa",
  ],
  location: "Russell, Maipú, Mendoza, Argentina",
  addressShort: "Russell, Maipú · Mendoza",
  schedule: "Lunes a Viernes de 9:00 a 18:00 hs",
  storeUrl: env.NEXT_PUBLIC_STORE_URL,
  allProductsUrl: `${env.NEXT_PUBLIC_STORE_URL.replace(/\/+$/, "")}/productos/`,
  instagramUrl: env.NEXT_PUBLIC_INSTAGRAM_URL,
  instagramHandle: "@huertana.alimentos",
  whatsappUrl: env.NEXT_PUBLIC_WHATSAPP_URL,
  whatsappDisplay: "+54 9 261 343-2657",
  mapsUrl: env.NEXT_PUBLIC_MAPS_URL,
  googleRating: 4.9,
  googleReviewCount: 128,
};

export const HUERTANA_NAV_ITEMS: NavItem[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Categorías", href: "#categorias" },
  { label: "Sobre Huertana", href: "#sobre-huertana" },
  { label: "Reseñas", href: "#resenas" },
  { label: "Ubicación", href: "#ubicacion" },
];

export const HUERTANA_CATEGORIES: CategoryItem[] = [
  {
    id: "dulces",
    title: "Mermeladas gourmet",
    momentTrigger: "Si hay tostada y pan tibio...",
    momentSolution: "hay Mermelada Huertana",
    subtitle: "65% fruta mendocina · 35% azúcar",
    description:
      "Elaboradas con fruta madurada bajo el sol de Mendoza, sin conservantes, colorantes ni gelatinas.",
    badge: "65% Fruta · Sin Conservantes",
    highlights: ["Pera", "Durazno", "Cereza", "Uva", "Salsa Malbec", "Damasco"],
    placeholderLabel: "FOTO: Frascos Mermeladas Gourmet",
    storeUrl: `${env.NEXT_PUBLIC_STORE_URL.replace(/\/+$/, "")}/dulces/`,
  },
  {
    id: "salados",
    title: "Delicatessen",
    momentTrigger: "Si hay tabla, vino y amigos...",
    momentSolution: "hay Delicatessen Huertana",
    subtitle: "Pastas vegetales con Aceite de Oliva Virgen Extra",
    description:
      "100% vegetales, libres de gluten y enriquecidas con AOVE mendocino de primera presión en frío.",
    badge: "100% Vegetal · Con AOVE · Sin TACC",
    highlights: ["Salsa Huertana", "Tomates Secos", "Alcaucila", "Cremolacha", "Zanajioli"],
    placeholderLabel: "FOTO: Delicatessen & Pastas Vegetales",
    storeUrl: `${env.NEXT_PUBLIC_STORE_URL.replace(/\/+$/, "")}/salados/`,
  },
  {
    id: "seleccion-tomate",
    title: "Selección Tomate",
    momentTrigger: "Si hay pasta casera de domingo...",
    momentSolution: "hay Tuco y Ketchup Huertana",
    subtitle: "Tomates maduros y receta tradicional",
    description:
      "Salsas caseras listas para servir, elaboradas con tomates mendocinos madurados en planta.",
    badge: "Tomate Mendocino · Receta Casera",
    highlights: ["Sala Tuco", "Salsa Picante", "Ketchup Natural", "Salsa Barbacoa"],
    placeholderLabel: "FOTO: Salsas de Tomate & Tuco",
    storeUrl: `${env.NEXT_PUBLIC_STORE_URL.replace(/\/+$/, "")}/seleccion-tomate/`,
  },
  {
    id: "gif-card",
    title: "Packs y regalos",
    momentTrigger: "Si hay algo especial que celebrar...",
    momentSolution: "hay Packs y Gift Card Huertana",
    subtitle: "Presentes con identidad de origen",
    description:
      "Cajas degustación y tarjetas de regalo pensadas para compartir la cultura gastronómica de Mendoza.",
    badge: "Regalos & Experiencias",
    highlights: ["Gift Card Digital", "Cajas Degustación", "Regalos Corporativos"],
    placeholderLabel: "FOTO: Cajas de Regalo & Gift Cards",
    storeUrl: `${env.NEXT_PUBLIC_STORE_URL.replace(/\/+$/, "")}/gif-card/`,
  },
];

export const HUERTANA_GOOGLE_REVIEWS: GoogleReviewItem[] = [
  {
    id: "rev-1",
    author: "Mariana Gómez",
    relativeTime: "Hace 2 semanas",
    rating: 5,
    productMentioned: "Mermelada de Damasco y Salsa Malbec",
    text: "La calidad se siente en la primera cucharada. Se nota la fruta real y el balance justo sin empalagar. Un producto mendocino de primer nivel.",
  },
  {
    id: "rev-2",
    author: "Lucas Benítez",
    relativeTime: "Hace 1 mes",
    rating: 5,
    productMentioned: "Pasta de Tomates Secos con AOVE",
    text: "Compramos para una picada y nos sorprendió. El aceite de oliva virgen extra le da un sabor impecable. Pedimos directo por la tienda y llegó rápido.",
  },
  {
    id: "rev-3",
    author: "Cecilia Rossi",
    relativeTime: "Hace 1 mes",
    rating: 5,
    productMentioned: "Sala Tuco Casera",
    text: "La mejor salsa de tomate lista que probé: sin acidez excesiva, sin conservantes y con gusto a comida de hogar. Ya forma parte de nuestra alacena fija.",
  },
  {
    id: "rev-4",
    author: "Esteban Morales",
    relativeTime: "Hace 2 meses",
    rating: 5,
    productMentioned: "Gift Card y Pack Degustación",
    text: "Excelente atención por WhatsApp para coordinar un regalo empresarial. La presentación artesanal y los sabores dejaron a todos encantados.",
  },
];
