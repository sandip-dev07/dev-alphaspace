export const deliveryStages = [
  {
    id: "discover", title: "Get to the why.", label: "Discovery & alignment",
    description: "Start with the problem, the people experiencing it, and the outcome you want to change. We review what exists, challenge assumptions, and identify the constraints before committing to a solution.",
    activities: ["Understand users, business goals, and current workflows", "Review existing designs, systems, integrations, and data", "Identify dependencies, risks, and measures of success"],
    output: "A shared problem statement, prioritized requirements, and an initial scope with open questions made explicit.",
    input: "Bring product context, access to the right stakeholders, and any existing research or technical documentation.",
    checkpoint: "Agree on the problem, priorities, and what a successful first release should achieve.",
  },
  {
    id: "define", title: "Make it tangible.", label: "Design & delivery planning",
    description: "Turn the direction into something you can review. We explore the key journeys, test important assumptions, and shape a build plan around the most useful first version.",
    activities: ["Map user flows and create wireframes or prototypes", "Define the technical approach and integration boundaries", "Agree on milestones, acceptance criteria, and responsibilities"],
    output: "Reviewable designs or a technical proof of concept, a scoped backlog, and a delivery plan with estimates and dependencies.",
    input: "Review the proposed experience, clarify business rules, and help resolve scope and priority decisions.",
    checkpoint: "Confirm the proposed solution and delivery scope before implementation expands.",
  },
  {
    id: "build", title: "Build. Learn. Repeat.", label: "Implementation & validation",
    description: "Deliver in manageable increments so feedback can shape the product while it is being built. We connect design, implementation, and testing around the agreed priorities.",
    activities: ["Implement features and integrations in reviewable milestones", "Test core journeys, edge cases, and relevant quality requirements", "Share progress, demonstrate working features, and track feedback"],
    output: "Working product increments, test findings, documented decisions, and an updated backlog for the next milestone.",
    input: "Review demos, provide consolidated feedback, and make timely decisions when requirements or trade-offs change.",
    checkpoint: "Check completed work against acceptance criteria and agree on what moves into the next milestone.",
  },
  {
    id: "launch", title: "Launch is a beginning.", label: "Release, handover & improvement",
    description: "Prepare the product and your team for real use. We work through release readiness, clarify operational ownership, and use early feedback to inform what comes next.",
    activities: ["Complete agreed acceptance checks and release preparation", "Document deployment, access, and operational responsibilities", "Plan monitoring, support, and post-launch priorities"],
    output: "A release checklist, handover documentation, and an agreed plan for support and future improvements.",
    input: "Confirm release approval, account ownership, internal training needs, and the people responsible after launch.",
    checkpoint: "Agree on launch readiness, known limitations, and the scope of any ongoing support.",
  },
];

export const workingPrinciples = [
  { title: "One shared view of the work", description: "Agree on a place for priorities, tasks, decisions, and feedback. Keep progress and blockers visible to the people who need to act on them." },
  { title: "Feedback with a clear owner", description: "Set a review cadence and name the decision-makers. Consolidated feedback helps the team move forward with a consistent direction." },
  { title: "Changes with context", description: "Review new requests against the budget, timeline, and current scope. Decide together whether to add, swap, or defer work before proceeding." },
  { title: "Handover built into delivery", description: "Capture important decisions and operational knowledge as the work develops. Clarify code, design, account, and support ownership in the agreement." },
];

export const qualityPractices = [
  { title: "Web & mobile products", description: "Define checks for core user journeys, device and browser coverage, accessibility, performance, and integrations based on the product’s needs." },
  { title: "Data & governance", description: "Validate source mappings, transformations, reporting definitions, and data quality rules. Establish ownership, access boundaries, and issue resolution workflows." },
  { title: "AI & machine learning", description: "Agree on evaluation examples and success measures. Review output quality, failure cases, model costs, and where human review is needed before rollout." },
];

export const approachFaqs = [
  { question: "Do we need a complete specification to get started?", answer: "No. A clear description of the problem, your users, and your goals is enough for an initial conversation. Discovery helps identify missing requirements and turn assumptions into a scope that can be reviewed." },
  { question: "Can you join a project that is already underway?", answer: "Yes. We start by understanding the current product, existing decisions, and team responsibilities. The first step may be a focused design or technical review before agreeing on the next milestone." },
  { question: "When will we know the timeline and cost?", answer: "Estimates become more useful once the scope, integrations, dependencies, and review process are understood. We discuss milestones and commercial terms before implementation, and revisit them if the agreed scope changes." },
  { question: "How often will we see progress?", answer: "We agree on a review and communication cadence at kickoff based on the engagement. Updates should cover completed work, upcoming priorities, blockers, and decisions needed from your team." },
  { question: "What happens when we request a change?", answer: "We assess the impact on scope, cost, dependencies, and delivery dates. Together we decide whether to include the request now, exchange it for another priority, or schedule it for a later phase." },
  { question: "How do you decide a release is ready?", answer: "We review the agreed acceptance criteria, testing results, known issues, and operational preparations with you. Launch approval and responsibility for any remaining limitations should be clear before release." },
  { question: "What support is included after launch?", answer: "Maintenance, monitoring, fixes, and improvements can be scoped as ongoing work. Support coverage, response expectations, third-party costs, and handover responsibilities are agreed for the engagement rather than assumed." },
];
