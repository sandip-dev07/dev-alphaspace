import Link from "next/link";
import Brand from "./brand";
import { bookingUrl, contactEmail, services } from "../_data/home";
import { socialLinks } from "../_data/site";
import styles from "./site-footer.module.css";

const pages = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Our work", href: "/work" },
  { label: "Hire talent", href: "/hire-talent" },
  { label: "Our approach", href: "/approach" },
];

const socials = [
  { label: "Email", href: `mailto:${contactEmail}` },
  ...socialLinks,
];

const company = [
  { label: "Contact us", href: "/contact" },
  { label: "Book a meeting", href: bookingUrl },
];

function FooterLinks({
  heading,
  links,
}: {
  heading: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className={styles.column}>
      <h2>{heading}</h2>
      <ul>
        {links.map(({ label, href }) => (
          <li key={label}>
            {href.startsWith("/") ? (
              <Link href={href}>{label}</Link>
            ) : (
              <a
                href={href}
                {...(href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`shell ${styles.inner}`}>
        <div className={styles.intro}>
          <Brand />
          <p>Bangalore, India</p>
        </div>

        <nav className={styles.columns} aria-label="Footer">
          <FooterLinks heading="Pages" links={pages} />
          <FooterLinks
            heading="Services"
            links={services.map(({ name }) => ({
              label: name,
              href: "/services",
            }))}
          />
          <FooterLinks heading="Socials" links={socials} />
          <FooterLinks heading="Company" links={company} />
        </nav>

        <div className={styles.bottom}>
          <span>© 2026 Dev Alphaspace. All rights reserved.</span>
          <span>Independent minds. Shared ambition.</span>
          <a href="#main">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
