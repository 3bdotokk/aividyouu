import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Aividyou",
  description: "Read Aividyou's privacy policy. Learn how we handle your data and protect your privacy.",
};

export default function PrivacyPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-custom max-w-4xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8">Privacy Policy</h1>

        <div className="glass rounded-2xl p-6 sm:p-10 space-y-6 text-dark-300 leading-relaxed">
          <p className="text-sm text-dark-400">Last updated: January 15, 2025</p>

          <div>
            <h2 className="text-lg font-semibold text-white mb-2">1. Introduction</h2>
            <p>
              Welcome to Aividyou (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-2">2. Information We Collect</h2>
            <p className="mb-2">We may collect the following types of information:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Usage data (pages visited, time spent, referral source)</li>
              <li>Device information (browser type, operating system, screen size)</li>
              <li>Information you voluntarily provide (contact form submissions, newsletter sign-ups)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-2">3. Free Utilities & Data Processing</h2>
            <p>
              All free utility tools on Aividyou process data entirely in your browser. No files, images, or text you input into our tools are ever uploaded to our servers or any third-party service. Your data never leaves your device.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-2">4. Cookies & Analytics</h2>
            <p>
              We use cookies and similar technologies to understand how visitors interact with our website. We may use Google Analytics to collect anonymous usage data. You can opt out of cookies through your browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-2">5. Advertising</h2>
            <p>
              We may display advertisements through Google AdSense and affiliate partnerships. These services may use cookies to display relevant advertisements based on your browsing history. We do not have access to the data collected by these advertising partners.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-2">6. Third-Party Links</h2>
            <p>
              Our website contains links to external AI tools and services. We are not responsible for the privacy practices of these third-party websites. We encourage you to review their privacy policies before providing any personal information.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-2">7. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-2">8. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal data. You may also opt out of marketing communications at any time. Contact us at hello@aividyou.com for any privacy-related requests.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-2">9. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated revision date.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-2">10. Contact Us</h2>
            <p>
              If you have questions about this privacy policy, please contact us at hello@aividyou.com.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
