"use client";

import React from "react";
import type { Branch, BranchFilter } from "../../types/branches.types";

interface BranchesListProps {
  branches: Branch[];
  selectedBranchId: string | null;
  activeFilter: BranchFilter;
  onFilterChange: (filter: BranchFilter) => void;
  onSelectBranch: (branch: Branch) => void;
}

export function BranchesList({
  branches,
  selectedBranchId,
  activeFilter,
  onFilterChange,
  onSelectBranch,
}: BranchesListProps) {
  const filteredBranches = branches.filter((branch) => {
    if (activeFilter === "centro_distribucion") {
      return branch.type === "centro_distribucion" || branch.type === "taller_central";
    }
    if (activeFilter === "punto_venta") {
      return branch.type === "punto_venta";
    }
    return true;
  });

  return (
    <div className="space-y-3">
      {/* Filtros por tipo de presencia */}
      <div
        role="tablist"
        aria-label="Filtrar sucursales por tipo"
        className="flex items-center gap-1.5 p-1 rounded-full bg-[#EFECE6] border border-[#C99A4A]/20"
      >
        <button
          type="button"
          role="tab"
          aria-selected={activeFilter === "all"}
          onClick={() => onFilterChange("all")}
          className={`flex-1 rounded-full py-1 px-2.5 text-[11px] font-semibold transition-all ${
            activeFilter === "all"
              ? "bg-[#FFFCF7] text-[#1B1B1B] shadow-xs"
              : "text-[#1B1B1B]/70 hover:text-[#1B1B1B]"
          }`}
        >
          Todas ({branches.length})
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeFilter === "centro_distribucion"}
          onClick={() => onFilterChange("centro_distribucion")}
          className={`flex-1 rounded-full py-1 px-2.5 text-[11px] font-semibold transition-all ${
            activeFilter === "centro_distribucion"
              ? "bg-[#617248] text-white shadow-xs"
              : "text-[#1B1B1B]/70 hover:text-[#1B1B1B]"
          }`}
        >
          Distribución
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeFilter === "punto_venta"}
          onClick={() => onFilterChange("punto_venta")}
          className={`flex-1 rounded-full py-1 px-2.5 text-[11px] font-semibold transition-all ${
            activeFilter === "punto_venta"
              ? "bg-[#8C6D42] text-white shadow-xs"
              : "text-[#1B1B1B]/70 hover:text-[#1B1B1B]"
          }`}
        >
          Puntos de Venta
        </button>
      </div>

      {/* Lista de chips horizontales / grid fluido */}
      <div className="flex gap-2 overflow-x-auto pb-1 pt-0.5 sm:grid sm:grid-cols-2 scrollbar-thin">
        {filteredBranches.map((branch) => {
          const isSelected = selectedBranchId === branch.id;
          return (
            <button
              key={branch.id}
              type="button"
              onClick={() => onSelectBranch(branch)}
              className={`shrink-0 text-left rounded-xl border p-2.5 transition-all text-xs cursor-pointer ${
                isSelected
                  ? "border-[#C99A4A] bg-[#FFFCF7] shadow-xs ring-1 ring-[#C99A4A]"
                  : "border-[#C99A4A]/20 bg-[#F5F0E6]/80 hover:bg-[#FFFCF7] hover:border-[#C99A4A]/40"
              }`}
            >
              <div className="flex items-center justify-between gap-1.5">
                <span className="font-serif font-medium text-[#1B1B1B] truncate">
                  {branch.locality}
                </span>
                <span
                  className={`h-2 w-2 rounded-full shrink-0 ${
                    branch.isHeadquarters
                      ? "bg-[#C99A4A]"
                      : branch.type === "centro_distribucion"
                      ? "bg-[#617248]"
                      : "bg-[#8C6D42]"
                  }`}
                />
              </div>
              <div className="mt-0.5 flex items-center justify-between text-[10px] text-[#1B1B1B]/65">
                <span>{branch.province}</span>
                <span className="text-[9px] uppercase tracking-wider font-mono">
                  {branch.isHeadquarters ? "Central" : branch.type === "centro_distribucion" ? "Hub" : "Local"}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
