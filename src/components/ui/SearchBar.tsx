"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { searchTools } from "@/data/tools";
import { Tool } from "@/types";
import Link from "next/link";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Tool[]>([]);
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (value: string) => {
    setQuery(value);
    if (value.length >= 2) {
      setResults(searchTools(value).slice(0, 6));
    } else {
      setResults([]);
    }
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto" id="search">
      <div className={`relative rounded-2xl transition-all duration-300 ${
        isFocused ? "ring-2 ring-primary-500/50 shadow-lg shadow-primary-500/10" : ""
      }`}>
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg className="w-5 h-5 text-dark-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          placeholder="Search AI tools, utilities, categories..."
          className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-dark-400 focus:outline-none focus:bg-white/8 transition-all text-sm"
        />
      </div>

      {/* Results Dropdown */}
      {isFocused && results.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 mt-2 glass rounded-xl p-2 shadow-2xl z-50"
        >
          {results.map((tool) => (
            <Link
              key={tool.id}
              href={`/tool/${tool.slug}/`}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/10 transition-colors"
            >
              <img src={tool.logo} alt={tool.name} className="w-8 h-8 rounded-lg" loading="lazy" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">{tool.name}</p>
                <p className="text-xs text-dark-400 truncate">{tool.description}</p>
              </div>
              <span className="text-xs text-primary-400">{tool.category}</span>
            </Link>
          ))}
        </motion.div>
      )}

      {isFocused && query.length >= 2 && results.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 mt-2 glass rounded-xl p-6 shadow-2xl z-50 text-center"
        >
          <p className="text-dark-400 text-sm">No tools found for &quot;{query}&quot;</p>
        </motion.div>
      )}
    </div>
  );
}
