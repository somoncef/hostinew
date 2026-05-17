export function HeroCurve() {
  return (
    <div className="relative -mt-px bg-charcoal" aria-hidden>
      <svg
        className="block w-full text-cream"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path d="M0,64 C360,0 1080,96 1440,32 L1440,80 L0,80 Z" />
      </svg>
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2">
        <span className="h-8 w-5 rounded-full border border-charcoal/20" />
        <span className="h-1.5 w-1 animate-bounce rounded-full bg-copper/60" />
      </div>
    </div>
  );
}
