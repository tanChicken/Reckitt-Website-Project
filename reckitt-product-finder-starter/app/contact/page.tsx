"use client";

import Link from "next/link";
import ProgressHeader from "@/components/product-finder/ProgressHeader";
import Footer from "@/components/ui/Footer";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { tx, type Localized } from "@/lib/i18n/localized";

// Contact copy, bilingual. English matches the original page; Chinese is from
// the approved translation.
const copy = {
  title: { en: "Contact Us", zh: "联系我们" },
  intro: {
    en: "Got a question or need support? We're here to help.",
    zh: "有疑问或需要帮助？我们随时为您提供支持。",
  },
  getInTouch: { en: "Get in Touch", zh: "联系方式" },
  getInTouchBody: {
    en: "You can reach out to our Consumer Care team via phone or email.",
    zh: "您可以通过电话或电子邮件联系我们的消费者关怀团队。",
  },
  phone: { en: "Phone", zh: "电话" },
  email: { en: "Email", zh: "邮箱" },
  hours: { en: "Hours", zh: "服务时间" },
  hoursValue: {
    en: "Monday – Friday, 9:00 AM – 6:00 PM, excluding public holidays.",
    zh: "周一至周五，上午9:00 – 下午6:00（公共假期除外）。",
  },
  safetyHeading: { en: "Product Safety & Guidance", zh: "产品安全与使用指导" },
  safetyBody1: {
    en: "Before using any product, please read the product label and follow the directions for use carefully. If you are unsure whether a product is suitable for you or have questions regarding usage, feel free to contact us for guidance.",
    zh: "在使用任何产品之前，请仔细阅读产品标签并遵照使用说明操作。如您不确定某产品是否适合您使用，或对使用方法有任何疑问，欢迎随时联系我们寻求指导。",
  },
  safetyBody2: {
    en: "If you experience any discomfort or an unexpected reaction after using a product, please discontinue use immediately. If symptoms persist, kindly seek advice from a healthcare professional.",
    zh: "如在使用产品后出现任何不适或意外反应，请立即停止使用。如症状持续，请及时咨询医疗专业人员。",
  },
} satisfies Record<string, Localized>;

export default function ContactUsPage() {
  const { t, locale } = useLanguage();

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <ProgressHeader currentStep={0} />

      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-12 sm:px-8 lg:py-20 animate-fade-in">
        {/* Header Section */}
        <div className="mb-10 border-b border-border-subtle pb-6">
          <h1 className="font-display text-4xl font-bold tracking-tight text-deep-navy sm:text-5xl">
            {tx(copy.title, locale)}
          </h1>
          <p className="mt-3 text-lg italic text-on-surface-variant">
            {tx(copy.intro, locale)}
          </p>
        </div>

        {/* Content Section */}
        <div className="space-y-10 text-base leading-relaxed text-on-surface-variant sm:text-lg">
          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold tracking-tight text-deep-navy">
              {tx(copy.getInTouch, locale)}
            </h2>
            <p>{tx(copy.getInTouchBody, locale)}</p>
            <div className="rounded-xl bg-surface-container-low p-5 text-sm sm:text-base space-y-3">
              <div className="flex items-start gap-3">
                <span className="font-semibold text-deep-navy min-w-[6rem]">
                  {tx(copy.phone, locale)}
                </span>
                <span>1800-811-0110</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-semibold text-deep-navy min-w-[6rem]">
                  {tx(copy.email, locale)}
                </span>
                <a
                  href="mailto:Consumercare_sg@reckitt.com"
                  className="text-reckitt-pink underline underline-offset-2 hover:brightness-110"
                >
                  Consumercare_sg@reckitt.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-semibold text-deep-navy min-w-[6rem]">
                  {tx(copy.hours, locale)}
                </span>
                <span>{tx(copy.hoursValue, locale)}</span>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold tracking-tight text-deep-navy">
              {tx(copy.safetyHeading, locale)}
            </h2>
            <p>{tx(copy.safetyBody1, locale)}</p>
            <p>{tx(copy.safetyBody2, locale)}</p>
          </section>
        </div>

        {/* Back Navigation */}
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
