"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Supercharge Your Creativity?
          </h2>
          <p className="text-dark-400 max-w-xl mx-auto mb-8">
            Explore our curated collection of AI tools and find the perfect ones for your workflow.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/ai-image-tools/"
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary-600 to-purple-600 text-white font-medium text-sm hover:from-primary-500 hover:to-purple-500 transition-all shadow-lg shadow-primary-600/25 hover:shadow-primary-600/40 hover:-translate-y-0.5"
            >
              Explore AI Image Tools
            </Link>
            <Link
              href="/ai-video-tools/"
              className="px-8 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-medium text-sm hover:bg-white/10 hover:border-white/20 transition-all hover:-translate-y-0.5"
            >
              Explore AI Video Tools
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
