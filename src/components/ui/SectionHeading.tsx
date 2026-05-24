"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  gradient?: boolean;
  centered?: boolean;
}

export default function SectionHeading({ title, subtitle, gradient = false, centered = true }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-10 ${centered ? "text-center" : ""}`}
    >
      <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${
        gradient ? "gradient-text" : "text-white"
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-dark-400 text-sm sm:text-base max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
