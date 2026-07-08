"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { LOCALES, type Locale } from "@/lib/i18n/config";

const LABELS: Record<Locale, string> = {
  en: "EN",
  zh: "中文",
};

/**
 * Compact segmented control that switches the whole site between English and
 * Simplified Chinese. Lives in the header; the choice is remembered per device.
 */
export default function LanguageToggle() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t("switchLanguage")}
      className="inline-flex items-center rounded-full border border-border-subtle bg-white p-0.5 shadow-sm"
    >
      {LOCALES.map((code) => {
        const isActive = code === locale;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            aria-pressed={isActive}
            className={[
              "min-w-[2.5rem] rounded-full px-2.5 py-1 text-xs font-bold transition-colors duration-150 sm:text-sm",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-reckitt-pink focus-visible:ring-offset-1",
              isActive
                ? "bg-reckitt-pink text-white shadow-pink"
                : "text-secondary hover:text-deep-navy",
            ].join(" ")}
          >
            {LABELS[code]}
          </button>
        );
      })}
    </div>
  );
}
