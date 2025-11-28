import HeroSection from "@/components/HeroSection";
import StatsStripe from "@/components/StatsStripe";
import CompanySection from "@/components/CompanySection";
import ProductsSection from "@/components/ProductsSection";
import FeaturesSection from "@/components/FeaturesSection";
import VerifactuSection from "@/components/VerifactuSection";
import SectorsSection from "@/components/SectorsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";
import { getAllPosts } from "@/lib/sanity";

export const revalidate = 300 // Revalidar cada 5 minutos

export default async function Home() {
  // Obtener los últimos 6 posts del blog
  const allPosts = await getAllPosts();
  const latestPosts = allPosts.slice(0, 6);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300">
      <HeroSection />
      <StatsStripe />
      <CompanySection />
      <ProductsSection />
      <FeaturesSection />
      <VerifactuSection />
      <SectorsSection />
      <TestimonialsSection />
      <BlogSection posts={latestPosts} />
      <CTASection />
    </div>
  );
}
