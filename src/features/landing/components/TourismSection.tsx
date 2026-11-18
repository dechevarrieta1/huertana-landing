import Image from "next/image";
import {
  Leaf,
  Award,
  Star,
  Users,
  Clock,
  Calendar,
  Globe,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import { HUERTANA_TOURISM } from "../data/huertana.data";
import type { TourismReason } from "../types/huertana.types";

const REASON_ICONS: Record<TourismReason["icon"], typeof Leaf> = {
  leaf: Leaf,
  award: Award,
  star: Star,
  users: Users,
};

export function TourismSection() {
  const {
    eyebrow,
    title,
    tagline,
    intro,
    experienceTitle,
    reasons,
    steps,
    itinerary,
    tariff,
    contact,
  } = HUERTANA_TOURISM;

  return (
    <section
      id="turismo"
      aria-labelledby="tourism-heading"
      className="scroll-mt-16 border-t border-[#CCBFA4]/60 bg-[#FFFDF8] py-14 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Cabecera Editorial del Brochure de Turismo */}
        <div className="flex flex-col gap-6 border-b border-[#CCBFA4]/60 pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="font-ui text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.18em] text-[#9B773C]">
              {eyebrow}
            </span>

            <h2
              id="tourism-heading"
              className="mt-1.5 font-serif text-3xl font-normal text-[#1B1B1B] sm:text-4xl lg:text-[2.75rem] leading-tight"
            >
              {title}
            </h2>

            <p className="mt-3 text-sm sm:text-base text-[#1B1B1B]/80 leading-relaxed max-w-2xl">
              {intro}
            </p>
          </div>

          <div className="flex items-center gap-3 self-start lg:self-end rounded-2xl border border-[#CCBFA4] bg-[#FBF7EB] px-4 py-3 shrink-0">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#C09B5D]/20 p-1.5">
              <Image
                src="/images/huertana-isologo.png"
                alt=""
                width={600}
                height={800}
                className="h-full w-auto object-contain"
              />
            </div>
            <div>
              <span className="block font-serif text-sm text-[#1B1B1B]">
                Sumá Huertana a tu recorrido
              </span>
              <span className="block font-ui text-[10px] font-medium uppercase tracking-[0.14em] text-[#9B773C]">
                {tagline}
              </span>
            </div>
          </div>
        </div>

        {/* ¿Por qué sumar Huertana al circuito? */}
        <div className="mt-10">
          <h3 className="font-ui text-xs font-bold uppercase tracking-[0.16em] text-[#9B773C]">
            ¿Por qué sumar Huertana al circuito?
          </h3>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => {
              const Icon = REASON_ICONS[reason.icon];
              return (
                <div
                  key={reason.id}
                  className="rounded-2xl border border-[#CCBFA4]/70 bg-[#FBF7EB] p-5 flex flex-col items-start gap-3 transition-colors hover:border-[#C09B5D]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#C09B5D] text-[#1B1B1B] shadow-xs">
                    <Icon className="h-5 w-5 stroke-[1.75]" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-medium text-[#1B1B1B]">
                      {reason.title}
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-[#1B1B1B]/75">
                      {reason.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* La Experiencia = Visita guiada + degustación */}
        <div className="mt-12">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1B1B1B]">
              {experienceTitle}
            </h3>
            <span className="font-ui text-[11px] font-medium uppercase tracking-[0.14em] text-[#9B773C]">
              Recorrido en 3 momentos
            </span>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <article
                key={step.number}
                className="group overflow-hidden rounded-2xl border border-[#CCBFA4] bg-[#FBF7EB] flex flex-col"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-[#CCBFA4]/60 bg-[#F3ECE0]">
                  <Image
                    src={step.imageSrc}
                    alt={step.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className={`object-cover transition-transform duration-500 group-hover:scale-[1.03] ${
                      step.imagePosition ?? "object-center"
                    }`}
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-[#1B1B1B]/85 px-3 py-1 font-ui text-[11px] font-bold tracking-wider text-[#FBF7EB]">
                    {step.number}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  <h4 className="font-serif text-xl font-medium text-[#1B1B1B]">
                    {step.number}. {step.title}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#1B1B1B]/80">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Información para tu itinerario + Tarifas para Agencias */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Itinerario */}
          <div className="lg:col-span-7 rounded-2xl border border-[#CCBFA4] bg-[#FBF7EB] p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <span className="font-ui text-[10px] font-bold uppercase tracking-[0.18em] text-[#9B773C]">
                Información para tu itinerario
              </span>
              <h3 className="mt-1 font-serif text-xl sm:text-2xl text-[#1B1B1B]">
                Detalles operativos de la visita
              </h3>

              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {itinerary.map((item, idx) => {
                  const Icons = [Clock, Calendar, Globe, Users];
                  const Icon = Icons[idx] || Clock;
                  return (
                    <div
                      key={item.label}
                      className="rounded-xl border border-[#CCBFA4]/60 bg-[#FFFDF8] p-4 flex items-start gap-3"
                    >
                      <Icon
                        className="h-4 w-4 text-[#9B773C] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <div>
                        <span className="block font-ui text-[10px] font-bold uppercase tracking-[0.14em] text-[#9B773C]">
                          {item.label}
                        </span>
                        <span className="mt-0.5 block text-xs sm:text-sm font-medium text-[#1B1B1B]">
                          {item.value}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Canales directos de Turismo */}
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-[#CCBFA4]/60 pt-4 text-xs text-[#1B1B1B]/80">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-[#9B773C]" aria-hidden="true" />
                {contact.address}
              </span>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-1.5 hover:text-[#9B773C] underline underline-offset-4 decoration-[#CCBFA4]"
              >
                <Mail className="h-3.5 w-3.5 text-[#9B773C]" aria-hidden="true" />
                {contact.email}
              </a>
              <a
                href={contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[#9B773C]"
              >
                <svg
                  className="h-3.5 w-3.5 text-[#9B773C]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                {contact.instagramHandle}
              </a>
            </div>
          </div>

          {/* Tarifa para Agencias (Pantone 7501 #CCBFA4 del brochure) */}
          <div className="lg:col-span-5 rounded-2xl border border-[#C09B5D]/60 bg-[#CCBFA4]/55 p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <span className="inline-block rounded-full bg-[#1B1B1B] px-3 py-1 font-ui text-[10px] font-bold uppercase tracking-[0.15em] text-[#FBF7EB]">
                {tariff.label}
              </span>

              <div className="mt-5 flex items-baseline gap-2">
                <span className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#1B1B1B]">
                  {tariff.price}
                </span>
                <span className="rounded-full bg-[#C09B5D] px-2.5 py-0.5 font-ui text-[10px] font-bold uppercase tracking-wider text-[#1B1B1B]">
                  {tariff.taxNote}
                </span>
              </div>
              <p className="mt-1 font-ui text-xs font-medium uppercase tracking-wider text-[#1B1B1B]/80">
                {tariff.unit}
              </p>

              <ul className="mt-5 space-y-1.5 border-t border-[#1B1B1B]/15 pt-4 text-xs text-[#1B1B1B]/85">
                {tariff.conditions.map((cond) => (
                  <li key={cond} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#1B1B1B] shrink-0" />
                    <span>{cond}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex flex-col gap-2.5">
              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1B1B1B] px-5 py-3 font-ui text-xs font-bold uppercase tracking-[0.1em] text-[#FBF7EB] shadow-xs transition-colors hover:bg-[#333333] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B1B1B]"
              >
                <Phone className="h-3.5 w-3.5 text-[#C09B5D]" aria-hidden="true" />
                Reservar visita ({contact.phoneDisplay}) →
              </a>
              <a
                href={`mailto:${contact.email}?subject=${encodeURIComponent(
                  "Consulta de reserva / Agencias - Visita guiada Huertana"
                )}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#1B1B1B]/25 bg-[#FBF7EB] px-5 py-2.5 font-ui text-[11px] font-bold uppercase tracking-[0.1em] text-[#1B1B1B] transition-colors hover:bg-[#FFFDF8]"
              >
                <Mail className="h-3.5 w-3.5 text-[#9B773C]" aria-hidden="true" />
                Escribir a {contact.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
