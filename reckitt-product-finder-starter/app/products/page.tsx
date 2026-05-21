import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { productItems } from "@/data/productFinder";

export const metadata: Metadata = {
  title: "Product Library — Reckitt",
  description: "Explore Reckitt's clinical-grade health, hygiene, and home care product range.",
};

const categories = [
  { id: "all",              label: "All Products",       count: productItems.length                                          },
  { id: "sore-throat",      label: "Sore Throat",        count: productItems.filter((p) => p.needId === "sore-throat").length },
  { id: "pain-fever",       label: "Pain Relief",        count: productItems.filter((p) => p.needId === "pain-fever").length  },
  { id: "cough-mucus",      label: "Cold & Cough",       count: productItems.filter((p) => p.needId === "cough-mucus").length },
  { id: "heartburn",        label: "Digestive Health",   count: productItems.filter((p) => p.needId === "heartburn").length   },
  { id: "personal-hygiene", label: "Hygiene",            count: productItems.filter((p) => p.needId === "personal-hygiene").length },
  { id: "home-cleaning",    label: "Home Care",          count: productItems.filter((p) => p.needId === "home-cleaning").length },
];

const navLinks = [
  { label: "Symptom Finder", href: "/" },
  { label: "Products",       href: "/products" },
  { label: "Health Hub",     href: "#" },
  { label: "Support",        href: "#" },
];

const footerLinks = [
  "Medical Disclaimer",
  "Privacy Policy",
  "Terms of Service",
  "Contact Us",
];

