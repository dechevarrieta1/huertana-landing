"use client";

import React from "react";
import { ARGENTINA_PROVINCES } from "../../data/argentinaProvinces.data";
import type { Branch } from "../../types/branches.types";
import { BranchMarker } from "./BranchMarker";
import { MascotIllustration } from "./MascotIllustration";
import { MapPin } from "lucide-react";

const MAP_VIEWBOX = {
  x: 35,
  y: 25,
  width: 530,
  height: 950,
  value: "35 25 530 950",
} as const;

const PROVINCE_MARKER_OVERRIDES: Record<string, { x: number; y: number }> = {
  SANJUAN: { x: 182, y: 240 },
  CORDOBA: { x: 298, y: 286 },
  SANTAFE: { x: 362, y: 232 },
  RIONEGRO: { x: 232, y: 496 },
};

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
  const countByProvinceId = React.useMemo(() => {
    const map = new Map<string, number>();
    branches.forEach((b) => {
      map.set(b.provinceId, (map.get(b.provinceId) || 0) + 1);
    });
    return map;
  }, [branches]);

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

  const markerPositionByProvinceId = React.useMemo(() => {
    const map = new Map<string, { x: number; y: number }>();
    ARGENTINA_PROVINCES.forEach((province) => {
      const point = PROVINCE_MARKER_OVERRIDES[province.id] ?? province.centroid;
      map.set(province.id, {
        x: ((point.x - MAP_VIEWBOX.x) / MAP_VIEWBOX.width) * 100,
        y: ((point.y - MAP_VIEWBOX.y) / MAP_VIEWBOX.height) * 100,
      });
    });
    return map;
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl border border-[#CCBFA4] bg-[#FBF7EB] shadow-xs select-none"
      role="region"
      aria-label="Mapa interactivo de la República Argentina con sucursales Huertana"
    >
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

      <div className="relative px-2 py-3 sm:px-4 sm:py-4">
        {/* Sello editorial Huertana y pie artesanal en zona atlántica libre */}
        <div className="pointer-events-none absolute right-5 bottom-6 sm:right-7 sm:bottom-8 z-10 hidden sm:flex flex-col items-end text-right max-w-[230px]">
          <p className="font-serif italic text-base sm:text-xl font-medium text-[#1B1B1B] leading-tight">
            Si hay mesa <br />
            <span className="font-semibold text-lg sm:text-2xl not-italic">
              Argentina
            </span>
          </p>
          <div className="mt-1.5 inline-block rounded-md bg-[#C09B5D] px-2.5 py-1 text-[11px] sm:text-xs font-serif font-bold tracking-wider text-[#1B1B1B] shadow-xs">
            HAY HUERTANA
          </div>
          <p className="mt-2 text-[10px] sm:text-[11px] font-sans text-[#1B1B1B]/70 leading-snug">
            Alimentos genuinos nacidos en Russell, Maipú · Mendoza
          </p>

          <div className="mt-4 flex items-center gap-2 opacity-90">
            <div>
              <span className="font-serif text-[11px] font-semibold text-[#1B1B1B] block">
                Elaboración Artesanal
              </span>
              <span className="font-ui text-[9px] uppercase tracking-wider text-[#9B773C]">
                Desde Russell hacia todo el país
              </span>
            </div>
            <MascotIllustration size={36} highlighted={false} />
          </div>
        </div>

        <div className="relative aspect-[530/950] w-full max-w-[620px] mx-auto">
          <svg
            viewBox={MAP_VIEWBOX.value}
            className="h-full w-full drop-shadow-sm"
            role="group"
            aria-label="Mapa de provincias argentinas"
          >
            <desc>
              Mapa vectorial ilustrado de la República Argentina destacando las
              provincias con puntos de venta y retiros de Huertana. Navegá por
              teclado con Tab y Enter para seleccionar una provincia.
            </desc>

            <defs>
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
                  floodColor="#C09B5D"
                  floodOpacity="0.55"
                />
              </filter>
            </defs>

            <g
              transform="translate(4, 4)"
              opacity="0.08"
              fill="#1B1B1B"
              aria-hidden="true"
            >
              {ARGENTINA_PROVINCES.map((prov) => (
                <path key={`shadow-${prov.id}`} d={prov.path} />
              ))}
            </g>

            <g id="argentina-provincias">
              {ARGENTINA_PROVINCES.map((province) => {
                const count = countByProvinceId.get(province.id) || 0;
                const hasBranch = count > 0 || province.hasBranch;
                const isSelected = activeProvinceId === province.id;
                const branch = branchByProvinceId.get(province.id);

                const fill = isSelected
                  ? "#9B773C"
                  : hasBranch
                  ? "#C09B5D"
                  : "#E5DBC5";

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
                    stroke={isSelected ? "#1B1B1B" : "#FBF7EB"}
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
                        ? "cursor-pointer hover:fill-[#9B773C] focus-visible:stroke-[#1B1B1B] focus-visible:stroke-[2.5px]"
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

          <div className="absolute inset-0 pointer-events-none">
            {nationalMarkers.map((branch) => {
              const isSelected = activeProvinceId === branch.provinceId;
              const isHovered = hoveredBranch?.provinceId === branch.provinceId;
              const storeCount = countByProvinceId.get(branch.provinceId) || 1;

              return (
                <BranchMarker
                  key={branch.id}
                  branch={branch}
                  position={markerPositionByProvinceId.get(branch.provinceId)}
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
      </div>

      {/* Barra de estado inferior */}
      <div className="p-3 text-center bg-[#F3ECE0] border-t border-[#CCBFA4]/60 text-xs text-[#1B1B1B]/80 font-sans flex flex-col sm:flex-row items-center justify-between gap-2 px-4">
        <span className="flex items-center gap-1.5 font-medium">
          <MapPin className="h-4 w-4 text-[#9B773C]" />
          {activeProvinceName ? (
            <span>
              Provincia activa: <strong>{activeProvinceName}</strong> (
              {activeStoreCount} locales)
            </span>
          ) : (
            <span>
              Hacé clic o navegá con teclado en cualquier provincia para ver sus
              locales.
            </span>
          )}
        </span>

        {activeProvinceId && (
          <button
            type="button"
            onClick={() => onSelectProvince(null)}
            className="font-ui text-[10px] font-bold uppercase tracking-wider text-[#9B773C] hover:text-[#1B1B1B] underline cursor-pointer"
          >
            Ver todas las provincias
          </button>
        )}
      </div>
    </div>
  );
}
