import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-3xl font-bold text-gray-900">{t("title")}</h1>
        <p className="mt-4 text-lg text-gray-600">{t("desc")}</p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50"
          >
            {t("back")}
          </Link>
        </div>
      </section>
    </main>
  );
}