export default function ProductsPage() {
  return (
    <>
      {/* ── Navigation ──────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-border-subtle bg-white/95 backdrop-blur-md">
        <nav className="mx-auto flex max-w-container-max items-center justify-between px-4 py-4 sm:px-8 lg:px-16">
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src="/reckitt-logo.png"
              alt="Reckitt"
              width={100}
              height={32}
              className="object-contain"
              priority
            />
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const active = link.href === "/products";
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={[
                    "rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200",
                    active
                      ? "text-reckitt-pink border-b-2 border-reckitt-pink pb-1"
                      : "text-secondary hover:bg-surface-container-low hover:text-deep-navy",
                  ].join(" ")}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <button
              aria-label="Search"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-subtle text-secondary transition-all hover:bg-surface-container-low"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="7" cy="7" r="4.5" /><line x1="10.5" y1="10.5" x2="14" y2="14" />
              </svg>
            </button>
            <button
              aria-label="Account"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-subtle text-secondary transition-all hover:bg-surface-container-low"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="8" cy="5" r="3" /><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-container-max px-4 py-12 sm:px-8 lg:px-16">
        {/* ── Page header ─────────────────────────────── */}
        <section className="mb-10">
          <h1 className="font-display text-4xl font-bold tracking-tight text-deep-navy sm:text-5xl">
            Product Library
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-7 text-secondary">
            Explore Reckitt's clinical-grade solutions for health, hygiene, and everyday home care.
          </p>
        </section>

        <div className="flex flex-col gap-8 md:flex-row">
          {/* ── Sidebar filters ───────────────────────── */}
          <aside className="w-full md:w-60 md:shrink-0">
            <div className="sticky top-28 rounded-xl border border-border-subtle bg-white p-5">
              <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-deep-navy">
                Categories
              </h3>
              <div className="flex flex-col gap-1">
                {categories.map((cat, i) => (
                  <button
                    key={cat.id}
                    className={[
                      "flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
                      i === 0
                        ? "bg-reckitt-pink text-white"
                        : "text-secondary hover:bg-surface-container-low hover:text-deep-navy",
                    ].join(" ")}
                  >
                    <span>{cat.label}</span>
                    <span className="text-xs opacity-70">{cat.count}</span>
                  </button>
                ))}
              </div>

              <div className="mt-5 border-t border-border-subtle pt-5">
                <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-deep-navy">
                  Format
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Tablet", "Liquid", "Spray", "Lozenge"].map((fmt) => (
                    <button
                      key={fmt}
                      className="rounded-full border border-border-subtle bg-surface-container-low px-3 py-1 text-xs font-semibold text-secondary transition-all hover:border-reckitt-pink hover:text-reckitt-pink"
                    >
                      {fmt}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* ── Product grid ──────────────────────────── */}
          <div className="flex-1">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {productItems.map((product) => (
                <div
                  key={product.id}
                  className="group flex flex-col overflow-hidden rounded-xl border border-border-subtle bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
                >
                  {/*
                   * ── MEDIA PLACEMENT ──────────────────────────────────
                   * Place your product image here.
                   * Recommended : studio white-background PNG
                   * Size        : 400 × 400 px minimum
                   * File        : /public/products/{product.id}.png
                   *               e.g. /public/products/strepsils.png
                   *
                   * To activate, replace the placeholder below with:
                   *   <img
                   *     src={`/products/${product.id}.png`}
                   *     alt={product.brand}
                   *     className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                   *   />
                   * ─────────────────────────────────────────────────────
                   */}
                  <div className="relative aspect-square bg-surface-gray p-8">
                    {/* Category chip */}
                    <span className="absolute left-4 top-4 rounded border border-border-subtle bg-white px-2 py-0.5 text-xs font-bold uppercase tracking-wider text-secondary">
                      {product.tags[0]}
                    </span>

                    {/* Image placeholder */}
                    <div className="flex h-full w-full flex-col items-center justify-center gap-3">
                      <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-white text-2xl font-bold text-secondary shadow-card">
                        {product.imageLabel}
                      </div>
                      <code className="text-xs text-secondary/40">
                        /public/products/{product.id}.png
                      </code>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col gap-3 p-5">
                    <div>
                      <h2 className="font-display text-lg font-bold text-deep-navy">
                        {product.brand}
                      </h2>
                      <p className="mt-1 text-sm leading-5 text-secondary line-clamp-2">
                        {product.description}
                      </p>
                    </div>

                    <div className="mt-auto flex items-center justify-between pt-3 border-t border-border-subtle">
                      <Link
                        href="#"
                        className="flex items-center gap-1 text-sm font-semibold text-reckitt-pink hover:underline"
                      >
                        View Details
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">
                          <line x1="3" y1="7" x2="11" y2="7" /><polyline points="8.5,4.5 11,7 8.5,9.5" />
                        </svg>
                      </Link>
                      <button
                        aria-label={`Add ${product.brand} to list`}
                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-reckitt-pink text-white shadow-pink transition-all hover:brightness-110 active:scale-95"
                      >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <line x1="8" y1="3" x2="8" y2="13" /><line x1="3" y1="8" x2="13" y2="8" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex items-center justify-center gap-2">
              <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-subtle text-secondary transition-all hover:bg-surface-container-low">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="Previous">
                  <polyline points="10,3 5,8 10,13" />
                </svg>
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-deep-navy text-sm font-bold text-white">
                1
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-subtle text-sm text-secondary transition-all hover:bg-surface-container-low">
                2
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-subtle text-secondary transition-all hover:bg-surface-container-low">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="Next">
                  <polyline points="6,3 11,8 6,13" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* ── Footer ──────────────────────────────────── */}
      <footer className="mt-16 bg-deep-navy">
        <div className="mx-auto max-w-container-max px-4 py-12 sm:px-8 lg:px-16">
          <div className="mb-8 flex flex-col items-start justify-between gap-6 border-b border-white/10 pb-8 md:flex-row md:items-center">
            <span className="font-display text-xl font-bold text-reckitt-pink">Reckitt</span>
            <div className="flex flex-wrap gap-6">
              {footerLinks.map((link) => (
                <Link
                  key={link}
                  href="#"
                  className="text-xs font-semibold text-surface-variant transition-colors hover:text-white hover:underline decoration-reckitt-pink"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
          <p className="text-xs text-surface-variant/70">
            © {new Date().getFullYear()} Reckitt Benckiser Group PLC. This platform is for informational purposes only and does not constitute medical advice.
          </p>
        </div>
      </footer>
    </>
  );
}
