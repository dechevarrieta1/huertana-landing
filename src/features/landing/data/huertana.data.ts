import { env } from "@/lib/env";
import type {
  BrandConfig,
  BrandPrinciple,
  CategoryItem,
  GoogleReviewItem,
  MomentOption,
  NavItem,
  TourismConfig,
} from "../types/huertana.types";

export const HUERTANA_MOMENTS: MomentOption[] = [
  {
    slug: "picada-entre-amigos",
    phrase: "picada entre amigos",
    fullTrigger: "Si hay picada entre amigos...",
    solution: "hay Delicatessen Huertana",
    productLine: "Delicatessen",
    storeUrl: `${env.NEXT_PUBLIC_STORE_URL.replace(/\/+$/, "")}/salados/`,
    badge: "100% Vegetal · Con AOVE",
    hint: "Pasta de tomates secos, aceitunas verdes y alcauciles al centro de la mesa.",
    placeholderLabel: "FOTO: Picada entre Amigos & Delicatessen Huertana",
  },
  {
    slug: "domingo-en-familia",
    phrase: "domingo en familia",
    fullTrigger: "Si hay domingo en familia...",
    solution: "hay Tuco Casero Huertana",
    productLine: "Selección Tomate",
    storeUrl: `${env.NEXT_PUBLIC_STORE_URL.replace(/\/+$/, "")}/seleccion-tomate/`,
    badge: "Tomate Mendocino · Receta Casera",
    hint: "Salsa Tuco casera lista para la pasta compartida.",
    placeholderLabel: "FOTO: Domingo en Familia & Tuco Huertana",
  },
  {
    slug: "sobremesa-que-se-alarga",
    phrase: "sobremesa que se alarga",
    fullTrigger: "Si hay sobremesa que se alarga...",
    solution: "hay Mermelada Gourmet Huertana",
    productLine: "Mermeladas gourmet",
    storeUrl: `${env.NEXT_PUBLIC_STORE_URL.replace(/\/+$/, "")}/dulces/`,
    badge: "65% Fruta Real · Sin Químicos",
    hint: "Damasco, Pera, Frutilla o Membrillo con quesos de campo y pan.",
    placeholderLabel: "FOTO: Sobremesa Familiar & Mermeladas Huertana",
  },
  {
    slug: "charla-y-copa-de-vino",
    phrase: "charla y copa de vino",
    fullTrigger: "Si hay charla y copa de vino...",
    solution: "hay Maridajes y Salsas Huertana",
    productLine: "Especialidades de Autor",
    storeUrl: `${env.NEXT_PUBLIC_STORE_URL.replace(/\/+$/, "")}/salados/`,
    badge: "Maridaje Tradicional",
    hint: "Salsa Malbec, aceitunas condimentadas y dips artesanales.",
    placeholderLabel: "FOTO: Brindis & Maridajes Huertana",
  },
  {
    slug: "visita-que-se-queda-a-cenar",
    phrase: "visita que se queda a cenar",
    fullTrigger: "Si hay visita que se queda a cenar...",
    solution: "hay delicias simples en la mesa",
    productLine: "Delicatessen & Salsas",
    storeUrl: `${env.NEXT_PUBLIC_STORE_URL.replace(/\/+$/, "")}/productos/`,
    badge: "Cocina Rápida & Noble",
    hint: "Sabores mendocinos para recibir a quienes más querés.",
    placeholderLabel: "FOTO: Mesa Compartida con Amigos & Huertana",
  },
  {
    slug: "reencuentro-para-festejar",
    phrase: "reencuentro para festejar",
    fullTrigger: "Si hay reencuentro para festejar...",
    solution: "hay Packs y Regalos Huertana",
    productLine: "Packs y regalos",
    storeUrl: `${env.NEXT_PUBLIC_STORE_URL.replace(/\/+$/, "")}/gif-card/`,
    badge: "Regalos & Experiencias",
    hint: "Cajas degustación y regalos de autor para celebrar juntos.",
    placeholderLabel: "FOTO: Regalo Gourmet & Celebración Huertana",
  },
];

export const HUERTANA_BRAND: BrandConfig = {
  name: "HUERTANA",
  originSubtitle: "MENDOZA · ARGENTINA",
  claim: "De la huerta a la mesa",
  familyTagline: "Como lo hacían nuestras abuelas",
  moments: HUERTANA_MOMENTS,
  location: "Pedro Vargas 1765, Russell, Maipú, Mendoza, Argentina",
  addressShort: "Russell, Maipú · Mendoza",
  streetAddress: "Pedro Vargas 1765, Russell, Maipú",
  gps: "S 33° 1' 15,83'' · W 68° 44' 19,56''",
  schedule: "Lunes a viernes de 9:00 a 17:00 hs",
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
  { label: "Nosotros", href: "/#inicio" },
  { label: "Nuestros productos", href: "/#productos" },
  { label: "Turismo", href: "/#turismo" },
  { label: "Reseñas", href: "/#resenas" },
  { label: "Ubicación", href: "/#ubicacion" },
];

