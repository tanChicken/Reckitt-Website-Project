import Link from "next/link";
import ProgressHeader from "@/components/product-finder/ProgressHeader";
import Footer from "@/components/ui/Footer";

export default function ContactUsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <ProgressHeader currentStep={0} />

      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-12 sm:px-8 lg:py-20 animate-fade-in">
        {/* Header Section */}
        <div className="mb-10 border-b border-border-subtle pb-6">
          <h1 className="font-display text-4xl font-bold tracking-tight text-deep-navy sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-3 text-lg italic text-on-surface-variant">
            Got a question or need support? We&apos;re here to help.
          </p>
        </div>

        {/* Content Section */}
        <div className="space-y-10 text-base leading-relaxed text-on-surface-variant sm:text-lg">

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold tracking-tight text-deep-navy">Get in Touch</h2>
            <p>You can reach out to our Consumer Care team via phone or email.</p>
            <div className="rounded-xl bg-surface-container-low p-5 text-sm sm:text-base space-y-3">
              <div className="flex items-start gap-3">
                <span className="font-semibold text-deep-navy min-w-[6rem]">Phone</span>
                <span>1800-811-0110</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-semibold text-deep-navy min-w-[6rem]">Email</span>
                <a
                  href="mailto:Consumercare_sg@reckitt.com"
                  className="text-reckitt-pink underline underline-offset-2 hover:brightness-110"
                >
                  Consumercare_sg@reckitt.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-semibold text-deep-navy min-w-[6rem]">Hours</span>
                <span>Monday – Friday, 9:00 AM – 6:00 PM, excluding public holidays.</span>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold tracking-tight text-deep-navy">Product Safety & Guidance</h2>
            <p>
              Before using any product, please read the product label and follow the directions for use
              carefully. If you are unsure whether a product is suitable for you or have questions
              regarding usage, feel free to contact us for guidance.
            </p>
            <p>
              If you experience any discomfort or an unexpected reaction after using a product, please
              discontinue use immediately. If symptoms persist, kindly seek advice from a healthcare
              professional.
            </p>
          </section>

        </div>

        {/* Back Navigation */}
        <div className="mt-16 flex border-t border-border-subtle pt-10">
          <Link
            href="/"
            className="inline-flex min-h-[52px] items-center justify-center rounded-lg bg-reckitt-pink px-8 py-3 text-base font-bold text-white shadow-pink transition-all duration-200 hover:shadow-pinkLg hover:brightness-110 active:scale-95 sm:min-h-11"
          >
            ← Back to Product Finder
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}