import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const recoleta = localFont({
  variable: "--font-recoleta",
  display: "swap",
  src: [
    {
      path: "./fonts/Recoleta-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Recoleta-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Recoleta-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Recoleta-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Recoleta-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

const gotham = localFont({
  variable: "--font-gotham",
  display: "swap",
  src: [
    {
      path: "./fonts/Gotham-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Gotham-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

const roboto = localFont({
  variable: "--font-roboto",
  display: "swap",
  src: [
    {
      path: "./fonts/Roboto-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Roboto-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Roboto-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Roboto-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

const slatePro = localFont({
  variable: "--font-slate",
  display: "swap",
  src: [
    {
      path: "./fonts/SlatePro-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/SlatePro-Condensed.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/SlatePro-MediumCondensed.otf",
      weight: "500",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "HUERTANA | Alimentos gourmet artesanales & Agroturismo en Mendoza",
  description:
    "Empresa familiar mendocina con 17 años elaborando mermeladas con 65% de fruta, delicatessen 100% vegetales con AOVE, salsas caseras libre de gluten y experiencias de turismo en Russell, Maipú.",
  keywords: [
    "Huertana",
    "mermeladas gourmet",
    "delicatessen vegetales",
    "sin gluten",
    "sin TACC",
    "agroturismo Mendoza",
    "visitas guiadas Maipú",
    "Russell Maipú",
    "Mendoza",
  ],
  openGraph: {
    title: "HUERTANA | Alimentos gourmet artesanales & Agroturismo en Mendoza",
    description:
      "Mermeladas con 65% de fruta, delicatessen vegetales con AOVE, libre de gluten y visitas guiadas con degustación en Russell, Maipú, Mendoza.",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${recoleta.variable} ${gotham.variable} ${roboto.variable} ${slatePro.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-[#FBF7EB] text-[#1B1B1B] font-sans">
        {children}
      </body>
    </html>
  );
}
