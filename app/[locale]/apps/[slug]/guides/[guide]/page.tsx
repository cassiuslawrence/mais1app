import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { apps } from "@/lib/apps";
import { getGuide, listGuides } from "@/lib/guides";
import { Link } from "@/i18n/navigation";
import { localeUrl } from "@/lib/site";
import { routing } from "@/i18n/routing";

// Generic guide page (SEO content cluster around an app's landing page).
// A guide exists by having content/guides/<appSlug>/<locale>/<guide>.md —
// no code per guide. Missing translations fall back to English.

type Props = {
  params: Promise<{ locale: string; slug: string; guide: string }>;
};

export function generateStaticParams() {
  return apps.flatMap((app) =>
    listGuides(app.slug).map((guide) => ({ slug: app.slug, guide })),
  );
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug, guide } = await params;
  const g = getGuide(slug, guide, locale);
  if (!g) return {};
  const pagePath = `/apps/${slug}/guides/${guide}`;
  const languages: Record<string, string> = Object.fromEntries(
    routing.locales.map((l) => [l, localeUrl(l, pagePath)]),
  );
  languages["x-default"] = localeUrl(routing.defaultLocale, pagePath);
  return {
    title: g.title,
    description: g.description,
    alternates: { canonical: localeUrl(locale, pagePath), languages },
    openGraph: {
      title: g.title,
      description: g.description,
      url: localeUrl(locale, pagePath),
      siteName: "Mais1App",
      type: "article",
    },
  };
}

export default async function GuidePage({ params }: Props) {
  const { locale, slug, guide } = await params;
  const app = apps.find((a) => a.slug === slug);
  const g = app ? getGuide(slug, guide, locale) : null;
  if (!app || !g) notFound();

  const tApp = await getTranslations(`apps.${slug}`);
  const tLanding = await getTranslations(`apps.${slug}.landing`);
  const tGuides = await getTranslations("guides");
  const name = tApp("name");

  const displayDate = g.updated ?? g.date;
  const formattedDate = displayDate
    ? new Date(`${displayDate}T00:00:00Z`).toLocaleDateString(locale, {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
      })
    : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: g.title,
    description: g.description,
    datePublished: g.date,
    dateModified: g.updated ?? g.date,
    author: { "@type": "Organization", name: "Mais1App" },
    publisher: { "@type": "Organization", name: "Mais1App" },
    mainEntityOfPage: localeUrl(locale, `/apps/${slug}/guides/${g.slug}`),
  };

  return (
    <main className="bg-white">
      <article className="mx-auto max-w-3xl px-6 py-14">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Breadcrumb back to the app's landing page */}
        <nav className="mb-8 text-sm">
          <Link
            href={`/apps/${slug}`}
            className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900"
          >
            <Image
              src={app.icon}
              alt={name}
              width={20}
              height={20}
              className="rounded-md"
            />
            {name}
          </Link>
        </nav>

        <header className="mb-10">
          <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            {g.title}
          </h1>
          <p className="mt-4 text-sm text-gray-500">
            {tGuides("byline", { name })}
            {formattedDate ? ` · ${formattedDate}` : null}
          </p>
        </header>

        <div
          className="prose prose-gray max-w-none prose-headings:text-gray-900 prose-a:text-gray-900"
          dangerouslySetInnerHTML={{ __html: g.html }}
        />

        {/* CTA back to the app (conditional store button, same as landing) */}
        <aside className="mt-14 rounded-2xl border border-gray-200 bg-gray-50 p-8 text-center">
          <Image
            src={app.icon}
            alt={name}
            width={56}
            height={56}
            className="mx-auto rounded-xl shadow-sm"
          />
          <p className="mt-4 text-lg font-semibold text-gray-900">
            {tGuides("ctaTitle", { name })}
          </p>
          <p className="mt-2 text-sm text-gray-600">{tGuides("ctaSub")}</p>
          <div className="mt-6 flex justify-center">
            {app.appStoreUrl ? (
              <a
                href={app.appStoreUrl}
                className="inline-flex rounded-lg bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-700"
              >
                {tLanding("download")}
              </a>
            ) : (
              <span className="inline-flex rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium text-gray-500">
                {tLanding("comingSoon")}
              </span>
            )}
          </div>
          <p className="mt-4 text-xs text-gray-400">
            {tLanding("privacyLine")}
          </p>
        </aside>
      </article>
    </main>
  );
}
