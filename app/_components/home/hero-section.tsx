import Link from "next/link";
import ProjectCarousel from "./project-carousel";
import { ArrowUpRight } from "lucide-react";
import styles from "./hero-section.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={`shell ${styles.intro}`}>
        <div>
          <div className={styles.label}>
            {/* <span /> INDEPENDENT PRODUCT &amp; ENGINEERING STUDIO */}
          </div>
          <h1 id="hero-title" className={styles.title}>
            Digital products.
            {/* <br /> */}{ " "}
            Built with <em>purpose.</em>
          </h1>
        </div>
        <div className={styles.description}>
          <p>
            From the first sketch to the next big step. We bring design,
            engineering, and AI together to build products that move your
            business forward.
          </p>
          <div className={styles.actions}>
            <Link className="button button-orange" href="/contact">
              Build with us
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
            <Link href="/hire-talent" className={styles.hire}>
              Hire talent
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      <div className={`shell ${styles.showcaseHead}`}></div>

      <ProjectCarousel />
    </section>
  );
}
