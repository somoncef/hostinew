import { BlogCard } from "@/components/blog/BlogCard";
import { PageHero } from "@/components/layout/PageHero";
import { FinalCta } from "@/components/sections/FinalCta";
import { getAllPosts } from "@/lib/blog";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Blog — Conciergerie & location saisonnière Marrakech",
  description:
    "Conseils pour propriétaires : location légale Airbnb au Maroc, choix de conciergerie à Marrakech et optimisation des revenus locatifs.",
  path: "/blog",
  keywords: [
    "blog conciergerie Marrakech",
    "gestion Airbnb Marrakech",
    "location saisonnière Marrakech",
    "optimisation revenus locatifs",
  ],
});

export default function BlogPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Insights pour propriétaires exigeants"
        description="Guides pratiques sur la gestion locative, la conciergerie Airbnb et la performance de vos biens à Marrakech."
        image="/images/marrakech-interior.jpg"
        compact
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {featured && (
            <div className="mb-20 border-b border-champagne/10 pb-20">
              <BlogCard post={featured} featured />
            </div>
          )}
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
