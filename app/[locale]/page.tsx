import Image from "next/image";
import { useTranslations } from "next-intl";
import { apps } from "@/lib/apps";
import { Link } from "@/i18n/navigation";
import { pageMetadata } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return pageMetadata(locale, "home", "");
}

export default function HomePage() {
  const t = useTranslations("home");
  const tApps = useTranslations("apps");
  const tCommon = useTranslations("common");

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="mb-14 text-center text-2xl font-semibold text-gray-900">
          {t("heading")}
        </h1>
        <div className="flex justify-center gap-8 flex-wrap">
          {apps.map((app) => {
            const appName = tApps(`${app.slug}.name`);
            const appTagline = tApps(`${app.slug}.tagline`);

            const card = (
              <div className="flex flex-col items-center gap-4 w-48">
                <Image
                  src={app.icon}
                  alt={appName}
                  width={140}
                  height={140}
                  className="rounded-2xl shadow-sm"
                />
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-900">
                    {appName}
                  </p>
                  <p className="mt-1 text-xs text-gray-500">{appTagline}</p>
                </div>
                {/* Cards that link to a landing page keep the buttons there
                    (nested anchors are invalid HTML). */}
                {!app.href && (app.appStoreUrl || app.googlePlayUrl) && (
                  <div className="flex flex-col gap-2 w-full">
                    {app.appStoreUrl && (
                      <a
                        href={app.appStoreUrl}
                        className="inline-flex justify-center rounded-lg border border-gray-300 px-4 py-2 text-xs font-medium text-gray-900 transition-colors hover:bg-gray-50"
                      >
                        {tCommon("appStore")}
                      </a>
                    )}
                    {app.googlePlayUrl && (
                      <a
                        href={app.googlePlayUrl}
                        className="inline-flex justify-center rounded-lg border border-gray-300 px-4 py-2 text-xs font-medium text-gray-900 transition-colors hover:bg-gray-50"
                      >
                        {tCommon("googlePlay")}
                      </a>
                    )}
                  </div>
                )}
              </div>
            );

            return app.href ? (
              app.href.startsWith("/") ? (
                <Link
                  key={app.slug}
                  href={app.href}
                  className="transition-transform duration-300 hover:scale-105 hover:z-10"
                >
                  {card}
                </Link>
              ) : (
                <a
                  key={app.slug}
                  href={app.href}
                  className="transition-transform duration-300 hover:scale-105 hover:z-10"
                >
                  {card}
                </a>
              )
            ) : (
              <div
                key={app.slug}
                className="transition-transform duration-300 hover:scale-105"
              >
                {card}
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-t border-gray-100 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold text-gray-900">
            {t("contactHeading")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            {t("contactDesc")}
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50"
            >
              {t("contactButton")}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
