import type { Metadata } from "next";
import { Fraunces, Montserrat } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Huertana | Alimentos naturales y productos a granel",
  description:
    "Huertana ofrece alimentos naturales, frutos secos, semillas, legumbres y productos a granel desde Russell, Maipú, Mendoza.",
  keywords: [
    "alimentos naturales",
    "productos a granel",
    "frutos secos",
    "semillas",
    "Mendoza",
    "Huertana",
  ],
  openGraph: {
    title: "Huertana | Alimentos naturales y productos a granel",
    description:
      "Huertana ofrece alimentos naturales, frutos secos, semillas, legumbres y productos a granel desde Russell, Maipú, Mendoza.",
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
      className={`${fraunces.variable} ${montserrat.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-[#F5F0E6] text-[#1B1B1B] font-sans">
        {children}
      </body>
    </html>
  );
}
