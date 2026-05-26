import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-8">
      {/* Header Section */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-[#B99470] sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 font-medium text-[#A6B37D]">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      {/* Content Section */}
      <div className="rounded-3xl border border-[#A6B37D]/30 bg-[#F6F0D7] p-8 shadow-card sm:p-12">
        <div className="space-y-10 text-[#5d3f40]">
          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#B99470]">
              1. Introduction
            </h2>
            <p className="leading-relaxed">
              Welcome to the Reckitt Product Finder. We respect your privacy and
              are committed to protecting your personal data. This privacy
              policy will inform you as to how we look after your personal data
              when you visit our website.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#B99470]">
              2. The Data We Collect About You
            </h2>
            <p className="leading-relaxed">
              We may collect, use, store, and transfer different kinds of
              personal data about you. For this tool, we generally only process
              anonymized data to recommend products unless you explicitly
              contact us or opt-in to further communications.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#B99470]">
              3. How We Use Your Data
            </h2>
            <p className="leading-relaxed">
              We will only use your personal data when the law allows us to.
              Most commonly, we will use your personal data to provide the
              product recommendation services you requested, or to improve our
              internal systems.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#B99470]">
              4. Data Security
            </h2>
            <p className="leading-relaxed">
              We have put in place appropriate security measures to prevent your
              personal data from being accidentally lost, used, or accessed in
              an unauthorized way. We limit access to your personal data to
              those employees, agents, contractors, and other third parties who
              have a business need to know.
            </p>
          </section>
        </div>

        {/* Back Navigation */}
        <div className="mt-12 flex justify-center border-t border-[#A6B37D]/30 pt-10">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-[#A6B37D] px-8 py-4 text-sm font-bold text-[#F6F0D7] shadow-sm transition-all duration-200 hover:brightness-110 hover:shadow-md active:scale-95"
          >
            ← Back to Product Finder
          </Link>
        </div>
      </div>
    </main>
  );
}
