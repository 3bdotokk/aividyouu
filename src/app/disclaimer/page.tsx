import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer - Aividyou",
  description: "Read Aividyou's disclaimer regarding affiliate links, tool recommendations, and content accuracy.",
};

export default function DisclaimerPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-custom max-w-4xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8">Disclaimer</h1>

        <div className="glass rounded-2xl p-6 sm:p-10 space-y-6 text-dark-300 leading-relaxed">
          <p className="text-sm text-dark-400">Last updated: January 15, 2025</p>

          <div>
            <h2 className="text-lg font-semibold text-white mb-2">General Disclaimer</h2>
            <p>
              The information provided on Aividyou is for general informational purposes only. While we strive to keep the information up to date and accurate, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of any information, products, or services mentioned on the website.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-2">Affiliate Disclosure</h2>
            <p>
              Aividyou participates in various affiliate marketing programs. This means we may earn a commission when you click on links to external products and services and make a purchase or sign up. These commissions help us maintain and improve our platform at no additional cost to you.
            </p>
            <p className="mt-2">
              Our affiliate relationships never influence our reviews, ratings, or tool recommendations. We only recommend tools we believe provide genuine value to our users.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-2">Third-Party Tools</h2>
            <p>
              We do not own, operate, or control any of the AI tools listed on our platform. Each tool has its own terms of service, privacy policy, and pricing structure. We are not responsible for any changes, outages, or issues with third-party tools.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-2">No Professional Advice</h2>
            <p>
              Content on Aividyou does not constitute professional advice. Always conduct your own research and due diligence before purchasing or subscribing to any tool or service.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-2">Pricing & Availability</h2>
            <p>
              Tool pricing, features, and availability may change without notice. We do our best to keep information current, but we cannot guarantee real-time accuracy of pricing or feature details for external tools.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-2">Contact</h2>
            <p>
              If you have concerns about any information on our website, please contact us at hello@aividyou.com and we will review and update as needed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
