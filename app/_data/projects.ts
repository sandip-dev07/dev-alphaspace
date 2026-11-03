// Source: https://www.devalphaspace.in/projects
type Project = {
  id: string;
  name: string;
  image: string;
  category: string;
  description: string;
  href?: string;
};

export const projects: Project[] = [
  { id: "indohype-web", name: "Indohype", image: "/projects/indohype-web.png", category: "Editorial website", description: "A home for news, stories, and fresh perspectives." },
  { id: "kusum-app", name: "Kusum Palace App", image: "/projects/kusum.png", category: "Mobile app", description: "Hotel discovery and room booking on mobile." },
  { id: "event-wizard", name: "Event Wizard", image: "/projects/event-wizard.png", category: "Event platform", description: "Tools for coordinating events, schedules, and attendees." },
  { id: "indohype-app", name: "Indohype App", image: "/projects/indohype-app.png", category: "Mobile app", description: "News and stories in a mobile experience." },
  { id: "kusum-web", name: "Hotel Kusum Palace", image: "/projects/kusum-web.png", category: "Hospitality website", description: "A digital introduction to a stay in Nepal." },
];
