import { ArrowRight } from "lucide-react";
import { processSteps } from "../../_data/home";

export default function ApproachSection() {
  return (
    <section className="approach-section shell section" id="approach">
      <div className="section-heading">
        <div>
          <div className="eyebrow">04 / HOW WE WORK</div>
          <h2>
            No black boxes.
            <br />
            <span className="serif">Just good collaboration.</span>
          </h2>
        </div>
        <p>
          You work with the people doing the work.
          <br />
          Clear conversations. Shared ownership.
        </p>
      </div>
      <div className="process-grid">
        {processSteps.map(({ number, title, description }) => (
          <div className="process" key={number}>
            <span>
              {number}
              <ArrowRight size={18} />
            </span>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
