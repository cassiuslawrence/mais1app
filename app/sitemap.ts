import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { apps } from "@/lib/apps";
import { listGuides } from "@/lib/guides";
import { localeUrl } from "@/lib/site";

const staticPaths = ["", "/contact", "/help-center", "/privacy", "/terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  // App landing pages come from the data file — a new landing appears here for free.
  const appPaths = apps
    .filter((app) => app.href?.startsWith("/"))
    .map((app) => app.href!);

  // Guide pages come from the content folder — a new .md appears here for free.
  const guidePaths = apps.flatMap((app) =>
    listGuides(app.slug).map((g) => `/apps/${app.slug}/guides/${g}`),
  );

  return [...staticPaths, ...appPaths, ...guidePaths].map((path) => ({
    url: localeUrl(routing.defaultLocale, path),
    lastModified: new Date(),
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, localeUrl(l, path)]),
      ),
    },
  }));
}
