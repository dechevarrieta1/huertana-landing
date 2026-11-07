import React from "react";

interface MascotIllustrationProps {
  className?: string;
  size?: number;
  highlighted?: boolean;
}

/**
 * Ilustración vectorial artesanal del personaje de Huertana
 * (campesino con sombrero sentado de piernas cruzadas),
 * fiel al trazo y estilo de la identidad visual original.
 */
export function MascotIllustration({
  className = "",
  size = 40,
  highlighted = false,
}: MascotIllustrationProps) {
  const strokeColor = highlighted ? "#1B1B1B" : "#2D2319";
  const bodyFill = highlighted ? "#FFFCF7" : "#F7F3E9";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <g stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        {/* Sombra / halo suave en la base */}
        <ellipse
          cx="50"
          cy="92"
          rx="26"
          ry="4"
          fill="#000000"
          fillOpacity={highlighted ? "0.15" : "0.08"}
          stroke="none"
        />

        {/* Piernas cruzadas (Sukhasana) */}
        <path
          d="M 24 82 C 22 84 26 89 36 89 C 43 89 47 85 50 84 C 53 85 57 89 64 89 C 74 89 78 84 76 82 C 72 76 60 74 50 74 C 40 74 28 76 24 82 Z"
          fill={bodyFill}
        />
        {/* Pliegue de piernas y pies */}
        <path d="M 33 87 C 39 88 47 86 50 83" fill="none" />
        <path d="M 67 87 C 61 88 53 86 50 83" fill="none" />
        <path d="M 44 86 C 47 88 53 88 56 86" fill="none" />

        {/* Túnica / Torso */}
        <path
          d="M 38 48 C 34 52 32 63 35 76 C 42 77 58 77 65 76 C 68 63 66 52 62 48 Z"
          fill={bodyFill}
        />

        {/* Cuello y abertura de la camisa */}
        <path d="M 46 47 L 50 54 L 54 47" fill="none" />
        <path d="M 50 54 L 50 63" fill="none" />

        {/* Brazos descansando sobre las rodillas */}
        {/* Brazo izquierdo */}
        <path
          d="M 38 49 C 32 54 27 65 25 76 C 26 80 30 81 33 79 C 35 75 37 66 38 60"
          fill={bodyFill}
        />
        {/* Brazo derecho */}
        <path
          d="M 62 49 C 68 54 73 65 75 76 C 74 80 70 81 67 79 C 65 75 63 66 62 60"
          fill={bodyFill}
        />

        {/* Cabeza / Rostro sereno */}
        <ellipse
          cx="50"
          cy="36"
          rx="10"
          ry="11"
          fill={bodyFill}
        />
        {/* Orejas */}
        <path d="M 39 36 C 38 34 38 38 39 39" fill="none" />
        <path d="M 61 36 C 62 34 62 38 61 39" fill="none" />

        {/* Ojos y rasgos minimalistas zen */}
        <path d="M 45 36 Q 47 38 49 36" strokeWidth="1.8" fill="none" />
        <path d="M 51 36 Q 53 38 55 36" strokeWidth="1.8" fill="none" />
        <path d="M 49 40 Q 50 42 51 40" strokeWidth="1.5" fill="none" />

        {/* Copa del sombrero artesanal */}
        <path
          d="M 39 28 C 39 17 61 17 61 28 Z"
          fill={highlighted ? "#E8D8B5" : "#DCCBA3"}
        />
        <path d="M 42 28 C 45 27 55 27 58 28" fill="none" />

        {/* Ala ancha del sombrero */}
        <path
          d="M 22 30 C 32 26 68 26 78 30 C 80 32 77 34 71 33 C 58 31 42 31 29 33 C 23 34 20 32 22 30 Z"
          fill={highlighted ? "#F3E7CA" : "#E5D8B8"}
        />

        {/* Brote / espiga botánica artesanal Huertana en la base */}
        <path
          d="M 47 94 C 49 92 51 92 53 94"
          stroke="#617248"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M 50 92 L 50 96"
          stroke="#617248"
          strokeWidth="1.5"
          fill="none"
        />
      </g>
    </svg>
  );
}
