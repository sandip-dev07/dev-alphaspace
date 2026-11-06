import type { Metadata } from "next";
import PageIntro from "../_components/page-intro";
import { ArrowDown, ArrowUpRight, Check } from "lucide-react";
import { services } from "../_data/services";
import { enquiryHref } from "../_data/home";
import styles from "./services.module.css";
import ApproachSection from "../_components/home/approach-section";
import ContactSection from "../_components/home/contact-section";
import JsonLd from "../_components/json-ld";
import { pageMetadata } from "../_lib/metadata";
import { breadcrumbSchema, servicesItemListSchema } from "../_lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Design, Development, Data Governance & AI/ML Services",
  path: "/services",
  description:
    "Explore UI/UX design, web and app development, data engineering, analytics, data governance, AI and machine learning, and MVP development services.",
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
        description="From the first product sketch to trustworthy data and practical AI. Bring us a problem, a prototype, or a platform ready for its next chapter. We’ll help you define and build what comes next."
      />
      <div className={`shell ${styles.catalog}`}>
        <nav className={styles.navigation} aria-label="Service details">
          <div className="eyebrow">EXPLORE OUR EXPERTISE</div>
          {services.map((service, index) => (
            <a key={service.id} href={`#${service.id}`}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {service.name}
              <ArrowDown size={14} aria-hidden="true" />
            </a>
          ))}
          <p>One focused engagement or a team across disciplines. Start where you need us.</p>
        </nav>
        <div className={styles.details}>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <section key={service.id} id={service.id} className={styles.service} aria-labelledby={`${service.id}-title`}>
                <div className={styles.serviceTop}>
                  <div className={styles.icon}><Icon size={26} strokeWidth={1.5} aria-hidden="true" /></div>
                  <span className="eyebrow">SERVICE / {String(index + 1).padStart(2, "0")}</span>
                </div>
                <h2 id={`${service.id}-title`}>{service.name}</h2>
                <p className={styles.description}>{service.description}</p>
                <h3>How we can help</h3>
                <ul className={styles.capabilities}>
                  {service.capabilities.map(capability => (
                    <li key={capability}><Check size={16} aria-hidden="true" /><span>{capability}</span></li>
                  ))}
                </ul>
                <div className={styles.outcomes}>
                  <div><h3>What you get</h3><p>{service.deliverables}</p></div>
                  <div><h3>A good fit for</h3><p>{service.useCase}</p></div>
                </div>
                <a className={styles.enquiry} href={enquiryHref(`Let's talk about ${service.name}`)}>
                  Discuss {service.name}<ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </section>
            );
          })}
          <p className={styles.scopeNote}>Every engagement starts with discovery. Deliverables, integrations, timelines, and ongoing support are agreed around your needs.</p>
        </div>
      </div>
      <ApproachSection />
      <ContactSection />
    </main>
  );
}
