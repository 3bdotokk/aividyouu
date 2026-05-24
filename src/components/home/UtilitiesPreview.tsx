"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import UtilityCard from "@/components/ui/UtilityCard";
import { freeUtilities } from "@/data/utilities";
import Link from "next/link";

export default function UtilitiesPreview() {
  const preview = freeUtilities.slice(0, 8);

  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          title="Free Online Utilities"
          subtitle="Browser-based tools that work instantly — no downloads, no sign-ups"
          gradient
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {preview.map((utility, i) => (
            <UtilityCard key={utility.id} utility={utility} index={i} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/free-tools/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-dark-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
          >
            View All Free Tools
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
