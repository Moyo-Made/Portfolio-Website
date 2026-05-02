interface Project {
	title: string;
	image: string;
	description: string;
	github?: string;
	demo?: string;
	tags: string[];
}

export const projects: Project[] = [
	{
		title: "DevFest Lagos 2025 — Ticketing Platform",
		image: "/images/ticket.png",
		description:
			"Contributing to the Google Developer ecosystem, I built core parts of the ticketing platform for DevFest Lagos 2025 — one of Nigeria's largest developer conferences. Engineered the ticket selection flow, attendee registration logic, and checkout experience, optimised for 4,000+ concurrent users with zero downtime.",
		tags: ["Next.js", "Responsive UI", "State Management", "API Integration"],
		demo: "https://tickets.devfestlagos.com/",
	},
	{
		title: "DevFest Lagos 2024 — Official Website",
		image: "/images/devfest.PNG",
		description:
			"Built key sections of the official DevFest Lagos 2024 website, serving thousands of daily visitors in the lead-up to the event. Implemented WCAG 2.1 AA accessibility standards, raising accessibility scores from 82% to 96%, and delivered reusable UI components that cut page rollout time by 25%.",
		tags: ["Next.js", "TypeScript", "SCSS"],
		demo: "https://2024.devfestlagos.com/",
	},
	{
		title: "Go-Digital — Digital Insurance Card Platform",
		image: "/images/dc.PNG",
		description:
			"Laferla needed to move their insurance cards from physical to digital. I built the platform — integrated with Google Wallet and Apple Wallet APIs — increasing user adoption by 25%. Redesigned authentication flows and dashboards, improving onboarding and driving 20% growth in new sign-ups.",
		tags: ["Next.js", "TypeScript", "Tailwind CSS", "Redux"],
	},
	{
		title: "Mega League — Global STEM & AI Collaboration Platform",
		image: "/images/mega home.PNG",
		description:
			"Maintained and improved the frontend for a global STEM and AI collaboration platform serving students and educators across multiple countries. Performance and responsiveness improvements led to a 35% increase in user engagement, with platform stability maintained throughout high-traffic events.",
		tags: ["JavaScript", "React.js", "CSS"],
	},
];
