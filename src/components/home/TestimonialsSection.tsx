"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          title="Loved by Creators"
          subtitle="See what our community says about discovering AI tools on Aividyou"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass rounded-2xl p-5"
            >
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, idx) => (
                  <span key={idx} className="text-yellow-400 text-sm">★</span>
                ))}
              </div>
              <p className="text-sm text-dark-300 leading-relaxed mb-4">
                &quot;{testimonial.content}&quot;
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-8 h-8 rounded-full"
                  loading="lazy"
                />
                <div>
                  <p className="text-xs font-medium text-white">{testimonial.name}</p>
                  <p className="text-xs text-dark-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
