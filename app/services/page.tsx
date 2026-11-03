import type { Metadata } from "next";
import PageIntro from "../_components/page-intro";
import ServicesSection from "../_components/home/services-section";
import ApproachSection from "../_components/home/approach-section";
import ContactSection from "../_components/home/contact-section";
import JsonLd from "../_components/json-ld";
import { pageMetadata } from "../_lib/metadata";
import { breadcrumbSchema, servicesItemListSchema } from "../_lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Web, App & AI Development Services",
  path: "/services",
  description:
    "UI/UX design, web and mobile development, AI products, data solutions, and MVPs. Bring us a problem, a prototype, or a product ready for its next chapter.",
});

export default function Page() {
  return (
    <main id="main" className="detail-page">
      <JsonLd data={servicesItemListSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <PageIntro
        label="WHAT WE DO"
        title="The right expertise."
        accent="At every stage."
        description="Design, web and mobile development, data, AI, and MVPs. Bring us a problem, a prototype, or a product that is ready for its next chapter."
      />
      <ServicesSection />
      <ApproachSection />
      <ContactSection />
    </main>
  );
}
