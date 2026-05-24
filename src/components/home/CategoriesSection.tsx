"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import CategoryCard from "@/components/ui/CategoryCard";
import { categories } from "@/data/categories";

export default function CategoriesSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          title="Browse by Category"
          subtitle="Find the perfect AI tool for your specific needs"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, i) => (
            <CategoryCard key={category.id} category={category} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
