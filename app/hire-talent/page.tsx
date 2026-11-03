import type { Metadata } from "next";
import PageIntro from "../_components/page-intro";
import TalentSection from "../_components/home/talent-section";
import FaqSection from "../_components/home/faq-section";
import ContactSection from "../_components/home/contact-section";
import JsonLd from "../_components/json-ld";
import { pageMetadata } from "../_lib/metadata";
import { breadcrumbSchema, faqSchema } from "../_lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Hire Design & Engineering Talent",
  path: "/hire-talent",
  description:
    "Tell us what you are building and the skills you need. We connect your team with product design, web and mobile engineering, AI, and data talent.",
});

export default function Page() {
  return (
    <main id="main" className="detail-page">
      <JsonLd data={faqSchema("/hire-talent")} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Hire Talent", path: "/hire-talent" },
        ])}
      />
      <PageIntro
        label="EXTEND YOUR TEAM"
        title="Your next chapter."
        accent="The right people."
        description="Tell us what you are building and the skills you need. We help connect your team with design, engineering, AI, and data talent."
      />
      <TalentSection />
      <FaqSection />
      <ContactSection />
    </main>
  );
}
