import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { apps } from "@/lib/apps";
import { localeUrl } from "@/lib/site";

const staticPaths = ["", "/contact", "/help-center", "/privacy", "/terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  // App landing pages come from the data file — a new landing appears here for free.
  const appPaths = apps
    .filter((app) => app.href?.startsWith("/"))
    .map((app) => app.href!);

  return [...staticPaths, ...appPaths].map((path) => ({
    url: localeUrl(routing.defaultLocale, path),
    lastModified: new Date(),
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, localeUrl(l, path)]),
      ),
    },
  }));
}
