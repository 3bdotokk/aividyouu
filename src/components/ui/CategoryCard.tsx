"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CategoryInfo } from "@/types";

interface CategoryCardProps {
  category: CategoryInfo;
  index?: number;
}

export default function CategoryCard({ category, index = 0 }: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link href={`/${category.slug}/`} className="block group">
        <div className="glass glass-hover rounded-2xl p-6 text-center relative overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
          <div className="relative z-10">
            <span className="text-3xl mb-3 block">{category.icon}</span>
            <h3 className="font-semibold text-white text-sm mb-1 group-hover:text-primary-400 transition-colors">
              {category.name}
            </h3>
            <p className="text-xs text-dark-400 line-clamp-2">{category.description}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
