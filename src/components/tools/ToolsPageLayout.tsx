"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import ToolCard from "@/components/ui/ToolCard";
import AdPlaceholder from "@/components/ui/AdPlaceholder";
import { Tool } from "@/types";

interface ToolsPageLayoutProps {
  title: string;
  description: string;
  tools: Tool[];
  gradient: string;
}

export default function ToolsPageLayout({ title, description, tools, gradient }: ToolsPageLayoutProps) {
  const [filter, setFilter] = useState<"all" | "free" | "freemium" | "paid">("all");
  const [sortBy, setSortBy] = useState<"rating" | "name">("rating");

  const filteredTools = useMemo(() => {
    let result = [...tools];

    if (filter !== "all") {
      result = result.filter((t) => t.pricing === filter);
    }

    if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    } else {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [tools, filter, sortBy]);

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5`} />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-transparent to-dark-950" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">{title}</h1>
            <p className="text-dark-400 text-lg">{description}</p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="container-custom pb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {(["all", "free", "freemium", "paid"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  filter === f
                    ? "bg-primary-500/20 text-primary-400 border border-primary-500/30"
                    : "bg-white/5 text-dark-400 border border-white/10 hover:bg-white/10"
                }`}
              >
                {f === "all" ? "All" : f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-dark-500">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "rating" | "name")}
              className="px-3 py-1.5 rounded-lg text-xs bg-white/5 border border-white/10 text-dark-300 focus:outline-none focus:ring-1 focus:ring-primary-500"
            >
              <option value="rating">Rating</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>
        <p className="text-xs text-dark-500 mt-3">{filteredTools.length} tools found</p>
      </section>

      {/* Tools Grid */}
      <section className="container-custom pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredTools.map((tool, i) => (
            <ToolCard key={tool.id} tool={tool} index={i} />
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-16">
            <p className="text-dark-400 text-lg">No tools match your filters</p>
            <button
              onClick={() => setFilter("all")}
              className="mt-4 text-primary-400 text-sm hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}

        <AdPlaceholder format="banner" className="mt-12" />
      </section>
    </>
  );
}
