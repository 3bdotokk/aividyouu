"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Tool } from "@/types";

interface ToolCardProps {
  tool: Tool;
  index?: number;
}

export default function ToolCard({ tool, index = 0 }: ToolCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link href={`/tool/${tool.slug}/`} className="block group">
        <div className="glass glass-hover rounded-2xl p-5 h-full relative overflow-hidden">
          {/* Gradient border effect on hover */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-primary-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500" />
          
          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="w-10 h-10 rounded-xl object-cover"
                  loading="lazy"
                />
                <div>
                  <h3 className="font-semibold text-white group-hover:text-primary-400 transition-colors text-sm">
                    {tool.name}
                  </h3>
                  <p className="text-xs text-dark-400">{tool.subcategory}</p>
                </div>
              </div>
              {/* Favorite */}
              <button
                onClick={(e) => { e.preventDefault(); }}
                className="p-1.5 rounded-lg hover:bg-white/10 transition-colors text-dark-400 hover:text-pink-400"
                aria-label="Save tool"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>

            {/* Description */}
            <p className="text-sm text-dark-400 leading-relaxed mb-4 line-clamp-2">
              {tool.description}
            </p>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <PricingBadge pricing={tool.pricing} />
              <LoginBadge required={tool.loginRequired} />
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-3 border-t border-white/5">
              <div className="flex items-center gap-1">
                <span className="text-yellow-400 text-sm">★</span>
                <span className="text-sm font-medium text-white">{tool.rating}</span>
              </div>
              <span className="text-xs text-primary-400 group-hover:text-primary-300 font-medium flex items-center gap-1">
                View Details
                <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function PricingBadge({ pricing }: { pricing: string }) {
  const styles = {
    free: "bg-green-500/10 text-green-400 border-green-500/20",
    freemium: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    paid: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  };

  const labels = {
    free: "Free",
    freemium: "Freemium",
    paid: "Paid",
  };

  return (
    <span className={`px-2 py-0.5 rounded-md text-xs font-medium border ${styles[pricing as keyof typeof styles]}`}>
      {labels[pricing as keyof typeof labels]}
    </span>
  );
}

function LoginBadge({ required }: { required: boolean }) {
  return (
    <span className={`px-2 py-0.5 rounded-md text-xs font-medium border ${
      required
        ? "bg-dark-700/50 text-dark-300 border-dark-600"
        : "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
    }`}>
      {required ? "Login Required" : "No Login"}
    </span>
  );
}
