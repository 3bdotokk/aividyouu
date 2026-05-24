"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FreeUtility } from "@/types";

interface UtilityCardProps {
  utility: FreeUtility;
  index?: number;
}

export default function UtilityCard({ utility, index = 0 }: UtilityCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link href={`/free-tools/${utility.slug}/`} className="block group">
        <div className="glass glass-hover rounded-xl p-4 h-full">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{utility.icon}</span>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-white text-sm group-hover:text-primary-400 transition-colors truncate">
                {utility.name}
              </h3>
              <p className="text-xs text-dark-400 truncate">{utility.description}</p>
            </div>
            <svg className="w-4 h-4 text-dark-500 group-hover:text-primary-400 group-hover:translate-x-0.5 transition-all flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
