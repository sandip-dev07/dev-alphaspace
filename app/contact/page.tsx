import type { Metadata } from "next";
import { ArrowUpRight, CalendarDays, Mail, MessageSquare } from "lucide-react";
import ContactForm from "../_components/contact/contact-form";
import JsonLd from "../_components/json-ld";
import { bookingUrl, contactEmail, enquiryHref } from "../_data/home";
import { pageMetadata } from "../_lib/metadata";
import { breadcrumbSchema } from "../_lib/schema";
import styles from "../_components/contact/contact.module.css";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us",
  path: "/contact",
  description:
    "Tell us about your next product, design challenge, or hiring need. Email work@devalphaspace.in or book a 30-minute conversation with Dev Alphaspace.",
});

export default function ContactPage() {
  return (
    <main id="main" className={styles.page}>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <div className={styles.layout}>
        <section className={styles.intro} aria-labelledby="contact-title">
          <div className={styles.eyebrow}><span /> LET’S BUILD SOMETHING GOOD</div>
          <h1 id="contact-title">Contact us<span>.</span></h1>
          <p className={styles.description}>A product idea, a design challenge, or your next great hire. Tell us what’s on your mind and let’s find a way forward.</p>
          <div className={styles.tags}><span>Ideas welcome</span><span>No commitment</span><span>Talk to the builders</span></div>
          <div className={styles.contactCard}>
            <div className={styles.call}>
              <CalendarDays size={22} strokeWidth={1.5} aria-hidden="true" />
              <h2>Prefer a conversation?</h2>
              <p>Pick a time that works for you and book a 30-minute conversation about your project.</p>
              <a className={styles.callButton} href={bookingUrl} target="_blank" rel="noopener noreferrer">Book a meeting <ArrowUpRight size={17} aria-hidden="true" /></a>
            </div>
            <div className={styles.direct}>
              <span>Or say hello directly</span>
              <a href={enquiryHref()}><Mail size={17} aria-hidden="true" />{contactEmail}<ArrowUpRight size={14} aria-hidden="true" /></a>
            </div>
          </div>
          <div className={styles.note}><MessageSquare size={17} strokeWidth={1.5} aria-hidden="true" /><p>No polished brief needed.<br />A rough idea is a perfectly good place to start.</p></div>
        </section>
        <ContactForm />
      </div>
    </main>
  );
}
