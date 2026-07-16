import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { pageMetadata } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return pageMetadata(locale, "help", "/help-center");
}

export default function HelpCenterPage() {
  const t = useTranslations("help");

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">{t("title")}</h1>
          <p className="mt-4 text-gray-600">{t("intro")}</p>
        </div>

        <div className="mt-12 space-y-4">
          <details className="group rounded-2xl border border-gray-200 bg-white">
            <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-5 text-left text-lg font-medium text-gray-900">
              <span>{t("q1")}</span>
              <span className="text-gray-500 transition-transform duration-200 group-open:rotate-180">
                ˅
              </span>
            </summary>
            <div className="px-6 pb-6 text-gray-600">
              <p>{t("a1")}</p>
            </div>
          </details>

          <details className="group rounded-2xl border border-gray-200 bg-white">
            <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-5 text-left text-lg font-medium text-gray-900">
              <span>{t("q2")}</span>
              <span className="text-gray-500 transition-transform duration-200 group-open:rotate-180">
                ˅
              </span>
            </summary>
            <div className="px-6 pb-6 text-gray-600">
              <p>{t("a2")}</p>
            </div>
          </details>

          <details className="group rounded-2xl border border-gray-200 bg-white">
            <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-5 text-left text-lg font-medium text-gray-900">
              <span>{t("q3")}</span>
              <span className="text-gray-500 transition-transform duration-200 group-open:rotate-180">
                ˅
              </span>
            </summary>
            <div className="space-y-4 px-6 pb-6 text-gray-600">
              <p>{t("a3intro")}</p>
              <div>
                <p className="font-semibold text-gray-900">{t("a3appleTitle")}</p>
                <p>{t("a3apple")}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">{t("a3googleTitle")}</p>
                <p>{t("a3google")}</p>
              </div>
            </div>
          </details>

          <details className="group rounded-2xl border border-gray-200 bg-white">
            <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-5 text-left text-lg font-medium text-gray-900">
              <span>{t("q4")}</span>
              <span className="text-gray-500 transition-transform duration-200 group-open:rotate-180">
                ˅
              </span>
            </summary>
            <div className="space-y-4 px-6 pb-6 text-gray-600">
              <p>{t("a4intro")}</p>
              <div>
                <p className="font-semibold text-gray-900">{t("a4appleTitle")}</p>
                <p>{t("a4apple")}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">{t("a4googleTitle")}</p>
                <p>{t("a4google")}</p>
              </div>
            </div>
          </details>

          <details className="group rounded-2xl border border-gray-200 bg-white">
            <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-5 text-left text-lg font-medium text-gray-900">
              <span>{t("q5")}</span>
              <span className="text-gray-500 transition-transform duration-200 group-open:rotate-180">
                ˅
              </span>
            </summary>
            <div className="space-y-4 px-6 pb-6 text-gray-600">
              <p>{t("a5intro")}</p>
              <p>
                {t.rich("a5detail", {
                  bold: (chunks) => (
                    <span className="font-medium text-gray-900">{chunks}</span>
                  ),
                })}
              </p>
            </div>
          </details>

          <details className="group rounded-2xl border border-gray-200 bg-white">
            <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-5 text-left text-lg font-medium text-gray-900">
              <span>{t("q6")}</span>
              <span className="text-gray-500 transition-transform duration-200 group-open:rotate-180">
                ˅
              </span>
            </summary>
            <div className="space-y-4 px-6 pb-6 text-gray-600">
              <p>{t("a6intro")}</p>
              <p>{t("a6detail")}</p>
            </div>
          </details>

          <details className="group rounded-2xl border border-gray-200 bg-white">
            <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-5 text-left text-lg font-medium text-gray-900">
              <span>{t("q7")}</span>
              <span className="text-gray-500 transition-transform duration-200 group-open:rotate-180">
                ˅
              </span>
            </summary>
            <div className="space-y-4 px-6 pb-6 text-gray-600">
              <p>
                {t.rich("a7", {
                  privacyLink: (chunks) => (
                    <Link href="/privacy" className="underline hover:text-gray-900">
                      {chunks}
                    </Link>
                  ),
                  termsLink: (chunks) => (
                    <Link href="/terms" className="underline hover:text-gray-900">
                      {chunks}
                    </Link>
                  ),
                })}
              </p>
            </div>
          </details>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600">{t("stillNeedHelp")}</p>
          <div className="mt-6">
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
