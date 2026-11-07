"use client";

import React from "react";
import {
  ARGENTINA_PROVINCES,
  ARGENTINA_MAP_CONFIG,
} from "../../data/argentinaProvinces.data";
import type { Branch } from "../../types/branches.types";
import { BranchMarker } from "./BranchMarker";
import { MascotIllustration } from "./MascotIllustration";

interface ArgentinaMapProps {
  branches: Branch[];
  selectedBranch: Branch | null;
  hoveredBranch: Branch | null;
  onSelectBranch: (branch: Branch) => void;
  onHoverBranch: (branch: Branch | null) => void;
}

export function ArgentinaMap({
  branches,
  selectedBranch,
  hoveredBranch,
  onSelectBranch,
  onHoverBranch,
}: ArgentinaMapProps) {
  // Mapa de branches por ID de provincia para interacción rápida al hacer clic en una provincia
  const branchByProvinceId = React.useMemo(() => {
    const map = new Map<string, Branch>();
    branches.forEach((b) => map.set(b.provinceId, b));
    return map;
  }, [branches]);

  const activeProvinceId = selectedBranch?.provinceId || hoveredBranch?.provinceId;

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-[#C99A4A]/25 bg-[#F5F0E5] shadow-xs select-none">
      {/* Sutil textura de papel artesanal */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#1B1B1B 1px, transparent 1px)`,
          backgroundSize: "16px 16px",
        }}
        aria-hidden="true"
      />

      {/* Sello editorial Huertana: "Si hay mesa Argentina / HAY HUERTANA" (fiel a la ilustración) */}
      <div className="absolute right-4 bottom-24 sm:right-8 sm:bottom-32 z-10 text-right pointer-events-none max-w-[190px] sm:max-w-[240px]">
        <p className="font-serif italic text-base sm:text-xl font-medium text-[#1B1B1B] leading-tight">
          Si hay mesa <br />
          <span className="font-semibold text-lg sm:text-2xl not-italic">Argentina</span>
        </p>
        <div className="mt-1.5 inline-block rounded-md bg-[#B88944] px-2.5 py-1 text-[11px] sm:text-xs font-serif font-bold tracking-wider text-[#FFFCF7] shadow-xs">
          HAY HUERTANA
        </div>
      </div>

      {/* Personaje ilustrado en el pie del mapa */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-2 z-10 pointer-events-none opacity-90 hidden sm:flex flex-col items-center">
        <MascotIllustration size={48} highlighted={false} />
        <span className="font-serif text-[10px] italic text-[#617248] mt-0.5">
          Artesanal · Desde Mendoza
        </span>
      </div>

      {/* Contenedor relativo para posicionar marcadores sobre el SVG escalable */}
      <div className="relative aspect-[600/1000] w-full max-w-[540px] mx-auto py-2">
        {/* SVG vectorial de las 23 provincias */}
        <svg
          viewBox={ARGENTINA_MAP_CONFIG.viewBox}
          className="h-full w-full drop-shadow-sm transition-all"
          role="img"
          aria-label="Mapa ilustrado de la República Argentina con sucursales de Huertana"
        >
          <defs>
            {/* Filtro de resplandor sutil para provincias seleccionadas */}
            <filter id="huertanaGlow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#C99A4A" floodOpacity="0.4" />
            </filter>
          </defs>

          {/* Sombra proyectada del mapa de Argentina */}
          <g transform="translate(4, 4)" opacity="0.08" fill="#1B1B1B">
            {ARGENTINA_PROVINCES.map((prov) => (
              <path key={`shadow-${prov.id}`} d={prov.path} />
            ))}
          </g>

          {/* Renderizado de cada provincia */}
          <g id="argentina-provincias">
            {ARGENTINA_PROVINCES.map((province) => {
              const hasBranch = province.hasBranch;
              const isSelected = activeProvinceId === province.id;
              const branch = branchByProvinceId.get(province.id);

              // Paleta fiel a la imagen:
              // - Provincias con presencia Huertana: ocre / caramelo cálido
              // - Provincias sin presencia: beige / arena claro
              let fill = hasBranch ? "#BA8840" : "#DCCBA3";
              if (isSelected) {
                fill = "#A6732E";
              }

              return (
                <path
                  key={province.id}
                  id={`prov-${province.id}`}
                  d={province.path}
                  fill={fill}
                  stroke="#FFFFFF"
                  strokeWidth={isSelected ? 1.8 : 1.1}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter={isSelected ? "url(#huertanaGlow)" : undefined}
                  className={`transition-colors duration-200 ${
                    hasBranch ? "cursor-pointer hover:fill-[#A6732E]" : "cursor-default opacity-95"
                  }`}
                  onClick={() => {
                    if (branch) onSelectBranch(branch);
                  }}
                  onMouseEnter={() => {
                    if (branch) onHoverBranch(branch);
                  }}
                  onMouseLeave={() => {
                    if (branch) onHoverBranch(null);
                  }}
                >
                  <title>
                    {province.name}
                    {hasBranch ? ` · Presencia Huertana (${branch?.typeLabel})` : ""}
                  </title>
                </path>
              );
            })}
          </g>
        </svg>

        {/* Capa de Marcadores Ilustrados Interactivos */}
        <div className="absolute inset-0 pointer-events-none">
          {branches.map((branch) => (
            <BranchMarker
              key={branch.id}
              branch={branch}
              isSelected={selectedBranch?.id === branch.id}
              isHovered={hoveredBranch?.id === branch.id}
              onSelect={onSelectBranch}
              onHover={onHoverBranch}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
