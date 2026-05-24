"use client";

import { motion } from "framer-motion";
import UtilityCard from "@/components/ui/UtilityCard";
import { freeUtilities } from "@/data/utilities";

export default function FreeToolsClient() {
  const categories = [...new Set(freeUtilities.map((u) => u.category))];

  return (
    <>
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-500 to-pink-500 opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-transparent to-dark-950" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Free Online Utilities
            </h1>
            <p className="text-dark-400 text-lg">
              Browser-based tools that work instantly. No downloads, no sign-ups, no data leaves your device.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container-custom pb-16">
        {categories.map((category) => (
          <div key={category} className="mb-10">
            <h2 className="text-lg font-semibold text-white mb-4">{category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {freeUtilities
                .filter((u) => u.category === category)
                .map((utility, i) => (
                  <UtilityCard key={utility.id} utility={utility} index={i} />
                ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
