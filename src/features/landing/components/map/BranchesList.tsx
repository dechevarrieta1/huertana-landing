"use client";

import React, { useState, useMemo, useRef } from "react";
import {
  Search,
  X,
  MapPin,
  ExternalLink,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import type { Branch } from "../../types/branches.types";

interface BranchesListProps {
  branches: Branch[];
  selectedBranchId: string | null;
  selectedProvinceId: string | null;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSelectProvince: (provId: string | null) => void;
  onSelectBranch: (branch: Branch) => void;
}

export function BranchesList({
  branches,
  selectedBranchId,
  selectedProvinceId,
  searchQuery,
  onSearchChange,
  onSelectProvince,
  onSelectBranch,
}: BranchesListProps) {
  const [selectedLocality, setSelectedLocality] = useState<string>("all");
  const listContainerRef = useRef<HTMLDivElement>(null);

  const provinceSummary = useMemo(() => {
    const counts = new Map<string, { id: string; name: string; count: number }>();
    branches.forEach((b) => {
      const existing = counts.get(b.provinceId);
      if (existing) {
        existing.count += 1;
      } else {
        counts.set(b.provinceId, {
          id: b.provinceId,
          name: b.province,
          count: 1,
        });
      }
    });
    return Array.from(counts.values()).sort((a, b) => b.count - a.count);
  }, [branches]);

  const provinceLocalities = useMemo(() => {
    if (!selectedProvinceId) return [];
    const provBranches = branches.filter((b) => b.provinceId === selectedProvinceId);
    const counts = new Map<string, number>();
    provBranches.forEach((b) => {
      counts.set(b.locality, (counts.get(b.locality) || 0) + 1);
    });
    return Array.from(counts.entries())
      .map(([locality, count]) => ({ locality, count }))
      .sort((a, b) => b.count - a.count);
  }, [branches, selectedProvinceId]);

  React.useEffect(() => {
    setSelectedLocality("all");
  }, [selectedProvinceId]);

  const filteredBranches = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    if (q) {
      return branches.filter((b) => {
        const matchName = b.name.toLowerCase().includes(q);
        const matchAddr = b.address.toLowerCase().includes(q);
        const matchLoc = b.locality.toLowerCase().includes(q);
        const matchProv = b.province.toLowerCase().includes(q);
        const matchType = b.typeLabel.toLowerCase().includes(q);
        return matchName || matchAddr || matchLoc || matchProv || matchType;
      });
    }

    let list = branches;
    if (selectedProvinceId) {
      list = list.filter((b) => b.provinceId === selectedProvinceId);
      if (selectedLocality !== "all") {
        list = list.filter((b) => b.locality === selectedLocality);
      }
    }

    return list;
  }, [branches, selectedProvinceId, selectedLocality, searchQuery]);

  const activeProvinceName = useMemo(() => {
    if (!selectedProvinceId) return null;
    return provinceSummary.find((p) => p.id === selectedProvinceId)?.name || null;
  }, [provinceSummary, selectedProvinceId]);

  const wholesaleWaUrl = `https://wa.me/5492613432657?text=${encodeURIComponent(
    "Hola Huertana, me gustaría consultar por disponibilidad en mi zona o cómo ser punto de venta."
  )}`;

  return (
    <div className="space-y-3.5">
      {/* Buscador */}
      <div className="relative">
        <label htmlFor="branch-search-input" className="sr-only">
          Buscar por comercio, localidad o dirección
        </label>
        <Search
          className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#1B1B1B]/50"
          aria-hidden="true"
        />
        <input
          id="branch-search-input"
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Buscar por comercio, localidad o calle..."
          className="w-full rounded-xl border border-[#CCBFA4] bg-[#FFFDF8] py-2 pl-9 pr-9 text-xs font-sans text-[#1B1B1B] placeholder-[#1B1B1B]/50 transition-all focus:border-[#C09B5D] focus:outline-none focus:ring-2 focus:ring-[#C09B5D]/40"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => onSearchChange("")}
            aria-label="Limpiar búsqueda"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-full p-1 text-[#1B1B1B]/50 hover:bg-[#FBF7EB] hover:text-[#1B1B1B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C09B5D]"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </div>

      {/* Selector rápido de Provincias */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-[11px]">
          <span className="font-ui text-[10px] font-bold uppercase tracking-wider text-[#9B773C]">
            Filtrar por provincia:
          </span>
          {selectedProvinceId && (
            <button
              type="button"
              onClick={() => onSelectProvince(null)}
              className="text-[#9B773C] hover:text-[#1B1B1B] underline font-medium cursor-pointer"
            >
              Ver todas
            </button>
          )}
        </div>

        <div
          role="tablist"
          aria-label="Provincias con sucursales"
          className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-thin"
        >
          <button
            type="button"
            role="tab"
            aria-selected={!selectedProvinceId}
            onClick={() => onSelectProvince(null)}
            className={`shrink-0 rounded-full px-3 py-1 font-ui text-[11px] font-medium transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B1B1B] ${
              !selectedProvinceId
                ? "bg-[#1B1B1B] text-[#FBF7EB] shadow-xs"
                : "bg-[#FFFDF8] text-[#1B1B1B]/80 border border-[#CCBFA4] hover:bg-[#F3ECE0]"
            }`}
          >
            Todas ({branches.length})
          </button>

          {provinceSummary.map((prov) => {
            const isSelected = selectedProvinceId === prov.id;
            return (
              <button
                key={prov.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => onSelectProvince(isSelected ? null : prov.id)}
                className={`shrink-0 rounded-full px-3 py-1 font-ui text-[11px] font-medium transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B1B1B] ${
                  isSelected
                    ? "bg-[#C09B5D] text-[#1B1B1B] shadow-xs font-bold"
                    : "bg-[#FFFDF8] text-[#1B1B1B]/80 border border-[#CCBFA4] hover:bg-[#F3ECE0]"
                }`}
              >
                {prov.name} ({prov.count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Subfiltro de Localidades */}
      {selectedProvinceId && provinceLocalities.length > 1 && (
        <div className="space-y-1 pt-1">
          <span className="font-ui text-[10px] font-bold uppercase tracking-wider text-[#1B1B1B]/65">
            Localidades en {activeProvinceName}:
          </span>
          <div className="flex gap-1 overflow-x-auto pb-1 scrollbar-thin">
            <button
              type="button"
              onClick={() => setSelectedLocality("all")}
              className={`shrink-0 rounded-md px-2 py-0.5 font-ui text-[10px] font-medium transition-all cursor-pointer ${
                selectedLocality === "all"
                  ? "bg-[#1B1B1B] text-[#FBF7EB]"
                  : "bg-[#FFFDF8] text-[#1B1B1B]/75 border border-[#CCBFA4] hover:bg-[#F3ECE0]"
              }`}
            >
              Todas
            </button>
            {provinceLocalities.map((loc) => (
              <button
                key={loc.locality}
                type="button"
                onClick={() => setSelectedLocality(loc.locality)}
                className={`shrink-0 rounded-md px-2 py-0.5 font-ui text-[10px] font-medium transition-all cursor-pointer ${
                  selectedLocality === loc.locality
                    ? "bg-[#1B1B1B] text-[#FBF7EB]"
                    : "bg-[#FFFDF8] text-[#1B1B1B]/75 border border-[#CCBFA4] hover:bg-[#F3ECE0]"
                }`}
              >
                {loc.locality} ({loc.count})
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Contador de resultados */}
      <div className="flex items-center justify-between border-b border-[#CCBFA4]/60 pb-1.5 text-[11px] text-[#1B1B1B]/70 font-ui">
        <span>
          Mostrando {filteredBranches.length}{" "}
          {filteredBranches.length === 1 ? "local" : "locales"}
          {activeProvinceName ? ` en ${activeProvinceName}` : ""}
          {searchQuery ? ` para "${searchQuery}"` : ""}
        </span>
        {(searchQuery || selectedProvinceId) && (
          <button
            type="button"
            onClick={() => {
              onSearchChange("");
              onSelectProvince(null);
            }}
            className="text-[#9B773C] hover:text-[#1B1B1B] underline cursor-pointer"
          >
            Limpiar filtros
          </button>
        )}
      </div>

      {/* Listado scrolleable */}
      <div
        ref={listContainerRef}
        role="feed"
        aria-label="Listado de sucursales y puntos de venta"
        className="h-[360px] space-y-2 overflow-y-auto pr-1 scrollbar-thin"
      >
        {filteredBranches.length === 0 ? (
          <div className="rounded-xl border border-dashed border-[#CCBFA4] bg-[#FFFDF8] p-5 text-center space-y-2">
            <p className="font-serif text-sm font-medium text-[#1B1B1B]">
              No encontramos puntos de venta para tu búsqueda.
            </p>
            <p className="text-xs text-[#1B1B1B]/70 max-w-xs mx-auto">
              Hacemos envíos a todo el territorio nacional desde nuestra tienda
              online, o podés consultarnos por WhatsApp.
            </p>
            <a
              href={wholesaleWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#1B1B1B] text-[#FBF7EB] px-3.5 py-1.5 font-ui text-xs font-bold hover:bg-[#C09B5D] hover:text-[#1B1B1B] transition-colors"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              <span>Consultar por mi zona</span>
            </a>
          </div>
        ) : (
          filteredBranches.map((branch) => (
            <StoreItemCard
              key={branch.id}
              branch={branch}
              isSelected={selectedBranchId === branch.id}
              onSelect={() => onSelectBranch(branch)}
            />
          ))
        )}
      </div>
    </div>
  );
}

function StoreItemCard({
  branch,
  isSelected,
  onSelect,
}: {
  branch: Branch;
  isSelected: boolean;
  onSelect: () => void;
}) {
  const mapsQuery = encodeURIComponent(
    `${branch.name}, ${branch.address}, ${branch.locality}, ${branch.province}, Argentina`
  );
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

  const isHq = branch.isHeadquarters;
  const isHub =
    branch.type === "centro_distribucion" || branch.type === "taller_central";

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect();
        }
      }}
      aria-pressed={isSelected}
      aria-label={`${branch.name}, ${branch.typeLabel} en ${branch.locality}, ${branch.province}. Dirección: ${branch.address}. Presioná Enter para ver detalles.`}
      className={`group rounded-xl border p-3 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C09B5D] ${
        isSelected
          ? "border-[#C09B5D] bg-[#FFFDF8] shadow-sm ring-1 ring-[#C09B5D]"
          : "border-[#CCBFA4]/80 bg-[#FFFDF8]/90 hover:bg-[#FFFDF8] hover:border-[#C09B5D]"
      }`}
    >
      <div className="flex items-start justify-between gap-2.5">
        <div className="min-w-0 flex-1 space-y-1.5">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="font-serif text-xs font-semibold text-[#1B1B1B] group-hover:text-[#9B773C] transition-colors break-words">
              {branch.name}
            </span>
            <span
              className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 font-ui text-[9px] font-bold uppercase tracking-wider ${
                isHq
                  ? "bg-[#C09B5D] text-[#1B1B1B]"
                  : isHub
                  ? "bg-[#1B1B1B] text-[#FBF7EB]"
                  : "bg-[#CCBFA4]/60 text-[#1B1B1B]"
              }`}
            >
              {isHq && <Sparkles className="h-2.5 w-2.5" />}
              {branch.typeLabel}
            </span>
          </div>

          <p className="flex items-start gap-1 text-[11px] text-[#1B1B1B]/80 leading-snug break-words">
            <MapPin
              className="h-3 w-3 shrink-0 text-[#9B773C] mt-0.5"
              aria-hidden="true"
            />
            <span>{branch.address}</span>
            {branch.postalCode && (
              <span className="font-ui text-[10px] text-[#1B1B1B]/55 shrink-0 ml-1">
                (CP {branch.postalCode})
              </span>
            )}
          </p>

          <p className="font-ui text-[10px] font-medium text-[#9B773C]">
            {branch.locality} · {branch.province}
          </p>
        </div>

        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          title={`Abrir ${branch.name} en Google Maps`}
          aria-label={`Abrir ${branch.name} en Google Maps (se abre en una nueva pestaña)`}
          className="shrink-0 rounded-lg border border-[#CCBFA4] bg-[#FBF7EB] p-2 text-[#1B1B1B]/70 hover:bg-[#C09B5D] hover:text-[#1B1B1B] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B1B1B]"
        >
          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
