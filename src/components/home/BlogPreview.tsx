"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import BlogCard from "@/components/ui/BlogCard";
import { getFeaturedPosts } from "@/data/blog";
import Link from "next/link";

export default function BlogPreview() {
  const posts = getFeaturedPosts().slice(0, 3);

  return (
    <section className="section-padding bg-gradient-to-b from-transparent via-purple-900/5 to-transparent">
      <div className="container-custom">
        <SectionHeading
          title="Latest from the Blog"
          subtitle="Guides, tutorials, and insights about AI tools and creative workflows"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <BlogCard key={post.id} post={post} index={i} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/blog/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-dark-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
          >
            Read More Articles
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
