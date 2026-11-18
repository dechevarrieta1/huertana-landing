"use client";

import React from "react";
import { motion } from "motion/react";
import {
  MapPin,
  Clock,
  Phone,
  Navigation,
  X,
  Store,
  Truck,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import type { Branch } from "../../types/branches.types";

interface BranchInfoCardProps {
  branch: Branch | null;
  onClose: () => void;
}

export function BranchInfoCard({ branch, onClose }: BranchInfoCardProps) {
  if (!branch) {
    return (
      <div className="min-h-[350px] flex flex-col items-center justify-center rounded-2xl border border-[#CCBFA4] bg-[#FFFDF8] p-6 shadow-xs text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FBF7EB] text-[#C09B5D] border border-[#CCBFA4]">
          <MapPin className="h-6 w-6 stroke-[1.5]" />
        </div>
        <h3 className="mt-3 font-serif text-lg text-[#1B1B1B]">
          Seleccioná un punto de venta
        </h3>
        <p className="mt-1 text-xs text-[#1B1B1B]/75 leading-relaxed max-w-xs mx-auto">
          Hacé clic en una provincia en el mapa o elegí una tienda en el
          directorio para ver su dirección exacta y cómo llegar.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-1.5 font-ui text-[10px] font-medium text-[#1B1B1B]/80">
          <span className="inline-flex items-center gap-1 rounded-full bg-[#FBF7EB] border border-[#CCBFA4]/70 px-2.5 py-1">
            <span className="h-2 w-2 rounded-full bg-[#C09B5D]" /> Taller Central
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-[#FBF7EB] border border-[#CCBFA4]/70 px-2.5 py-1">
            <span className="h-2 w-2 rounded-full bg-[#1B1B1B]" /> Distribución
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-[#FBF7EB] border border-[#CCBFA4]/70 px-2.5 py-1">
            <span className="h-2 w-2 rounded-full bg-[#9B773C]" /> Punto de Venta
          </span>
        </div>
      </div>
    );
  }

  const mapsQuery = encodeURIComponent(
    `${branch.name}, ${branch.address}, ${branch.locality}, ${branch.province}, Argentina`
  );
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

  const isHeadquarters = branch.isHeadquarters;
  const isHub =
    branch.type === "centro_distribucion" || branch.type === "taller_central";

  const officialWaMessage = encodeURIComponent(
    `Hola Huertana, me gustaría consultar por disponibilidad de productos en el punto de venta "${branch.name}" (${branch.locality}, ${branch.province}).`
  );
  const inquiryWaUrl = `https://wa.me/5492613432657?text=${officialWaMessage}`;

  return (
    <motion.article
      key={branch.id}
      initial={{ opacity: 0, y: 8, scale: 0.99 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 6, scale: 0.99 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="relative min-h-[350px] flex flex-col justify-between overflow-hidden rounded-2xl border border-[#CCBFA4] bg-[#FFFDF8] p-5 sm:p-6 shadow-sm"
      aria-labelledby={`branch-title-${branch.id}`}
    >
      <div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar tarjeta de sucursal"
          className="absolute top-4 right-4 rounded-full p-1.5 text-[#1B1B1B]/60 hover:bg-[#FBF7EB] hover:text-[#1B1B1B] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C09B5D]"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-2 pr-8">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 font-ui text-[10px] font-bold uppercase tracking-wider ${
              isHeadquarters
                ? "bg-[#C09B5D] text-[#1B1B1B]"
                : isHub
                ? "bg-[#1B1B1B] text-[#FBF7EB]"
                : "bg-[#CCBFA4] text-[#1B1B1B]"
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
          <span className="font-ui text-[11px] font-medium text-[#9B773C]">
            {branch.province}
          </span>
        </div>

        <h3
          id={`branch-title-${branch.id}`}
          className="mt-2 font-serif text-xl sm:text-2xl font-normal text-[#1B1B1B] leading-snug break-words"
        >
          {branch.name}
        </h3>

        <p className="font-serif text-xs italic text-[#9B773C]">
          {branch.locality} · {branch.province}
        </p>

        {branch.description && (
          <p className="mt-2.5 text-xs leading-relaxed text-[#1B1B1B]/85 border-l-2 border-[#C09B5D] pl-3 break-words">
            {branch.description}
          </p>
        )}

        <div className="mt-3.5 space-y-2 rounded-xl bg-[#FBF7EB] p-3 text-xs text-[#1B1B1B]/85 border border-[#CCBFA4]/70">
          <div className="flex items-start gap-2.5">
            <MapPin className="h-4 w-4 shrink-0 text-[#9B773C] mt-0.5" />
            <div className="break-words min-w-0">
              <span className="font-ui font-bold text-[#1B1B1B] block text-[10px] uppercase tracking-wider">
                Dirección:
              </span>
              <span className="text-[#1B1B1B]">{branch.address}</span>
              {branch.postalCode && (
                <span className="ml-2 font-ui text-[10px] text-[#1B1B1B]/60">
                  (CP {branch.postalCode})
                </span>
              )}
            </div>
          </div>

          {branch.openingHours && (
            <div className="flex items-start gap-2.5 border-t border-[#CCBFA4]/50 pt-1.5">
              <Clock className="h-4 w-4 shrink-0 text-[#9B773C] mt-0.5" />
              <div>
                <span className="font-ui font-bold text-[#1B1B1B] block text-[10px] uppercase tracking-wider">
                  Horarios:
                </span>
                <span>{branch.openingHours}</span>
              </div>
            </div>
          )}

          {branch.phone && (
            <div className="flex items-center gap-2.5 border-t border-[#CCBFA4]/50 pt-1.5">
              <Phone className="h-4 w-4 shrink-0 text-[#9B773C]" />
              <div>
                <span className="font-ui font-bold text-[#1B1B1B] block text-[10px] uppercase tracking-wider">
                  Teléfono:
                </span>
                <span className="font-medium text-[#1B1B1B]">
                  {branch.phone}
                </span>
              </div>
            </div>
          )}

          {branch.isHeadquarters && branch.whatsapp && (
            <div className="flex items-center justify-between border-t border-[#CCBFA4]/50 pt-1.5">
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-[#9B773C]" />
                <div>
                  <span className="font-ui font-bold text-[#1B1B1B] block text-[10px] uppercase tracking-wider">
                    Atención Directa:
                  </span>
                  <span className="font-medium text-[#1B1B1B]">
                    {branch.whatsapp}
                  </span>
                </div>
              </div>
              {branch.whatsappUrl && (
                <a
                  href={branch.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#FFFDF8] border border-[#CCBFA4] px-3 py-1 font-ui text-[10px] font-bold uppercase tracking-wider text-[#9B773C] hover:border-[#C09B5D] transition-colors"
                >
                  Escribir →
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#C09B5D] py-2.5 px-4 font-ui text-xs font-bold uppercase tracking-wider text-[#1B1B1B] shadow-xs transition-colors hover:bg-[#AD874A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B1B1B]"
        >
          <Navigation className="h-3.5 w-3.5" />
          Cómo llegar en Google Maps
          <ExternalLink className="h-3 w-3 opacity-70" />
        </a>

        {!branch.isHeadquarters && (
          <a
            href={inquiryWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#CCBFA4] bg-[#FBF7EB] py-2 px-4 font-ui text-[11px] font-bold text-[#1B1B1B] hover:border-[#C09B5D] transition-colors"
          >
            <Phone className="h-3 w-3 text-[#9B773C]" />
            Consultar disponibilidad a Huertana
          </a>
        )}
      </div>
    </motion.article>
  );
}
