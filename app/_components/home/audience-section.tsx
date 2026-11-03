import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { bookingUrl } from "../../_data/home";
import { FounderIllustration, TeamIllustration } from "./audience-illustrations";
import styles from "./audience-section.module.css";

export default function AudienceSection() {
  return (
    <section className={`shell section ${styles.section}`} aria-labelledby="audience-title">
      <div className={styles.heading}>
        <div className="eyebrow">DIFFERENT STARTING POINTS. SHARED AMBITION.</div>
        <h2 id="audience-title">Who we <span className="serif">work with.</span></h2>
        <p>Wherever you are in the journey, we can help with the next step.</p>
      </div>
      <div className={styles.cards}>
        <article className={styles.card}>
          <div className={styles.illustration}><TeamIllustration /></div>
          <div className={styles.content}>
            <h3>Established businesses & growing teams</h3>
            <p>Bring new ideas to an existing business. Modernize a product, connect your data, introduce AI workflows, or add the expertise your team needs.</p>
            <Link href="/services">Explore what we can build <ArrowUpRight size={16} aria-hidden="true" /></Link>
          </div>
        </article>
        <article className={styles.card}>
          <div className={styles.illustration}><FounderIllustration /></div>
          <div className={styles.content}>
            <h3>Startup founders & first-time builders</h3>
            <p>Turn a promising idea into a focused first product. From shaping the experience to building your MVP, get the support to launch and learn.</p>
            <Link href="/approach">See how we get you started <ArrowUpRight size={16} aria-hidden="true" /></Link>
          </div>
        </article>
      </div>
      <div className={styles.conversation}>
        <div><span className={styles.bubble}><MessageCircle size={19} aria-hidden="true" /></span><p>Not sure where to start?<span>Let’s figure it out together.</span></p></div>
        <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="button button-orange">Book a conversation <ArrowUpRight size={17} aria-hidden="true" /></a>
      </div>
    </section>
  );
}
