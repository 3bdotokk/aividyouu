"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface UtilityLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function UtilityLayout({ title, description, children }: UtilityLayoutProps) {
  return (
    <section className="py-12 sm:py-16">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <nav className="flex items-center gap-2 text-sm text-dark-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/free-tools/" className="hover:text-white transition-colors">Free Tools</Link>
            <span>/</span>
            <span className="text-white">{title}</span>
          </nav>

          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">{title}</h1>
          <p className="text-dark-400 mb-8">{description}</p>

          <div className="glass rounded-2xl p-6 sm:p-8">
            {children}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
