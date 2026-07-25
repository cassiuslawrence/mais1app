import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { apps } from "@/lib/apps";
import { getGuide, listGuides, listGuideMetas } from "@/lib/guides";
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
      ...(g.image
        ? { images: [{ url: g.image, width: 1200, height: 600 }] }
        : {}),
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

  // Store button (App Store link when live, otherwise "coming soon") — reused
  // by the inline mid-article CTA and the closing CTA box.
  const storeButton = app.appStoreUrl ? (
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
  );

  // Contextual CTA placed mid-article at the <!-- inline-cta --> marker in the
  // markdown (right after the first big visual defect), so it lands where the
  // reader feels the "is this a real problem?" tension — not only at the end.
  const [htmlBefore, htmlAfter] = g.html.split("<!-- inline-cta -->");
  const inlineCta = (
    <aside className="my-10 rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:flex sm:items-center sm:gap-5">
      <Image
        src={app.icon}
        alt={name}
        width={48}
        height={48}
        className="mb-4 rounded-xl shadow-sm sm:mb-0 sm:shrink-0"
      />
      <div className="sm:flex-1">
        <p className="font-semibold text-gray-900">
          {tGuides("inlineTitle")}
        </p>
        <p className="mt-1 text-sm text-gray-600">
          {tGuides("inlineBody", { name })}
        </p>
      </div>
      <div className="mt-4 sm:mt-0 sm:shrink-0">{storeButton}</div>
    </aside>
  );

  // Sibling guides of the same app → internal links (SEO cluster + helps a
  // reader still undecided jump between related guides). Data-driven: scales
  // as guides 3-8 land, no code per guide.
  const related = listGuideMetas(slug, locale).filter((m) => m.slug !== guide);

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
    ...(g.image ? { image: `${localeUrl(routing.defaultLocale, "")}${g.image}` } : {}),
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

        {/* Hero image: one in-app reference photo, framed as a Plus teaser */}
        {g.image && (
          <figure className="mb-10">
            <Image
              src={g.image}
              alt={g.imageAlt ?? g.title}
              width={1200}
              height={600}
              priority
              className="rounded-2xl border border-gray-200"
            />
            {g.imageCaption && (
              <figcaption className="mt-3 text-center text-sm text-gray-500">
                {g.imageCaption}
              </figcaption>
            )}
          </figure>
        )}

        <div
          className="prose prose-gray max-w-none prose-headings:text-gray-900 prose-a:text-gray-900"
          dangerouslySetInnerHTML={{ __html: htmlBefore }}
        />

        {/* Contextual CTA (only when the markdown placed the marker) */}
        {htmlAfter !== undefined && inlineCta}

        {htmlAfter !== undefined && (
          <div
            className="prose prose-gray max-w-none prose-headings:text-gray-900 prose-a:text-gray-900"
            dangerouslySetInnerHTML={{ __html: htmlAfter }}
          />
        )}

        {/* Related guides of the same app (internal links, SEO cluster) */}
        {related.length > 0 && (
          <section className="mt-14 border-t border-gray-200 pt-8">
            <h2 className="text-lg font-semibold text-gray-900">
              {tGuides("relatedTitle")}
            </h2>
            <ul className="mt-4 space-y-3">
              {related.map((m) => (
                <li key={m.slug}>
                  <Link
                    href={`/apps/${slug}/guides/${m.slug}`}
                    className="group block rounded-xl border border-gray-200 p-4 transition-colors hover:border-gray-300 hover:bg-gray-50"
                  >
                    <span className="font-medium text-gray-900 group-hover:underline">
                      {m.title}
                    </span>
                    {m.description && (
                      <span className="mt-1 block text-sm text-gray-600">
                        {m.description}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

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
          <div className="mt-6 flex justify-center">{storeButton}</div>
          <p className="mt-4 text-xs text-gray-400">
            {tLanding("privacyLine")}
          </p>
        </aside>
      </article>
    </main>
  );
}
