import Image from "next/image";

interface MascotIllustrationProps {
  className?: string;
  size?: number;
  highlighted?: boolean;
}

/**
 * Isologo oficial de Huertana utilizado en los marcadores de provincias
 * y en el sello del mapa nacional.
 */
export function MascotIllustration({
  className = "",
  size,
  highlighted = false,
}: MascotIllustrationProps) {
  return (
    <span
      style={size ? { width: size, height: size } : undefined}
      className={`inline-flex items-center justify-center shrink-0 select-none ${className}`}
      aria-hidden="true"
    >
      <Image
        src="/images/huertana-isologo.png"
        alt=""
        width={600}
        height={800}
        className={`h-full w-full object-contain transition-[filter] duration-200 ${
          highlighted
            ? "drop-shadow-[0_2px_4px_rgba(27,27,27,0.28)]"
            : "drop-shadow-[0_1px_2px_rgba(27,27,27,0.18)]"
        }`}
      />
    </span>
  );
}
