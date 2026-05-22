import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function PrivacyPage() {
  const t = useTranslations("privacy");

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="mb-8 text-3xl font-bold text-gray-900">{t("title")}</h1>

        <p className="mb-8 text-gray-600">{t("effectiveDate")}</p>

        <div className="space-y-6 text-gray-700 leading-8">
          <p>{t("intro")}</p>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              {t("s1Title")}
            </h2>
            <p>{t("s1Body")}</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              {t("s2Title")}
            </h2>
            <p>{t("s2Body")}</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              {t("s3Title")}
            </h2>
            <p>{t("s3Body1")}</p>
            <p>{t("s3Body2")}</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              {t("s4Title")}
            </h2>
            <p>{t("s4Intro")}</p>
            <ul className="list-disc pl-6">
              {(
                t.raw("s4List") as string[]
              ).map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              {t("s5Title")}
            </h2>
            <p>{t("s5Body")}</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              {t("s6Title")}
            </h2>
            <p>{t("s6Body")}</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              {t("s7Title")}
            </h2>
            <p>{t("s7Body")}</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              {t("s8Title")}
            </h2>
            <p>{t("s8Body")}</p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              {t("s9Title")}
            </h2>
            <p>
              {t.rich("s9Body", {
                contactLink: (chunks) => (
                  <Link href="/contact" className="underline hover:text-gray-900">
                    {chunks}
                  </Link>
                ),
              })}
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              {t("s10Title")}
            </h2>
            <p>{t("s10Body")}</p>
          </section>
        </div>
      </section>
    </main>
  );
}
