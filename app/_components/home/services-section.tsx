"use client";

import { useState } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { services, enquiryHref } from "../../_data/home";
import styles from "./services-section.module.css";

export default function ServicesSection() {
  const [selected, setSelected] = useState(0);
  const service = services[selected];
  const Icon = service.icon;

  return (
    <section className={`shell section ${styles.section}`} id="services">
      <div className={styles.heading}>
        <div className="eyebrow">01 / WHAT WE DO</div>
        <h2>From possibility <span className="serif">to product.</span></h2>
        <p>The full journey, or the missing piece. Start where you need us.</p>
      </div>
      <div className={styles.explorer}>
        <div className={styles.list} aria-label="Explore our services">
          {services.map(({ name }, index) => (
            <button key={name} type="button" aria-pressed={selected === index} aria-controls="service-detail" onClick={() => setSelected(index)}>
              <span className={styles.number}>0{index + 1}</span>{name}<ArrowUpRight size={17} aria-hidden="true" />
            </button>
          ))}
        </div>
        <div className={styles.detail} id="service-detail" aria-live="polite" aria-atomic="true">
          <div className={styles.icon}><Icon size={29} strokeWidth={1.4} aria-hidden="true" /></div>
          <h3>{service.name}</h3>
          <p>{service.copy}</p>
          <div className={styles.tags}>{service.tags.split(" · ").map(tag => <span key={tag}>{tag}</span>)}</div>
          <a href={enquiryHref(`Let's talk about ${service.name}`)}>Let’s talk about it <ArrowRight size={16} /></a>
        </div>
      </div>
    </section>
  );
}
