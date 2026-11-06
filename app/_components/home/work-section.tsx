import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../../_data/projects";

export default function WorkSection() {
  return (
    <section className="work-section section" id="work">
      <div className="shell">
        <div className="section-heading">
          <div>
            <div className="eyebrow">02 / SELECTED WORK</div>
            <h2>
              Less talk.
              <br />
              <span className="serif">More shipped.</span>
            </h2>
          </div>
          <p>
            A few ideas we’ve helped turn
            <br />
            into something people can use.
          </p>
        </div>
        <div className="work-grid">
          {projects.slice(0, 4).map((project) => (
            <article className="project" id={project.id} key={project.id}>
              <div className="project-image">
                <Image
                  src={project.image}
                  alt={`${project.name} product interface`}
                  width={1000}
                  height={750}
                  sizes="(max-width: 480px) 90vw, 50vw"
                />
                {project.href && (
                  <a
                    className="project-view"
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Explore {project.name} <ArrowUpRight size={17} />
                  </a>
                )}
              </div>
              <div className="project-title">
                <h3>{project.name}</h3>
                <span>{project.category.toUpperCase()}</span>
              </div>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
