import { env } from "@/lib/env";
import type {
  BrandConfig,
  CategoryItem,
  MomentItem,
  NavItem,
  PillarItem,
} from "../types/huertana.types";

export const HUERTANA_BRAND: BrandConfig = {
  name: "Huertana",
  claim: "Nutrir el cuerpo, cuidar la tierra",
  coreTagline: "Si hay momento, hay Huertana.",
  taglinePhrases: [
    "tostada crocante",
    "picada entre amigos",
    "pasta de domingo",
    "queso y pan de campo",
    "ganas de algo dulce",
    "buena mesa",
  ],
  sector: "Mermeladas gourmet, delicatessen vegetales y salsas artesanales",
  location: "Russell, Maipú, Mendoza, Argentina",
  storeUrl: env.NEXT_PUBLIC_STORE_URL,
  allProductsUrl: `${env.NEXT_PUBLIC_STORE_URL.replace(/\/+$/, "")}/productos/`,
  instagramUrl: env.NEXT_PUBLIC_INSTAGRAM_URL,
  instagramHandle: "@huertana.alimentos",
  whatsappUrl: env.NEXT_PUBLIC_WHATSAPP_URL,
  whatsappDisplay: "+54 9 261 343-2657",
  mapsUrl: env.NEXT_PUBLIC_MAPS_URL,
};

export const HUERTANA_NAV_ITEMS: NavItem[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Momentos", href: "#momentos" },
  { label: "Categorías", href: "#categorias" },
  { label: "Sobre Huertana", href: "#sobre-huertana" },
  { label: "Contacto", href: "#contacto" },
];

export const HUERTANA_MOMENTS: MomentItem[] = [
  {
    id: "desayuno",
    scenario: "Desayunos & Meriendas",
    trigger: "Si hay tostada y pan tibio...",
    solution: "...hay Mermelada Gourmet Huertana",
    description:
      "Mermeladas artesanales con 65% de fruta mendocina seleccionada y 35% de azúcar. Sin conservantes, gelatinas ni colorantes.",
    categoryName: "Mermeladas gourmet",
    badge: "65% Fruta · Pura & Natural",
    actionText: "Ver mermeladas en Tiendanube",
    storeUrl: `${env.NEXT_PUBLIC_STORE_URL.replace(/\/+$/, "")}/dulces/`,
    imageUrl:
      "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Frascos artesanales de mermelada gourmet de frutas mendocinas",
    pairing: "Pera · Durazno · Cereza · Uva · Damasco · Malbec",
  },
  {
    id: "picada",
    scenario: "La Picada & Aperitivos",
    trigger: "Si hay tabla, copa de vino y amigos...",
    solution: "...hay Delicatessen y Pastas Huertana",
    description:
      "Pastas vegetales 100% naturales, libres de gluten y enriquecidas con Aceite de Oliva Virgen Extra de primera presión en frío.",
    categoryName: "Delicatessen",
    badge: "100% Vegetal · Con AOVE · Sin TACC",
    actionText: "Ver delicatessen en Tiendanube",
    storeUrl: `${env.NEXT_PUBLIC_STORE_URL.replace(/\/+$/, "")}/salados/`,
    imageUrl:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Pastas vegetales artesanales, aceitunas y conservas con aceite de oliva",
    pairing: "Salsa Huertana · Pasta Tomate Seco · Alcaucila · Cremolacha",
  },
  {
    id: "almuerzo",
    scenario: "Cocina de Domingo",
    trigger: "Si hay pasta casera humeante...",
    solution: "...hay Salsa Tuco y Ketchup Huertana",
    description:
      "Tomates mendocinos madurados al sol y procesados con receta casera. Salsas listas para abrir y servir sabor real de hogar.",
    categoryName: "Selección Tomate",
    badge: "Tomate Mendocino · Receta Casera",
    actionText: "Ver línea Tomate en Tiendanube",
    storeUrl: `${env.NEXT_PUBLIC_STORE_URL.replace(/\/+$/, "")}/seleccion-tomate/`,
    imageUrl:
      "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Salsas de tomate artesanales, tuco casero e ingredientes frescos",
    pairing: "Sala Tuco · Salsa Picante · Ketchup Natural · Barbacoa",
  },
  {
    id: "regalo",
    scenario: "Agasajar & Festejar",
    trigger: "Si hay algo especial para celebrar...",
    solution: "...hay Packs y Gift Card Huertana",
    description:
      "Regalá sabores mendocinos de autor. Cajas de degustación y tarjetas de regalo pensadas para amantes del buen comer.",
    categoryName: "Packs y regalos",
    badge: "Regalos & Experiencias",
    actionText: "Ver regalos en Tiendanube",
    storeUrl: `${env.NEXT_PUBLIC_STORE_URL.replace(/\/+$/, "")}/gif-card/`,
    imageUrl:
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Presentación artesanal y regalos gourmet Huertana",
    pairing: "Gift Card Digital · Sets Degustación · Presentes de Autor",
  },
];

