import type { Metadata } from "next";
import PageIntro from "../_components/page-intro";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Check } from "lucide-react";
import { enquiryHref } from "../_data/home";
import { approachFaqs, deliveryStages, qualityPractices, workingPrinciples } from "../_data/approach";
import styles from "./approach.module.css";
import FaqSection from "../_components/home/faq-section";
import ContactSection from "../_components/home/contact-section";
import JsonLd from "../_components/json-ld";
import { pageMetadata } from "../_lib/metadata";
import { breadcrumbSchema, faqSchema } from "../_lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Our Approach to Product Development",
  path: "/approach",
  description:
    "Explore our discovery, design, development, and launch process, with clear deliverables, review checkpoints, quality checks, and collaboration expectations.",
});

export default function Page() {
  return (
    <main id="main" className="detail-page">
      <JsonLd data={faqSchema("/approach", approachFaqs)} />
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
      <div className={`shell ${styles.actions}`}>
        <a className="button button-dark" href={enquiryHref("Let's plan a project")}>Talk through your project <ArrowUpRight size={17} aria-hidden="true" /></a>
        <a className="text-link" href="#delivery">Explore the process <ArrowDown size={16} aria-hidden="true" /></a>
      </div>
      <section className={`shell ${styles.section}`} id="delivery" aria-labelledby="delivery-heading">
        <div className={styles.heading}>
          <div className="eyebrow">01 / THE DELIVERY JOURNEY</div>
          <h2 id="delivery-heading">From first question<br /><span className="serif">to the next release.</span></h2>
          <p>Four stages, adapted to your starting point. A focused engagement may cover one stage; a full product build can take us through all four.</p>
        </div>
        <nav className={styles.stageNav} aria-label="Delivery stages">
          {deliveryStages.map((stage, index) => <a href={`#${stage.id}`} key={stage.id}><span>0{index + 1}</span>{stage.label}<ArrowDown size={15} aria-hidden="true" /></a>)}
        </nav>
        <div className={styles.stages}>
          {deliveryStages.map((stage, index) => (
            <article className={styles.stage} id={stage.id} key={stage.id} aria-labelledby={`${stage.id}-title`}>
              <div className={styles.stageIntro}>
                <span className={styles.number}>0{index + 1} / {stage.label}</span>
                <h3 id={`${stage.id}-title`}>{stage.title}</h3>
                <p>{stage.description}</p>
                <ul>{stage.activities.map(activity => <li key={activity}><Check size={16} aria-hidden="true" /><span>{activity}</span></li>)}</ul>
              </div>
              <div className={styles.stageDetails}>
                <div><h4>What you get</h4><p>{stage.output}</p></div>
                <div><h4>Your part in the process</h4><p>{stage.input}</p></div>
                <div className={styles.checkpoint}><h4>Before we move forward</h4><p>{stage.checkpoint}</p></div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className={styles.collaboration} aria-labelledby="collaboration-heading">
        <div className="shell">
          <div className={styles.heading}><div className="eyebrow">02 / WORKING TOGETHER</div><h2 id="collaboration-heading">Clear conversations.<br /><span className="serif">Shared ownership.</span></h2><p>Good delivery depends on how decisions get made as much as what gets built. These are the working habits we establish together.</p></div>
          <div className={styles.principles}>{workingPrinciples.map(principle => <article key={principle.title}><h3>{principle.title}</h3><p>{principle.description}</p></article>)}</div>
        </div>
      </section>
      <section className={`shell ${styles.section}`} aria-labelledby="quality-heading">
        <div className={styles.heading}><div className="eyebrow">03 / QUALITY WITH CONTEXT</div><h2 id="quality-heading">The right checks.<br /><span className="serif">For the work that matters.</span></h2><p>We define quality expectations during planning and review them throughout delivery. The checks depend on the product, the data, and the people relying on it.</p></div>
        <div className={styles.quality}>{qualityPractices.map(practice => <article key={practice.title}><h3>{practice.title}</h3><p>{practice.description}</p></article>)}</div>
      </section>
      <section className={`shell ${styles.start}`} aria-labelledby="start-heading">
        <div><div className="eyebrow">START WHERE YOU ARE</div><h2 id="start-heading">An idea. A roadblock.<br /><span className="serif">A next chapter.</span></h2><p>Tell us what you want to achieve, what already exists, and any constraints on timing or budget. We’ll discuss a useful first step and the expertise it needs.</p></div>
        <div className={styles.startLinks}><a className="button button-dark" href={enquiryHref("Let's discuss the next step for my project")}>Plan the next step <ArrowUpRight size={17} aria-hidden="true" /></a><Link className="text-link" href="/services">Explore our services <ArrowUpRight size={16} aria-hidden="true" /></Link><Link className="text-link" href="/hire-talent">Need someone on your team? <ArrowUpRight size={16} aria-hidden="true" /></Link></div>
      </section>
      <FaqSection items={approachFaqs} />
      <ContactSection />
    </main>
  );
}
