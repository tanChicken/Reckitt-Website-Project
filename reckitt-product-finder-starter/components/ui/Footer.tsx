import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  {
    heading: "Support",
    links: [
      { label: "Contact us", href: "/contact" },
      { label: "Privacy policy", href: "/privacy" },
      { label: "Terms of use", href: "/terms" },
    ],
  },
];

export default function Footer() {
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

          {footerLinks.map(({ heading, links }) => (
            <div key={heading} className="text-center sm:text-right">
              <h3 className="text-sm font-bold uppercase tracking-widest text-surface-variant">
                {heading}
              </h3>
              <ul className="mt-4 flex flex-wrap justify-center gap-6 sm:justify-end">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-base text-secondary-fixed-dim transition-colors duration-150 hover:text-white"
                    >
                      {link.label}
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