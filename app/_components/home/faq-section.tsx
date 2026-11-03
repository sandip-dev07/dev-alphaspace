import { faqs } from "../../_data/home";

export default function FaqSection() {
  return (
    <section className="faq-section shell section">
      <div>
        <div className="eyebrow">A FEW THINGS YOU MIGHT ASK</div>
        <h2>
          Good questions.
          <br />
          <span className="serif">Straight answers.</span>
        </h2>
      </div>
      <div className="faqs">
        {faqs.map(({ question, answer }) => (
          <details key={question}>
            <summary>
              {question}
              <span className="faq-plus">+</span>
            </summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
