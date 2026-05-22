"use client";

import { useLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { Link, usePathname } from "@/i18n/navigation";

const labels: Record<string, string> = { en: "EN", pt: "PT", es: "ES" };

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-3 text-sm">
      {routing.locales.map((loc, i) => (
        <span key={loc} className="flex items-center gap-3">
          {i > 0 && (
            <span className="text-gray-300" aria-hidden>
              |
            </span>
          )}
          <Link
            href={pathname}
            locale={loc}
            className={
              locale === loc
                ? "font-semibold text-gray-900"
                : "text-gray-400 hover:text-gray-700"
            }
          >
            {labels[loc]}
          </Link>
        </span>
      ))}
    </div>
  );
}
