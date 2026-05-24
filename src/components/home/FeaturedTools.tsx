"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import ToolCard from "@/components/ui/ToolCard";
import { getFeaturedTools } from "@/data/tools";
import Link from "next/link";

export default function FeaturedTools() {
  const featured = getFeaturedTools().slice(0, 8);

  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          title="Featured AI Tools"
          subtitle="Hand-picked selection of the most powerful AI tools for creators and professionals"
          gradient
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {featured.map((tool, i) => (
            <ToolCard key={tool.id} tool={tool} index={i} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/ai-video-tools/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-dark-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
          >
            View All Tools
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
