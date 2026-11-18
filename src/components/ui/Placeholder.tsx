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
      className={`relative w-full ${ratio} overflow-hidden rounded-xl border border-[#CCBFA4] bg-[#F3ECE0] flex flex-col items-center justify-center p-6 text-center select-none ${className}`}
      role="img"
      aria-label={`Espacio reservado para fotografía: ${label}`}
    >
      {/* Marco decorativo sutil interior */}
      <div
        className="absolute inset-3 rounded-lg border border-dashed border-[#C09B5D]/40 pointer-events-none"
        aria-hidden="true"
      />

      <span className="font-ui text-[11px] font-bold uppercase tracking-[0.16em] text-[#9B773C]">
        {label}
      </span>

      <span className="mt-2 text-xs font-medium text-[#1B1B1B]/60 tracking-wide">
        {hint}
      </span>
    </div>
  );
}
