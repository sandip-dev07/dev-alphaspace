"use client";

import { useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Brand from "./brand";
import styles from "./site-header.module.css";

const navigation = [
  { label: "Services", href: "/services" },
  { label: "Our work", href: "/work" },
  { label: "Hire talent", href: "/hire-talent" },
  { label: "Our approach", href: "/approach" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  return (
    <header
      className={styles.header}
      onKeyDown={(event) => {
        if (event.key === "Escape" && menuOpen) {
          setMenuOpen(false);
          menuButton.current?.focus();
        }
      }}
    >
      <div className={`shell ${styles.inner}`}>
        <div className={styles.brand} onClick={() => setMenuOpen(false)}>
          <Brand />
        </div>
        <nav className={styles.desktopNav} aria-label="Main navigation">
          {navigation.map(({ label, href }) => (
            <Link
              href={href}
              key={href}
              aria-current={pathname === href ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className={styles.actions}>
          <Link
            className={styles.contact}
            href="/contact"
            onClick={() => setMenuOpen(false)}
          >
            Let’s talk <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
          <button
            ref={menuButton}
            className={styles.menuToggle}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
        <nav
          id="mobile-navigation"
          className={styles.mobileNav}
          aria-label="Mobile navigation"
          hidden={!menuOpen}
        >
          {navigation.map(({ label, href }) => (
            <Link
              href={href}
              key={href}
              aria-current={pathname === href ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {label}
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
