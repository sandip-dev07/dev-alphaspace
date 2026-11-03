import { Code2, Database, Layers3, MousePointer2, Sparkles, Smartphone } from "lucide-react";
import { contactEmail } from "./site";

export { contactEmail };

export const bookingUrl = "https://cal.com/dev-alphaspace-mq7ywe/30min";

export function enquiryHref(subject?: string) {
  const href = `mailto:${contactEmail}`;
  return subject ? `${href}?subject=${encodeURIComponent(subject)}` : href;
}

export const services = [
  {
    icon: MousePointer2,
    name: "UI/UX Design",
    copy: "Thoughtful experiences. Interfaces people love to use.",
    tags: "Research · Product design · Design systems",
  },
  {
    icon: Code2,
    name: "Web Development",
    copy: "Beautiful on the outside. Built to scale on the inside.",
    tags: "Websites · Web apps · SaaS platforms",
  },
  {
    icon: Smartphone,
    name: "App Development",
    copy: "Your product, in their pocket. Native feel, everywhere.",
    tags: "iOS · Android · Cross-platform",
  },
  {
    icon: Sparkles,
    name: "AI Products",
    copy: "Less busywork. More possibility. AI that earns its place.",
    tags: "AI-powered MVPs · Integrations · Workflows",
  },
  {
    icon: Database,
    name: "Data Solutions",
    copy: "Connect the dots between your data and your next move.",
    tags: "Data pipelines · Analytics · Dashboards",
  },
  {
    icon: Layers3,
    name: "MVP Development",
    copy: "Get the right first version into real hands. Then grow.",
    tags: "Idea validation · Prototyping · Launch",
  },
];

export const faqs = [
  {
    question: "I have an idea. Where do we start?",
    answer: "Start with a conversation about your users, the problem you want to solve, and your priorities. A rough idea is enough. We can help define a useful first version and the next steps toward launch."
  },
  {
    question: "What should I prepare before our first call?",
    answer: "Bring a short description of your idea, who it is for, and what you want to achieve. Any existing designs, product links, preferred timeline, or budget range will help us make the conversation more useful. A detailed brief is not required."
  },
  {
    question: "Can you help with just design or development?",
    answer: "Yes. You can engage us for UI/UX design, web or mobile development, data solutions, AI integrations, or an MVP. Tell us what your team already handles and where you need support."
  },
  {
    question: "Can you improve an existing product instead of starting over?",
    answer: "Share your current product, designs, and technical setup. We can discuss a review of what works, what needs attention, and whether targeted improvements or a larger rebuild would better serve your goals."
  },
  {
    question: "How long will my project take?",
    answer: "Timelines depend on the features, integrations, design requirements, and feedback involved. We scope the work before estimating delivery and identify milestones and dependencies. Share any fixed launch date early so it can be considered in the plan."
  },
  {
    question: "What does a project cost, and what is included?",
    answer: "Pricing depends on scope, complexity, and the team involved. After discovery, we propose deliverables and milestones through a fixed-scope or time-and-materials engagement. Ask for hosting, third-party subscriptions, AI usage, and ongoing support to be itemized so you can plan the full cost."
  },
  {
    question: "What happens if I need to change the scope?",
    answer: "Bring new requirements into the discussion as soon as they arise. Scope changes need to be reviewed against the agreed deliverables, budget, and timeline. The next step is to decide together whether to include them now, swap priorities, or schedule a later phase."
  },
  {
    question: "Who owns the code, designs, and project accounts?",
    answer: "Ownership, licensing, repository access, and handover should be explicitly covered in your project agreement. Third-party tools and open-source components may have separate terms. Raise any ownership or account requirements before the engagement begins."
  },
  {
    question: "Can you build apps for both iOS and Android?",
    answer: "Yes. Our mobile offering covers iOS, Android, and cross-platform development. The right approach depends on your features, device integrations, budget, and maintenance needs. Discuss app-store submission and developer-account responsibilities during scoping."
  },
  {
    question: "Can you add AI to our existing tools or workflows?",
    answer: "AI integrations and workflows are part of our offering. Start with the task you want to improve and the systems it touches. We can discuss feasibility, data access, evaluation, human review, and ongoing model costs before deciding what to build."
  },
  {
    question: "How should we handle confidential information and sensitive data?",
    answer: "Tell us about confidentiality, access, hosting, and data-retention requirements before sharing sensitive material. Any NDA, security obligations, or restrictions on third-party AI services should be reviewed and agreed for the engagement. Use sample or anonymized data for initial discussions where possible."
  },
  {
    question: "Can I hire talent instead of a full project team?",
    answer: "Yes. Tell us the role, skills, and engagement you need. We help match design, engineering, data, and AI talent to your team. Contact us to discuss current availability and a suitable engagement."
  },
  {
    question: "How does a talent engagement work?",
    answer: "Share the skills you need, expected responsibilities, time-zone overlap, and intended duration. Availability, selection, working hours, communication, and engagement terms need to be confirmed before someone joins your team."
  },
  {
    question: "How will we stay updated during a project?",
    answer: "We use milestones, progress updates, and feedback to keep the work aligned. Agree on the communication channel, review cadence, and decision-makers at kickoff so both teams know where to share feedback and how approvals will work."
  },
  {
    question: "Do you stay involved after launch?",
    answer: "Yes. We offer ongoing maintenance, monitoring, bug fixes, and product improvements. Support scope, response expectations, and any recurring costs are agreed as part of the engagement. Discuss these before launch so you know what is covered."
  }
];

export const talentRoles = [
  {
    "number": "01",
    "title": "Product & UI/UX designers",
    "description": "From first sketch to final polish.",
    "tag": "Design"
  },
  {
    "number": "02",
    "title": "Web & mobile engineers",
    "description": "Built for your stack. Ready for your team.",
    "tag": "Engineering"
  },
  {
    "number": "03",
    "title": "AI & data specialists",
    "description": "Turn complex challenges into clear solutions.",
    "tag": "Intelligence"
  }
];

export const processSteps = [
  {
    "number": "01",
    "title": "Get to the why.",
    "description": "We ask questions, challenge assumptions, and understand what success looks like for you."
  },
  {
    "number": "02",
    "title": "Make it tangible.",
    "description": "We turn the problem into a clear plan, thoughtful designs, and a focused first version."
  },
  {
    "number": "03",
    "title": "Build. Learn. Repeat.",
    "description": "We work in clear milestones, share progress, and use your feedback to keep moving."
  },
  {
    "number": "04",
    "title": "Launch is a beginning.",
    "description": "We help you ship confidently, support your product, and plan for what comes next."
  }
];
