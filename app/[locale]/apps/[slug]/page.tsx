import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { apps } from "@/lib/apps";
import { listGuideMetas } from "@/lib/guides";
import { Link } from "@/i18n/navigation";
import { pageMetadata } from "@/lib/site";

// Generic, data-driven app landing page. An app gets one by having
// `screenshots` (and `href`) in lib/apps.ts plus `apps.<slug>.landing.*`
// and `meta.<slug>` messages in all three locales — no new code per app.

type Props = { params: Promise<{ locale: string; slug: string }> };

function landingApp(slug: string) {
  return apps.find((app) => app.slug === slug && app.screenshots?.length);
}

export function generateStaticParams() {
  return apps
    .filter((app) => app.screenshots?.length)
    .map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  if (!landingApp(slug)) return {};
  return pageMetadata(locale, slug, `/apps/${slug}`);
}

export default async function AppLandingPage({ params }: Props) {
  const { locale, slug } = await params;
  const app = landingApp(slug);
  if (!app) notFound();

  const tApp = await getTranslations(`apps.${slug}`);
  const t = await getTranslations(`apps.${slug}.landing`);
  const tGuides = await getTranslations("guides");
  const name = tApp("name");
  const guides = listGuideMetas(slug, locale);

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="mx-auto max-w-3xl px-6 pt-16 pb-10 text-center">
        <Image
          src={app.icon}
          alt={name}
          width={96}
          height={96}
          className="mx-auto rounded-2xl shadow-sm"
        />
        <p className="mt-4 text-sm font-semibold text-gray-500">{name}</p>
        <h1 className="mt-2 text-4xl font-bold text-gray-900">
          {t("headline")}
        </h1>
        <p className="mt-4 text-lg text-gray-600">{t("sub")}</p>
        <div className="mt-8 flex justify-center">
          {app.appStoreUrl ? (
            <a
              href={app.appStoreUrl}
              className="inline-flex rounded-lg bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-700"
            >
              {t("download")}
            </a>
          ) : (
            <span className="inline-flex rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium text-gray-500">
              {t("comingSoon")}
            </span>
          )}
        </div>
        <p className="mt-4 text-xs text-gray-400">{t("privacyLine")}</p>
      </section>

      {/* Screenshots */}
      <section className="mx-auto max-w-5xl px-6 py-8">
        <div className="flex justify-center gap-6 overflow-x-auto">
          {app.screenshots!.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt={`${t("screenshotAlt")} ${i + 1}`}
              width={280}
              height={608}
              className="w-56 shrink-0 rounded-2xl border border-gray-200 shadow-sm sm:w-64"
            />
          ))}
        </div>
      </section>

      {/* Description */}
      <section className="mx-auto max-w-3xl px-6 py-10">
        <div className="space-y-4 text-gray-700 leading-8">
          <p>{t("p1")}</p>
          <p>{t("p2")}</p>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="grid gap-6 sm:grid-cols-3">
          {(["f1", "f2", "f3"] as const).map((f) => (
            <div key={f} className="rounded-2xl border border-gray-200 p-6">
              <h2 className="text-base font-semibold text-gray-900">
                {t(`${f}Title`)}
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                {t(`${f}Desc`)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Guides (SEO content cluster) — only when guides exist for this app */}
      {guides.length > 0 && (
        <section className="border-t border-gray-100">
          <div className="mx-auto max-w-3xl px-6 py-14">
            <h2 className="text-xl font-semibold text-gray-900">
              {tGuides("sectionTitle")}
            </h2>
            <ul className="mt-6 space-y-4">
              {guides.map((guide) => (
                <li key={guide.slug}>
                  <Link
                    href={`/apps/${slug}/guides/${guide.slug}`}
                    className="group block rounded-xl border border-gray-200 p-5 transition-colors hover:bg-gray-50"
                  >
                    <p className="font-medium text-gray-900 group-hover:underline">
                      {guide.title}
                    </p>
                    <p className="mt-1 text-sm text-gray-600">
                      {guide.description}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Android interest → existing contact page (demand signal, no new infra) */}
      <section className="border-t border-gray-100">
        <div className="mx-auto max-w-3xl px-6 py-14 text-center">
          <h2 className="text-xl font-semibold text-gray-900">
            {t("androidTitle")}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-600">
            {t("androidDesc")}
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50"
            >
              {t("androidCta")}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
