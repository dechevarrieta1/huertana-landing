"use client";

import { motion } from "motion/react";
import type {
  BrochureIconKind,
  CategoryPropertyBadge,
} from "../types/huertana.types";

export function BrochureSvgGlyph({
  kind,
  className = "h-5 w-5",
}: {
  kind: BrochureIconKind;
  className?: string;
}) {
  switch (kind) {
    case "gluten-free":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 19V5" />
          <path d="M12 8c-2.2 0-3.5-1.3-3.5-3.2 1.9 0 3.5 1.3 3.5 3.2Z" />
          <path d="M12 12c-2.2 0-3.5-1.3-3.5-3.2 1.9 0 3.5 1.3 3.5 3.2Z" />
          <path d="M12 16c-2.2 0-3.5-1.3-3.5-3.2 1.9 0 3.5 1.3 3.5 3.2Z" />
          <path d="M12 8c2.2 0 3.5-1.3 3.5-3.2-1.9 0-3.5 1.3-3.5 3.2Z" />
          <path d="M12 12c2.2 0 3.5-1.3 3.5-3.2-1.9 0-3.5 1.3-3.5 3.2Z" />
          <path d="M12 16c2.2 0 3.5-1.3 3.5-3.2-1.9 0-3.5 1.3-3.5 3.2Z" />
          <path d="M4.5 19.5 19.5 4.5" />
        </svg>
      );
    case "no-preservatives":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
          <path d="m17 17-3.5-3.5" />
        </svg>
      );
    case "artisan-craft":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M15.5 8.5 19 5" />
          <path d="M18.5 3.5a2.12 2.12 0 0 1 2 2c-.6 1.5-2.6 3.5-4 4.9-2.2 2.2-5.4 4.8-8.1 5.4-2 .5-3.6-.1-4.3-.8-.7-.7-1.3-2.3-.8-4.3.6-2.7 3.2-5.9 5.4-8.1 1.4-1.4 3.4-3.4 4.9-4a2.12 2.12 0 0 1 2 2Z" />
          <path d="M6.5 17.5c2.2-2.2 5.2-5.2 7.5-7.5" />
          <path d="M4.8 14.2c1.8 1.8 3.2 3.2 5 5" />
        </svg>
      );
    case "plant-based":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 20v-9" />
          <path d="M12 11c0-4.4 3.6-7 8-7 0 4.4-3.6 7-8 7Z" />
          <path d="M12 14c0-3.8-3-6-7-6 0 3.8 3 6 7 6Z" />
        </svg>
      );
    case "mendoza-fruit":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 6c-4 0-6.5 2.7-6.5 6.3 0 4.2 3.7 8.2 6.5 8.2s6.5-4 6.5-8.2C18.5 8.7 16 6 12 6Z" />
          <path d="M9.5 4.2C10.5 5.3 11.2 6 12 6c.8 0 1.5-.7 2.5-1.8" />
          <path d="M12 3v3" />
          <circle cx="10" cy="11.5" r="0.6" fill="currentColor" />
          <circle cx="14" cy="11.5" r="0.6" fill="currentColor" />
          <circle cx="12" cy="14.5" r="0.6" fill="currentColor" />
        </svg>
      );
    case "aove":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 2.5C12 2.5 6.5 9.2 6.5 14a5.5 5.5 0 0 0 11 0c0-4.8-5.5-11.5-5.5-11.5Z" />
          <path d="M10 15.5a2.5 2.5 0 0 0 2.5 2" />
        </svg>
      );
    case "star-quality":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      );
    case "gift-share":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="8" width="18" height="4" rx="1" />
          <path d="M12 8v13" />
          <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
          <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
        </svg>
      );
  }
}

interface FloatingPropertyPillProps {
  badge: CategoryPropertyBadge;
  index: number;
  positionClass: string;
}

export function FloatingPropertyPill({
  badge,
  index,
  positionClass,
}: FloatingPropertyPillProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -4, 0],
      }}
      transition={{
        opacity: { duration: 0.4, delay: 0.1 + index * 0.1 },
        scale: {
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.1 + index * 0.1,
        },
        y: {
          duration: 3.6 + index * 0.35,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.25,
        },
      }}
      whileHover={{ scale: 1.04, y: -3 }}
      className={`group z-20 ${positionClass}`}
    >
      <div className="flex items-center gap-2.5 rounded-full border border-white/85 bg-[#FFFDF8]/78 backdrop-blur-2xl py-1.5 pl-1.5 pr-4 shadow-[0_12px_32px_rgba(27,27,27,0.12),inset_0_1px_0_rgba(255,255,255,0.95)]">
        {/* Medallón circular Pantone 465 animado del brochure */}
        <motion.span
          whileHover={{ rotate: [0, -8, 8, 0] }}
          transition={{ duration: 0.4 }}
          className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#C09B5D] text-[#FBF7EB] shadow-[0_4px_12px_rgba(192,155,93,0.45),inset_0_1px_1px_rgba(255,255,255,0.45)]"
        >
          <BrochureSvgGlyph kind={badge.icon} className="h-4.5 w-4.5" />
        </motion.span>

        <div className="min-w-0">
          <span className="block font-ui text-[11px] font-bold tracking-wide text-[#1B1B1B] leading-tight md:whitespace-nowrap">
            {badge.label}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
