"use client";

import React from "react";
import { motion } from "motion/react";
import type { Branch } from "../../types/branches.types";
import { MascotIllustration } from "./MascotIllustration";

interface BranchMarkerProps {
  branch: Branch;
  position?: { x: number; y: number };
  storeCount?: number;
  isSelected: boolean;
  isHovered: boolean;
  onSelect: (branch: Branch) => void;
  onHover: (branch: Branch | null) => void;
}

export function BranchMarker({
  branch,
  position,
  storeCount,
  isSelected,
  isHovered,
  onSelect,
  onHover,
}: BranchMarkerProps) {
  const isHub =
    branch.type === "centro_distribucion" || branch.type === "taller_central";
  const coords = position ?? branch.mapPosition;

  return (
    <div
      style={{
        position: "absolute",
        left: `${coords.x}%`,
        top: `${coords.y}%`,
        transform: "translate(-50%, -50%)",
      }}
      className={`pointer-events-auto ${isSelected || isHovered ? "z-30" : "z-20"}`}
    >
      <div className="relative group">
        {isHovered && !isSelected && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-[#1B1B1B] px-2.5 py-1 text-[11px] font-sans font-medium text-[#FBF7EB] shadow-lg pointer-events-none z-40 flex items-center gap-1.5"
          >
            <span
              className={`inline-block h-1.5 w-1.5 rounded-full ${
                branch.isHeadquarters
                  ? "bg-[#C09B5D]"
                  : isHub
                  ? "bg-[#FBF7EB]"
                  : "bg-[#CCBFA4]"
              }`}
            />
            <span>{branch.province}</span>
            <span className="font-ui text-[9px] text-[#CCBFA4] uppercase tracking-wider">
              {branch.isHeadquarters
                ? "Taller Central"
                : storeCount
                ? `${storeCount} ${storeCount === 1 ? "punto" : "puntos"}`
                : "Punto de Venta"}
            </span>
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#1B1B1B]" />
          </motion.div>
        )}

        <button
          type="button"
          onClick={() => onSelect(branch)}
          onMouseEnter={() => onHover(branch)}
          onMouseLeave={() => onHover(null)}
          onFocus={() => onHover(branch)}
          onBlur={() => onHover(null)}
          aria-label={`${branch.name} en ${branch.locality}, ${branch.province}. ${branch.typeLabel}`}
          aria-pressed={isSelected}
          className="relative flex items-center justify-center p-1 sm:p-1.5 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C09B5D] focus-visible:ring-offset-2 transition-transform cursor-pointer"
        >
          {isSelected && (
            <motion.span
              initial={{ scale: 0.8, opacity: 0.8 }}
              animate={{ scale: [1, 1.35, 1], opacity: [0.7, 0.2, 0.7] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
              className="absolute -inset-0.5 rounded-full bg-[#C09B5D]/40"
            />
          )}

          {branch.isHeadquarters && !isSelected && (
            <span className="absolute -inset-0.5 rounded-full bg-[#C09B5D]/30 animate-pulse" />
          )}

          <motion.div
            animate={{
              scale: isSelected ? 1.15 : isHovered ? 1.08 : 1,
              y: isSelected ? -3 : isHovered ? -1.5 : 0,
            }}
            transition={{ type: "spring", stiffness: 350, damping: 22 }}
            className={`relative rounded-full p-0.5 sm:p-1 transition-shadow duration-200 ${
              isSelected
                ? "bg-[#FFFDF8] shadow-md ring-2 ring-[#C09B5D]"
                : isHovered
                ? "bg-[#FFFDF8]/95 shadow-sm"
                : "bg-[#FFFDF8]/85 shadow-xs"
            }`}
          >
            <MascotIllustration
              className={
                isSelected
                  ? "h-7 w-7 sm:h-9 sm:w-9"
                  : "h-6 w-6 sm:h-8 sm:w-8"
              }
              highlighted={isSelected || isHovered}
            />

            <span
              className={`absolute -bottom-1 -right-1 flex h-4 min-w-4 px-1 items-center justify-center rounded-full text-[9px] font-bold shadow-xs border border-[#FBF7EB] ${
                branch.isHeadquarters
                  ? "bg-[#C09B5D] text-[#1B1B1B]"
                  : isHub
                  ? "bg-[#1B1B1B] text-[#FBF7EB]"
                  : "bg-[#9B773C] text-[#FBF7EB]"
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
