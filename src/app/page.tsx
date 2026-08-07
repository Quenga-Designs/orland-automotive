import { Hero } from "@/components/Hero";
import { ContactCta } from "@/components/ContactCta";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { VisitSection } from "@/components/VisitSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ContactCta />
      <ServicesSection />
      <AboutSection />
      <VisitSection />
    </>
  );
}
