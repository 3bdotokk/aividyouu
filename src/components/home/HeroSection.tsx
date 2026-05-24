"use client";

import { motion } from "framer-motion";
import SearchBar from "@/components/ui/SearchBar";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl animate-float animate-delay-200" />
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-pink-600/10 rounded-full blur-3xl animate-float animate-delay-500" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-950/50 to-dark-950" />
      </div>

      <div className="container-custom py-20 sm:py-28 lg:py-36">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs font-medium mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse" />
            Discover 100+ AI Tools — Updated Daily
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
          >
            Create AI Images & Videos{" "}
            <span className="gradient-text">Instantly</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-dark-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Discover the best AI tools, video generators, image creators, and free online utilities — all in one place.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8"
          >
            <SearchBar />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/ai-video-tools/"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-purple-600 text-white font-medium text-sm hover:from-primary-500 hover:to-purple-500 transition-all shadow-lg shadow-primary-600/25 hover:shadow-primary-600/40 hover:-translate-y-0.5"
            >
              Explore AI Video Tools
            </Link>
            <Link
              href="/free-tools/"
              className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium text-sm hover:bg-white/10 hover:border-white/20 transition-all hover:-translate-y-0.5"
            >
              Try Free Utilities
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto"
          >
            <div>
              <p className="text-2xl font-bold text-white">100+</p>
              <p className="text-xs text-dark-400 mt-1">AI Tools</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">14</p>
              <p className="text-xs text-dark-400 mt-1">Free Utilities</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">50K+</p>
              <p className="text-xs text-dark-400 mt-1">Monthly Users</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
