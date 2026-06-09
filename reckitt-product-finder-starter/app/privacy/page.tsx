import Link from "next/link";
import ProgressHeader from "@/components/product-finder/ProgressHeader";
import Footer from "@/components/ui/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <ProgressHeader currentStep={0} />

      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-12 sm:px-8 lg:py-20 animate-fade-in">
        {/* Header Section */}
        <div className="mb-10 border-b border-border-subtle pb-6">
          <h1 className="font-display text-4xl font-bold tracking-tight text-deep-navy sm:text-5xl">
            Privacy Policy
          </h1>
        </div>

        {/* Content Section */}
        <div className="space-y-10 text-base leading-relaxed text-on-surface-variant sm:text-lg">
          
          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold tracking-tight text-deep-navy">Introduction</h2>
            <p>We want to make sure you understand what personal data we may collect about you when you interact with http://soscare.sg/, how we use your personal data, and how we keep it safe.</p>
            <p>Personal data means data from which you can be identified directly (e.g. your name) or indirectly (e.g. your IP address).</p>
            <p>This privacy notice applies to:</p>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li>visitors to our website</li>
              <li>online customers of our products and services.</li>
              <li>individuals who contact, or are contacted by, us.</li>
            </ul>
            <p>We may change this privacy notice from time to time. This privacy notice was last updated in June 2026. We encourage you to review this privacy notice periodically. </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold tracking-tight text-deep-navy">How do we collect your personal data?</h2>
            <div className="rounded-xl bg-surface-container-low p-4 text-sm sm:text-base">
              Summary:  We collect your personal data in different ways, including:
              <ul className="list-inside list-disc space-y-1 pl-4 mt-2">
                <li>your direct or indirect interactions with us through our website</li>
                <li>other sources, including public sources, our trusted business partners, our advertising partners and data brokers.</li>
              </ul>
            </div>
            <p>We collect your personal data from different sources. We may combine information that we have about you from these different sources.</p>
            
            <p>We may collect your personal data directly from you, such as when you:</p>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li>visit or use our websites or mobile applications.</li>
              <li>buy one of our products online.</li>
              <li>enter a competition, promotion or complete a survey.</li>
              <li>provide it to us, or interact with us directly, e.g.</li>
              <li>when you get in touch for customer support, when you register on one of our digital platforms, sign up to our newsletters or when you indicated your profiling and targeting preferences.</li>
            </ul>

            <p className="mt-4">We may collect your personal data from other sources such as:</p>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li>Our trusted business partners – e.g. operators of loyalty programmes.</li>
              <li>Third party advertising partners.</li>
              <li>Data brokers.</li>
              <li>Public sources – e.g. open source, public domain registers.</li>
              <li>From third party websites that use our cookies.</li>
              <li>Social media platforms (such as Facebook, Instagram, Twitter, LinkedIn, YouTube, TikTok) where they provide us with advertising-related services.</li>
            </ul>

            <p className="mt-4">We also collect your personal data while monitoring:</p>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li>our technology tools and services, including our websites and email communications sent to and from us.</li>
              <li>other websites – this may include your public personal data, for example when we monitor digital conversations on public platforms to understand what people are saying about us or the consumer goods industry more generally.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold tracking-tight text-deep-navy">What personal data do we collect about you?</h2>
            <div className="rounded-xl bg-surface-container-low p-4 text-sm sm:text-base">
              Summary:  We collect a range of personal data that may identify you directly (e.g. your name, contact details, and social media information) or indirectly (e.g. your IP address or cookie ID).
              <br /><br />
              We also collect technical information about the devices you use to access our websites and information about your interaction with our websites.
            </div>
            
            <p>The personal data that we process includes:</p>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li>Basic information  – such as your name, age, date of birth, gender.</li>
              <li>Contact information  – such as your postal address, email address, phone number, social media username and profile.</li>
              <li>Order information  – where applicable, this may include your payment information (e.g. payment card details), your online purchase history, fulfilment and shipping related information, after-purchase related information (e.g. returns, refunds).</li>
              <li>Product use information  – information related to your use of our products including opinions, reviews and feedback.</li>
              <li>Marketing and Communications information  – such as your preference in receiving marketing from us and our third parties and your communication preferences, feedback and survey responses.</li>
              <li>Consumer insight information  – such as your perceptions, attitudes and interests.</li>
              <li>Health information  – such as health status and health conditions, medical or treatment history or health information inferred from information you have provided to us.</li>
              <li>Audio Visual information  – any photographs or video recordings in which you appear and call recordings.</li>
              <li>Technical information – such as:
                <ul className="list-inside list-[circle] space-y-1 pl-6 mt-2">
                  <li>information about the device you use to interact with us (including the type of browser and operating system and version you use, unique device identifier, hardware model and mobile network information).</li>
                  <li>information from your visits to this website, including access times (including time zone settings and location), pages viewed, URLs clicked on, your IP address and the pages you visited before and after navigating to this website.</li>
                  <li>when emails and messages sent by us were opened.</li>
                  <li>social media tracking pixels that allow platforms such as Facebook and Twitter to interact with this website and give feedback on your actions;</li>
                  <li>and</li>
                  <li>other identifiers such as Google ID to allow us to carry out different marketing campaigns.</li>
                </ul>
              </li>
            </ul>

            <p className="mt-4">Other information you provide to us – including via:</p>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li>email communications and social media direct messages.</li>
              <li>registration forms when you register for an online event.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold tracking-tight text-deep-navy">How do we use your personal data?</h2>
            <div className="rounded-xl bg-surface-container-low p-4 text-sm sm:text-base">
              Summary:  We use your personal data for a number of reasons, including to manage our relationship with you, understand your preferences better and to provide you with products and services.
              <br /><br />
              We also use your personal data to improve our internal processes, business and operations and to meet our compliance needs and legal obligations.
              <br /><br />
              For each of our purposes, we have included the legal basis we rely upon to process your personal data.
              <br /><br />
              See  ‘On what basis do we use your personal data?’  for more information about each of these legal bases.
            </div>
            
            <p>We use your personal data for the following purposes:</p>
            <ul className="list-inside list-disc space-y-4 pl-4">
              <li>Providing you with customer services  including:
                <ul className="list-inside list-[circle] space-y-1 pl-6 mt-2">
                  <li>notifying you about changes to our terms and policies, security alerts and administrative messages</li>
                  <li>responding to requests and enquiries you send us</li>
                </ul>
                <p className="pl-6 mt-2">Our legal basis for this processing activity is legitimate interest.</p>
                <ul className="list-inside list-[circle] space-y-1 pl-6 mt-2">
                  <li>managing any adverse events relating to our products</li>
                </ul>
                <p className="pl-6 mt-2">Our legal basis for this processing activity is consent if we collect special category data.</p>
              </li>

              <li>To learn about your likes, dislikes, and preferences to create profiles and personalise your experience :
                <ul className="list-inside list-[circle] space-y-1 pl-6 mt-2">
                  <li>we may use your personal data to learn and predict your preferences, interests or behaviour relating to our products and services.</li>
                  <li>We will ask for your consent to profile you where we are required to by applicable law.</li>
                  <li>we also use this information to personalise your online experience with our content and advertisements (e.g. through Custom Audiences and Lookalike Audiences), to find new audiences with similar interests and to develop internal marketing strategy and business intelligence.</li>
                </ul>
                <p className="pl-6 mt-2">Where required, our legal basis for this processing activity is consent.</p>
                <p className="pl-6 mt-2">Otherwise, our legal basis for this processing activity is legitimate interest.</p>
              </li>

              <li>Providing you with services , such as:
                <ul className="list-inside list-[circle] space-y-1 pl-6 mt-2">
                  <li>sending you information about your online product purchases (e.g. order confirmation), product safety information and recalls</li>
                  <li>registering and managing your account on our website</li>
                  <li>providing online shopping services including order fulfilment, product delivery and product returns or refunds</li>
                </ul>
                <p className="pl-6 mt-2">Our legal basis for this processing activity is performance of a contract.</p>
              </li>

              <li>Sending you marketing communications , e.g.:
                <ul className="list-inside list-[circle] space-y-1 pl-6 mt-2">
                  <li>about our latest offers, promotions (such as prize draws, contests, cash back initiatives and give-aways), events, polls or other information related to our products and services.</li>
                  <li>to personalise online marketing communications and digital advertising content, and show you our products and services that we think you may be interested in.</li>
                </ul>
                <p className="pl-6 mt-2">We will always obtain consent for marketing where required by law.</p>
                <p className="pl-6 mt-2">You can ask us to stop sending you marketing messages at any time by contacting us.</p>
                <ul className="list-inside list-[circle] space-y-1 pl-6 mt-2">
                  <li>Show you interest-based adverts</li>
                </ul>
                <p className="pl-6 mt-2">Our legal basis for this processing activity is consent.</p>
              </li>

              <li>To improve our business and operations , e.g.:
                <ul className="list-inside list-[circle] space-y-1 pl-6 mt-2">
                  <li>to send you surveys regarding your satisfaction with your online shopping experience and purchased products and/or services.</li>
                  <li>to monitor and analyse trends, usage and activities in connection with testing, developing, evaluating and improving our products and services.</li>
                  <li>to manage our network and information systems security, including this website.</li>
                  <li>for internal purposes such as auditing, data analysis and research to help us deliver and improve our digital platforms, content and services.</li>
                  <li>to improve our products and services and our communications to you.</li>
                </ul>
                <p className="pl-6 mt-2">Our legal basis for this processing activity is legitimate interest.</p>
              </li>

              <li>For compliance, security and legal reasons , e.g. to:
                <ul className="list-inside list-[circle] space-y-1 pl-6 mt-2">
                  <li>comply with applicable laws, rules, regulations, guidance, codes and industry and professional rules and regulations.</li>
                  <li>comply with legal investigations or to conduct internal investigations.</li>
                  <li>respond to demands or requests from regulators, governments, courts and law enforcement authorities, including any court or authority orders, subpoenas or warrants.</li>
                  <li>exercise or enforce our rights, and to protect or defend against claims in legal proceedings.</li>
                  <li>investigate and take action against illegal or harmful behaviour of users.</li>
                </ul>
                <p className="pl-6 mt-2">Our legal basis for this processing activity is legal obligation.</p>
              </li>
            </ul>
            <p>We may also anonymise your personal data so that it can no longer be associated with you, and you cannot be identified.</p>
            <p>We might do this, for example, to check what percentage of our users access a specific feature on our websites.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold tracking-tight text-deep-navy">On what basis do we use your personal data?</h2>
            <div className="rounded-xl bg-surface-container-low p-4 text-sm sm:text-base">
              Summary:  There are various reasons that we may rely on to use your personal data.
              <br /><br />
              Data privacy law sets out several different reasons which a company may rely on to collect and use your personal data.
              <br /><br />
              See  ‘How do we use your personal data?’  for information about the legal bases we rely upon to use your personal data for each of our purposes for processing.
            </div>
            
            <p>We use your personal data for the following reasons:</p>
            <ul className="list-inside list-disc space-y-4 pl-4">
              <li>To comply with legal and regulatory obligations.</li>
              <li>For legitimate business purposes . Using your personal data helps us to operate and improve our business and minimise any disruption to the services that we may offer to you.</li>
              <li>It also allows us to make our communications with you more relevant and personalised, and to make your experience of our products and services effective.</li>
              <li>Because you have given your consent . At times we may ask for your consent to allow us to use your personal data for one or more purposes.</li>
              <li>See  ‘Your rights’  for information about the rights that you have if we process your personal data based on your consent.</li>
              <li>To perform a contract with you : we may need to process your personal data to provide a product or service you request.</li>
              <li>For the  establishment, exercise or defence of legal claims  or proceedings.</li>
              <li>Because it is  necessary for reasons of substantial public interest , based on applicable laws.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold tracking-tight text-deep-navy">How long will we keep your personal data?</h2>
            <div className="rounded-xl bg-surface-container-low p-4 text-sm sm:text-base">
              Summary:  We will retain your personal data for as long as reasonably necessary to fulfil the purposes for which we collected it.
              <br /><br />
              You can contact us for more information on our retention policy.
            </div>
            <p>We will always keep your personal data for the period required by law, to provide you with access to services you have requested, and for as long as it is necessary and relevant for our purposes of processing (see  ‘How do we use your personal data?’ ).</p>
            <p>We will also keep your personal data where we need to do so in connection with legal action or an investigation involving us.</p>
            <p>When we no longer need to use your personal data, it is removed from our systems and records, or anonymised so that you can no longer be identified from it.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold tracking-tight text-deep-navy">With whom do we share your personal data?</h2>
            <div className="rounded-xl bg-surface-container-low p-4 text-sm sm:text-base">
              Summary:  We may share your personal data with third parties such as: service providers, professional advisors, business partners and public authorities.
            </div>
            <p>We may share your personal data with:</p>
            <ul className="list-inside list-disc space-y-4 pl-4">
              <li>the following trusted third parties:
                <ul className="list-inside list-[circle] space-y-2 pl-6 mt-2">
                  <li>selected suppliers, including:
                    <ul className="list-inside list-[square] space-y-1 pl-6 mt-1">
                      <li>companies which we partner with to undertake marketing campaigns.</li>
                      <li>marketing agencies, market research companies, social media platforms, data exchanges, data collaboration platforms and demand side platforms and advertising partners.</li>
                      <li>e-commerce fulfilment partners, online payment system providers and merchants who sell our products.</li>
                      <li>suppliers of technology and data services such as hosting and technical support.</li>
                      <li>analytics and search engine providers that assist us in the improvement and optimisation of our websites.</li>
                    </ul>
                  </li>
                  <li>third parties in connection with the sale or re-organisation of all or any part of our business.</li>
                  <li>our professional advisors and auditors.</li>
                </ul>
              </li>
              <li>courts, regulators, government agencies and law enforcement authorities.</li>
            </ul>
            <p>See  ‘Protecting your personal data'  for information on how we keep your personal data secure when sharing it with others.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold tracking-tight text-deep-navy">Protecting your personal data</h2>
            <div className="rounded-xl bg-surface-container-low p-4 text-sm sm:text-base">
              Summary:  We have a variety of security measures and procedures that are designed to keep your personal data safe.
              <br /><br />
              Whilst we cannot guarantee your personal data will be 100% secure, we take steps to ensure it is used and stored safely on our systems.
            </div>
            <p>When we use a third-party service provider, they are carefully selected and required to use appropriate measures to protect the confidentiality and security of personal data.</p>
            <p>We use a variety of security measures and technologies to help protect your personal data from unauthorised access, use, disclosure, alteration or destruction consistent with applicable data protection laws.</p>
            <p>The transmission to us of information via the internet or a phone network connection may not be completely secure, and any transmission is at your own risk.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold tracking-tight text-deep-navy">Your rights</h2>
            <div className="rounded-xl bg-surface-container-low p-4 text-sm sm:text-base">
              Summary : Depending on your location, data privacy laws provide you with various rights in relation to your personal data.
            </div>
            <p>Depending on your location, you may be entitled to:</p>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li>object to the processing of your personal data.</li>
              <li>opt out from processing of your personal data for direct marketing purposes.</li>
              <li>ask us about the processing of your personal data, including to be provided with a copy of your personal data.</li>
              <li>request the correction and/or deletion of your personal data.</li>
              <li>request the restriction of the processing of your personal data.</li>
              <li>withdraw your consent to the processing of your personal data (where we are processing your personal data based on your consent).</li>
              <li>request receipt or transmission to another organisation of the personal data that you have provided to us; and</li>
              <li>complain to your local supervisory authority if your privacy rights are violated, or if you have suffered because of the unlawful processing of your personal data.</li>
            </ul>
            <p>We may also need to take reasonable steps to verify your identity before responding to a request.</p>
            <p>If we are unable to verify you, we may be unable to respond to your requests.</p>
            <p>In some cases, we may be able to refuse your request on the basis of applicable law, but we will let you know the reasons why.</p>
            <p>Depending on applicable law, you may have the right to appeal our decision to deny your request.</p>
            <p>We will provide information about how to exercise that right in our response denying the request.</p>
            <p>You can contact us to exercise your rights.</p>
            <p>Where you are given the option to share your personal data with us, you can always choose not to do so.</p>
            <p>If you object to the processing of your personal data, or if you have provided your consent to processing and you later choose to withdraw it, we will respect that choice in accordance with our legal obligations.</p>
            <p>This could mean that we are unable to perform the actions necessary to achieve the purposes of processing described (see ‘ How do we use your personal data? ’) or that you are unable to make use of the services and products offered by us.</p>
            <p>After you have chosen to withdraw your consent we may be able to continue to process your personal data to the extent required or otherwise permitted by law.</p>
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