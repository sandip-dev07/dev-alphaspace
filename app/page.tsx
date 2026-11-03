import type { Metadata } from "next";
import HeroSection from "./_components/home/hero-section";
import DisciplineStrip from "./_components/home/discipline-strip";
import ServicesSection from "./_components/home/services-section";
import AudienceSection from "./_components/home/audience-section";
import WorkSection from "./_components/home/work-section";
import TalentSection from "./_components/home/talent-section";
import ApproachSection from "./_components/home/approach-section";
import TestimonialsSection from "./_components/home/testimonials-section";
import FaqSection from "./_components/home/faq-section";
import ContactSection from "./_components/home/contact-section";
import JsonLd from "./_components/json-ld";
import { homeMetadata } from "./_lib/metadata";
import { faqSchema } from "./_lib/schema";

export const metadata: Metadata = homeMetadata;

export default function Home() {
  return (
    <main id="main">
        <JsonLd data={faqSchema()} />
        <HeroSection />
        <DisciplineStrip />
        <ServicesSection />
        <AudienceSection />
        <WorkSection />
        <TalentSection />
        <ApproachSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
    </main>
  );
}