export const HUERTANA_PRINCIPLES: BrandPrinciple[] = [
  {
    num: "01",
    title: "Aceite de oliva virgen extra",
    detail:
      "AOVE de primera presión en frío e ingredientes nobles como base de cada conserva.",
  },
  {
    num: "02",
    title: "Recetas limpias",
    detail:
      "Hasta 45 variedades —mermeladas con 65% de fruta— sin conservantes ni colorantes químicos.",
  },
  {
    num: "03",
    title: "Libre de gluten (Sin TACC)",
    detail:
      "Elaboración segura y 100% vegetal para disfrutar y compartir en cada mesa.",
  },
  {
    num: "04",
    title: "Elaboración a la vista",
    detail:
      "Taller artesanal abierto en Pedro Vargas 1765, en el corazón de los caminos del vino.",
  },
];

export const HUERTANA_PRODUCT_LINES: CategoryItem[] = [
  {
    id: "dulces",
    title: "Mermeladas gourmet",
    momentTrigger: "Si hay sobremesa que se alarga o desayuno familiar...",
    momentSolution: "hay Mermelada Huertana",
    subtitle: "65% fruta mendocina · 35% azúcar",
    description:
      "Elaboradas con fruta madurada bajo el sol de Mendoza, sin conservantes ni químicos. Ideales para compartir charlas largas alrededor de la mesa.",
    badge: "65% Fruta · Sin Conservantes",
    highlights: ["Pera", "Durazno", "Cereza", "Uva", "Salsa Malbec", "Damasco"],
    placeholderLabel: "FOTO: Frascos Mermeladas Gourmet",
    imageSrc: "/images/category-mermeladas.webp",
    imageAlt:
      "Cuchara con mermelada artesanal Huertana sobre pocillo blanco, frutillas frescas y frasco de mermelada",
    imagePosition: "object-[50%_48%]",
    storeUrl: `${env.NEXT_PUBLIC_STORE_URL.replace(/\/+$/, "")}/dulces/`,
  },
  {
    id: "salados",
    title: "Delicatessen",
    momentTrigger: "Si hay picada entre amigos y copa de vino...",
    momentSolution: "hay Delicatessen Huertana",
    subtitle: "Pastas vegetales con Aceite de Oliva Virgen Extra",
    description:
      "100% vegetales, libres de gluten y enriquecidas con AOVE mendocino. Creadas para disfrutar de aperitivos honestos y compartidos.",
    badge: "100% Vegetal · Con AOVE · Sin TACC",
    highlights: ["Salsa Huertana", "Tomates Secos", "Alcaucila", "Cremolacha", "Zanajioli"],
    placeholderLabel: "FOTO: Delicatessen & Pastas Vegetales",
    imageSrc: "/images/category-delicatessen.webp",
    imageAlt:
      "Frascos abiertos de delicatessen Huertana en mesa al sol, con Pasta de Tomate Seco 100% vegetal en primer plano",
    imagePosition: "object-[50%_44%]",
    storeUrl: `${env.NEXT_PUBLIC_STORE_URL.replace(/\/+$/, "")}/salados/`,
  },
  {
    id: "seleccion-tomate",
    title: "Selección Tomate",
    momentTrigger: "Si hay domingo en familia y pasta casera...",
    momentSolution: "hay Tuco Huertana",
    subtitle: "Tomates maduros y receta tradicional",
    description:
      "Salsas caseras listas para servir, elaboradas con tomates mendocinos madurados en planta. El sabor entrañable de los almuerzos de domingo.",
    badge: "Tomate Mendocino · Receta Casera",
    highlights: ["Salsa Tuco", "Salsa Picante", "Ketchup Natural", "Salsa Barbacoa"],
    placeholderLabel: "FOTO: Salsas de Tomate & Tuco",
    imageSrc: "/images/category-tomate.webp",
    imageAlt:
      "Botellas de la línea Selección Tomate Huertana sobre tronco de madera: Barbacoa, Passata, Ketchup, Salsa Tuco y Salsa de Tomate Picante",
    imagePosition: "object-[50%_66%]",
    storeUrl: `${env.NEXT_PUBLIC_STORE_URL.replace(/\/+$/, "")}/seleccion-tomate/`,
  },
  {
    id: "gif-card",
    title: "Packs y regalos",
    momentTrigger: "Si hay reencuentro o alguien especial a quien agasajar...",
    momentSolution: "hay Packs y Regalos Huertana",
    subtitle: "Presentes con identidad de origen",
    description:
      "Cajas degustación y tarjetas de regalo pensadas para compartir la cultura gastronómica y la calidez de Mendoza con quienes más querés.",
    badge: "Regalos & Experiencias",
    highlights: ["Gift Card Digital", "Cajas Degustación", "Regalos de Autor"],
    placeholderLabel: "FOTO: Cajas de Regalo & Gift Cards",
    imageSrc: "/images/category-packs.webp",
    imageAlt:
      "Caja de madera de regalo Huertana con seis frascos degustación de mermeladas y delicatessen artesanales",
    imagePosition: "object-[50%_62%]",
    storeUrl: `${env.NEXT_PUBLIC_STORE_URL.replace(/\/+$/, "")}/gif-card/`,
  },
];

