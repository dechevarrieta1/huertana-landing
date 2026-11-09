"use client";

import React from "react";
import {
  ARGENTINA_PROVINCES,
  ARGENTINA_MAP_CONFIG,
} from "../../data/argentinaProvinces.data";
import type { Branch } from "../../types/branches.types";
import { BranchMarker } from "./BranchMarker";
import { MascotIllustration } from "./MascotIllustration";
import { MapPin, Sparkles } from "lucide-react";

interface ArgentinaMapProps {
  branches: Branch[];
  selectedBranch: Branch | null;
  hoveredBranch: Branch | null;
  selectedProvinceId: string | null;
  onSelectProvince: (provId: string | null) => void;
  onSelectBranch: (branch: Branch) => void;
  onHoverBranch: (branch: Branch | null) => void;
}

export function ArgentinaMap({
  branches,
  selectedBranch,
  hoveredBranch,
  selectedProvinceId,
  onSelectProvince,
  onSelectBranch,
  onHoverBranch,
}: ArgentinaMapProps) {
  // Conteo de puntos de venta por ID de provincia
  const countByProvinceId = React.useMemo(() => {
    const map = new Map<string, number>();
    branches.forEach((b) => {
      map.set(b.provinceId, (map.get(b.provinceId) || 0) + 1);
    });
    return map;
  }, [branches]);

  // Sucursal representativa por ID de provincia para interacción en vista nacional
  const branchByProvinceId = React.useMemo(() => {
    const map = new Map<string, Branch>();
    const hq = branches.find((b) => b.isHeadquarters);
    if (hq) map.set(hq.provinceId, hq);

    branches.forEach((b) => {
      if (!map.has(b.provinceId)) {
        map.set(b.provinceId, b);
      }
    });
    return map;
  }, [branches]);

  // Marcadores ilustrados representativos para vista nacional (un personaje por provincia con presencia)
  const nationalMarkers = React.useMemo(() => {
    const list: Branch[] = [];
    const seen = new Set<string>();

    const hq = branches.find((b) => b.isHeadquarters);
    if (hq) {
      list.push(hq);
      seen.add(hq.provinceId);
    }

    branches.forEach((b) => {
      if (!seen.has(b.provinceId)) {
        seen.add(b.provinceId);
        list.push(b);
      }
    });

    return list;
  }, [branches]);

  const activeProvinceId =
    selectedProvinceId ||
    selectedBranch?.provinceId ||
    hoveredBranch?.provinceId;

  const activeProvinceName = React.useMemo(() => {
    if (!activeProvinceId) return null;
    const prov = ARGENTINA_PROVINCES.find((p) => p.id === activeProvinceId);
    return prov ? prov.name : null;
  }, [activeProvinceId]);

  const activeStoreCount = activeProvinceId
    ? countByProvinceId.get(activeProvinceId) || 0
    : 0;

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl border border-[#C99A4A]/25 bg-[#F5F0E5] shadow-xs select-none"
      role="region"
      aria-label="Mapa interactivo de la República Argentina con sucursales Huertana"
    >
      {/* Región viva para lectores de pantalla */}
      <div className="sr-only" aria-live="polite">
        {activeProvinceName
          ? `Provincia de ${activeProvinceName} seleccionada, con ${activeStoreCount} locales disponibles.`
          : "Mostrando mapa nacional de la República Argentina."}
      </div>

      {/* Sutil textura de papel artesanal */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#1B1B1B 1px, transparent 1px)`,
          backgroundSize: "16px 16px",
        }}
        aria-hidden="true"
      />

      {/* Sello editorial Huertana: "Si hay mesa Argentina / HAY HUERTANA" */}
      <div className="absolute right-4 bottom-20 sm:right-7 sm:bottom-28 z-10 text-right pointer-events-none max-w-[190px] sm:max-w-[240px] hidden sm:block">
        <p className="font-serif italic text-base sm:text-xl font-medium text-[#1B1B1B] leading-tight">
          Si hay mesa <br />
          <span className="font-semibold text-lg sm:text-2xl not-italic">
            Argentina
          </span>
        </p>
        <div className="mt-1.5 inline-block rounded-md bg-[#B88944] px-2.5 py-1 text-[11px] sm:text-xs font-serif font-bold tracking-wider text-[#FFFCF7] shadow-xs">
          HAY HUERTANA
        </div>
        <p className="mt-2 text-[10px] sm:text-[11px] font-sans text-[#1B1B1B]/70 leading-snug">
          Alimentos genuinos nacidos en Russell, Maipú · Mendoza
        </p>
      </div>

      {/* Personaje ilustrado y pie del mapa */}
      <div className="absolute left-6 bottom-3 z-10 pointer-events-none opacity-90 hidden sm:flex items-center gap-2.5">
        <MascotIllustration size={42} highlighted={false} />
        <div>
          <span className="font-serif text-[11px] font-semibold text-[#1B1B1B] block">
            Elaboración Artesanal
          </span>
          <span className="font-sans text-[10px] text-[#617248]">
            Desde Russell hacia todo el país
          </span>
        </div>
      </div>

      {/* Contenedor relativo SVG escalable manteniendo proporciones oficiales */}
      <div className="relative aspect-[600/1000] w-full max-w-[540px] mx-auto py-2">
        <svg
          viewBox={ARGENTINA_MAP_CONFIG.viewBox}
          className="h-full w-full drop-shadow-sm"
          role="group"
          aria-label="Mapa de provincias argentinas"
        >
          <desc>
            Mapa vectorial ilustrado de la República Argentina destacando las provincias con puntos de venta y retiros de Huertana. Navegá por teclado con Tab y Enter para seleccionar una provincia.
          </desc>

          <defs>
            {/* Filtro de resplandor cálido para provincia activa */}
            <filter
              id="huertanaGlow"
              x="-15%"
              y="-15%"
              width="130%"
              height="130%"
            >
              <feDropShadow
                dx="0"
                dy="2"
                stdDeviation="4"
                floodColor="#C99A4A"
                floodOpacity="0.5"
              />
            </filter>
          </defs>

          {/* Sombra proyectada del territorio nacional */}
          <g transform="translate(4, 4)" opacity="0.08" fill="#1B1B1B" aria-hidden="true">
            {ARGENTINA_PROVINCES.map((prov) => (
              <path key={`shadow-${prov.id}`} d={prov.path} />
            ))}
          </g>

          {/* Renderizado accesible de cada provincia */}
          <g id="argentina-provincias">
            {ARGENTINA_PROVINCES.map((province) => {
              const count = countByProvinceId.get(province.id) || 0;
              const hasBranch = count > 0 || province.hasBranch;
              const isSelected = activeProvinceId === province.id;
              const branch = branchByProvinceId.get(province.id);

              const fill = isSelected
                ? "#A6732E"
                : hasBranch
                ? "#BA8840"
                : "#DCCBA3";

              const handleProvinceAction = () => {
                if (hasBranch) {
                  onSelectProvince(province.id);
                  if (branch) onSelectBranch(branch);
                }
              };

              return (
                <path
                  key={province.id}
                  id={`prov-${province.id}`}
                  d={province.path}
                  fill={fill}
                  stroke={isSelected ? "#1B1B1B" : "#FFFFFF"}
                  strokeWidth={isSelected ? 1.8 : 1.1}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter={isSelected ? "url(#huertanaGlow)" : undefined}
                  tabIndex={hasBranch ? 0 : -1}
                  role={hasBranch ? "button" : "presentation"}
                  aria-label={`${province.name}. ${
                    hasBranch
                      ? `${count} locales de Huertana. Presioná Enter para verlos.`
                      : "Envíos directos a domicilio."
                  }`}
                  aria-pressed={isSelected}
                  className={`transition-colors duration-200 outline-none ${
                    hasBranch
                      ? "cursor-pointer hover:fill-[#A6732E] focus-visible:stroke-[#1B1B1B] focus-visible:stroke-[2.5px]"
                      : "cursor-default"
                  }`}
                  onClick={handleProvinceAction}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleProvinceAction();
                    }
                  }}
                  onMouseEnter={() => {
                    if (branch) onHoverBranch(branch);
                  }}
                  onMouseLeave={() => {
                    onHoverBranch(null);
                  }}
                />
              );
            })}
          </g>
        </svg>

        {/* Capa de Marcadores Ilustrados de Huertana */}
        <div className="absolute inset-0 pointer-events-none">
          {nationalMarkers.map((branch) => {
            const isSelected = activeProvinceId === branch.provinceId;
            const isHovered = hoveredBranch?.provinceId === branch.provinceId;
            const storeCount = countByProvinceId.get(branch.provinceId) || 1;

            return (
              <BranchMarker
                key={branch.id}
                branch={branch}
                storeCount={storeCount}
                isSelected={isSelected}
                isHovered={isHovered}
                onSelect={(b) => {
                  onSelectProvince(b.provinceId);
                  onSelectBranch(b);
                }}
                onHover={onHoverBranch}
              />
            );
          })}
        </div>
      </div>

      {/* Barra de estado inferior con guía clara para el usuario */}
      <div className="p-3 text-center bg-[#EFECE6]/80 border-t border-[#C99A4A]/20 text-xs text-[#1B1B1B]/80 font-sans flex flex-col sm:flex-row items-center justify-between gap-2 px-4">
        <span className="flex items-center gap-1.5 font-medium">
          <MapPin className="h-4 w-4 text-[#C99A4A]" />
          {activeProvinceName ? (
            <span>
              Provincia activa: <strong>{activeProvinceName}</strong> ({activeStoreCount} locales)
            </span>
          ) : (
            <span>
              Hacé clic o navegá con teclado en cualquier provincia para ver sus locales.
            </span>
          )}
        </span>

        {activeProvinceId && (
          <button
            type="button"
            onClick={() => onSelectProvince(null)}
            className="text-[11px] font-semibold text-[#617248] hover:text-[#1B1B1B] underline cursor-pointer"
          >
            Ver todas las provincias
          </button>
        )}
      </div>
    </div>
  );
}
