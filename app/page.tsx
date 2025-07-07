import HeroSection from "@/components/HeroSection";
import StatsStripe from "@/components/StatsStripe";
import CompanySection from "@/components/CompanySection";
import ProductsSection from "@/components/ProductsSection";
import FeaturesSection from "@/components/FeaturesSection";
import SectorsSection from "@/components/SectorsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300">
      <HeroSection />
      <StatsStripe />
      <CompanySection />
      <ProductsSection />
      <FeaturesSection />
      <SectorsSection />
      <TestimonialsSection />
      <BlogSection />
      <CTASection />
    </div>
  );
}
