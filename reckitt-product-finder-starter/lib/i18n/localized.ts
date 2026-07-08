import type { Locale } from "./config";

// ── Bilingual value helpers ──────────────────────────────────────────────────
// Product data can hold either a plain English string (when no translation is
// needed) or a { en, zh } object. These helpers pick the right language at
// render time and always fall back to English so nothing ever renders blank.

/** A single piece of text: English-only string, or a translated pair. */
export type Localized = string | { en: string; zh: string };

/** A list of text: English-only array, or a translated pair of arrays. */
export type LocalizedList = string[] | { en: string[]; zh: string[] };

/** A field that may be a single line or a list, in either language. */
export type LocalizedTextOrList = Localized | LocalizedList;

function isLangPair(value: unknown): value is Record<Locale, unknown> {
  return (
    typeof value === "object" &&
    value !== null &&
    !Array.isArray(value) &&
    "en" in (value as Record<string, unknown>)
  );
}

/** Resolve a Localized value to a plain string for the given locale. */
export function tx(value: Localized | undefined | null, locale: Locale): string {
  if (value == null) return "";
  if (typeof value === "string") return value;
  return value[locale] ?? value.en ?? "";
}

/** Resolve a LocalizedList value to a plain string array for the given locale. */
export function txList(
  value: LocalizedList | undefined | null,
  locale: Locale,
): string[] {
  if (value == null) return [];
  if (Array.isArray(value)) return value;
  return value[locale] ?? value.en ?? [];
}

/**
 * Normalise any text-or-list field (single line or list, plain or bilingual)
 * into an array of display lines for the given locale. Keeps the rendering
 * components simple: they always receive a string[].
 */
export function txLines(
  value: LocalizedTextOrList | undefined | null,
  locale: Locale,
): string[] {
  if (value == null) return [];
  if (typeof value === "string") return [value];
  if (Array.isArray(value)) return value;
  const picked = isLangPair(value) ? value[locale] ?? value.en : undefined;
  if (picked == null) return [];
  return Array.isArray(picked) ? (picked as string[]) : [picked as string];
}
