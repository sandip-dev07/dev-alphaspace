import type { Metadata } from "next";
import PageIntro from "../_components/page-intro";
import JsonLd from "../_components/json-ld";
import { contactEmail, siteName } from "../_data/site";
import { pageMetadata } from "../_lib/metadata";
import { breadcrumbSchema } from "../_lib/schema";
import styles from "./terms.module.css";

export const metadata: Metadata = pageMetadata({
  title: "Terms & Conditions",
  path: "/terms-and-conditions",
  description: "Terms for using the Dev Alphaspace website, submitting enquiries, and discussing design, development, data, AI, and talent engagements.",
});

const sections = [
  {
    id: "scope", title: "About these terms",
    paragraphs: [
      `These terms describe the conditions for using the ${siteName} website and contacting us through its enquiry and booking links. References to “we”, “us”, and “our” mean ${siteName}; “you” means the person using this website.`,
      "Please read these terms before using the website. If you do not agree with them, please stop using it. A separate written proposal, statement of work, or service agreement governs any project or talent engagement. Where that agreement conflicts with these website terms, the agreement takes precedence for that engagement.",
    ],
  },
  {
    id: "website-use", title: "Using the website",
    paragraphs: [
      "You may use this website to learn about our work, explore services, and make legitimate business enquiries. You must not use it unlawfully, impersonate another person, submit material you are not entitled to share, or interfere with its operation.",
      "Do not attempt unauthorized access, introduce malicious software, or use the website to send spam or misleading enquiries. We may restrict access where reasonably necessary to address misuse or protect the website.",
    ],
  },
  {
    id: "enquiries", title: "Enquiries and bookings",
    paragraphs: [
      "Submitting an enquiry or booking a conversation does not confirm a project, reserve talent, or establish an employment relationship. Availability, suitability, scope, and commercial terms must be discussed and agreed separately.",
      "Provide accurate contact details and only share information you are authorized to disclose. If you contact us on behalf of an organization, you should have authority to make that enquiry.",
      "Our enquiry form prepares an email draft in your email application. You review and send the message yourself. Meeting bookings are handled by an external booking service under its own terms.",
    ],
  },
  {
    id: "engagements", title: "Project and talent engagements",
    paragraphs: [
      "Service descriptions, role profiles, and process outlines explain the types of work we discuss with clients. They are not a promise of specific availability, delivery dates, business results, or a complete specification for your project.",
      "Before work begins, the parties should agree on deliverables, responsibilities, acceptance criteria, milestones, dependencies, and any ongoing support. Talent engagements should also specify working hours, supervision, duration, and handover expectations.",
      "Changes to scope, priorities, or working arrangements are reviewed for their effect on cost and timing and agreed through the engagement’s change process.",
    ],
  },
  {
    id: "payment", title: "Fees, cancellation, and refunds",
    paragraphs: [
      "Fees, payment schedules, taxes, expenses, and third-party charges are set out in the applicable proposal or agreement. Website enquiries and conversations do not authorize us to charge you for project work.",
      "Cancellation, termination, refunds, and payment for completed work are handled under the agreed engagement terms and applicable law. This website does not establish a universal deposit, cancellation fee, or refund policy for every project.",
    ],
  },
  {
    id: "ownership", title: "Content and intellectual property",
    paragraphs: [
      "Website text, designs, branding, and other materials belong to their respective owners. You may view and share links to the website, but you must obtain permission before reproducing or using protected materials beyond what applicable law permits.",
      "Client names, project imagery, trademarks, and third-party materials remain the property of their respective owners. Their appearance does not give you a license to use them.",
      "Ownership and licensing of project code, designs, datasets, and other deliverables are determined by the engagement agreement. Third-party and open-source components may carry separate license conditions.",
    ],
  },
  {
    id: "confidentiality", title: "Confidential information and data",
    paragraphs: [
      "Please do not include passwords, access tokens, sensitive personal data, or confidential business records in an initial enquiry. Use a general description or anonymized examples until appropriate sharing arrangements are agreed.",
      "Discuss confidentiality, data access, retention, hosting, and any restrictions on AI or third-party tools before sharing project information. NDA and data-processing obligations should be documented where needed. These terms do not replace a privacy notice or a separate confidentiality agreement.",
    ],
  },
  {
    id: "external-services", title: "External links and services",
    paragraphs: [
      "This website links to external services, including booking tools, social platforms, and project websites. Those services operate independently and have their own terms and privacy practices.",
      "We do not control the availability, content, or operation of external websites. Review their conditions before submitting information or using their services.",
    ],
  },
  {
    id: "availability", title: "Information, availability, and responsibility",
    paragraphs: [
      "We aim to keep website information useful and accurate, but content may change and errors may occur. Please confirm any information that is material to a project decision directly with us.",
      "The website is provided on an as-available basis. We do not promise uninterrupted access or that every page will always be free of errors. Project warranties, service levels, and liability arrangements belong in the relevant engagement agreement.",
      "Nothing in these terms excludes or limits rights or responsibilities that cannot lawfully be excluded or limited under applicable law.",
    ],
  },
  {
    id: "updates", title: "Changes and questions",
    paragraphs: [
      "We may update these website terms as the website or our offerings change. The revision date below identifies the current version. Changes to these website terms do not automatically amend an existing signed engagement agreement.",
      "If you have a concern about the website or these terms, contact us with the relevant details so we can discuss it. Dispute procedures for a project or talent engagement should be specified in the applicable agreement, subject to applicable law.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main id="main" className="detail-page">
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Terms & Conditions", path: "/terms-and-conditions" }])} />
      <PageIntro label="WEBSITE TERMS" title="Terms &" accent="conditions." description="A clear outline of using our website, making enquiries, and discussing work together." />
      <div className={`shell ${styles.layout}`}>
        <nav className={styles.contents} aria-label="Terms and conditions sections">
          <div className="eyebrow">ON THIS PAGE</div>
          {sections.map((section, index) => <a key={section.id} href={`#${section.id}`}><span>{String(index + 1).padStart(2, "0")}</span>{section.title}</a>)}
          <a href="#terms-contact"><span>11</span>Contact us</a>
        </nav>
        <div className={styles.content}>
          <p className={styles.updated}>Last updated: <time dateTime="2026-11-06">6 November 2026</time></p>
          {sections.map((section, index) => (
            <section id={section.id} key={section.id} aria-labelledby={`${section.id}-heading`}>
              <h2 id={`${section.id}-heading`}>{String(index + 1).padStart(2, "0")}. {section.title}</h2>
              {section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
            </section>
          ))}
          <section id="terms-contact" aria-labelledby="terms-contact-heading">
            <h2 id="terms-contact-heading">11. Contact us</h2>
            <p>For questions about these terms, contact {siteName} in Bengaluru, India.</p>
            <a className={styles.email} href={`mailto:${contactEmail}?subject=Terms%20and%20conditions%20enquiry`}>{contactEmail}</a>
          </section>
        </div>
      </div>
    </main>
  );
}
