import { AirbnbReviewsSection } from "@/components/home/AirbnbReviewsSection";
import { Hero } from "@/components/home/Hero";
import { HeroCurve } from "@/components/home/HeroCurve";
import { HomeAuditCard } from "@/components/home/HomeAuditCard";
import { ManagementPillars } from "@/components/home/ManagementPillars";
import {
  AmbianceSection,
  BlogPreviewSection,
  ProcessSection,
  ServicesPreview,
  StatsSection,
  TestimonialsSection,
  WhySection,
} from "@/components/home/HomeSections";
import { TrustStrip } from "@/components/home/TrustStrip";
import { FinalCta } from "@/components/sections/FinalCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HeroCurve />
      <ManagementPillars />
      <TrustStrip />
      <WhySection />
      <ServicesPreview />
      <StatsSection />
      <AmbianceSection />
      <ProcessSection />
      <AirbnbReviewsSection />
      <HomeAuditCard />
      <TestimonialsSection />
      <BlogPreviewSection />
      <FinalCta />
    </>
  );
}