export const HUERTANA_PILLARS: PillarItem[] = [
  {
    id: "vegetal",
    number: "01",
    title: "100% Vegetal y Sin Gluten",
    description:
      "Elaboramos conservas y pastas sin conservantes ni colorantes artificiales, respetando la pureza y nobleza de cada ingrediente.",
    iconName: "sprout",
  },
  {
    id: "aove",
    number: "02",
    title: "Con Aceite de Oliva Virgen Extra",
    description:
      "Nuestras delicatessen están cocinadas y conservadas exclusivamente con AOVE mendocino de primera presión en frío.",
    iconName: "scale",
  },
  {
    id: "fruta",
    number: "03",
    title: "65% Fruta y 35% de Azúcar",
    description:
      "Mermeladas gourmet con máxima concentración frutal de frutos de temporada (uva, cereza, durazno, membrillo, pera y Malbec).",
    iconName: "handshake",
  },
  {
    id: "origen",
    number: "04",
    title: "Origen Russell, Maipú",
    description:
      "Producción artesanal consciente desde el corazón vitivinícola y productivo de Mendoza hacia tu mesa de todos los días.",
    iconName: "recycle",
  },
];

export const HUERTANA_CATEGORIES: CategoryItem[] = [
  {
    id: "dulces",
    title: "Mermeladas gourmet",
    subtitle: "65% fruta mendocina seleccionada · 35% azúcar",
    description:
      "Elaboradas con frutas nobles de nuestra región, sin conservantes ni aditivos químicos. Sabores auténticos con el dulzor justo para tus desayunos, meriendas y tablas.",
    badge: "65% Fruta · Sin Conservantes",
    highlights: [
      "Mermelada de Pera",
      "Mermelada de Durazno",
      "Mermelada de Cereza",
      "Mermelada de Uva",
      "Salsa Malbec",
      "Jalea de Membrillo",
      "Cerezas en su jugo",
      "Damasco · Frutilla · Ciruela",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=900&q=80",
    imageAlt:
      "Frascos artesanales de mermelada gourmet de frutas naturales mendocinas",
    storeUrl: `${env.NEXT_PUBLIC_STORE_URL.replace(/\/+$/, "")}/dulces/`,
  },
  {
    id: "salados",
    title: "Delicatessen",
    subtitle: "Pastas vegetales con Aceite de Oliva Virgen Extra",
    description:
      "Creaciones gourmet 100% vegetales, libres de gluten y enriquecidas con AOVE mendocino. Ideales para aperitivos, picadas, panes de masa madre o ensaladas.",
    badge: "100% Vegetal · Con AOVE · Sin TACC",
    highlights: [
      "Salsa Huertana",
      "Pasta de tomates secos",
      "Alcaucila (alcauciles)",
      "Cremolacha (remolacha)",
      "Zanajioli",
      "Pasta de garbanzo",
      "Pesto de Albahaca",
      "Pasta de aceituna verde y negra",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80",
    imageAlt:
      "Pastas vegetales gourmet, dips de aceitunas y conservas artesanales con aceite de oliva virgen extra",
    storeUrl: `${env.NEXT_PUBLIC_STORE_URL.replace(/\/+$/, "")}/salados/`,
  },
  {
    id: "seleccion-tomate",
    title: "Selección Tomate",
    subtitle: "Salsas caseras y condimentos de tomate mendocino",
    description:
      "Tomates maduros procesados artesanalmente para lograr salsas ricas, aromáticas y sin excesos industriales. El verdadero sabor casero listo para servir.",
    badge: "Tomates Seleccionados · Receta Casera",
    highlights: [
      "Salsa Tuco artesanal",
      "Salsa Picante de tomate",
      "Ketchup natural artesanal",
      "Salsa Barbacoa",
      "Tomates secos enteros",
      "Espinaqueta",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?auto=format&fit=crop&w=900&q=80",
    imageAlt:
      "Salsas de tomate artesanales, tuco casero y tomates maduros seleccionados",
    storeUrl: `${env.NEXT_PUBLIC_STORE_URL.replace(/\/+$/, "")}/seleccion-tomate/`,
  },
  {
    id: "gif-card",
    title: "Packs y regalos",
    subtitle: "Gift Cards y presentaciones para agasajar",
    description:
      "Regalá experiencias gastronómicas mendocinas. Tarjetas de regalo y combinaciones pensadas para quienes aprecian los alimentos de autor y la buena mesa.",
    badge: "Regalos & Experiencias",
    highlights: [
      "Gift Card Huertana",
      "Combinaciones dulce & salado",
      "Regalos empresariales",
      "Packs degustación",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=80",
    imageAlt:
      "Presentación artesanal y caja de regalo con conservas gourmet y tarjeta Huertana",
    storeUrl: `${env.NEXT_PUBLIC_STORE_URL.replace(/\/+$/, "")}/gif-card/`,
  },
];
