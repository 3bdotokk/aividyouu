"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Tool } from "@/types";
import AdPlaceholder from "@/components/ui/AdPlaceholder";
import { tools } from "@/data/tools";
import ToolCard from "@/components/ui/ToolCard";

interface ToolDetailClientProps {
  tool: Tool;
}

export default function ToolDetailClient({ tool }: ToolDetailClientProps) {
  const relatedTools = tools
    .filter((t) => t.category === tool.category && t.id !== tool.id)
    .slice(0, 4);

  return (
    <>
      {/* Header */}
      <section className="py-12 sm:py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-dark-400 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href={`/${tool.category === "ai-video" ? "ai-video-tools" : tool.category === "ai-image" ? "ai-image-tools" : "ai-productivity-tools"}/`} className="hover:text-white transition-colors">
                {tool.category === "ai-video" ? "AI Video Tools" : tool.category === "ai-image" ? "AI Image Tools" : "AI Productivity"}
              </Link>
              <span>/</span>
              <span className="text-white">{tool.name}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="glass rounded-2xl p-6 sm:p-8">
                  {/* Tool Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <img
                      src={tool.logo}
                      alt={tool.name}
                      className="w-16 h-16 rounded-2xl"
                    />
                    <div className="flex-1">
                      <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">{tool.name}</h1>
                      <p className="text-dark-400 text-sm">{tool.subcategory}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400">★</span>
                      <span className="text-white font-semibold">{tool.rating}</span>
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className={`px-3 py-1 rounded-lg text-xs font-medium border ${
                      tool.pricing === "free" ? "bg-green-500/10 text-green-400 border-green-500/20" :
                      tool.pricing === "freemium" ? "bg-blue-500/10 text-blue-400 border-blue-500/20" :
                      "bg-orange-500/10 text-orange-400 border-orange-500/20"
                    }`}>
                      {tool.pricing.charAt(0).toUpperCase() + tool.pricing.slice(1)}
                    </span>
                    <span className={`px-3 py-1 rounded-lg text-xs font-medium border ${
                      tool.loginRequired
                        ? "bg-dark-700/50 text-dark-300 border-dark-600"
                        : "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                    }`}>
                      {tool.loginRequired ? "Login Required" : "No Login Needed"}
                    </span>
                  </div>

                  {/* Description */}
                  <div className="mb-8">
                    <h2 className="text-lg font-semibold text-white mb-3">About {tool.name}</h2>
                    <p className="text-dark-300 leading-relaxed">{tool.longDescription || tool.description}</p>
                  </div>

                  {/* Features */}
                  {tool.features && (
                    <div className="mb-8">
                      <h2 className="text-lg font-semibold text-white mb-3">Key Features</h2>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {tool.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-dark-300 text-sm">
                            <svg className="w-4 h-4 text-primary-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tags */}
                  <div className="mb-8">
                    <h2 className="text-lg font-semibold text-white mb-3">Tags</h2>
                    <div className="flex flex-wrap gap-2">
                      {tool.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 rounded-lg text-xs bg-white/5 border border-white/10 text-dark-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-purple-600 text-white font-medium text-sm hover:from-primary-500 hover:to-purple-500 transition-all shadow-lg shadow-primary-600/25"
                  >
                    Visit {tool.name}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                <AdPlaceholder format="inline" className="mt-6" />
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <AdPlaceholder format="sidebar" className="mx-auto" />

                {/* Quick Info */}
                <div className="glass rounded-2xl p-5">
                  <h3 className="font-semibold text-white mb-4 text-sm">Quick Info</h3>
                  <dl className="space-y-3">
                    <div className="flex justify-between">
                      <dt className="text-dark-400 text-sm">Category</dt>
                      <dd className="text-white text-sm">{tool.subcategory}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-dark-400 text-sm">Pricing</dt>
                      <dd className="text-white text-sm capitalize">{tool.pricing}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-dark-400 text-sm">Login</dt>
                      <dd className="text-white text-sm">{tool.loginRequired ? "Required" : "Not Required"}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-dark-400 text-sm">Rating</dt>
                      <dd className="text-white text-sm">{tool.rating}/5</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Tools */}
      {relatedTools.length > 0 && (
        <section className="container-custom pb-16">
          <h2 className="text-xl font-bold text-white mb-6">Related Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedTools.map((t, i) => (
              <ToolCard key={t.id} tool={t} index={i} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
