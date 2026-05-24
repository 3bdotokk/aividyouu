"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BlogPost } from "@/types";
import { formatDate } from "@/lib/utils";
import { getRelatedPosts } from "@/data/blog";
import BlogCard from "@/components/ui/BlogCard";
import AdPlaceholder from "@/components/ui/AdPlaceholder";

interface BlogArticleClientProps {
  post: BlogPost;
}

export default function BlogArticleClient({ post }: BlogArticleClientProps) {
  const relatedPosts = getRelatedPosts(post.slug, 3);

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    return content
      .replace(/^### (.*$)/gm, '<h3 class="text-xl font-semibold text-white mt-8 mb-3">$1</h3>')
      .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold text-white mt-10 mb-4">$1</h2>')
      .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold text-white mt-12 mb-4">$1</h1>')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/^- (.*$)/gm, '<li class="ml-4 list-disc text-dark-300 mb-1">$1</li>')
      .replace(/^\d+\. (.*$)/gm, '<li class="ml-4 list-decimal text-dark-300 mb-1">$1</li>')
      .replace(/\n\n/g, '</p><p class="text-dark-300 leading-relaxed mb-4">')
      .replace(/\n/g, '<br/>');
  };

  return (
    <>
      <article className="py-12 sm:py-16">
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
              <Link href="/blog/" className="hover:text-white transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white truncate">{post.title}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3">
                {/* Cover Image */}
                <div className="aspect-video rounded-2xl overflow-hidden mb-8">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Article Header */}
                <div className="mb-8">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="px-2.5 py-1 rounded-lg text-xs font-medium bg-primary-500/10 text-primary-400 border border-primary-500/20">
                      {post.category}
                    </span>
                    <span className="text-sm text-dark-500">{post.readingTime} min read</span>
                    <span className="text-sm text-dark-500">·</span>
                    <span className="text-sm text-dark-500">{formatDate(post.publishedAt)}</span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">{post.title}</h1>
                  <div className="flex items-center gap-3">
                    <img src={post.authorAvatar} alt={post.author} className="w-10 h-10 rounded-full" />
                    <div>
                      <p className="text-sm font-medium text-white">{post.author}</p>
                      <p className="text-xs text-dark-400">Published on {formatDate(post.publishedAt)}</p>
                    </div>
                  </div>
                </div>

                {/* Article Content */}
                <div
                  className="prose-custom text-dark-300 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: `<p class="text-dark-300 leading-relaxed mb-4">${renderContent(post.content)}</p>` }}
                />

                {/* Tags */}
                <div className="mt-10 pt-6 border-t border-white/10">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-lg text-xs bg-white/5 border border-white/10 text-dark-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <AdPlaceholder format="inline" className="mt-8" />
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <AdPlaceholder format="sidebar" className="mx-auto" />

                {/* Table of Contents placeholder */}
                <div className="glass rounded-2xl p-5 hidden lg:block">
                  <h3 className="font-semibold text-white text-sm mb-3">Quick Links</h3>
                  <ul className="space-y-2">
                    <li><Link href="/ai-video-tools/" className="text-xs text-dark-400 hover:text-primary-400 transition-colors">AI Video Tools</Link></li>
                    <li><Link href="/ai-image-tools/" className="text-xs text-dark-400 hover:text-primary-400 transition-colors">AI Image Tools</Link></li>
                    <li><Link href="/free-tools/" className="text-xs text-dark-400 hover:text-primary-400 transition-colors">Free Utilities</Link></li>
                    <li><Link href="/blog/" className="text-xs text-dark-400 hover:text-primary-400 transition-colors">More Articles</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="container-custom pb-16">
          <h2 className="text-xl font-bold text-white mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPosts.map((p, i) => (
              <BlogCard key={p.id} post={p} index={i} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
