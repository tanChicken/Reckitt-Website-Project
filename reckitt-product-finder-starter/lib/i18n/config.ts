// ── Locale configuration ─────────────────────────────────────────────────────
// The site is bilingual: English ("en") and Simplified Chinese ("zh").
// English is the default; the visitor's choice is remembered on their device.

export const LOCALES = ["en", "zh"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

/** localStorage key used to persist the visitor's language preference. */
export const LOCALE_STORAGE_KEY = "reckitt-locale";

/** Maps our locale codes to the value used on the <html lang> attribute. */
export const HTML_LANG: Record<Locale, string> = {
  en: "en",
  zh: "zh-CN",
};

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (LOCALES as readonly string[]).includes(value);
}
