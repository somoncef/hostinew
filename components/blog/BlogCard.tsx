import Image from "next/image";
import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog";

type BlogCardProps = {
  post: BlogPostMeta;
  featured?: boolean;
  light?: boolean;
};

export function BlogCard({ post, featured = false, light = false }: BlogCardProps) {
  const date = new Date(post.date).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <article
      className={
        featured
          ? "group grid gap-8 lg:grid-cols-2 lg:items-center"
          : "group flex flex-col"
      }
    >
      <Link
        href={`/blog/${post.slug}`}
        className={`relative overflow-hidden ${featured ? "aspect-[4/3] lg:aspect-auto lg:min-h-[420px]" : "aspect-[16/10]"}`}
      >
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes={featured ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-80" />
      </Link>

      <div className={featured ? "lg:py-4" : "mt-5 flex flex-1 flex-col"}>
        <p
          className={`text-xs uppercase tracking-[0.2em] ${light ? "text-copper-dark" : "text-copper-light"}`}
        >
          {post.category}
        </p>
        <h3
          className={`mt-3 font-display text-2xl leading-snug tracking-tight transition-colors group-hover:text-copper-light ${light ? "text-charcoal" : "text-champagne"} ${featured ? "sm:text-3xl lg:text-4xl" : ""}`}
        >
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p
          className={`mt-3 line-clamp-3 text-sm leading-relaxed ${light ? "text-muted" : "text-champagne-muted"}`}
        >
          {post.description}
        </p>
        <div className="mt-auto flex items-center justify-between pt-5">
          <time
            dateTime={post.date}
            className={`text-xs ${light ? "text-muted" : "text-champagne-muted"}`}
          >
            {date}
          </time>
          <Link
            href={`/blog/${post.slug}`}
            className={`text-sm transition-colors ${light ? "text-copper-dark hover:text-charcoal" : "text-copper-light hover:text-champagne"}`}
          >
            Lire l&apos;article →
          </Link>
        </div>
      </div>
    </article>
  );
}
