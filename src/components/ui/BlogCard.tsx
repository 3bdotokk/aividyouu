"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BlogPost } from "@/types";
import { formatDate } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

export default function BlogCard({ post, index = 0 }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link href={`/blog/${post.slug}/`} className="block group">
        <div className="glass glass-hover rounded-2xl overflow-hidden h-full">
          {/* Cover Image */}
          <div className="aspect-video overflow-hidden">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
          {/* Content */}
          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-2 py-0.5 rounded-md text-xs font-medium bg-primary-500/10 text-primary-400 border border-primary-500/20">
                {post.category}
              </span>
              <span className="text-xs text-dark-500">{post.readingTime} min read</span>
            </div>
            <h3 className="font-semibold text-white group-hover:text-primary-400 transition-colors mb-2 line-clamp-2">
              {post.title}
            </h3>
            <p className="text-sm text-dark-400 line-clamp-2 mb-4">{post.excerpt}</p>
            <div className="flex items-center gap-2 text-xs text-dark-500">
              <img src={post.authorAvatar} alt={post.author} className="w-5 h-5 rounded-full" loading="lazy" />
              <span>{post.author}</span>
              <span>·</span>
              <span>{formatDate(post.publishedAt)}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
