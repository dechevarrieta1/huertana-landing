import { env } from "@/lib/env";
import type {
  CategoryPropertyBadge,
  ProductItem,
} from "../types/huertana.types";

const BASE_STORE = env.NEXT_PUBLIC_STORE_URL.replace(/\/+$/, "");

export const CATEGORY_BROCHURE_PROPERTIES: Record<
  "dulces" | "salados" | "seleccion-tomate" | "gif-card",
  CategoryPropertyBadge[]
> = {
  dulces: [
    {
      icon: "mendoza-fruit",
      label: "65% Fruta · 35% Azúcar",
      detail: "Fruta seleccionada de finca propia, Valle de Uco y zona Este.",
    },
    {
      icon: "artisan-craft",
      label: "Cocción al vapor previa",
      detail: "Preserva nutrientes, colores naturales y evita la oxidación.",
    },
    {
      icon: "no-preservatives",
      label: "Sin conservantes ni colorantes",
      detail: "Sin endulzantes artificiales; recetas familiares antiguas.",
    },
    {
      icon: "gluten-free",
      label: "Certificación libre de gluten",
      detail: "Aptas Sin TACC y 100% de origen vegetal.",
    },
  ],
  salados: [
    {
      icon: "plant-based",
      label: "100% Vegetal",
      detail: "Emulsiones y pastas ideales para reemplazar mayonesas comunes.",
    },
    {
      icon: "aove",
      label: "Con AOVE de Mendoza",
      detail: "Aceite de oliva virgen extra como base noble de cada frasco.",
    },
    {
      icon: "no-preservatives",
      label: "Sin conservantes ni colorantes",
      detail: "Cocción al vapor y lavado artesanal para cuidar sabor y sodio.",
    },
    {
      icon: "gluten-free",
      label: "Certificación libre de gluten",
      detail: "Elaboración segura y artesanal a la vista en Russell, Maipú.",
    },
  ],
  "seleccion-tomate": [
    {
      icon: "mendoza-fruit",
      label: "Tomates maduros de Mendoza",
      detail: "Cultivados bajo el sol mendocino con sabor equilibrado.",
    },
    {
      icon: "aove",
      label: "Verduras salteadas en AOVE",
      detail: "Recetas listas para usar en pastas, asados y cocina diaria.",
    },
    {
      icon: "no-preservatives",
      label: "Sin conservantes artificiales",
      detail: "100% natural, sin colorantes ni aditivos químicos.",
    },
    {
      icon: "gluten-free",
      label: "Libre de gluten · Receta casera",
      detail: "Calidez y sabor de hogar para toda la familia.",
    },
  ],
  "gif-card": [
    {
      icon: "gift-share",
      label: "Presentes con identidad",
      detail: "Pensados para agasajar con sabores genuinos de Mendoza.",
    },
    {
      icon: "star-quality",
      label: "Hasta 45 variedades",
      detail: "Combiná mermeladas gourmet, delicatessen vegetales y salsas.",
    },
    {
      icon: "artisan-craft",
      label: "Presentación artesanal",
      detail: "Caja de madera reutilizable con interior desmontable o Gift Card.",
    },
    {
      icon: "gluten-free",
      label: "100% Libre de gluten",
      detail: "Un regalo seguro, noble y consciente para cualquier mesa.",
    },
  ],
};

