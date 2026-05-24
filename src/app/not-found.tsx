"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-20 sm:py-32">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-8xl sm:text-9xl font-bold gradient-text mb-4">404</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Page Not Found
          </h1>
          <p className="text-dark-400 max-w-md mx-auto mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-purple-600 text-white font-medium text-sm hover:from-primary-500 hover:to-purple-500 transition-all shadow-lg shadow-primary-600/25"
            >
              Go Home
            </Link>
            <Link
              href="/free-tools/"
              className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium text-sm hover:bg-white/10 transition-all"
            >
              Try Free Tools
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
