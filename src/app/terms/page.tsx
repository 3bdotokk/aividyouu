import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Aividyou",
  description: "Read Aividyou's terms of service. Understand the terms and conditions for using our platform.",
};

export default function TermsPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-custom max-w-4xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8">Terms of Service</h1>

        <div className="glass rounded-2xl p-6 sm:p-10 space-y-6 text-dark-300 leading-relaxed">
          <p className="text-sm text-dark-400">Last updated: January 15, 2025</p>

          <div>
            <h2 className="text-lg font-semibold text-white mb-2">1. Acceptance of Terms</h2>
            <p>
              By accessing and using Aividyou (the &quot;Platform&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Platform.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-2">2. Description of Service</h2>
            <p>
              Aividyou is an AI tools discovery platform that provides curated listings of AI tools, free browser-based utilities, and educational content. We do not host or operate any of the AI tools listed on our platform.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-2">3. Use of Free Utilities</h2>
            <p>
              Our free browser-based utilities are provided &quot;as is&quot; without warranties. All processing occurs locally in your browser. We do not store, collect, or transmit any data you input into these tools.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-2">4. Third-Party Tools & Links</h2>
            <p>
              Aividyou provides links to third-party AI tools and services. We do not endorse, control, or assume responsibility for the content, privacy practices, or functionality of these external platforms. Use them at your own risk.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-2">5. Intellectual Property</h2>
            <p>
              All content on Aividyou, including text, design, logos, and code, is the property of Aividyou and protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our permission.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-2">6. Affiliate Disclosure</h2>
            <p>
              Some links on Aividyou are affiliate links. We may earn a commission when you sign up for or purchase a tool through our links, at no additional cost to you. This does not influence our reviews or recommendations.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-2">7. Limitation of Liability</h2>
            <p>
              Aividyou shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our Platform or any third-party tools linked from our Platform.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-2">8. Modifications</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of the Platform constitutes acceptance of modified terms.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-2">9. Contact</h2>
            <p>
              For questions regarding these Terms of Service, contact us at hello@aividyou.com.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
