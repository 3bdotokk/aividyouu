"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-16 sm:py-20">
      <div className="container-custom max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-dark-400 mb-8">
            Have a question, tool suggestion, or partnership inquiry? Fill out the form below and we&apos;ll get back to you.
          </p>

          <div className="glass rounded-2xl p-6 sm:p-8">
            {submitted ? (
              <div className="text-center py-10">
                <div className="text-4xl mb-4">✓</div>
                <h2 className="text-xl font-semibold text-white mb-2">Message Sent!</h2>
                <p className="text-dark-400 text-sm">
                  Thank you for reaching out. We&apos;ll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-primary-400 text-sm hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-dark-300 mb-1">Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-300 mb-1">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-300 mb-1">Subject</label>
                  <select className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-dark-300 focus:outline-none focus:ring-2 focus:ring-primary-500/50 text-sm">
                    <option value="general">General Inquiry</option>
                    <option value="tool-suggestion">Tool Suggestion</option>
                    <option value="partnership">Partnership</option>
                    <option value="bug">Bug Report</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-300 mb-1">Message</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us what's on your mind..."
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 resize-none text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-purple-600 text-white font-medium text-sm hover:from-primary-500 hover:to-purple-500 transition-all shadow-lg shadow-primary-600/25"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="glass rounded-xl p-4 text-center">
              <p className="text-lg mb-1">📧</p>
              <p className="text-xs text-dark-400">hello@aividyou.com</p>
            </div>
            <div className="glass rounded-xl p-4 text-center">
              <p className="text-lg mb-1">𝕏</p>
              <p className="text-xs text-dark-400">@aividyou</p>
            </div>
            <div className="glass rounded-xl p-4 text-center">
              <p className="text-lg mb-1">📍</p>
              <p className="text-xs text-dark-400">Remote, Worldwide</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
