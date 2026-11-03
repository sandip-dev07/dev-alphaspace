import type { Metadata } from "next";
import PageIntro from "../_components/page-intro";
import WorkSection from "../_components/home/work-section";
import ContactSection from "../_components/home/contact-section";
import JsonLd from "../_components/json-ld";
import { pageMetadata } from "../_lib/metadata";
import { breadcrumbSchema, workItemListSchema } from "../_lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Our Work — Product & App Projects",
  path: "/work",
  description:
    "Explore our work across SaaS and mobile experiences, from editorial platforms and event tools to hotel discovery and booking apps.",
});

export default function Page() {
  return (
    <main id="main" className="detail-page">
      <JsonLd data={workItemListSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Our Work", path: "/work" },
        ])}
      />
      <PageIntro
        label="SELECTED PROJECTS"
        title="Ideas made real."
        accent="Products put to work."
        description="Explore our work across SaaS and mobile experiences, from link management to hotel booking."
      />
      <WorkSection />
      <ContactSection />
    </main>
  );
}
