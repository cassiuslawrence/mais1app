import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { routing } from "@/i18n/routing";

// Guides live in content/guides/<appSlug>/<locale>/<guideSlug>.md.
// The default locale's folder is the source of truth for which guides exist;
// missing translations fall back to the default locale (never 404 for that).

const GUIDES_DIR = path.join(process.cwd(), "content", "guides");
const SLUG_RE = /^[a-z0-9-]+$/;

export type GuideMeta = {
  slug: string;
  appSlug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
};

export type Guide = GuideMeta & { html: string };

function guidePath(appSlug: string, locale: string, guideSlug: string): string {
  return path.join(GUIDES_DIR, appSlug, locale, `${guideSlug}.md`);
}

function readGuideFile(
  appSlug: string,
  guideSlug: string,
  locale: string,
): string | null {
  if (!SLUG_RE.test(appSlug) || !SLUG_RE.test(guideSlug)) return null;
  for (const loc of [locale, routing.defaultLocale]) {
    const p = guidePath(appSlug, loc, guideSlug);
    if (fs.existsSync(p)) return fs.readFileSync(p, "utf8");
  }
  return null;
}

/** Guide slugs available for an app (from the default-locale folder). */
export function listGuides(appSlug: string): string[] {
  if (!SLUG_RE.test(appSlug)) return [];
  const dir = path.join(GUIDES_DIR, appSlug, routing.defaultLocale);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""))
    .sort();
}

/** Localized metas (title/description) for an app's guides, EN fallback. */
export function listGuideMetas(appSlug: string, locale: string): GuideMeta[] {
  return listGuides(appSlug)
    .map((slug) => getGuide(appSlug, slug, locale))
    .filter((g): g is Guide => g !== null)
    .map(({ html: _html, ...meta }) => meta);
}

/** One guide, body rendered to HTML, falling back to the default locale. */
export function getGuide(
  appSlug: string,
  guideSlug: string,
  locale: string,
): Guide | null {
  const raw = readGuideFile(appSlug, guideSlug, locale);
  if (!raw) return null;
  const { data, content } = matter(raw);
  return {
    slug: guideSlug,
    appSlug,
    title: String(data.title ?? guideSlug),
    description: String(data.description ?? ""),
    date: String(data.date ?? ""),
    updated: data.updated ? String(data.updated) : undefined,
    html: marked.parse(content, { async: false }),
  };
}
