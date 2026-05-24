"use client";

import { motion } from "framer-motion";
import BlogCard from "@/components/ui/BlogCard";
import AdPlaceholder from "@/components/ui/AdPlaceholder";
import { blogPosts } from "@/data/blog";

export default function BlogPageClient() {
  return (
    <>
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-transparent to-dark-950" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Blog</h1>
            <p className="text-dark-400 text-lg">
              Expert guides, tutorials, and insights about AI tools, video generation, image creation, and creative workflows.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container-custom pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <BlogCard key={post.id} post={post} index={i} />
          ))}
        </div>

        <AdPlaceholder format="banner" className="mt-12" />
      </section>
    </>
  );
}
