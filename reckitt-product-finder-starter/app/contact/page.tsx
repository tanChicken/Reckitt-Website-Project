import ProgressHeader from "@/components/product-finder/ProgressHeader";
import Footer from "@/components/ui/Footer";

export default function ContactUsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-surface-container-low">
      {/* 1. Universal Header */}
      <ProgressHeader currentStep={0} />

      {/* 2. Blank Main Content Area */}
      {/* The 'flex-1' class forces this section to expand, pushing the footer to the bottom */}
      <main className="mx-auto w-full max-w-container-max flex-1 px-4 py-6 sm:px-8 lg:px-16 lg:py-12 animate-fade-in">
        
        {/* Future Contact Us content goes here */}

      </main>

      {/* 3. Universal Footer */}
      <Footer />
    </div>
  );
}