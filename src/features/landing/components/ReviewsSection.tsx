import { HUERTANA_BRAND, HUERTANA_GOOGLE_REVIEWS } from "../data/huertana.data";

export function ReviewsSection() {
  return (
    <section
      id="resenas"
      aria-labelledby="reviews-heading"
      className="scroll-mt-16 border-t border-[#C99A4A]/30 bg-[#F5F0E6] py-12 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Cabecera de Reseñas de Google */}
        <div className="flex flex-col justify-between gap-3 border-b border-[#C99A4A]/25 pb-5 sm:flex-row sm:items-end">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#C99A4A]/40 bg-[#FFFCF7] px-3 py-1 font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#617248]">
              [ GOOGLE REVIEWS · {HUERTANA_BRAND.googleRating} DE 5 ]
            </div>
            <h2
              id="reviews-heading"
              className="mt-1 font-serif text-2xl font-normal text-[#1B1B1B] sm:text-4xl"
            >
              Opiniones en Google Maps
            </h2>
          </div>

          <div>
            <a
              href={HUERTANA_BRAND.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-[#1B1B1B] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#FFFCF7] transition-colors hover:bg-[#333333]"
            >
              Ver perfil completo →
            </a>
          </div>
        </div>

        {/* Carrusel deslizable en mobile, grid de 4 en desktop */}
        <div className="mt-6 -mx-5 px-5 flex overflow-x-auto gap-4 snap-x no-scrollbar lg:mx-0 lg:px-0 lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible">
          {HUERTANA_GOOGLE_REVIEWS.map((rev) => (
            <article
              key={rev.id}
              className="min-w-[270px] max-w-[280px] snap-center shrink-0 flex flex-col justify-between rounded-xl border border-[#C99A4A]/25 bg-[#FFFCF7] p-5 shadow-xs lg:min-w-0 lg:max-w-none"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#1B1B1B]/60">
                  <span className="font-semibold text-[#1B1B1B]">
                    {rev.author}
                  </span>
                  <span className="text-[11px]">{rev.relativeTime}</span>
                </div>

                <div
                  className="mt-1.5 text-xs tracking-widest text-[#C99A4A]"
                  aria-label={`${rev.rating} de 5 estrellas`}
                >
                  ★★★★★
                </div>

                <p className="mt-1 text-[11px] font-medium text-[#617248] truncate">
                  {rev.productMentioned}
                </p>

                <p className="mt-2 text-xs leading-relaxed text-[#1B1B1B]/80">
                  “{rev.text}”
                </p>
              </div>

              <div className="mt-4 border-t border-[#C99A4A]/15 pt-2 text-[10px] uppercase tracking-wider text-[#1B1B1B]/50 font-mono">
                [ Opinión verificada ]
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
