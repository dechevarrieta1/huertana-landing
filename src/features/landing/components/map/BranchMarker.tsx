"use client";

import React from "react";
import { motion } from "motion/react";
import type { Branch } from "../../types/branches.types";
import { MascotIllustration } from "./MascotIllustration";

interface BranchMarkerProps {
  branch: Branch;
  storeCount?: number;
  isSelected: boolean;
  isHovered: boolean;
  onSelect: (branch: Branch) => void;
  onHover: (branch: Branch | null) => void;
}

export function BranchMarker({
  branch,
  storeCount,
  isSelected,
  isHovered,
  onSelect,
  onHover,
}: BranchMarkerProps) {
  const isHub = branch.type === "centro_distribucion" || branch.type === "taller_central";

  return (
    <div
      style={{
        position: "absolute",
        left: `${branch.mapPosition.x}%`,
        top: `${branch.mapPosition.y}%`,
        transform: "translate(-50%, -65%)",
      }}
      className="pointer-events-auto z-20"
    >
      <div className="relative group">
        {/* Tooltip flotante en hover (oculto si ya está seleccionada) */}
        {isHovered && !isSelected && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-[#1B1B1B] px-2.5 py-1 text-[11px] font-sans font-medium text-[#FFFCF7] shadow-lg pointer-events-none z-30 flex items-center gap-1.5"
          >
            <span
              className={`inline-block h-1.5 w-1.5 rounded-full ${
                branch.isHeadquarters
                  ? "bg-[#C99A4A]"
                  : isHub
                  ? "bg-[#617248]"
                  : "bg-[#DCCBA3]"
              }`}
            />
            <span>{branch.province}</span>
            <span className="text-[9px] text-[#DCCBA3] uppercase tracking-wider">
              {branch.isHeadquarters
                ? "Taller Central"
                : storeCount
                ? `${storeCount} ${storeCount === 1 ? "punto" : "puntos"}`
                : "Punto de Venta"}
            </span>
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#1B1B1B]" />
          </motion.div>
        )}

        {/* Botón interactivo accesible con hit-area de 48px */}
        <button
          type="button"
          onClick={() => onSelect(branch)}
          onMouseEnter={() => onHover(branch)}
          onMouseLeave={() => onHover(null)}
          onFocus={() => onHover(branch)}
          onBlur={() => onHover(null)}
          aria-label={`${branch.name} en ${branch.locality}, ${branch.province}. ${branch.typeLabel}`}
          aria-pressed={isSelected}
          className="relative flex items-center justify-center p-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A4A] focus-visible:ring-offset-2 transition-transform cursor-pointer"
        >
          {/* Halo de pulsación para el seleccionado o headquarters */}
          {isSelected && (
            <motion.span
              initial={{ scale: 0.8, opacity: 0.8 }}
              animate={{ scale: [1, 1.4, 1], opacity: [0.7, 0.2, 0.7] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
              className="absolute -inset-1 rounded-full bg-[#C99A4A]/40"
            />
          )}

          {/* Halo sutil para Taller Central cuando no está seleccionado */}
          {branch.isHeadquarters && !isSelected && (
            <span className="absolute -inset-0.5 rounded-full bg-[#C99A4A]/25 animate-pulse" />
          )}

          {/* Contenedor del personaje ilustrado con microanimaciones */}
          <motion.div
            animate={{
              scale: isSelected ? 1.25 : isHovered ? 1.15 : 1,
              y: isSelected ? -4 : isHovered ? -2 : 0,
            }}
            transition={{ type: "spring", stiffness: 350, damping: 22 }}
            className={`relative rounded-full p-1 transition-shadow duration-200 ${
              isSelected
                ? "bg-[#FFFCF7] shadow-md ring-2 ring-[#C99A4A]"
                : isHovered
                ? "bg-[#FFFCF7]/90 shadow-sm"
                : "bg-transparent"
            }`}
          >
            <MascotIllustration
              size={isSelected ? 42 : 36}
              highlighted={isSelected || isHovered}
            />

            {/* Micro-badge de tipo o cantidad en la esquina */}
            <span
              className={`absolute -bottom-1 -right-1 flex h-4 min-w-4 px-1 items-center justify-center rounded-full text-[9px] font-bold text-white shadow-xs border border-white ${
                branch.isHeadquarters
                  ? "bg-[#C99A4A]"
                  : isHub
                  ? "bg-[#617248]"
                  : "bg-[#8C6D42]"
              }`}
              title={`${branch.province}: ${storeCount ?? 1} puntos`}
            >
              {branch.isHeadquarters ? "★" : storeCount ?? "•"}
            </span>
          </motion.div>
        </button>
      </div>
    </div>
  );
}
