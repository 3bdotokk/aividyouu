"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import ToolCard from "@/components/ui/ToolCard";
import { getTrendingTools } from "@/data/tools";

export default function TrendingSection() {
  const trending = getTrendingTools().slice(0, 6);

  return (
    <section className="section-padding bg-gradient-to-b from-transparent via-primary-900/5 to-transparent">
      <div className="container-custom">
        <SectionHeading
          title="Trending Right Now"
          subtitle="The most popular AI tools being used by creators this week"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {trending.map((tool, i) => (
            <ToolCard key={tool.id} tool={tool} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
