"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutClient() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            About <span className="gradient-text">Aividyou</span>
          </h1>

          <div className="glass rounded-2xl p-6 sm:p-10 space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-white mb-3">Our Mission</h2>
              <p className="text-dark-300 leading-relaxed">
                Aividyou is a comprehensive AI tools discovery platform built to help creators, professionals, 
                and enthusiasts navigate the rapidly evolving landscape of artificial intelligence. We curate, 
                review, and organize the best AI tools so you can find exactly what you need without hours of research.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">What We Do</h2>
              <ul className="space-y-3 text-dark-300">
                <li className="flex items-start gap-3">
                  <span className="text-primary-400 mt-1">✦</span>
                  <span><strong className="text-white">Curate AI Tools</strong> — We research, test, and organize 100+ AI tools across video, image, productivity, and more.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-400 mt-1">✦</span>
                  <span><strong className="text-white">Provide Free Utilities</strong> — Our browser-based tools work instantly with no sign-ups or downloads required.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-400 mt-1">✦</span>
                  <span><strong className="text-white">Create Educational Content</strong> — Our blog features guides, tutorials, and insights for creators at every level.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-400 mt-1">✦</span>
                  <span><strong className="text-white">Stay Updated</strong> — We continuously monitor the AI space to bring you the latest and best tools available.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">Our Values</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <h3 className="font-medium text-white text-sm mb-1">Transparency</h3>
                  <p className="text-xs text-dark-400">We clearly mark affiliate links and never let partnerships affect our recommendations.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <h3 className="font-medium text-white text-sm mb-1">Quality First</h3>
                  <p className="text-xs text-dark-400">Every tool we list is vetted for quality, reliability, and value to our users.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <h3 className="font-medium text-white text-sm mb-1">Privacy Focused</h3>
                  <p className="text-xs text-dark-400">Our free utilities process everything locally. Your data never leaves your device.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <h3 className="font-medium text-white text-sm mb-1">Community Driven</h3>
                  <p className="text-xs text-dark-400">We listen to feedback and build features our community actually needs.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">Contact Us</h2>
              <p className="text-dark-300 leading-relaxed">
                Have questions, suggestions, or want to partner with us? We&apos;d love to hear from you.
              </p>
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary-600 to-purple-600 text-white font-medium text-sm hover:from-primary-500 hover:to-purple-500 transition-all"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
