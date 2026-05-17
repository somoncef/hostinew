import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import readingTime from "reading-time";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

function isPostFile(fileName: string) {
  return (
    (fileName.endsWith(".md") || fileName.endsWith(".mdx")) &&
    !fileName.toLowerCase().startsWith("readme")
  );
}

export type BlogPostMeta = {
  title: string;
  slug: string;
  description: string;
  date: string;
  coverImage: string;
  keywords: string[];
  author: string;
  category: string;
};

export type BlogPost = BlogPostMeta & {
  content: string;
  contentHtml: string;
  readingTime: string;
};

function parsePost(fileName: string): BlogPost | null {
  const slug = fileName.replace(/\.mdx?$/, "");
  const fullPath = path.join(BLOG_DIR, fileName);
  if (!fs.existsSync(fullPath)) return null;

  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  const meta = data as BlogPostMeta;

  if (!meta.slug) meta.slug = slug;

  const processed = remark().use(html, { sanitize: false }).processSync(content);
  const stats = readingTime(content);

  const rawKeywords = (data as { keywords?: unknown }).keywords;

  return {
    ...meta,
    slug: meta.slug,
    keywords: Array.isArray(rawKeywords)
      ? rawKeywords.map(String)
      : typeof rawKeywords === "string"
        ? rawKeywords.split(",").map((k) => k.trim())
        : [],
    content,
    contentHtml: processed.toString(),
    readingTime: stats.text,
  };
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter(isPostFile)
    .map((f) => f.replace(/\.mdx?$/, ""));
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs
    .readdirSync(BLOG_DIR)
    .filter(isPostFile);

  return files
    .map((file) => parsePost(file))
    .filter((p): p is BlogPost => p !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | null {
  const md = path.join(BLOG_DIR, `${slug}.md`);
  const mdx = path.join(BLOG_DIR, `${slug}.mdx`);
  const file = fs.existsSync(md) ? `${slug}.md` : fs.existsSync(mdx) ? `${slug}.mdx` : null;
  if (!file) return null;
  return parsePost(file);
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = getPostBySlug(slug);
  if (!current) return getAllPosts().slice(0, limit);

  return getAllPosts()
    .filter((p) => p.slug !== slug)
    .sort((a, b) => {
      const aMatch = a.category === current.category ? 1 : 0;
      const bMatch = b.category === current.category ? 1 : 0;
      return bMatch - aMatch;
    })
    .slice(0, limit);
}
