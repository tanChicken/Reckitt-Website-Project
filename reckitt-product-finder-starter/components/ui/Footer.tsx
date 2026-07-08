"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import type { DictKey } from "@/lib/i18n/dictionary";

const footerLinks: {
  headingKey: DictKey;
  links: { labelKey: DictKey; href: string }[];
}[] = [
  {
    headingKey: "supportHeading",
    links: [
      { labelKey: "contactUs", href: "/contact" },
      { labelKey: "privacyPolicy", href: "/privacy" },
      { labelKey: "termsOfUse", href: "/terms" },
    ],
  },
];

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="mt-auto border-t border-white/10 bg-deep-navy">
      <div className="mx-auto max-w-container-max px-4 py-12 sm:px-8 lg:px-16">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex justify-center sm:justify-start">
            <Image
              src="/sosLogo.png"
              alt="Reckitt"
              width={96}
              height={30}
              className="object-contain brightness-0 invert"
            />
          </div>

          {footerLinks.map(({ headingKey, links }) => (
            <div key={headingKey} className="text-center sm:text-right">
              <h3 className="text-sm font-bold uppercase tracking-widest text-surface-variant">
                {t(headingKey)}
              </h3>
              <ul className="mt-4 flex flex-wrap justify-center gap-6 sm:justify-end">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-base text-secondary-fixed-dim transition-colors duration-150 hover:text-white"
                    >
                      {t(link.labelKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}