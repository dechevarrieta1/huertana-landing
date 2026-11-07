import { HUERTANA_BRAND, HUERTANA_GOOGLE_REVIEWS } from "../data/huertana.data";

export function ReviewsSection() {
  return (
    <section
      id="resenas"
      aria-labelledby="reviews-heading"
      className="scroll-mt-20 border-t border-[#C99A4A]/30 bg-[#F5F0E6] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Cabecera de Reseñas de Google */}
        <div className="flex flex-col justify-between gap-6 border-b border-[#C99A4A]/30 pb-8 sm:flex-row sm:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C99A4A]/40 bg-[#FFFCF7] px-3.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-[#617248]">
              [ GOOGLE REVIEWS · {HUERTANA_BRAND.googleRating} DE 5 ]
            </div>
            <h2
              id="reviews-heading"
              className="mt-3 font-serif text-3xl font-normal text-[#1B1B1B] sm:text-4xl"
            >
              Opiniones de quienes eligen Huertana
            </h2>
            <p className="mt-1 text-sm text-[#1B1B1B]/75">
              Basado en {HUERTANA_BRAND.googleReviewCount} reseñas verificadas
              de clientes en Google Maps.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={HUERTANA_BRAND.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-[#1B1B1B] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FFFCF7] transition-colors hover:bg-[#333333]"
            >
              Ver perfil en Google Maps →
            </a>
          </div>
        </div>

        {/* Grid de Reseñas */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HUERTANA_GOOGLE_REVIEWS.map((rev) => (
            <article
              key={rev.id}
              className="flex flex-col justify-between rounded-2xl border border-[#C99A4A]/30 bg-[#FFFCF7] p-6 shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#1B1B1B]/60">
                  <span className="font-semibold text-[#1B1B1B]">
                    {rev.author}
                  </span>
                  <span>{rev.relativeTime}</span>
                </div>

                {/* Estrellas tipográficas limpias */}
                <div
                  className="mt-2 text-sm tracking-widest text-[#C99A4A]"
                  aria-label={`${rev.rating} de 5 estrellas`}
                >
                  ★★★★★
                </div>

                <p className="mt-1 text-[11px] font-medium text-[#617248]">
                  Producto: {rev.productMentioned}
                </p>

                <p className="mt-3 text-xs leading-relaxed text-[#1B1B1B]/80">
                  “{rev.text}”
                </p>
              </div>

              <div className="mt-5 border-t border-[#C99A4A]/20 pt-3 text-[10px] uppercase tracking-wider text-[#1B1B1B]/50 font-mono">
                [ Opinión verificada ]
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
