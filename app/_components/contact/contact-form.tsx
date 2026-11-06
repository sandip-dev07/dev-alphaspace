"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Copy, Mail } from "lucide-react";
import { contactEmail } from "../../_data/home";
import styles from "./contact.module.css";

const categories = [
  "New product / MVP",
  "UI/UX design",
  "Web development",
  "iOS / Android app",
  "AI & machine learning",
  "Data & governance",
  "Hire talent",
  "Something else",
];

export default function ContactForm() {
  const [draft, setDraft] = useState("");
  const [copyStatus, setCopyStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const name = String(values.get("name") ?? "").trim();
    const email = String(values.get("email") ?? "").trim();
    const category = String(values.get("category") ?? "");
    const message = String(values.get("message") ?? "").trim();
    const body = [
      "Hi Dev Alphaspace,",
      "",
      `I'm interested in: ${category}`,
      "",
      message,
      "",
      `Name: ${name || "Not provided"}`,
      `Email: ${email}`,
    ].join("\n");
    setDraft(body);
    setCopyStatus("");
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(`Enquiry: ${category}`)}&body=${encodeURIComponent(body)}`;
  }

  async function copyDraft() {
    try {
      await navigator.clipboard.writeText(draft);
      setCopyStatus("Copied. Paste your enquiry into an email to " + contactEmail + ".");
    } catch {
      setCopyStatus("Select and copy the draft below, then email it to " + contactEmail + ".");
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} aria-label="Project enquiry">
      <div className={styles.field}>
        <label htmlFor="contact-name">Name <span>(optional)</span></label>
        <input id="contact-name" name="name" autoComplete="name" placeholder="Your name" maxLength={100} />
      </div>
      <div className={styles.field}>
        <label htmlFor="contact-email">Email address <span aria-hidden="true">*</span></label>
        <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@company.com" maxLength={254} required />
      </div>
      <div className={styles.field}>
        <label htmlFor="contact-category">What can we help with? <span aria-hidden="true">*</span></label>
        <select id="contact-category" name="category" defaultValue={categories[0]} required>
          {categories.map(category => <option key={category}>{category}</option>)}
        </select>
      </div>
      <div className={styles.field}>
        <label htmlFor="contact-message">A little about your project <span>(optional)</span></label>
        <textarea id="contact-message" name="message" rows={5} maxLength={1500} placeholder="What are you building? Tell us about your idea, timeline, or the people you need. A few sentences is a great start." />
      </div>
      <button className={styles.submit} type="submit">Prepare my enquiry <ArrowUpRight size={18} aria-hidden="true" /></button>
      <p className={styles.formNote}><Mail size={13} aria-hidden="true" /> Opens a draft in your email app. You review and send it.</p>
      {draft && (
        <div className={styles.draft}>
          <p role="status">Your draft is ready. If your email app opened, review it and press send. Nothing has been sent by this website.</p>
          <details>
            <summary>Email app didn’t open?</summary>
            <p>Copy this draft and email it to <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.</p>
            <textarea aria-label="Your email draft" readOnly value={draft} rows={8} onFocus={event => event.target.select()} />
            <button type="button" onClick={copyDraft}><Copy size={14} /> Copy draft</button>
            <p role="status">{copyStatus}</p>
          </details>
        </div>
      )}
    </form>
  );
}
