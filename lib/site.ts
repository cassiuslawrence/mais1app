import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

export const SITE_URL = "https://mais1app.com";

/**
 * Absolute URL for a path in a locale, honoring `localePrefix: 'as-needed'`
 * (default locale has no prefix). `path` is locale-less, e.g. "" or "/privacy".
 */
export function localeUrl(locale: string, path: string = ""): string {
  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  return `${SITE_URL}${prefix}${path}` || SITE_URL;
}

/**
 * Shared per-page metadata: localized title/description + canonical +
 * hreflang alternates + Open Graph. `key` addresses `meta.<key>.{title,description}`
 * in the messages; `path` is the locale-less route ("" = home, which uses an
 * absolute title so the layout's "%s · Mais1App" template doesn't double-brand it).
 */
export async function pageMetadata(
  locale: string,
  key: string,
  path: string = "",
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "meta" });
  const title = t(`${key}.title`);
  const description = t(`${key}.description`);
  const languages: Record<string, string> = Object.fromEntries(
    routing.locales.map((l) => [l, localeUrl(l, path)]),
  );
  languages["x-default"] = localeUrl(routing.defaultLocale, path);

  return {
    title: path === "" ? { absolute: title } : title,
    description,
    alternates: {
      canonical: localeUrl(locale, path),
      languages,
    },
    openGraph: {
      title,
      description,
      url: localeUrl(locale, path),
      siteName: "Mais1App",
      type: "website",
    },
  };
}