export const HUERTANA_PRODUCTS: ProductItem[] = [
  // ==================== MERMELADAS GOURMET (dulces) ====================
  {
    slug: "cerezas-en-su-jugo2",
    categoryId: "dulces",
    name: "Cerezas en su jugo",
    botanicalName: "Prunus avium · Variedad Lapins",
    origin: "Finca propia · Russell, Maipú",
    weightLabel: "170 g / 310 g",
    summary:
      "Nuestro primer producto: único, exclusivo y totalmente artesanal. Cerezas enteras elegidas en jugo pulposo de cerezas.",
    processNote:
      "Elaboradas con cerezas variedad Lapins cultivadas en nuestra finca para disfrutar cerezas todo el año.",
    ingredients: "Cereza, azúcar.",
    pairings: ["Postres", "Helados", "Quesos blandos", "Tarteletas"],
    properties: [
      "Primer producto histórico de Huertana",
      "Sin conservantes químicos",
      "Sin colorantes",
      "Certificación libre de gluten",
    ],
    nutritionNote: "Porción 20 g: 28 kcal (1% VD) · Carbohidratos 7 g.",
    conservation:
      "Conservar en lugar fresco y seco. Una vez abierto mantener refrigerado hasta 10 días.",
    storeUrl: `${BASE_STORE}/productos/cerezas-en-su-jugo2/`,
  },
  {
    slug: "mermelada-de-damasco",
    categoryId: "dulces",
    name: "Mermelada de Damasco",
    botanicalName: "Prunus armeniaca · Variedad Royal",
    origin: "Mendoza",
    weightLabel: "310 g",
    summary:
      "Elaborada con damascos seleccionados variedad Royal, manteniendo el color dorado intenso y la acidez justa de la fruta.",
    processNote:
      "Cocción previa de la fruta al vapor para preservar nutrientes, colores y sabores evitando la oxidación.",
    ingredients: "Damascos, azúcar.",
    pairings: ["Budines", "Pastafrola", "Brownies", "Salsas agridulces"],
    properties: [
      "65% fruta · 35% azúcar",
      "Cocción al vapor",
      "Sin endulzantes artificiales",
      "Certificación libre de gluten",
    ],
    nutritionNote: "Porción 20 g: 52 kcal (3% VD) · Carbohidratos 13 g.",
    conservation:
      "Conservar en lugar fresco y seco. Una vez abierto mantener refrigerado hasta 20 días.",
    storeUrl: `${BASE_STORE}/productos/mermelada-de-damasco/`,
  },
  {
    slug: "mermelada-de-durazno",
    categoryId: "dulces",
    name: "Mermelada de Durazno",
    botanicalName: "Prunus persica",
    origin: "Finca orgánica · Valle de Uco, Mendoza",
    weightLabel: "310 g",
    summary:
      "Elaborada con duraznos orgánicos del Valle de Uco, con textura pulposa y aroma fresco a fruta recién cosechada.",
    processNote:
      "Cocción al vapor siguiendo recetas familiares antiguas, sin conservantes ni colorantes.",
    ingredients: "Durazno, azúcar.",
    pairings: ["Budines", "Pastafrola", "Brownies", "Salsas agridulces"],
    properties: [
      "Fruta orgánica del Valle de Uco",
      "65% fruta · 35% azúcar",
      "Sin conservantes ni colorantes",
      "Certificación libre de gluten",
    ],
    nutritionNote: "Porción 20 g: 50 kcal (3% VD) · Carbohidratos 12 g · Sodio 8 mg.",
    conservation:
      "Conservar en lugar fresco y seco. Una vez abierto mantener refrigerado hasta 20 días.",
    storeUrl: `${BASE_STORE}/productos/mermelada-de-durazno/`,
  },
  {
    slug: "mermelada-de-pera",
    categoryId: "dulces",
    name: "Mermelada de Pera",
    botanicalName: "Pyrus communis · Variedad Williams",
    origin: "Valle de Uco, Mendoza",
    weightLabel: "310 g",
    summary:
      "Elaborada con peras Williams seleccionadas del Valle de Uco, de dulzor delicado y textura sedosa.",
    processNote:
      "Cocinamos la fruta previamente al vapor para evitar oxidación y lograr el auténtico sabor de la pera.",
    ingredients: "Pera, azúcar.",
    pairings: ["Vino Malbec", "Quesos azules y duros", "Budines", "Brownies"],
    properties: [
      "Peras Williams del Valle de Uco",
      "Cocción al vapor",
      "Sin conservantes químicos",
      "Certificación libre de gluten",
    ],
    nutritionNote: "Porción 20 g: 53 kcal (3% VD) · Carbohidratos 13 g.",
    conservation:
      "Conservar en lugar fresco y seco. Una vez abierto mantener refrigerado hasta 20 días.",
    storeUrl: `${BASE_STORE}/productos/mermelada-de-pera/`,
  },
  {
    slug: "mermelada-de-cereza",
    categoryId: "dulces",
    name: "Mermelada de Cereza",
    botanicalName: "Prunus avium · Variedad Lapins",
    origin: "Finca propia · Russell, Maipú",
    weightLabel: "310 g",
    summary:
      "Elaborada con cerezas variedad Lapins cultivadas en nuestra propia finca mendocina.",
    processNote:
      "Cocción previa al vapor siguiendo recetas familiares antiguas, preservando color rubí y sabor natural.",
    ingredients: "Cereza, azúcar.",
    pairings: ["Desayunos", "Tostadas de masa madre", "Quesos crema", "Tortas"],
    properties: [
      "Fruta de finca propia",
      "Sin endulzantes artificiales",
      "Sin conservantes químicos",
      "Certificación libre de gluten",
    ],
    nutritionNote: "Porción 20 g: 53 kcal (3% VD) · Carbohidratos 13 g · Sodio 6 mg.",
    conservation:
      "Conservar en lugar fresco y seco. Una vez abierto mantener refrigerado hasta 20 días.",
    storeUrl: `${BASE_STORE}/productos/mermelada-de-cereza/`,
  },
  {
    slug: "mermelada-de-ciruela",
    categoryId: "dulces",
    name: "Mermelada de Ciruela",
    botanicalName: "Prunus domestica · Variedad Larry Ann",
    origin: "Finca propia · Russell, Maipú",
    weightLabel: "310 g",
    summary:
      "Elaborada con ciruelas variedad Larry Ann de nuestra finca, con un balance equilibrado entre acidez y dulzor.",
    processNote:
      "Cocción previa al vapor para preservar nutrientes, pigmentos naturales y sabor intacto.",
    ingredients: "Ciruela, azúcar.",
    pairings: ["Quesos", "Budines", "Pastafrola", "Brownies"],
    properties: [
      "Ciruelas de finca propia",
      "Cocción al vapor",
      "Sin colorantes ni conservantes",
      "Certificación libre de gluten",
    ],
    nutritionNote: "Porción 20 g: 53 kcal (3% VD) · Carbohidratos 13 g.",
    conservation:
      "Conservar en lugar fresco y seco. Una vez abierto mantener refrigerado hasta 20 días.",
    storeUrl: `${BASE_STORE}/productos/mermelada-de-ciruela/`,
  },
  {
    slug: "jalea-de-membrillo",
    categoryId: "dulces",
    name: "Jalea de Membrillo",
    botanicalName: "Cydonia oblonga",
    origin: "Zona Este de Mendoza",
    weightLabel: "310 g",
    summary:
      "Jalea traslúcida y aromática elaborada con membrillos de la zona Este de Mendoza.",
    processNote:
      "Cocción previa al vapor y proceso artesanal siguiendo recetas familiares antiguas.",
    ingredients: "Membrillo, azúcar.",
    pairings: [
      "Quesos blandos y duros",
      "Yogurt con granola",
      "Meriendas",
      "Preparaciones agridulces",
    ],
    properties: [
      "Membrillos de zona Este",
      "Sin conservantes químicos",
      "Sin colorantes",
      "Certificación libre de gluten",
    ],
    conservation:
      "Conservar en lugar fresco y seco. Una vez abierto mantener refrigerado hasta 20 días.",
    storeUrl: `${BASE_STORE}/productos/jalea-de-membrillo/`,
  },
  {
    slug: "mermelada-de-membrillo3",
    categoryId: "dulces",
    name: "Mermelada de Membrillo",
    botanicalName: "Cydonia oblonga",
    origin: "Zona Este de Mendoza",
    weightLabel: "310 g",
    summary:
      "Mermelada artesanal de membrillos del Este mendocino, con cuerpo y perfume frutal característico.",
    processNote:
      "Cocción previa al vapor para preservar sabor, color y nutrientes sin oxidación.",
    ingredients: "Membrillo, azúcar.",
    pairings: ["Quesos", "Pastafrola", "Budines", "Brownies"],
    properties: [
      "65% fruta · 35% azúcar",
      "Sin endulzantes artificiales",
      "Sin conservantes ni colorantes",
      "Certificación libre de gluten",
    ],
    nutritionNote: "Porción 20 g: 53 kcal (3% VD) · Carbohidratos 13 g.",
    conservation:
      "Conservar en lugar fresco y seco. Una vez abierto mantener refrigerado hasta 20 días.",
    storeUrl: `${BASE_STORE}/productos/mermelada-de-membrillo3/`,
  },
  {
    slug: "mermelada-de-manzana-roja",
    categoryId: "dulces",
    name: "Mermelada de Manzana Roja",
    botanicalName: "Malus domestica · Red Delicious",
    origin: "Mendoza",
    weightLabel: "300 g",
    summary:
      "Elaborada con manzanas Red Delicious de primera calidad, suave y reconfortante.",
    processNote:
      "Fruta cocinada al vapor previamente, sin conservantes químicos ni colorantes.",
    ingredients: "Manzana, azúcar.",
    pairings: ["Budines", "Pastafrola", "Brownies", "Panqueques"],
    properties: [
      "Manzanas Red Delicious",
      "Cocción al vapor",
      "Sin endulzantes artificiales",
      "Certificación libre de gluten",
    ],
    nutritionNote: "Porción 20 g: 54 kcal (3% VD) · Carbohidratos 13 g.",
    conservation:
      "Conservar en lugar fresco y seco. Una vez abierto mantener refrigerado hasta 20 días.",
    storeUrl: `${BASE_STORE}/productos/mermelada-de-manzana-roja/`,
  },
  {
    slug: "mermelada-de-frutilla1",
    categoryId: "dulces",
    name: "Mermelada de Frutilla",
    botanicalName: "Fragaria × ananassa",
    origin: "Mendoza",
    weightLabel: "310 g",
    summary:
      "Clásico dulce artesanal elaborado con frutillas seleccionadas y receta familiar antigua.",
    processNote: "Proceso artesanal sin agregados químicos ni saborizantes.",
    ingredients: "Frutilla, azúcar.",
    pairings: ["Desayunos", "Tostadas", "Waffles", "Postres"],
    properties: [
      "Receta familiar tradicional",
      "Sin conservantes químicos",
      "Sin colorantes",
      "Certificación libre de gluten",
    ],
    conservation:
      "Conservar en lugar fresco y seco. Una vez abierto mantener refrigerado hasta 20 días.",
    storeUrl: `${BASE_STORE}/productos/mermelada-de-frutilla1/`,
  },
  {
    slug: "mermelada-de-frambuesa2",
    categoryId: "dulces",
    name: "Mermelada de Frambuesa",
    botanicalName: "Rubus idaeus",
    origin: "Mendoza",
    weightLabel: "310 g",
    summary:
      "Frambuesas seleccionadas cocidas artesanalmente para conservar su acidez vibrante y aroma silvestre.",
    processNote: "Elaboración artesanal sin endulzantes artificiales ni colorantes.",
    ingredients: "Frambuesa, azúcar.",
    pairings: ["Cheesecake", "Chocolate amargo", "Yogurt", "Queso brie"],
    properties: [
      "65% fruta · 35% azúcar",
      "Sin endulzantes artificiales",
      "Sin conservantes químicos",
      "Certificación libre de gluten",
    ],
    conservation:
      "Conservar en lugar fresco y seco. Una vez abierto mantener refrigerado hasta 20 días.",
    storeUrl: `${BASE_STORE}/productos/mermelada-de-frambuesa2/`,
  },
  {
    slug: "mermelada-de-mora",
    categoryId: "dulces",
    name: "Mermelada de Mora",
    botanicalName: "Rubus ulmifolius",
    origin: "Mendoza",
    weightLabel: "310 g",
    summary:
      "Mermelada de frutos del bosque con aporte natural de fibra alimentaria e intenso color violáceo.",
    processNote: "Receta artesanal antigua, sin colorantes ni conservantes.",
    ingredients: "Mora, azúcar.",
    pairings: ["Quesos estacionados", "Pan de campo", "Repostería", "Carnes de caza"],
    properties: [
      "Fuente natural de fibra alimentaria",
      "Sin conservantes químicos",
      "Sin colorantes",
      "Certificación libre de gluten",
    ],
    nutritionNote:
      "Porción 20 g: 53 kcal (3% VD) · Carbohidratos 13 g · Fibra 0,8 mg.",
    conservation:
      "Conservar en lugar fresco y seco. Una vez abierto mantener refrigerado hasta 20 días.",
    storeUrl: `${BASE_STORE}/productos/mermelada-de-mora/`,
  },
  {
    slug: "mermelada-de-uva1",
    categoryId: "dulces",
    name: "Mermelada de Uva",
    botanicalName: "Vitis vinifera",
    origin: "Mendoza",
    weightLabel: "310 g",
    summary:
      "Dulce genuinamente mendocino elaborado con uvas de nuestra tierra siguiendo recetas familiares.",
    processNote: "Elaboración artesanal sin conservantes ni endulzantes artificiales.",
    ingredients: "Uva, azúcar.",
    pairings: ["Tablas de quesos", "Pan tostado", "Salsas agridulces", "Helados"],
    properties: [
      "Identidad vitivinícola mendocina",
      "Sin conservantes químicos",
      "Sin colorantes",
      "Certificación libre de gluten",
    ],
    nutritionNote: "Porción 20 g: 66 kcal (3% VD) · Carbohidratos 16 g.",
    conservation:
      "Conservar en lugar fresco y seco. Una vez abierto mantener refrigerado hasta 20 días.",
    storeUrl: `${BASE_STORE}/productos/mermelada-de-uva1/`,
  },
  {
    slug: "salsa-malbec",
    categoryId: "dulces",
    name: "Salsa Malbec",
    botanicalName: "Reducción artesanal de vino Malbec",
    origin: "Mendoza",
    weightLabel: "310 g",
    summary:
      "Especialidad gourmet de autor pensada para maridar quesos, carnes y postres con el cepaje emblema de Mendoza.",
    processNote: "Elaboración artesanal sin conservantes ni colorantes.",
    pairings: ["Quesos duros y azules", "Carnes rojas", "Peras al vino", "Helado de crema"],
    properties: [
      "Especialidad mendocina de autor",
      "Sin conservantes químicos",
      "Sin colorantes",
      "Certificación libre de gluten",
    ],
    conservation:
      "Conservar en lugar fresco y seco. Una vez abierto mantener refrigerado.",
    storeUrl: `${BASE_STORE}/productos/salsa-malbec/`,
  },

  // ==================== DELICATESSEN (salados) ====================
  {
    slug: "pasta-de-tomates-secos",
    categoryId: "salados",
    name: "Pasta de Tomates Secos",
    botanicalName: "Lycopersicon esculentum",
    origin: "Valle de Uco, Mendoza",
    weightLabel: "170 g",
    summary:
      "Nuestro primer producto salado y un aliado infaltable en la cocina: tomates cultivados y secados al sol en Valle de Uco.",
    processNote:
      "Emulsión artesanal condimentada con AOVE mendocino, especias y hierbas aromáticas.",
    ingredients:
      "Agua, tomate deshidratado, aceite de oliva virgen extra, azúcar, sal, vinagre de vino, pimentón extra, ají molido, ajo deshidratado, orégano y pimienta negra.",
    pairings: ["Picadas", "Bruschettas", "Milanesas", "Asados", "Pastas"],
    properties: [
      "100% vegetal",
      "Con AOVE de Mendoza",
      "Sin conservantes ni colorantes",
      "Certificación libre de gluten",
    ],
    conservation:
      "Lugar fresco y seco. Abierto refrigerar hasta 20 días. La solidificación en frío es propia del aceite de oliva.",
    storeUrl: `${BASE_STORE}/productos/pasta-de-tomates-secos/`,
  },
  {
    slug: "salsa-huertana",
    categoryId: "salados",
    name: "Salsa Huertana",
    botanicalName: "Vegetales asados al estilo mendocino",
    origin: "Russell, Maipú, Mendoza",
    weightLabel: "310 g",
    summary:
      "Inspirada en la infaltable ensalada de verduras a la parrilla de los clásicos asados mendocinos: tomate deshidratado, berenjena, pimientos y cebolla.",
    processNote:
      "Receta insignia de la casa con aceite de oliva virgen extra y especias seleccionadas.",
    ingredients:
      "Berenjenas, aceite de oliva virgen extra, tomate deshidratado, vinagre de vino, cebolla, pimiento rojo, pimiento verde, azúcar, ajo fresco, sal, mostaza en grano, ají molido, pimentón extra y pimienta negra.",
    pairings: [
      "Asados",
      "Pastas y pollo al disco",
      "Papas",
      "Guisos",
      "Picadas",
      "Bruschettas",
    ],
    properties: [
      "Receta insignia Huertana",
      "Con AOVE de Mendoza",
      "Sin conservantes ni colorantes",
      "Certificación libre de gluten",
    ],
    conservation:
      "Lugar fresco y seco. Abierto refrigerar hasta 10 días. La solidificación en frío es propia del aceite de oliva.",
    storeUrl: `${BASE_STORE}/productos/salsa-huertana/`,
  },
  {
    slug: "alcaucila2",
    categoryId: "salados",
    name: "Alcaucila",
    botanicalName: "Cynara scolymus",
    origin: "Mendoza",
    weightLabel: "170 g",
    summary:
      "Emulsión elaborada con el corazón de los alcauciles y sus partes tiernas, pensada para disfrutar este vegetal estacional todo el año.",
    processNote:
      "Selección manual de corazones tiernos combinados con AOVE y jugo de limón exprimido.",
    ingredients:
      "Alcaucil, aceite de oliva virgen extra, jugo de limón exprimido, azúcar, sal y pimienta negra.",
    pairings: ["Picadas", "Sushi", "Bruschettas", "Milanesas", "Asados"],
    properties: [
      "100% vegetal",
      "Corazón de alcauciles de estación",
      "Con AOVE de Mendoza",
      "Certificación libre de gluten",
    ],
    nutritionNote:
      "Porción 15 g: 37 kcal (2% VD) · Carbohidratos 2 g · Grasas totales 3,1 g.",
    conservation:
      "Lugar fresco y seco. Abierto refrigerar hasta 10 días. La solidificación en frío es propia del aceite de oliva.",
    storeUrl: `${BASE_STORE}/productos/alcaucila2/`,
  },
  {
    slug: "zanajioli",
    categoryId: "salados",
    name: "Zanajioli",
    botanicalName: "Daucus carota",
    origin: "Mendoza",
    weightLabel: "170 g",
    summary:
      "Emulsión de zanahorias seleccionadas con aceite de oliva virgen extra y dientes de ajo fresco. Ideal para reemplazar mayonesas comunes.",
    processNote:
      "Cocción al vapor para lograr máxima permanencia de nutrientes, color naranja vivo y sabor dulce natural.",
    ingredients:
      "Zanahoria, aceite de oliva virgen extra, ajo fresco, azúcar y sal.",
    pairings: ["Picadas", "Milanesas", "Asados", "Bruschettas", "Decoración de platos"],
    properties: [
      "100% vegetal · Reemplazo de mayonesa",
      "Cocción al vapor",
      "Con AOVE de Mendoza",
      "Certificación libre de gluten",
    ],
    conservation:
      "Lugar fresco y seco. Abierto refrigerar hasta 10 días. La solidificación en frío es propia del aceite de oliva.",
    storeUrl: `${BASE_STORE}/productos/zanajioli/`,
  },
  {
    slug: "cremolacha",
    categoryId: "salados",
    name: "Cremolacha",
    botanicalName: "Beta vulgaris",
    origin: "Mendoza",
    weightLabel: "170 g",
    summary:
      "Emulsión vibrante de remolachas cocidas al vapor con una vinagreta que aporta frescura y distinción.",
    processNote:
      "Cocción al vapor que preserva pigmentos naturales, nutrientes y dulzor terroso.",
    ingredients:
      "Remolacha, aceite de oliva virgen extra, vinagre de vino, azúcar, sal y pimienta negra.",
    pairings: ["Preparar ñoquis", "Picadas", "Bruschettas", "Asados", "Decoración"],
    properties: [
      "100% vegetal · Reemplazo de mayonesa",
      "Cocción al vapor",
      "Sin colorantes artificiales",
      "Certificación libre de gluten",
    ],
    nutritionNote:
      "Porción 15 g: 43 kcal (2% VD) · Carbohidratos 1,3 g · Grasas totales 4 g.",
    conservation:
      "Lugar fresco y seco. Abierto refrigerar hasta 10 días. La solidificación en frío es propia del aceite de oliva.",
    storeUrl: `${BASE_STORE}/productos/cremolacha/`,
  },
  {
    slug: "esparraguera",
    categoryId: "salados",
    name: "Esparraguera",
    botanicalName: "Asparagus officinalis",
    origin: "Mendoza",
    weightLabel: "170 g",
    summary:
      "Emulsión de espárragos seleccionados con vinagre de manzana, realzando su sabor herbáceo y fresco.",
    processNote:
      "De forma artesanal se eliminan las partes blancas y fibrosas, reservando solo las puntas y zonas más tiernas.",
    ingredients:
      "Espárrago, aceite de oliva virgen extra, vinagre de manzana, azúcar, sal, pimienta negra y mostaza.",
    pairings: ["Picadas", "Bruschettas", "Milanesas", "Asados"],
    properties: [
      "100% vegetal",
      "Selección manual de puntas tiernas",
      "Con AOVE y vinagre de manzana",
      "Certificación libre de gluten",
    ],
    nutritionNote:
      "Porción 15 g: 32 kcal (2% VD) · Carbohidratos 1,3 g · Grasas totales 2,8 g.",
    conservation:
      "Lugar fresco y seco. Abierto refrigerar hasta 10 días. La solidificación en frío es propia del aceite de oliva.",
    storeUrl: `${BASE_STORE}/productos/esparraguera/`,
  },
  {
    slug: "espinaqueta",
    categoryId: "salados",
    name: "Espinaqueta",
    botanicalName: "Spinacia oleracea",
    origin: "Mendoza",
    weightLabel: "170 g",
    summary:
      "Emulsión intensa de hojas de espinaca seleccionadas con AOVE y jugo de limón exprimido en equilibrio justo.",
    processNote:
      "Ideal para reemplazar mayonesas tradicionales o incorporar directamente en masas y rellenos.",
    ingredients:
      "Espinaca, aceite de oliva virgen extra, jugo de limón exprimido, ajo fresco, sal y pimienta negra.",
    pairings: ["Preparar fideos verdes", "Picadas", "Bruschettas", "Milanesas"],
    properties: [
      "100% vegetal",
      "Con AOVE y limón exprimido",
      "Sin conservantes ni colorantes",
      "Certificación libre de gluten",
    ],
    conservation:
      "Lugar fresco y seco. Abierto refrigerar hasta 10 días. La solidificación en frío es propia del aceite de oliva.",
    storeUrl: `${BASE_STORE}/productos/espinaqueta/`,
  },
  {
    slug: "calabazeta2",
    categoryId: "salados",
    name: "Calabazeta",
    botanicalName: "Cucurbita moschata · Variedad Coquena",
    origin: "Mendoza",
    weightLabel: "170 g",
    summary:
      "Emulsión cremosa de zapallos variedad Coquena con notas naturalmente dulces y textura aterciopelada.",
    processNote:
      "Cocción al vapor que mantiene nutrientes, color y sabor genuino del zapallo.",
    ingredients: "Zapallo, aceite de oliva virgen extra, sal y pimienta negra.",
    pairings: ["Picadas", "Milanesas", "Asados", "Bruschettas"],
    properties: [
      "100% vegetal",
      "Cocción al vapor · Variedad Coquena",
      "Con AOVE de Mendoza",
      "Certificación libre de gluten",
    ],
    nutritionNote:
      "Porción 15 g: 28 kcal (1% VD) · Carbohidratos 1,2 g · Grasas totales 2,5 g.",
    conservation:
      "Lugar fresco y seco. Abierto refrigerar hasta 10 días. La solidificación en frío es propia del aceite de oliva.",
    storeUrl: `${BASE_STORE}/productos/calabazeta2/`,
  },
  {
    slug: "morrona",
    categoryId: "salados",
    name: "Morrona",
    botanicalName: "Capsicum annuum",
    origin: "Mendoza",
    weightLabel: "170 g",
    summary:
      "Emulsión de pimiento morrón seleccionado con aceite de oliva virgen extra y especias.",
    processNote:
      "Una forma práctica y saludable de sumar vegetales reales reemplazando mayonesas comunes.",
    ingredients:
      "Pimiento morrón seleccionado, aceite de oliva virgen extra y especias.",
    pairings: ["Picadas", "Milanesas", "Asados", "Bruschettas", "Decoración"],
    properties: [
      "100% vegetal",
      "Con AOVE de Mendoza",
      "Sin conservantes ni colorantes",
      "Certificación libre de gluten",
    ],
    conservation:
      "Lugar fresco y seco. Abierto refrigerar hasta 10 días. La solidificación en frío es propia del aceite de oliva.",
    storeUrl: `${BASE_STORE}/productos/morrona/`,
  },
  {
    slug: "pasta-de-garbanzo",
    categoryId: "salados",
    name: "Pasta de Garbanzo",
    botanicalName: "Cicer arietinum",
    origin: "Mendoza",
    weightLabel: "170 g",
    summary:
      "Emulsión cremosa de garbanzos cocidos con jugo natural de limón y pimienta negra, fuente de proteína vegetal.",
    processNote:
      "Elaborada con agua de cocción, garbanzos seleccionados y AOVE sin conservantes.",
    ingredients:
      "Agua de cocción, garbanzo, aceite de oliva virgen extra, jugo de limón exprimido, azúcar, sal, ajo fresco y pimienta negra.",
    pairings: ["Ensaladas", "Bruschettas", "Pancitos caseros", "Picadas"],
    properties: [
      "Fuente de proteína vegetal",
      "Con AOVE y limón exprimido",
      "Sin conservantes ni colorantes",
      "Certificación libre de gluten",
    ],
    conservation:
      "Lugar fresco y seco. Abierto refrigerar hasta 10 días. La solidificación en frío es propia del aceite de oliva.",
    storeUrl: `${BASE_STORE}/productos/pasta-de-garbanzo/`,
  },
  {
    slug: "pesto-de-albahaca",
    categoryId: "salados",
    name: "Pesto de Albahaca",
    botanicalName: "Ocimum basilicum",
    origin: "Valle de Uco & Maipú, Mendoza",
    weightLabel: "170 g",
    summary:
      "Inspirado en el pesto familiar: hojas frescas de albahaca, ajo fresco, nueces del Valle de Uco y aceite de oliva virgen extra.",
    processNote:
      "Emulsión lista para agregar a cualquier comida conservando intacto el aroma fresco de la albahaca.",
    ingredients:
      "Albahaca, aceite de oliva virgen extra, nuez, ajo fresco, azúcar, sal y pimienta negra. Contiene nuez.",
    pairings: ["Pastas", "Empanadas caprese", "Bruschettas", "Milanesas", "Asados"],
    properties: [
      "Con nueces del Valle de Uco",
      "100% vegetal · Con AOVE",
      "Sin conservantes ni colorantes",
      "Certificación libre de gluten",
    ],
    conservation:
      "Lugar fresco y seco. Abierto refrigerar hasta 20 días. La solidificación en frío es propia del aceite de oliva.",
    storeUrl: `${BASE_STORE}/productos/pesto-de-albahaca/`,
  },
  {
    slug: "pasta-de-aceituna-verde2",
    categoryId: "salados",
    name: "Pasta de Aceituna Verde",
    botanicalName: "Olea europea · Variedad Arauco",
    origin: "Mendoza",
    weightLabel: "170 g",
    summary:
      "Textura de pedacitos reales de aceituna variedad Arauco ('criolla' mendocina), procesadas enteras sin carozo.",
    processNote:
      "Lavados previos con agua para reducir el tenor de sodio y resaltar el perfil frutal de la oliva.",
    ingredients:
      "Aceituna verde en salmuera, aceite de oliva virgen extra y azúcar.",
    pairings: ["Picadas", "Pizzas", "Bruschettas", "Sándwiches", "Pollo relleno"],
    properties: [
      "Olivas variedad Arauco mendocina",
      "Tenor de sodio reducido por lavado",
      "100% vegetal · Con AOVE",
      "Certificación libre de gluten",
    ],
    conservation:
      "Lugar fresco y seco. Abierto refrigerar hasta 20 días. La solidificación en frío es propia del aceite de oliva.",
    storeUrl: `${BASE_STORE}/productos/pasta-de-aceituna-verde2/`,
  },
  {
    slug: "pasta-de-aceituna-negra-condimenta",
    categoryId: "salados",
    name: "Pasta de Aceituna Negra Condimentada",
    botanicalName: "Olea europea · Variedad Arauco",
    origin: "Mendoza",
    weightLabel: "170 g",
    summary:
      "Olivas negras mendocinas descarozadas y condimentadas con especias cálidas para picadas y panificados.",
    processNote:
      "Lavado previo con agua para equilibrar sodio y realzar el carácter de la aceituna.",
    ingredients:
      "Aceituna negra, aceite de oliva virgen extra, azúcar, ajo deshidratado, pimentón extra, ají molido, orégano y pimienta negra.",
    pairings: ["Picadas", "Pizzas", "Bruschettas", "Torre de panqueques"],
    properties: [
      "100% vegetal",
      "Olivas mendocinas seleccionadas",
      "Sin conservantes ni colorantes",
      "Certificación libre de gluten",
    ],
    conservation:
      "Lugar fresco y seco. Abierto refrigerar hasta 20 días. La solidificación en frío es propia del aceite de oliva.",
    storeUrl: `${BASE_STORE}/productos/pasta-de-aceituna-negra-condimenta/`,
  },
  {
    slug: "pasta-de-porotos-colorados",
    categoryId: "salados",
    name: "Pasta de Poroto Colorado",
    botanicalName: "Phaseolus vulgaris",
    origin: "Mendoza",
    weightLabel: "170 g",
    summary:
      "Elaborada con porotos colorados seleccionados y un toque sutilmente picante. Combinada con cereales mejora la calidad proteica.",
    processNote: "Aderezo vegetal cocido artesanalmente sin aditivos.",
    ingredients:
      "Agua de cocción, poroto colorado, aceite de oliva virgen extra, vinagre de vino, azúcar, sal, cebolla de verdeo, ají molido, pimentón extra, pimienta negra y ajo deshidratado.",
    pairings: ["Tacos", "Picadas", "Bruschettas", "Nachos"],
    properties: [
      "Proteína vegetal de legumbres",
      "Toque picante equilibrado",
      "Sin conservantes ni colorantes",
      "Certificación libre de gluten",
    ],
    conservation:
      "Lugar fresco y seco. Abierto refrigerar hasta 10 días. La solidificación en frío es propia del aceite de oliva.",
    storeUrl: `${BASE_STORE}/productos/pasta-de-porotos-colorados/`,
  },
  {
    slug: "pasta-de-porotos-negros",
    categoryId: "salados",
    name: "Pasta de Poroto Negro",
    botanicalName: "Phaseolus vulgaris · Poroto Aduki",
    origin: "Mendoza",
    weightLabel: "170 g",
    summary:
      "Elaborada con porotos aduki seleccionados y una vinagreta especial de sabor profundo y versátil.",
    processNote:
      "Sin conservantes ni colorantes; ideal junto a panes o cereales para potenciar proteínas.",
    pairings: ["Tacos", "Tablas de quesos", "Picadas", "Bruschettas"],
    properties: [
      "Con porotos aduki seleccionados",
      "100% vegetal",
      "Sin conservantes ni colorantes",
      "Certificación libre de gluten",
    ],
    conservation:
      "Lugar fresco y seco. Abierto refrigerar hasta 10 días. La solidificación en frío es propia del aceite de oliva.",
    storeUrl: `${BASE_STORE}/productos/pasta-de-porotos-negros/`,
  },
  {
    slug: "tomates-secos-enteros",
    categoryId: "salados",
    name: "Tomates Secos Enteros",
    botanicalName: "Lycopersicon esculentum",
    origin: "Valle de Uco, Mendoza",
    weightLabel: "170 g",
    summary:
      "Colocados uno a uno a mano dentro del frasco, condimentados con pimienta negra en granos y aceite de oliva virgen extra.",
    processNote:
      "Presentación artesanal cuidada para que cada tomate muestre su cara al exterior.",
    ingredients:
      "Tomate deshidratado, aceite de oliva virgen extra, agua, azúcar, sal, vinagre de vino, orégano, ají molido, ajo deshidratado, pimentón extra y pimienta negra.",
    pairings: ["Picadas", "Pastas al disco", "Guisos", "Bruschettas", "Asados"],
    properties: [
      "Envasado artesanal uno a uno",
      "Con AOVE y pimienta en grano",
      "Sin conservantes ni colorantes",
      "Certificación libre de gluten",
    ],
    conservation:
      "Lugar fresco y seco. Abierto refrigerar hasta 20 días. La solidificación en frío es propia del aceite de oliva.",
    storeUrl: `${BASE_STORE}/productos/tomates-secos-enteros/`,
  },
  {
    slug: "salsa-agridulce-de-ciruela",
    categoryId: "salados",
    name: "Salsa Agridulce de Ciruela",
    botanicalName: "Prunus domestica · Inspiración chutney",
    origin: "Finca propia · Russell, Maipú",
    weightLabel: "170 g",
    summary:
      "Conserva agridulce elaborada con ciruelas de nuestra finca, cebolla morada, jengibre y especias aromáticas.",
    processNote:
      "Receta propia equilibrada con vinagre de vino y vinagre de manzana.",
    ingredients:
      "Ciruela, azúcar, cebolla morada, vinagre de vino, vinagre de manzana, sal, mostaza en grano, ajo deshidratado, jengibre en polvo y pimienta negra.",
    pairings: ["Carré de cerdo", "Carnes y pescados", "Picadas", "Quesos"],
    properties: [
      "Ciruelas de finca propia",
      "Notas de jengibre y mostaza",
      "Sin conservantes ni colorantes",
      "Certificación libre de gluten",
    ],
    conservation:
      "Lugar fresco y seco. Una vez abierto mantener refrigerado hasta 20 días.",
    storeUrl: `${BASE_STORE}/productos/salsa-agridulce-de-ciruela/`,
  },

  // ==================== SELECCIÓN TOMATE (seleccion-tomate) ====================
  {
    slug: "salsa-tuco",
    categoryId: "seleccion-tomate",
    name: "Salsa Tuco",
    botanicalName: "Tomates mendocinos & verduras salteadas en AOVE",
    origin: "Russell, Maipú, Mendoza",
    weightLabel: "500 g",
    summary:
      "Exquisita salsa de tomate con verduras salteadas en aceite de oliva virgen extra, lista para usar y cocinar en segundos.",
    processNote:
      "Preparación cuidadosa que conserva el sabor natural y nutrientes para brindar gusto casero auténtico.",
    ingredients:
      "Tomate, cebolla, zanahoria, pimiento verde, pimiento rojo, aceite de oliva virgen extra, ajo, sal y especias seleccionadas.",
    pairings: ["Pastas", "Lasagna", "Ñoquis de domingo", "Guisos"],
    properties: [
      "Lista para usar y cocinar",
      "Verduras salteadas en AOVE",
      "100% natural · Sin conservantes",
      "Libre de gluten",
    ],
    conservation:
      "Conservar en lugar fresco y seco. Una vez abierta refrigerar y consumir dentro de pocos días.",
    storeUrl: `${BASE_STORE}/productos/salsa-tuco/`,
  },
  {
    slug: "ketchup",
    categoryId: "seleccion-tomate",
    name: "Ketchup Natural",
    botanicalName: "Receta simple y tradicional",
    origin: "Mendoza",
    weightLabel: "250 g",
    summary:
      "Elaborado con tomates frescos seleccionados, logrando el equilibrio justo entre dulzura y acidez natural.",
    processNote:
      "Sin conservantes ni colorantes artificiales: una opción saludable para toda la familia.",
    ingredients: "Tomate fresco, azúcar, vinagre, sal y especias naturales.",
    pairings: ["Milanesas", "Papas fritas", "Hamburguesas caseras", "Picadas"],
    properties: [
      "Tomate fresco seleccionado",
      "Sin conservantes ni colorantes",
      "Receta tradicional",
      "Libre de gluten",
    ],
    conservation:
      "Conservar en lugar fresco y seco. Una vez abierto, refrigerar y consumir en 20 días.",
    storeUrl: `${BASE_STORE}/productos/ketchup/`,
  },
  {
    slug: "salsa-picante-de-tomate",
    categoryId: "seleccion-tomate",
    name: "Salsa Picante de Tomate",
    botanicalName: "Tomates seleccionados & especias",
    origin: "Mendoza",
    weightLabel: "250 g",
    summary:
      "Salsa picante de tomate con un picor complejo y perfectamente tolerable que realza cada plato.",
    processNote:
      "Elaborada con ingredientes naturales sin conservantes ni colorantes.",
    ingredients: "Tomates seleccionados, especias y condimentos naturales.",
    pairings: ["Empanadas", "Locros", "Asados", "Vegetales asados", "Salsas"],
    properties: [
      "Picor complejo y equilibrado",
      "100% vegetal",
      "Sin conservantes ni colorantes",
      "Libre de gluten",
    ],
    conservation:
      "Conservar en lugar fresco y seco. Una vez abierta mantener refrigerada.",
    storeUrl: `${BASE_STORE}/productos/salsa-picante-de-tomate/`,
  },
  {
    slug: "salsa-barbacoa",
    categoryId: "seleccion-tomate",
    name: "Salsa Barbacoa",
    botanicalName: "Receta casera ahumada",
    origin: "Mendoza",
    weightLabel: "250 g",
    summary:
      "Salsa barbacoa casera de sabor intenso y ahumado, pensada para darle carácter a parrillas y cocina diaria.",
    processNote:
      "100% vegetal, elaborada con ingredientes seleccionados sin conservantes ni colorantes.",
    ingredients: "Tomates, especias ahumadas y condimentos naturales.",
    pairings: ["Asados", "Hamburguesas", "Carnes a la parrilla", "Papas rústicas"],
    properties: [
      "Sabor intenso y ahumado",
      "100% vegetal",
      "Sin conservantes ni colorantes",
      "Libre de gluten",
    ],
    conservation:
      "Conservar en lugar fresco y seco. Refrigerar una vez abierta para mantener su frescura.",
    storeUrl: `${BASE_STORE}/productos/salsa-barbacoa/`,
  },

  // ==================== PACKS Y REGALOS (gif-card) ====================
  {
    slug: "box-huertana",
    categoryId: "gif-card",
    name: "Box Huertana de Madera",
    botanicalName: "Caja de autor reutilizable · 4 divisiones",
    origin: "Russell, Maipú, Mendoza",
    weightLabel: "Selección x 6 frascos + accesorios",
    summary:
      "Caja de madera armable a gusto con interior desmontable de 4 divisiones: elegís tus sabores favoritos y luego queda como organizador.",
    processNote:
      "Incluye 2 mermeladas gourmet (o 1 mermelada + 1 Salsa Huertana de 310 g), 4 delicatessen de 170/180 g y 2 cucharas doradas de acero inoxidable de 12 cm.",
    ingredients:
      "2 frascos de 310 g + 4 delicatessen de 170/180 g + 2 cucharas doradas + caja de madera.",
    pairings: [
      "Regalos empresariales",
      "Cumpleaños y aniversarios",
      "Picadas y sobremesas",
    ],
    properties: [
      "Caja de madera con interior desmontable",
      "Incluye 2 cucharas doradas de 12 cm",
      "Combinación personalizable",
      "100% Libre de gluten",
    ],
    conservation:
      "Armado personalizado directo con nuestro equipo por Tiendanube o WhatsApp.",
    storeUrl: `${BASE_STORE}/gif-card/`,
  },
  {
    slug: "gift-card",
    categoryId: "gif-card",
    name: "Gift Card Huertana",
    botanicalName: "Tarjeta regalo digital",
    origin: "Canje online en toda la tienda",
    weightLabel: "Monto a elección",
    summary:
      "Una opción práctica e ideal para regalar sabor mendocino en cumpleaños, aniversarios o celebraciones especiales.",
    processNote:
      "Elegís el monto y dejás que la persona agasajada elija entre las hasta 45 variedades de nuestra tienda.",
    pairings: ["Cumpleaños", "Aniversarios", "Agradecimientos", "Regalos a distancia"],
    properties: [
      "Entrega digital inmediata",
      "Válida para toda la tienda online",
      "Monto personalizable",
      "Sin vencimiento cercano",
    ],
    conservation: "Canje directo en huertana.mitiendanube.com.",
    storeUrl: `${BASE_STORE}/productos/gift-card/`,
  },
];
