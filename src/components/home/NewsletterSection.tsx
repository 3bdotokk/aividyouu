"use client";

import { motion } from "framer-motion";

export default function NewsletterSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary-900/40 via-purple-900/40 to-pink-900/40 border border-white/10 p-8 sm:p-12 lg:p-16"
        >
          {/* Background effects */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Stay Updated with AI Tools
            </h2>
            <p className="text-dark-300 mb-8 text-sm sm:text-base">
              Get weekly updates on new AI tools, trending platforms, and exclusive tutorials delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 text-sm"
              />
              <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-purple-600 text-white font-medium text-sm hover:from-primary-500 hover:to-purple-500 transition-all shadow-lg shadow-primary-600/25 whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-dark-500 mt-4">
              Free forever. No spam. Unsubscribe anytime.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
