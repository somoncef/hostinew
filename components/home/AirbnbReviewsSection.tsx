"use client";

import { airbnbReviews } from "@/lib/content";
import { SignatureText } from "@/components/ui/SignatureText";
import { Reveal } from "@/components/ui/Reveal";

function AirbnbLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C9.2 2 7 4.5 7 7.2c0 2.2 1.1 3.4 2.1 4.6.9 1.1 1.8 2.1 1.8 4.1v.1H11v-.1c0-2 .9-3 1.8-4.1 1-1.2 2.1-2.4 2.1-4.6C14.9 4.5 12.7 2 12 2zm0 18c-3.1 0-5.6-1.5-5.6-3.4 0-.8.7-1.4 1.6-1.4h8c.9 0 1.6.6 1.6 1.4 0 1.9-2.5 3.4-5.6 3.4z" />
    </svg>
  );
}

function Stars() {
  return (
    <span className="inline-flex gap-0.5 text-[#FF5A5F]" aria-label="5 étoiles">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </span>
  );
}

function ReviewCard({ name, text }: { name: string; text: string }) {
  return (
    <article className="flex w-[min(85vw,320px)] shrink-0 flex-col rounded-sm border border-charcoal/10 bg-white p-6 shadow-lg sm:w-[340px]">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-copper/15 font-display text-sm text-copper-dark">
            {name.charAt(0)}
          </span>
          <div>
            <p className="font-medium text-charcoal">{name}</p>
            <Stars />
          </div>
        </div>
        <AirbnbLogo className="h-5 w-5 shrink-0 text-[#FF5A5F]" />
      </div>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{text}</p>
    </article>
  );
}

export function AirbnbReviewsSection() {
  const { rating, platform, reviews } = airbnbReviews;
  const duplicated = [...reviews, ...reviews];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-copper via-copper-dark to-charcoal py-24 lg:py-32">
      <div
        className="pointer-events-none absolute -left-20 top-10 h-64 w-64 opacity-[0.07]"
        aria-hidden
      >
        <AirbnbLogo className="h-full w-full text-white" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:items-center">
          <Reveal direction="left">
            <h2 className="font-display text-3xl leading-tight text-champagne sm:text-4xl lg:text-5xl">
              Des voyageurs{" "}
              <SignatureText className="text-champagne" underlineClassName="text-copper-light">
                satisfaits
              </SignatureText>
            </h2>
            <p className="mt-4 text-champagne/80">
              Notre réputation repose sur l&apos;expérience de vos voyageurs sur {platform}.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="flex -space-x-2">
                {reviews.slice(0, 4).map((r) => (
                  <span
                    key={r.name}
                    className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-copper-dark bg-champagne text-xs font-medium text-charcoal"
                  >
                    {r.name.charAt(0)}
                  </span>
                ))}
              </div>
              <div>
                <p className="font-display text-2xl text-champagne">
                  {rating.toFixed(2).replace(".", ",")} sur {platform}
                </p>
                <Stars />
              </div>
            </div>
            <p className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-champagne/70">
              <span className="text-champagne">✓</span> Avis {platform}
            </p>
          </Reveal>

          <div className="review-marquee-viewport relative min-w-0 overflow-hidden">
            <div className="review-marquee-track" aria-label="Avis voyageurs Airbnb">
              {duplicated.map((review, i) => (
                <ReviewCard key={`${review.name}-${i}`} name={review.name} text={review.text} />
              ))}
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-copper-dark/90 to-transparent sm:w-14" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-charcoal/80 to-transparent sm:w-14" />
          </div>
        </div>
      </div>
    </section>
  );
}
