import { ArrowUpRight, Asterisk } from "lucide-react";
import { bookingUrl, contactEmail, enquiryHref } from "../../_data/home";

export default function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="shell">
        <div>
          <div className="eyebrow">GOT SOMETHING ON YOUR MIND?</div>
          <h2>
            Let’s make
            <br />
            <span className="serif">it happen.</span>
            <Asterisk className="contact-star" />
          </h2>
        </div>
        <div className="contact-right">
          <p>
            A new idea. A tricky problem. A missing teammate.
            <br />
            We’d love to hear about it.
          </p>
          <a className="button button-dark contact-booking" href={bookingUrl} target="_blank" rel="noopener noreferrer">
            Book a meeting <ArrowUpRight size={18} />
          </a>
          <a className="contact-email" href={enquiryHref()}>
            {contactEmail} <ArrowUpRight size={25} />
          </a>
          <span>No pitch decks needed. Just say hello.</span>
        </div>
      </div>
    </section>
  );
}