// Alias de compatibilidad
export const HUERTANA_CATEGORIES = HUERTANA_PRODUCT_LINES;

export const HUERTANA_TOURISM: TourismConfig = {
  eyebrow: "Turismo & Visitas Guiadas",
  title: "Una experiencia diferente en el corazón de Maipú",
  tagline: "Una parada gourmet en los caminos del vino",
  intro:
    "Sumá a tu recorrido una propuesta genuina, artesanal y multisensorial. Conocé nuestra historia, descubrí cómo elaboramos y degustá los sabores de Mendoza.",
  experienceTitle: "La experiencia: Visita guiada + degustación",
  reasons: [
    {
      id: "diferencial",
      title: "Experiencia diferencial",
      description: "Una propuesta distinta dentro de los caminos del vino.",
      icon: "leaf",
    },
    {
      id: "identidad",
      title: "Identidad Mendocina",
      description: "17 años transformando frutas y verduras en sabores genuinos.",
      icon: "award",
    },
    {
      id: "valor",
      title: "Alto valor percibido",
      description: "Recorrido, elaboración a la vista y degustación en una misma visita.",
      icon: "star",
    },
    {
      id: "complemento",
      title: "Complemento ideal",
      description: "Perfecta para completar una jornada de actividades en Maipú.",
      icon: "users",
    },
  ],
  steps: [
    {
      number: "01",
      title: "Nuestra historia",
      description:
        "Conocé cómo nació Huertana como proyecto familiar y el camino recorrido durante 17 años.",
      imageSrc: "/images/turismo-historia.webp",
      imageAlt:
        "Fachada de la planta artesanal Huertana en Russell, Maipú, con el isologo oficial en relieve",
      imagePosition: "object-[50%_42%]",
    },
    {
      number: "02",
      title: "Producción a la vista",
      description:
        "Visitá la sala de elaboración con explicación de los procesos que se estén realizando ese día.",
      imageSrc: "/images/turismo-produccion.webp",
      imageAlt:
        "Manos preparando alcauciles frescos en la sala de elaboración artesanal de Huertana",
      imagePosition: "object-[50%_40%]",
    },
    {
      number: "03",
      title: "Degustación",
      description:
        "Cierre con una degustación de entre 12 y 15 productos seleccionados, dentro de una línea que alcanza hasta 45 variedades.",
      imageSrc: "/images/turismo-degustacion.webp",
      imageAlt:
        "Degustación de pasta de aceituna negra y pasta de aceituna verde Huertana con pan artesanal",
      imagePosition: "object-[50%_55%]",
    },
  ],
  essenceTitle: "Nuestra esencia",
  essenceSubtitle: "De la huerta a la mesa",
  essenceDescription:
    "Productos delicatessen y mermeladas elaboradas a partir de recetas familiares, ingredientes nobles y procesos cuidados.",
  essenceBadges: [
    "Sin conservantes · Sin colorantes",
    "Libre de gluten",
    "Elaboración a la vista",
  ],
  itinerary: [
    { label: "Duración", value: "45 minutos a 1 hora" },
    { label: "Horarios", value: "De 10 a 16 h con reserva previa" },
    { label: "Idiomas", value: "Castellano" },
    { label: "Capacidad", value: "Grupos reducidos de hasta 20 personas" },
  ],
  tariff: {
    label: "Tarifas para Agencias",
    price: "$10.000",
    taxNote: "+IVA",
    unit: "por persona",
    conditions: [
      "Menores de 12 años, sin costo.",
      "Tarifa sujeta a modificaciones según temporada y disponibilidad.",
      "Valores vigentes hasta diciembre de 2026 inclusive.",
    ],
  },
  contact: {
    email: "turismohuertana@gmail.com",
    phoneDisplay: "261-700-0772",
    whatsappUrl: `https://wa.me/5492617000772?text=${encodeURIComponent(
      "Hola Huertana! Quisiera consultar y reservar una visita guiada con degustación en Russell, Maipú."
    )}`,
    address: "Pedro Vargas 1765, Russell, Maipú",
    instagramHandle: "@huertana.ok",
    instagramUrl: "https://www.instagram.com/huertana.ok/",
  },
};

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
    text: "Compramos para una picada entre amigos y nos sorprendió a todos. El aceite de oliva virgen extra le da un sabor impecable.",
  },
  {
    id: "rev-3",
    author: "Cecilia Rossi",
    relativeTime: "Hace 1 mes",
    rating: 5,
    productMentioned: "Salsa Tuco Casera",
    text: "La mejor salsa de tomate lista para los domingos en familia: sin acidez excesiva, sin conservantes y con gusto a comida de hogar.",
  },
  {
    id: "rev-4",
    author: "Esteban Morales",
    relativeTime: "Hace 2 meses",
    rating: 5,
    productMentioned: "Gift Card y Pack Degustación",
    text: "Excelente atención por WhatsApp para coordinar un regalo especial. La presentación artesanal y los sabores dejaron a todos encantados.",
  },
];
