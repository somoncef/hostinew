import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogCard } from "@/components/blog/BlogCard";
import { FinalCta } from "@/components/sections/FinalCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { getAllPostSlugs, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  buildPageMetadata,
} from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return buildPageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: post.keywords,
    ogImage: post.coverImage,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 2);
  const date = new Date(post.date).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <JsonLd
        data={[
          articleJsonLd(post),
          breadcrumbJsonLd([
            { name: "Accueil", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />

      <article>
        <header className="relative pt-32">
          <div className="relative mx-auto max-w-4xl px-6 pb-10 lg:px-10">
            <nav className="mb-6 text-sm text-champagne-muted" aria-label="Fil d'Ariane">
              <Link href="/" className="hover:text-champagne">
                Accueil
              </Link>
              <span className="mx-2">/</span>
              <Link href="/blog" className="hover:text-champagne">
                Blog
              </Link>
              <span className="mx-2">/</span>
              <span className="text-champagne">{post.category}</span>
            </nav>
            <p className="text-xs uppercase tracking-[0.2em] text-copper-light">{post.category}</p>
            <h1 className="mt-4 font-display text-4xl tracking-tight text-champagne sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-champagne-muted">{post.description}</p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-champagne-muted">
              <time dateTime={post.date}>{date}</time>
              <span>·</span>
              <span>{post.readingTime}</span>
              <span>·</span>
              <span>{post.author}</span>
            </div>
          </div>
          <div className="relative mx-auto max-w-5xl px-6 lg:px-10">
            <div className="relative aspect-[21/9] overflow-hidden">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1280px) 100vw, 1024px"
              />
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-10 lg:py-20">
          <div
            className="prose-hostkech"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-champagne/10 bg-charcoal-soft py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <h2 className="font-display text-2xl text-champagne">Articles associés</h2>
            <div className="mt-10 grid gap-12 md:grid-cols-2">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <FinalCta />
    </>
  );
}
