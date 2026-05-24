import HeroSection from "@/components/home/HeroSection";
import FeaturedTools from "@/components/home/FeaturedTools";
import CategoriesSection from "@/components/home/CategoriesSection";
import TrendingSection from "@/components/home/TrendingSection";
import UtilitiesPreview from "@/components/home/UtilitiesPreview";
import BlogPreview from "@/components/home/BlogPreview";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/home/FAQSection";
import NewsletterSection from "@/components/home/NewsletterSection";
import CTASection from "@/components/home/CTASection";
import AdPlaceholder from "@/components/ui/AdPlaceholder";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedTools />
      <AdPlaceholder format="banner" className="container-custom my-4" />
      <CategoriesSection />
      <TrendingSection />
      <AdPlaceholder format="inline" className="container-custom my-4" />
      <UtilitiesPreview />
      <BlogPreview />
      <TestimonialsSection />
      <FAQSection />
      <NewsletterSection />
      <CTASection />
    </>
  );
}
