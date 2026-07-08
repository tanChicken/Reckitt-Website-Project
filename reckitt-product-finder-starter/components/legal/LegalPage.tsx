"use client";

import Link from "next/link";
import ProgressHeader from "@/components/product-finder/ProgressHeader";
import Footer from "@/components/ui/Footer";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { tx, txList, type Localized, type LocalizedList } from "@/lib/i18n/localized";

// ── Bilingual legal document model ───────────────────────────────────────────
// Terms of Use and the Privacy Policy share the same layout, so they are both
// described as data (headings + blocks) and rendered here in the active
// language. Keeping the English and Chinese side-by-side per block makes the
// two versions impossible to drift apart.

export type LegalBlock =
  | { kind: "p"; text: Localized }
  | { kind: "callout"; text: Localized } // highlighted "Summary" style box
  | { kind: "ul"; items: LocalizedList } // bulleted list
  | { kind: "indent"; items: LocalizedList }; // indented, stacked sub-clauses

export interface LegalSection {
  heading?: Localized;
  blocks: LegalBlock[];
}

export interface LegalDoc {
  title: Localized;
  intro?: Localized; // optional italic subtitle under the title
  sections: LegalSection[];
  updated?: Localized; // small print at the end
}

function Block({ block }: { block: LegalBlock }) {
  const { locale } = useLanguage();

  switch (block.kind) {
    case "p":
      return <p>{tx(block.text, locale)}</p>;
    case "callout":
      return (
        <div className="rounded-xl bg-surface-container-low p-4 text-sm sm:text-base">
          {tx(block.text, locale)}
        </div>
      );
    case "ul":
      return (
        <ul className="list-inside list-disc space-y-2 pl-4">
          {txList(block.items, locale).map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    case "indent":
      return (
        <div className="space-y-3 pl-4">
          {txList(block.items, locale).map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </div>
      );
  }
}

export default function LegalPage({ doc }: { doc: LegalDoc }) {
  const { t, locale } = useLanguage();

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <ProgressHeader currentStep={0} />

      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-12 sm:px-8 lg:py-20 animate-fade-in">
        {/* Header */}
        <div className="mb-10 border-b border-border-subtle pb-6">
          <h1 className="font-display text-4xl font-bold tracking-tight text-deep-navy sm:text-5xl">
            {tx(doc.title, locale)}
          </h1>
          {doc.intro && (
            <p className="mt-3 text-lg italic text-on-surface-variant">
              {tx(doc.intro, locale)}
            </p>
          )}
        </div>

        {/* Sections */}
        <div className="space-y-10 text-base leading-relaxed text-on-surface-variant sm:text-lg">
          {doc.sections.map((section, i) => (
            <section key={i} className="space-y-4">
              {section.heading && (
                <h2 className="font-display text-2xl font-bold tracking-tight text-deep-navy">
                  {tx(section.heading, locale)}
                </h2>
              )}
              {section.blocks.map((block, j) => (
                <Block key={j} block={block} />
              ))}
            </section>
          ))}

          {doc.updated && (
            <p className="pt-8 text-sm text-secondary">{tx(doc.updated, locale)}</p>
          )}
        </div>

        {/* Back navigation */}
        <div className="mt-16 flex border-t border-border-subtle pt-10">
          <Link
            href="/"
            className="inline-flex min-h-[52px] items-center justify-center rounded-lg bg-reckitt-pink px-8 py-3 text-base font-bold text-white shadow-pink transition-all duration-200 hover:shadow-pinkLg hover:brightness-110 active:scale-95 sm:min-h-11"
          >
            {t("backToFinder")}
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
