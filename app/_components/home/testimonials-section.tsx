import { Quote } from "lucide-react";
import { testimonials } from "../../_data/testimonials";
import styles from "./testimonials-section.module.css";

export default function TestimonialsSection() {
  return (
    <section className={`shell section ${styles.section}`} id="testimonials" aria-labelledby="testimonials-title">
      <div className={styles.heading}>
        <div className="eyebrow">IN OUR CLIENTS’ WORDS</div>
        <h2 id="testimonials-title">Good work.<br /><span className="serif">Better relationships.</span></h2>
        <p>A few words from the people we’ve built with.</p>
      </div>
      <div className={styles.grid}>
        {testimonials.map(({ name, company, initials, quote, project }) => (
          <figure className={styles.card} key={name}>
            <figcaption>
              <span className={styles.avatar} aria-hidden="true">{initials}</span>
              <div><span className={styles.name}>{name}</span><span className={styles.company}>{company}</span></div>
            </figcaption>
            <Quote className={styles.quoteIcon} size={23} strokeWidth={1.4} aria-hidden="true" />
            <blockquote><p><mark>{quote}</mark></p></blockquote>
            <span className={styles.project}>{project}</span>
          </figure>
        ))}
      </div>
    </section>
  );
}
