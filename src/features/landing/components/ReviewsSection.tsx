import { HUERTANA_BRAND, HUERTANA_GOOGLE_REVIEWS } from "../data/huertana.data";

export function ReviewsSection() {
  return (
    <section
      id="resenas"
      aria-labelledby="reviews-heading"
      className="scroll-mt-16 border-t border-[#CCBFA4]/60 bg-[#FBF7EB] py-12 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Cabecera de Reseñas de Google */}
        <div className="flex flex-col justify-between gap-3 border-b border-[#CCBFA4]/60 pb-5 sm:flex-row sm:items-end">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#CCBFA4] bg-[#FFFDF8] px-3 py-1 font-ui text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.14em] text-[#9B773C]">
              Google Reviews · {HUERTANA_BRAND.googleRating} de 5
            </div>
            <h2
              id="reviews-heading"
              className="mt-1.5 font-serif text-2xl font-normal text-[#1B1B1B] sm:text-4xl"
            >
              Opiniones en Google Maps
            </h2>
          </div>

          <div>
            <a
              href={HUERTANA_BRAND.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-[#1B1B1B] px-5 py-2.5 font-ui text-[11px] font-bold uppercase tracking-[0.1em] text-[#FBF7EB] transition-colors hover:bg-[#333333]"
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
              className="min-w-[270px] max-w-[280px] snap-center shrink-0 flex flex-col justify-between rounded-2xl border border-[#CCBFA4] bg-[#FFFDF8] p-5 shadow-xs lg:min-w-0 lg:max-w-none"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#1B1B1B]/65">
                  <span className="font-ui font-bold text-[#1B1B1B]">
                    {rev.author}
                  </span>
                  <span className="text-[11px]">{rev.relativeTime}</span>
                </div>

                <div
                  className="mt-1.5 text-xs tracking-widest text-[#C09B5D]"
                  aria-label={`${rev.rating} de 5 estrellas`}
                >
                  ★★★★★
                </div>

                <p className="mt-1 font-ui text-[10px] font-medium uppercase tracking-wider text-[#9B773C] truncate">
                  {rev.productMentioned}
                </p>

                <p className="mt-2.5 text-xs leading-relaxed text-[#1B1B1B]/80">
                  “{rev.text}”
                </p>
              </div>

              <div className="mt-4 border-t border-[#CCBFA4]/50 pt-2.5 font-ui text-[10px] uppercase tracking-[0.14em] text-[#1B1B1B]/55">
                Opinión verificada
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
