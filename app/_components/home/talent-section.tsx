import { ArrowUpRight, Check } from "lucide-react";
import { talentRoles, enquiryHref } from "../../_data/home";

export default function TalentSection() {
  return (
    <section className="talent-section shell section" id="talent">
      <div className="talent-panel">
        <div className="talent-copy">
          <div className="eyebrow">
            <span className="status-dot" /> 03 / YOUR TEAM, EXTENDED
          </div>
          <h2>
            Great products
            <br />
            start with
            <br />
            <span className="serif">great people.</span>
          </h2>
          <p>
            Bring the right minds into your team. Find design, engineering,
            data, and AI talent through Dev Alphaspace—matched to what
            you’re building.
          </p>
          <a
            className="button button-orange"
            href={enquiryHref("I want to hire talent")}
          >
            Let’s find your people <ArrowUpRight size={18} />
          </a>
          <span className="talent-caption">
            Your vision. Your team. A little extra firepower.
          </span>
        </div>
        <div className="talent-roles">
          <span className="mini-label">
            THE RIGHT SKILLS. THE RIGHT FIT.
          </span>
          {talentRoles.map(({ number, title, description, tag }) => (
            <a
              href={enquiryHref(`Hiring enquiry: ${title}`)}
              className="talent-role"
              key={number}
            >
              <span className="role-number">{number}</span>
              <div>
                <span className="role-tag">{tag}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
              <ArrowUpRight size={21} />
            </a>
          ))}
          <div className="talent-foot">
            <Check size={15} /> Flexible engagements <span>•</span> Built
            around your team
          </div>
        </div>
      </div>
    </section>
  );
}
