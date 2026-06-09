import Link from "next/link";
import ProgressHeader from "@/components/product-finder/ProgressHeader";
import Footer from "@/components/ui/Footer";

export default function TermsOfUsePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <ProgressHeader currentStep={0} />

      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-12 sm:px-8 lg:py-20 animate-fade-in">
        {/* Header Section */}
        <div className="mb-10 border-b border-border-subtle pb-6">
          <h1 className="font-display text-4xl font-bold tracking-tight text-deep-navy sm:text-5xl">
            Terms of Use
          </h1>
        </div>

        {/* Content Section */}
        <div className="space-y-10 text-base leading-relaxed text-on-surface-variant sm:text-lg">
          
          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold tracking-tight text-deep-navy">Introduction</h2>
            <p>PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY BEFORE USING THE WEBSITE</p>
            <p>These terms and conditions (the “Terms”) are the terms on which this website (the “Website”) is made available to you (“you”/”your”).</p>
            <p>By accessing this Website you agree to be bound by these Terms.</p>
            <p>If you do not agree to these Terms, please do not use the Website.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold tracking-tight text-deep-navy">Questions or Complaints</h2>
            <p>If you have any questions, complaints or comments about this Website, or these Terms, then please use our Contact Us page to get in touch.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold tracking-tight text-deep-navy">Our copyright and other Intellectual Property Rights</h2>
            <p>2.1 Your use of the Website and its contents grants no rights to you in relation to any of the intellectual property rights or associated rights, including copyrights, trade marks, patents, design rights, trade names, database rights, and neighbouring rights, as well as rights to know-how (“ Intellectual Property Rights ”), related to the Website.</p>
            <p>All text, user interfaces, visual interfaces, graphics, illustrations, photographs, trade marks, logos, computer code and other related material (together, “ Content ”), including but not limited to the design, arrangement, structure, selection, coordination, expression and “look and feel” of the Content, contained on the Website are owned or controlled by us, or licensed to us by our third party licensors.</p>
            <p>All such rights are reserved by us or our licensors.</p>
            <p>2.2 Nothing in the Terms constitutes the transfer of any Intellectual Property Rights from us to you, or any third party.</p>
            <p>2.3 You may only copy, reproduce, republish, download, post, broadcast, record, transmit, commercially exploit, edit, communicate to the public or distribute in any way the Content, services, web pages or materials on the Website or the computer codes of elements comprising the Website for your own personal use.</p>
            <p>You may not use any automatic or manual device, program, algorithm or methodology, or any similar process on any portion of the Website or Content.</p>
            <p>Subject to the above, you may download in substantial excerpts of the Content to your device for the purpose of viewing it provided that no more than one copy of any information is made.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold tracking-tight text-deep-navy">Other Reckitt Brands and Websites</h2>
            <p>This Website is designed to provide information only, and if it provides information about healthcare products or licensed medicines, it is not intended to provide medical advice or instructions as to use, but only general information which should not be relied upon by any individual or for any specific purpose.</p>
            <p>Always consult your doctor or pharmacist for advice on treatment of individual circumstances and needs.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold tracking-tight text-deep-navy">Purchases</h2>
            <p>Nothing in the Website constitutes an offer to buy or sell products and/or services.</p>
            <p>All details, descriptions and prices of, and other information relating to, products and/or services appearing on the Website are of a general nature only.</p>
            <p>We do not promise that any product and/or service appearing on the Website is or will be available at the location and time you wish to purchase any particular product and/or service.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold tracking-tight text-deep-navy">Links from our Sites</h2>
            <p>We may provide links to other websites from time to time (via advertising or otherwise).</p>
            <p>These links are provided for your ease of reference and convenience only.</p>
            <p>We do not control these third party websites and are not responsible for their content.</p>
            <p>Our inclusion of links does not imply any endorsement of the material contained in those websites or any association with their operators.</p>
            <p>You acknowledge and agree that we will not be party to any transaction or contract with a third party that you may enter into, and we will not be liable to you in respect of any loss or damage which you may suffer by using those websites.</p>
            <p>You agree that you will not involve us in any dispute between you and the third party.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold tracking-tight text-deep-navy">Your use of the Website</h2>
            <p>6.1 You agree that in using the Website you will not:</p>
            <div className="space-y-3 pl-4">
              <p>6.1.1 use the Website in any way that may lead to the encouragement, procurement or carrying out of any activity which is criminal, fraudulent, unlawful, or prohibited by these Terms;</p>
              <p>6.1.2 use the Website for any purpose other than your personal use;</p>
              <p>6.1.3 advertise or promote third party or your own products or services including by way of the distribution of ‘spam’ email;</p>
              <p>6.1.4 transfer files that contain viruses, trojans or engage in any other activity harmful to the Website;</p>
              <p>6.1.5 link to the Website from a third party site without our prior written authorisation;</p>
              <p>6.1.6 access or attempt to gain unauthorised access to any user accounts linked or associated with the Website or to penetrate or attempt to penetrate the Website security measures;</p>
              <p>or</p>
              <p>6.1.7 interfere with any other person’s access to, use or enjoyment of, the Website.</p>
            </div>
            <p>6.2 You should use your own virus protection software for each and every access and use of the Website.</p>
            <p>6.3 You are also responsible for ensuring that all persons who access the Website through your internet connection are aware of these Terms, and that they comply with them.</p>
            <p>6.4 We reserve the right to suspend, restrict or terminate your access to this Website (or any part of it) at any time (and will give you prior notice if it is reasonable for us to do so) if we believe you have breached any of the restrictions in these Terms.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold tracking-tight text-deep-navy">User uploaded content</h2>
            <p>7.1 Content uploaded by you:</p>
            <p>7.1.1 By submitting reviews, information, text, photos, graphics or other content to us via the Website, you grant us a right to reasonably use these materials, including to edit, copy, reproduce, disclose, post and remove them from the Website.</p>
            <p>7.1.2 You promise in respect of any submission:</p>
            <div className="space-y-2 pl-4">
              <p>(a) that it complies with any applicable law and these Terms;</p>
              <p>(b) that is true, accurate and up to date in all respects and at all times (note that you can request that we update or correct your personal details at any time by contacting us via the below contact details);</p>
              <p>(c) that all necessary licences and/or approvals have been obtained and you have the right to make such contribution; and</p>
              <p>(d) that it is not confidential, and you will be liable to us and compensate us for any breach of that promise.</p>
            </div>
            <p>This means you will be responsible for any loss or damage we suffer as a result of your breach of that promise.</p>
            <p>7.1.3 We have the right to remove any submission you make to our Website.</p>
            <p>7.1.4 You are solely responsible for securing and backing up your submitted content.</p>
            <p>7.2 Content uploaded by other users:</p>
            <p>7.2.1 This Website may include information and materials uploaded by other users of the Website, including to bulletin boards and chat rooms (if any).</p>
            <p>This information and these materials have not been verified or approved by us.</p>
            <p>The views expressed by other users on our Website do not represent our views or values.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold tracking-tight text-deep-navy">Your legal obligations</h2>
            <p>8.1 You confirm that:</p>
            <p>8.1.1 you are over the age of majority in your jurisdiction, or you have the consent of your parent or legal guardian;</p>
            <p>and</p>
            <p>8.1.2 you will comply with the restrictions on your use of the Website as set out in these Terms.</p>
            <p>8.2 You agree to compensate us from any claim or damages (including any legal fees in relation to such claim or damages) made by a third party in respect of any matter in relation to or arising from your use of the Website, including any breach or suspected breach of these Terms, or your breach of any law or the rights of a third party.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold tracking-tight text-deep-navy">Reliance on information post</h2>
            <p>9.1 The content on our Website is provided for general information only.</p>
            <p>It is not intended to amount to advice on which you should rely.</p>
            <p>You should obtain professional or specialist advice before taking, or refraining from, any action on the basis of the content on our Website.</p>
            <p>9.2 Whilst we aim to ensure that the Website and its Content, are correct at the time when such Content is uploaded to the Website, it is subject to change and we make promises that the information on the Website or its Content is accurate, complete or up to date.</p>
            <p>9.3 All Content and services on the Website are provided on an ‘as is’ and ‘as available’ basis and made without any promises or guarantees of any kind.</p>
            <p>9.4 We are under no obligation to update any information contained on the Website.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold tracking-tight text-deep-navy">We may suspend or withdraw our website</h2>
            <p>10.1 Whilst we aim to ensure that the Website, its Content, any features offered through the Website and any information contained on it, are error-free, uninterrupted and free from bugs and viruses, due to the nature of the internet, we cannot guarantee this.</p>
            <p>10.2 We do not guarantee nor promise that the Website, or any Content on it, will always be available or be uninterrupted and in a fully operating condition.</p>
            <p>We may suspend or withdraw or restrict the availability of all or any part of our Website for business and operational reasons.</p>
            <p>10.3 Access to the Website may be suspended temporarily and without notice in the case of system failure, maintenance or repair or for reasons reasonably beyond our control.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold tracking-tight text-deep-navy">Our liability if you are a consumer</h2>
            <p>11.1 We only provide our Website for domestic and private use.</p>
            <p>You agree not to use our Website for any commercial or business purposes, and we have no liability to you for any loss of profit, loss of business, business interruption, or loss of business opportunity.</p>
            <p>11.2 If defective digital content that we have supplied damages a device or digital content belonging to you and this is caused by our failure to use reasonable care and skill, we will either repair the damage or pay you compensation.</p>
            <p>However, we will not be liable for damage that you could have avoided by following our advice to apply an update offered to you free of charge or for damage that was caused by you failing to correctly follow installation instructions or to have in place the minimum system requirements advised by us.</p>
            <p>11.3 We shall have no liability to you for any breach of these Terms caused by any event or circumstance beyond our reasonable control including, but not limited to, strikes, lock-outs or other industrial disputes;</p>
            <p>breakdown of systems or network access; or flood, fire, explosion or accident.</p>
            <p>11.4 We do not exclude or limit in any way our liability to you where it would be unlawful to do so (for example liability for death or personal injury caused by our negligence or for fraud or fraudulent misrepresentation).</p>
            <p>Nothing in these Terms will affect your legal rights.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold tracking-tight text-deep-navy">Our liability if you are a business</h2>
            <p>12.1 We exclude all liability (including liability of our officers, directors, managers, members, shareholders, employees, agents or advisors), whether arising in contract, tort, breach of statutory duty or otherwise, arising out of or in connection with access to or use of the Website, even if foreseeable, including but not limited to:</p>
            <div className="space-y-3 pl-4">
              <p>12.1.1 losses arising from inaccuracies in any information or material within or relating to the Website;</p>
              <p>12.1.2 losses not caused by any breach on our part;</p>
              <p>12.1.3 losses arising from your use of, or reliance on, the Website;</p>
              <p>12.1.4 losses arising from the unavailability of the Website for whatsoever reason;</p>
              <p>12.1.5 losses arising from any representation or statement made on the Website;</p>
              <p>12.1.6 losses resulting from technical faults with the Website or technologically harmful material;</p>
              <p>12.1.7 any business loss (including loss of profits, business, revenue, contracts, anticipated savings, data, goodwill, reputation, wasted expenditure, business interruption or loss of business opportunity);</p>
              <p>and</p>
              <p>12.1.8 any indirect or consequential losses or losses that were not foreseeable to both you and us when you commencing accessing and using the Website.</p>
            </div>
            <p>12.2 To the extent possible under applicable law, we exclude all implied conditions, warranties, representations or other terms that may apply to our Website or any content on it.</p>
            <p>12.3 You will indemnify and compensate us and our officers, directors, managers, members, employees, agents and advisors for any losses, costs, liabilities and expenses (including reasonable attorneys’ fees) relating to or arising out of:</p>
            <div className="space-y-3 pl-4">
              <p>12.3.1 your use of the Website (and related use of products and services);</p>
              <p>12.3.2 your breach of these Terms;</p>
              <p>12.3.3 your violation of any law or the rights of any third party; and/or</p>
              <p>12.3.4 our use of your information.</p>
            </div>
            <p>12.4 Notwithstanding anything to the contrary, we do not exclude or limit in any way our liability to you where it would be unlawful to do so (for example liability for death or personal injury caused by our negligence or for fraud or fraudulent misrepresentation).</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold tracking-tight text-deep-navy">How we may use your personal information</h2>
            <p>13.1 We are committed to protecting your privacy and only use any personal data that we collect from you, or that you provide to us, in accordance with applicable data protection laws and regulations.</p>
            <p>13.2 Please read our Privacy Notice  for more information on how we use personal data and related matters.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold tracking-tight text-deep-navy">Changes to these Terms and Conditions</h2>
            <p>We are constantly looking for ways to improve this Website.</p>
            <p>We therefore reserve the right to amend these Terms at any time.</p>
            <p>All such changes will take effect once they have been posted on the Website.</p>
            <p>Please ensure that you revisit and review these Terms regularly as you will be deemed to have accepted, and will be bound by, such changes if you continue to use the Website after the posting of any changes to these Terms.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold tracking-tight text-deep-navy">Other terms that may apply to you</h2>
            <p>15.1 The following additional policies also apply to your use of our Website:</p>
            <p>15.1.1 Our Privacy Notice  which explains how your personal information is used by us and what your rights are.</p>
            <p>15.2 Additional terms and conditions will apply to purchases of goods or services, and to specific portions or features of the Website, including contests, promotions or other similar features.</p>
            <p>We will direct you to the additional terms and conditions at the time that you interact with us and/or our brands in relation to the relevant services.</p>
            <p>Please read the applicable terms and conditions carefully. If there is a conflict between these Terms and the terms that apply to a service offered through the Website, the terms that apply to that service shall take priority to the extent of such conflict.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold tracking-tight text-deep-navy">General</h2>
            <p>16.1 If you are a business, these Terms contain the entire agreement between you and us with respect to the use of the Website.</p>
            <p>No representation, statement or inducement (whether oral or written) not contained in these Terms (as updated from time to time) shall be binding on either you or us.</p>
            <p>16.2 If any provision of these Terms is found by a court or a regulator to be illegal, void, invalid or unenforceable the other provisions shall continue to apply and such provision shall be replaced by another provision which, being valid in all respects, will have an effect as close as possible to that of the replaced provision.</p>
            <p>16.3 These Terms are not intended to give rights to anyone except you and us.</p>
            <p>16.4 If we do not insist immediately that you do anything you are required to do under these Terms, or if we delay in taking steps against you in respect of your breaching these Terms, that will not mean that you do not have to do those things and it will not prevent us from taking steps against you at a later date.</p>
          </section>

          {/* Small text at the very end */}
          <p className="pt-8 text-sm text-secondary">
            These Terms were last updated with effect from June 2026.
          </p>

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