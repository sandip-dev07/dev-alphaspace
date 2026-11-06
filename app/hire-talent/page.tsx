import type { Metadata } from "next";
import PageIntro from "../_components/page-intro";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { enquiryHref } from "../_data/home";
import { engagementOptions, hiringFaqs, hiringRoles, hiringSteps } from "../_data/hiring";
import styles from "./hiring.module.css";
import FaqSection from "../_components/home/faq-section";
import ContactSection from "../_components/home/contact-section";
import JsonLd from "../_components/json-ld";
import { pageMetadata } from "../_lib/metadata";
import { breadcrumbSchema, faqSchema } from "../_lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Hire Design, Engineering, AI & Data Talent",
  path: "/hire-talent",
  description:
    "Explore design, web, mobile, AI/ML, data engineering, and governance talent. Discuss dedicated specialists, part-time expertise, and cross-functional teams.",
});

export default function Page() {
  return (
    <main id="main" className="detail-page">
      <JsonLd data={faqSchema("/hire-talent", hiringFaqs)} />
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
      <div className={`shell ${styles.introActions}`}>
        <a className="button button-dark" href={enquiryHref("I want to hire talent")}>Discuss your hiring needs <ArrowUpRight size={17} aria-hidden="true" /></a>
        <a className="text-link" href="#roles">Explore the roles <ArrowUpRight size={16} aria-hidden="true" /></a>
      </div>
      <section className={`shell ${styles.section}`} id="roles" aria-labelledby="roles-heading">
        <div className={styles.heading}>
          <div className="eyebrow">01 / FIND YOUR EXPERTISE</div>
          <h2 id="roles-heading">The skill you need.<br /><span className="serif">The team you’re building.</span></h2>
          <p>Choose a focused role or combine disciplines. These are areas we can help source for; specific skills and availability are confirmed against your brief.</p>
        </div>
        <div className={styles.roles}>
          {hiringRoles.map((role, index) => (
            <article className={styles.role} key={role.name}>
              <span className={styles.number}>{String(index + 1).padStart(2, "0")} / TALENT</span>
              <h3>{role.name}</h3>
              <p>{role.focus}</p>
              <ul>{role.skills.map(skill => <li key={skill}><Check size={15} aria-hidden="true" /><span>{skill}</span></li>)}</ul>
              <p className={styles.fit}><strong>A good fit for</strong>{role.fit}</p>
              <a href={enquiryHref(`Hiring enquiry: ${role.name}`)}>Discuss this role <ArrowUpRight size={16} aria-hidden="true" /></a>
            </article>
          ))}
        </div>
      </section>
      <section className={styles.engagementBand} aria-labelledby="engagement-heading">
        <div className="shell">
          <div className={styles.heading}>
            <div className="eyebrow">02 / WAYS TO WORK TOGETHER</div>
            <h2 id="engagement-heading">Built around <span className="serif">your team.</span></h2>
            <p>The right setup depends on your workload, internal leadership, and how long you need support.</p>
          </div>
          <div className={styles.options}>
            {engagementOptions.map(option => <article key={option.name}><h3>{option.name}</h3><p>{option.description}</p><p>{option.detail}</p></article>)}
          </div>
          <p className={styles.note}>Availability, hours, duration, and commercial terms are confirmed for each engagement.</p>
        </div>
      </section>
      <section className={`shell ${styles.section}`} aria-labelledby="process-heading">
        <div className={styles.heading}>
          <div className="eyebrow">03 / FROM BRIEF TO KICKOFF</div>
          <h2 id="process-heading">A clear start.<br /><span className="serif">A shared direction.</span></h2>
        </div>
        <ol className={styles.steps}>
          {hiringSteps.map((step, index) => <li key={step.title}><span className={styles.number}>{String(index + 1).padStart(2, "0")}</span><h3>{step.title}</h3><p>{step.description}</p></li>)}
        </ol>
      </section>
      <section className={`shell ${styles.brief}`} aria-labelledby="brief-heading">
        <div><div className="eyebrow">LET’S MAKE THE FIRST CONVERSATION USEFUL</div><h2 id="brief-heading">Bring the brief.<br /><span className="serif">We’ll work through the fit.</span></h2><p>A few clear points are enough to get started. You do not need a complete job description.</p><a className="button button-dark" href={enquiryHref("Hiring brief for my team")}>Share your hiring brief <ArrowUpRight size={17} aria-hidden="true" /></a></div>
        <ul>
          <li><strong>The product and challenge</strong>What you are building, who uses it, and where your team needs help.</li>
          <li><strong>The role and skills</strong>Core responsibilities, required experience, and your current tools or stack.</li>
          <li><strong>The working setup</strong>Expected weekly hours, time-zone overlap, start date, and likely duration.</li>
          <li><strong>The budget and selection process</strong>Your budget range, interview steps, and who will make the hiring decision.</li>
        </ul>
      </section>
      <div className={`shell ${styles.projectNote}`}><p>Looking for a defined product outcome with a scoped delivery plan?</p><Link href="/services">Explore our services <ArrowUpRight size={16} aria-hidden="true" /></Link></div>
      <FaqSection items={hiringFaqs} />
      <ContactSection />
    </main>
  );
}
