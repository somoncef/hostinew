import { getAllPosts } from "@/lib/blog";
import { processSteps, services, testimonials, whyHostkech } from "@/lib/content";
import { BlogCard } from "@/components/blog/BlogCard";
import { ParallaxImage } from "@/components/home/ParallaxImage";
import { ServicePreviewCard } from "@/components/home/ServicePreviewCard";
import { TestimonialCard } from "@/components/home/TestimonialCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";

export function WhySection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div
        className="pointer-events-none absolute right-0 top-1/2 h-px w-1/3 bg-gradient-to-l from-copper/20 to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Pourquoi HOSTKECH"
            title="Une conciergerie pensée pour les propriétaires ambitieux"
            description="Nous combinons expertise locale, standards hôteliers et pilotage commercial pour transformer votre bien en actif performant à Marrakech."
          />
          <Stagger className="space-y-8" stagger={0.12}>
            {whyHostkech.map((item) => (
              <StaggerItem key={item.title}>
                <div className="group border-l border-copper/40 pl-6 transition-colors hover:border-copper-light">
                  <h3 className="font-display text-xl text-champagne transition-transform duration-300 group-hover:translate-x-1">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-champagne-muted leading-relaxed">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

export function ServicesPreview() {
  const preview = services.slice(0, 4);
  return (
    <section className="border-t border-champagne/10 bg-charcoal-soft py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Services"
              title="Une gestion complète, du listing au départ des voyageurs"
              description="Conciergerie Airbnb Marrakech, revenue management et expérience premium — tout est orchestré par une seule équipe."
            />
            <Button href="/services" variant="secondary" className="shrink-0 self-start lg:self-auto">
              Voir tous les services
            </Button>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-px bg-champagne/10 sm:grid-cols-2">
          {preview.map((service, i) => (
            <ServicePreviewCard
              key={service.slug}
              index={i}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function StatsSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal direction="left">
            <SectionHeading
              eyebrow="Impact"
              title="Des résultats mesurables, sans promesses irréalistes"
              description="Notre priorité : des revenus optimisés, des voyageurs satisfaits et une gestion transparente pour chaque propriétaire."
            />
          </Reveal>
          <Stagger className="grid grid-cols-2 gap-10 sm:gap-12" stagger={0.15}>
            <StaggerItem>
              <AnimatedCounter value={24} suffix="h" label="Délai moyen de réponse voyageurs" />
            </StaggerItem>
            <StaggerItem>
              <AnimatedCounter value={7} suffix="/7" label="Assistance opérationnelle" />
            </StaggerItem>
            <StaggerItem>
              <AnimatedCounter value={100} suffix="%" label="Biens suivis avec reporting" />
            </StaggerItem>
            <StaggerItem>
              <AnimatedCounter value={15} suffix="+" label="Années d'expertise locale cumulée" />
            </StaggerItem>
          </Stagger>
        </div>
      </div>
    </section>
  );
}

export function AmbianceSection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-0">
      <div className="grid lg:grid-cols-2">
        <ParallaxImage
          src="/images/marrakech-interior.jpg"
          alt="Intérieur luxueux à Marrakech"
          containerClassName="min-h-[400px] lg:min-h-[640px]"
          sizes="(max-width: 1024px) 100vw, 50vw"
          speed={0.08}
        />
        <div className="flex flex-col justify-center bg-charcoal-elevated px-6 py-20 lg:px-16 lg:py-28">
          <Reveal direction="right">
            <p className="text-xs uppercase tracking-[0.28em] text-copper-light">Marrakech</p>
            <h2 className="mt-4 font-display text-3xl tracking-tight text-champagne sm:text-4xl">
              L&apos;art de l&apos;accueil, au cœur de la ville ocre
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-champagne-muted">
              Villas de la Palmeraie, riads de la Médina, appartements design à Gueliz : nous
              sublimons chaque adresse avec une approche sur-mesure, entre hospitalité marocaine et
              standards internationaux.
            </p>
            <Button href="/a-propos" variant="secondary" className="mt-8">
              Notre philosophie
            </Button>
          </Reveal>
        </div>
        <div className="relative min-h-[320px] lg:col-span-2 lg:min-h-[420px]">
          <ParallaxImage
            src="/images/luxury-pool.jpg"
            alt="Piscine de villa de prestige à Marrakech"
            containerClassName="absolute inset-0 min-h-full"
            speed={0.06}
          />
          <div className="absolute inset-0 bg-charcoal/55" />
          <Reveal className="absolute inset-0 flex items-center justify-center px-6">
            <p className="max-w-2xl text-center font-display text-2xl text-champagne sm:text-3xl">
              « Chaque séjour doit refléter l&apos;exigence du propriétaire et la magie de
              Marrakech. »
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className="section-light py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Processus"
          title="Comment ça fonctionne"
          description="Un parcours clair, de l'audit initial au suivi de performance, pour une collaboration sereine."
          light
          align="center"
        />
        <Stagger className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-5" stagger={0.1}>
          {processSteps.map((step) => (
            <StaggerItem key={step.step}>
              <div className="group border-t border-charcoal/15 pt-6 transition-colors hover:border-copper-dark/50">
                <span className="font-display text-3xl text-copper-dark/40 transition-colors group-hover:text-copper-dark">
                  {step.step}
                </span>
                <h3 className="mt-4 font-display text-lg text-charcoal">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="Témoignages"
            title="La confiance de propriétaires à Marrakech"
            align="center"
          />
        </Reveal>
        <Stagger className="mt-16 grid gap-8 lg:grid-cols-3" stagger={0.12}>
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <TestimonialCard testimonial={t} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export function BlogPreviewSection() {
  const posts = getAllPosts().slice(0, 3);
  if (posts.length === 0) return null;

  return (
    <section className="border-t border-champagne/10 bg-charcoal-soft py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Blog"
              title="Conseils pour propriétaires à Marrakech"
              description="Location saisonnière, conciergerie Airbnb et optimisation des revenus : nos articles pour vous accompagner."
            />
            <Button href="/blog" variant="secondary" className="shrink-0 self-start">
              Voir le blog
            </Button>
          </div>
        </Reveal>
        <Stagger className="mt-14 grid gap-12 lg:grid-cols-3" stagger={0.15}>
          {posts.map((post) => (
            <StaggerItem key={post.slug}>
              <BlogCard post={post} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
