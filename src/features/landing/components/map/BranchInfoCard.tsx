"use client";

import React from "react";
import { motion } from "motion/react";
import { MapPin, Clock, Phone, Navigation, X, Store, Truck, Sparkles } from "lucide-react";
import type { Branch } from "../../types/branches.types";

interface BranchInfoCardProps {
  branch: Branch | null;
  onClose: () => void;
}

export function BranchInfoCard({ branch, onClose }: BranchInfoCardProps) {
  if (!branch) {
    return (
      <div className="rounded-2xl border border-[#C99A4A]/20 bg-[#FFFCF7]/95 p-6 shadow-sm backdrop-blur-xs text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#F5F0E6] text-[#C99A4A]">
          <MapPin className="h-6 w-6 stroke-[1.5]" />
        </div>
        <h3 className="mt-3 font-serif text-lg text-[#1B1B1B]">
          Seleccioná una sucursal en el mapa
        </h3>
        <p className="mt-1 text-xs text-[#1B1B1B]/70 leading-relaxed max-w-xs mx-auto">
          Hacé clic en cualquiera de los personajes ilustrados para conocer nuestros centros de distribución y puntos de venta en todo el país.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-2 text-[11px] font-medium text-[#617248]">
          <span className="inline-flex items-center gap-1 rounded-full bg-[#F5F0E6] px-2.5 py-1">
            <span className="h-2 w-2 rounded-full bg-[#C99A4A]" /> Taller Central
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-[#F5F0E6] px-2.5 py-1">
            <span className="h-2 w-2 rounded-full bg-[#617248]" /> Centro de Distribución
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-[#F5F0E6] px-2.5 py-1">
            <span className="h-2 w-2 rounded-full bg-[#8C6D42]" /> Punto de Venta
          </span>
        </div>
      </div>
    );
  }

  const mapsQuery = encodeURIComponent(
    `${branch.address}, ${branch.locality}, ${branch.province}, Argentina`
  );
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

  const isHeadquarters = branch.isHeadquarters;
  const isHub = branch.type === "centro_distribucion" || branch.type === "taller_central";

  return (
    <motion.article
      key={branch.id}
      initial={{ opacity: 0, y: 12, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.98 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="relative overflow-hidden rounded-2xl border border-[#C99A4A]/30 bg-[#FFFCF7] p-5 sm:p-6 shadow-md"
      aria-labelledby={`branch-title-${branch.id}`}
    >
      {/* Botón de cierre */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Cerrar tarjeta de sucursal"
        className="absolute top-4 right-4 rounded-full p-1.5 text-[#1B1B1B]/60 hover:bg-[#F5F0E6] hover:text-[#1B1B1B] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A4A]"
      >
        <X className="h-4 w-4" />
      </button>

      {/* Encabezado con badge editorial */}
      <div className="flex items-center gap-2 pr-8">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
            isHeadquarters
              ? "bg-[#C99A4A] text-[#1B1B1B]"
              : isHub
              ? "bg-[#617248] text-white"
              : "bg-[#8C6D42] text-white"
          }`}
        >
          {isHeadquarters ? (
            <Sparkles className="h-3 w-3" />
          ) : isHub ? (
            <Truck className="h-3 w-3" />
          ) : (
            <Store className="h-3 w-3" />
          )}
          {branch.typeLabel}
        </span>
        <span className="text-xs font-medium text-[#617248]">
          {branch.province}
        </span>
      </div>

      <h3
        id={`branch-title-${branch.id}`}
        className="mt-2 font-serif text-xl sm:text-2xl font-normal text-[#1B1B1B] leading-snug"
      >
        {branch.locality}
      </h3>

      <p className="font-serif text-xs italic text-[#617248]">
        {branch.name}
      </p>

      {/* Descripción de la sede */}
      {branch.description && (
        <p className="mt-3 text-xs leading-relaxed text-[#1B1B1B]/80 border-l-2 border-[#C99A4A]/40 pl-3">
          {branch.description}
        </p>
      )}

      {/* Ficha de datos de contacto */}
      <div className="mt-4 space-y-2 rounded-xl bg-[#F5F0E6] p-3.5 text-xs text-[#1B1B1B]/85 border border-[#C99A4A]/15">
        <div className="flex items-start gap-2.5">
          <MapPin className="h-4 w-4 shrink-0 text-[#617248] mt-0.5" />
          <div>
            <span className="font-semibold text-[#1B1B1B] block text-[11px] uppercase tracking-wider">
              Dirección:
            </span>
            <span>{branch.address}</span>
          </div>
        </div>

        {branch.openingHours && (
          <div className="flex items-start gap-2.5 border-t border-[#C99A4A]/15 pt-2">
            <Clock className="h-4 w-4 shrink-0 text-[#617248] mt-0.5" />
            <div>
              <span className="font-semibold text-[#1B1B1B] block text-[11px] uppercase tracking-wider">
                Horarios:
              </span>
              <span>{branch.openingHours}</span>
            </div>
          </div>
        )}

        {branch.whatsapp && (
          <div className="flex items-center justify-between border-t border-[#C99A4A]/15 pt-2">
            <div className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-[#617248]" />
              <div>
                <span className="font-semibold text-[#1B1B1B] block text-[11px] uppercase tracking-wider">
                  WhatsApp:
                </span>
                <span className="font-medium text-[#1B1B1B]">{branch.whatsapp}</span>
              </div>
            </div>
            {branch.whatsappUrl && (
              <a
                href={branch.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#FFFCF7] border border-[#C99A4A]/30 px-3 py-1 text-[11px] font-semibold text-[#617248] hover:bg-[#C99A4A]/20 transition-colors"
              >
                Escribir →
              </a>
            )}
          </div>
        )}
      </div>

      {/* Botón Cómo llegar */}
      <div className="mt-4">
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#C99A4A] py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-[#1B1B1B] shadow-xs transition-colors hover:bg-[#b8893b] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B1B1B]"
        >
          <Navigation className="h-3.5 w-3.5" />
          Cómo llegar en Google Maps →
        </a>
      </div>
    </motion.article>
  );
}
