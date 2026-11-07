"use client";

import React, { useState } from "react";
import { HUERTANA_BRANCHES } from "../../data/branches.data";
import type { Branch, BranchFilter } from "../../types/branches.types";
import { ArgentinaMap } from "./ArgentinaMap";
import { BranchInfoCard } from "./BranchInfoCard";
import { BranchesList } from "./BranchesList";

interface InteractiveBranchesMapProps {
  branches?: Branch[];
  initialBranchId?: string;
  className?: string;
}

export function InteractiveBranchesMap({
  branches = HUERTANA_BRANCHES,
  initialBranchId = "mendoza-central",
  className = "",
}: InteractiveBranchesMapProps) {
  const [selectedBranchId, setSelectedBranchId] = useState<string | null>(
    initialBranchId
  );
  const [hoveredBranch, setHoveredBranch] = useState<Branch | null>(null);
  const [activeFilter, setActiveFilter] = useState<BranchFilter>("all");

  const selectedBranch = React.useMemo(() => {
    if (!selectedBranchId) return null;
    return branches.find((b) => b.id === selectedBranchId) || null;
  }, [branches, selectedBranchId]);

  const handleSelectBranch = (branch: Branch) => {
    setSelectedBranchId(branch.id);
  };

  const handleCloseCard = () => {
    setSelectedBranchId(null);
  };

  return (
    <div className={`relative ${className}`} role="region" aria-label="Mapa interactivo de sucursales Huertana">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 items-start">
        {/* Columna Izquierda: Mapa Ilustrado de Argentina como protagonista */}
        <div className="lg:col-span-7 flex flex-col items-center">
          <ArgentinaMap
            branches={branches}
            selectedBranch={selectedBranch}
            hoveredBranch={hoveredBranch}
            onSelectBranch={handleSelectBranch}
            onHoverBranch={setHoveredBranch}
          />
          <div className="mt-3 flex items-center gap-4 text-[11px] text-[#1B1B1B]/70 font-mono">
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#BA8840] border border-white" />
              Provincias con Huertana
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#DCCBA3] border border-white" />
              Envíos a todo el país
            </span>
          </div>
        </div>

        {/* Columna Derecha: Tarjeta de información interactiva y listado complementario */}
        <div className="lg:col-span-5 flex flex-col space-y-6">
          {/* Tarjeta de información dinámica de la sucursal seleccionada */}
          <BranchInfoCard
            branch={selectedBranch}
            onClose={handleCloseCard}
          />

          {/* Selector y listado complementario sincronizado */}
          <div className="rounded-2xl border border-[#C99A4A]/20 bg-[#F5F0E6] p-4 sm:p-5">
            <div className="mb-3 flex items-center justify-between">
              <h4 className="font-serif text-sm font-semibold text-[#1B1B1B] uppercase tracking-wider">
                Directorio de Sucursales
              </h4>
              <span className="font-mono text-[11px] text-[#617248] font-bold">
                {branches.length} ubicaciones
              </span>
            </div>

            <BranchesList
              branches={branches}
              selectedBranchId={selectedBranchId}
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
              onSelectBranch={handleSelectBranch}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
