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
		title: "DevFest Lagos 2025 Ticketing Platform",
		image: "/images/ticket.png",
		description:
			"Developed core parts of the DevFest Lagos 2025 ticketing platform, including ticket selection, attendee form flow, and registration logic. Optimized performance and responsiveness for 4,000+ users, with seamless navigation, accessibility, and smooth checkout interactions.",
		tags: ["Next.js", "Responsive UI", "State management", "API integration"],
		demo: "https://tickets.devfestlagos.com/",
	},
	{
		title: "DevFest Lagos 2024 Official Website",
		image: "/images/devfest.PNG",
		description:
			"Built key sections of the DevFest Lagos 2024 website with WCAG 2.1 AA accessibility, responsive design, and optimized Core Web Vitals. Implemented reusable UI components and SEO-friendly metadata, ensuring smooth performance for thousands of daily visitors.",
		tags: ["Next.js", "TypeScript", "SCSS"],
		demo: "https://2024.devfestlagos.com/",
	},
	{
		title: "Go-Digital at Laferla: Digital Insurance Card Platform",
		image: "/images/dc.PNG",
		description:
			"Built a digital insurance card platform integrated with Google Wallet & Apple APIs, increasing user adoption. Redesigned authentication flows and dashboards, improving onboarding and retention with accessible and scalable UI components.",
		tags: ["Next.js", "TypeScript", "Tailwind CSS", "Redux"],
	},
	{
		title: "Promptopia: AI-Powered Prompt Sharing Platform",
		image: "/images/prompt.PNG",
		description:
			"Open-source AI prompting tool for discovering, creating, and sharing prompts. Developed a user-friendly interface leveraging AI to enhance creativity and collaboration within the community.",
		github: "https://github.com/Moyo-Made/Promptopia",
		demo: "https://promptopia-peach-one.vercel.app/",
		tags: ["JavaScript", "Next.js", "MongoDB", "CSS"],
	},
	{
		title: "Mega League: Global STEM and AI Collaboration Platform",
		image: "/images/mega home.PNG",
		description:
			"Maintained the frontend for a global STEM & AI collaboration platform, enhancing responsiveness and performance, resulting in a 35% increase in user engagement. Ensured platform stability during high-traffic events.",
		tags: ["JavaScript", "React.js", "CSS"],
	},
	{
		title: "Hoobank: Next-Generation Payment Method",
		image: "/images/nextgen.PNG",
		description:
			"Developed the frontend for a modern FinTech platform helping users find optimal credit card options. Simplified complex financial data into an intuitive, user-friendly interface.",
		tags: ["JavaScript", "React.js", "CSS"],
		github: "https://github.com/Moyo-Made/Modern-banking-app",
		demo: "https://hoobankss.netlify.app/",
	},
];
