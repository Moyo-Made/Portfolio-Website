interface Skill {
	name: string;
}

interface Experience {
	period: string;
	role: string;
	company: string;
	description: string;
}

export const skills: Skill[] = [
	{ name: "React.js" },
	{ name: "Next.js" },
	{ name: "TypeScript" },
	{ name: "JavaScript" },
	{ name: "TailwindCSS" },
	{ name: "Redux / Zustand" },
	{ name: "React Query" },
	{ name: "REST APIs" },
	{ name: "GraphQL" },
	{ name: "Git" },
	{ name: "Jest" },
	{ name: "Cypress" },
];

export const experiences: Experience[] = [
	{
		period: "Nov 2024 – Jun 2025",
		role: "Frontend Developer",
		company: "TechSynergy (Remote)",
		description:
			"Engineered the rebranded company website with React and TypeScript, improving cross-browser reliability by 40%. Built the PrintEazy e-commerce UI with reusable components that cut feature development time by 30%. Raised accessibility scores to 90% and boosted SEO-driven traffic by 18% through performance and metadata optimizations.",
	},
	{
		period: "Aug 2024 – Present",
		role: "Frontend Developer",
		company: "DevFest Lagos (Remote)",
		description:
			"Delivered high-performance features for the 2024/2025 event platforms serving 4,000+ attendees. Applied WCAG 2.1 AA standards, raising accessibility scores from 82% to 96%. Created reusable components and a style guide that reduced page rollout time by 25%.",
	},
	{
		period: "Feb 2024 – Aug 2024",
		role: "Frontend Developer",
		company: "Laferla (Remote)",
		description:
			"Built a responsive digital insurance card platform integrated with Google Wallet and Apple APIs, increasing adoption by 25%. Improved onboarding flows, driving 20% growth in new sign-ups. Optimized dashboard performance with lazy loading and code splitting, cutting navigation time by 35%.",
	},
];
