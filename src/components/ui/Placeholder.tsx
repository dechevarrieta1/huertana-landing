interface PlaceholderProps {
  label: string;
  ratio?: string;
  hint?: string;
  className?: string;
}

export function Placeholder({
  label,
  ratio = "aspect-[16/10]",
  hint = "Foto de producto · Reemplazable",
  className = "",
}: PlaceholderProps) {
  return (
    <div
      className={`relative w-full ${ratio} overflow-hidden rounded-xl border border-[#C99A4A]/30 bg-[#EFECE6] flex flex-col items-center justify-center p-6 text-center select-none ${className}`}
      role="img"
      aria-label={`Espacio reservado para fotografía: ${label}`}
    >
      {/* Marco decorativo sutil interior */}
      <div
        className="absolute inset-3 rounded-lg border border-dashed border-[#C99A4A]/30 pointer-events-none"
        aria-hidden="true"
      />

      <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#617248]">
        [ {label} ]
      </span>

      <span className="mt-2 text-xs font-medium text-[#1B1B1B]/60 tracking-wide">
        {hint}
      </span>
    </div>
  );
}
