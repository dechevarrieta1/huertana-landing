"use client";

import React, { useState, useMemo } from "react";
import { HUERTANA_BRANCHES } from "../../data/branches.data";
import type { Branch } from "../../types/branches.types";
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
  initialBranchId = "huertana-taller-central",
  className = "",
}: InteractiveBranchesMapProps) {
  const [selectedBranchId, setSelectedBranchId] = useState<string | null>(
    initialBranchId
  );
  const [selectedProvinceId, setSelectedProvinceId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [hoveredBranch, setHoveredBranch] = useState<Branch | null>(null);

  const selectedBranch = useMemo(() => {
    if (!selectedBranchId) return null;
    return branches.find((b) => b.id === selectedBranchId) || null;
  }, [branches, selectedBranchId]);

  const handleSelectBranch = (branch: Branch) => {
    setSelectedBranchId(branch.id);
    setSelectedProvinceId(branch.provinceId);
  };

  const handleCloseCard = () => {
    setSelectedBranchId(null);
  };

  const handleSelectProvince = (provId: string | null) => {
    setSelectedProvinceId(provId);
    if (provId) {
      const firstInProv = branches.find((b) => b.provinceId === provId);
      if (firstInProv) {
        setSelectedBranchId(firstInProv.id);
      }
    }
  };

  return (
    <div
      className={`relative ${className}`}
      role="region"
      aria-label="Mapa interactivo de sucursales Huertana"
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 items-start">
        {/* Columna Izquierda: Mapa Ilustrado de Argentina como protagonista */}
        <div className="lg:col-span-7 flex flex-col items-center">
          <ArgentinaMap
            branches={branches}
            selectedBranch={selectedBranch}
            hoveredBranch={hoveredBranch}
            selectedProvinceId={selectedProvinceId}
            onSelectProvince={handleSelectProvince}
            onSelectBranch={handleSelectBranch}
            onHoverBranch={setHoveredBranch}
          />
          <div className="mt-3 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-[11px] text-[#1B1B1B]/75 font-ui">
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#C09B5D] border border-[#1B1B1B]/20" />
              Provincias con Huertana
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#CCBFA4] border border-[#1B1B1B]/20" />
              Envíos a todo el país
            </span>
          </div>
        </div>

        {/* Columna Derecha: Tarjeta de información interactiva y listado complementario */}
        <div className="lg:col-span-5 flex flex-col space-y-5">
          <BranchInfoCard
            branch={selectedBranch}
            onClose={handleCloseCard}
          />

          {/* Directorio completo con buscador y filtros */}
          <div className="rounded-2xl border border-[#CCBFA4] bg-[#FBF7EB] p-4 sm:p-5 shadow-xs">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <h4 className="font-serif text-sm font-semibold text-[#1B1B1B] uppercase tracking-wider">
                  Puntos de Venta & Sucursales
                </h4>
                <p className="text-[11px] text-[#1B1B1B]/65">
                  Encontrá el más cercano a tu domicilio
                </p>
              </div>
              <span className="rounded-full bg-[#FFFDF8] border border-[#CCBFA4] px-2.5 py-1 font-ui text-[10px] text-[#9B773C] font-bold">
                {branches.length} locales
              </span>
            </div>

            <BranchesList
              branches={branches}
              selectedBranchId={selectedBranchId}
              selectedProvinceId={selectedProvinceId}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onSelectProvince={handleSelectProvince}
              onSelectBranch={handleSelectBranch}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
