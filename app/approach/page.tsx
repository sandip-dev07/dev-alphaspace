import type { Metadata } from "next";
import PageIntro from "../_components/page-intro";
import ApproachSection from "../_components/home/approach-section";
import FaqSection from "../_components/home/faq-section";
import ContactSection from "../_components/home/contact-section";
import JsonLd from "../_components/json-ld";
import { pageMetadata } from "../_lib/metadata";
import { breadcrumbSchema, faqSchema } from "../_lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Our Approach to Product Development",
  path: "/approach",
  description:
    "From discovery to launch and beyond, we keep the process clear, the feedback open, and the work focused on your product goals.",
});

export default function Page() {
  return (
    <main id="main" className="detail-page">
      <JsonLd data={faqSchema("/approach")} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Our Approach", path: "/approach" },
        ])}
      />
      <PageIntro
        label="HOW WE COLLABORATE"
        title="Good work starts"
        accent="with a shared plan."
        description="From discovery to launch and beyond, we keep the process clear, the feedback open, and the work focused on your product goals."
      />
      <ApproachSection />
      <FaqSection />
      <ContactSection />
    </main>
  );
}
