import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Analytics } from "@vercel/analytics/next";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useTranslations } from "next-intl";
import { SITE_URL } from "@/lib/site";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: t("site.title"),
      template: "%s · Mais1App",
    },
    description: t("site.description"),
  };
}

function FooterLinks() {
  const t = useTranslations("nav");
  return (
    <footer className="border-t border-gray-200">
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-gray-600 flex flex-col items-center gap-4">
        <div className="flex gap-6 flex-wrap justify-center">
          <Link href="/privacy" className="hover:text-gray-900">
            {t("privacy")}
          </Link>
          <Link href="/terms" className="hover:text-gray-900">
            {t("terms")}
          </Link>
          <Link href="/help-center" className="hover:text-gray-900">
            {t("help")}
          </Link>
          <Link href="/contact" className="hover:text-gray-900">
            {t("contact")}
          </Link>
        </div>
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Mais1App
        </p>
      </div>
    </footer>
  );
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="bg-white text-gray-900">
        <NextIntlClientProvider messages={messages}>
          <div className="min-h-screen flex flex-col">
            <header className="border-b border-gray-200">
              <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
                <Link href="/">
                  <Image
                    src="/images/mais1app_logo.png"
                    alt="Mais1App"
                    width={120}
                    height={32}
                    className="h-8 w-auto"
                  />
                </Link>
                <LanguageSwitcher />
              </div>
            </header>

            <main className="flex-1">{children}</main>

            <FooterLinks />
          </div>
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
