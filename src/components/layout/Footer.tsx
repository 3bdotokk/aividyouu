import Link from "next/link";

const footerLinks = {
  tools: [
    { label: "AI Video Tools", href: "/ai-video-tools/" },
    { label: "AI Image Tools", href: "/ai-image-tools/" },
    { label: "AI Productivity", href: "/ai-productivity-tools/" },
    { label: "Free Utilities", href: "/free-tools/" },
  ],
  resources: [
    { label: "Blog", href: "/blog/" },
    { label: "About Us", href: "/about/" },
    { label: "Contact", href: "/contact/" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy/" },
    { label: "Terms of Service", href: "/terms/" },
    { label: "Disclaimer", href: "/disclaimer/" },
  ],
};

const socialLinks = [
  { label: "Twitter", href: "https://twitter.com/aividyou", icon: "𝕏" },
  { label: "YouTube", href: "https://youtube.com/@aividyou", icon: "▶" },
  { label: "GitHub", href: "https://github.com/aividyou", icon: "⌘" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-dark-950">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                Ai
              </div>
              <span className="text-xl font-bold text-white">Aividyou</span>
            </Link>
            <p className="text-dark-400 text-sm leading-relaxed max-w-sm mb-6">
              Discover the best AI tools for video creation, image generation, productivity, and more. 
              Plus free browser-based utilities for everyday tasks.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-dark-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
                  aria-label={social.label}
                >
                  <span className="text-sm">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Tools</h3>
            <ul className="space-y-3">
              {footerLinks.tools.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-dark-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-dark-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-dark-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-dark-500">
            &copy; {new Date().getFullYear()} Aividyou. All rights reserved.
          </p>
          <p className="text-xs text-dark-600">
            Some links may be affiliate links. We may earn a commission at no extra cost to you.
          </p>
        </div>
      </div>
    </footer>
  );
}
