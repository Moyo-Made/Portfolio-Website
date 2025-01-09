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
		title: "DevFest Lagos 2024 Website",
		image: "/images/devfest.PNG",
		description:
			"The official website for DevFest Lagos 2024 serves as the central hub for event information, schedules, speaker details, and attendee resources for one of the largest developer conferences in the region. Designed to accommodate over 3,500 users, the site provides an engaging, user-friendly experience that caters to both local and international participants.",
		demo: "https://devfestlagos.com/",
		tags: ["Next.js", "TypeScript", "SCSS"],
	},
  {
		title: "Go-Digital at Laferla: Digital Insurance Card Platform",
		image: "/images/dc.PNG",
		description:
			"The Go-Digital platform revolutionizes insurance management by integrating with Google Wallet and Apple API, providing users with easy digital access to their insurance cards. This innovation led to a 25% increase in user adoption. The redesigned landing page optimized authentication flows, boosting new customer acquisition by 20%, while the user-friendly dashboard enhanced retention by 15%, solving key issues in user engagement and accessibility.",
		tags: ["Next.js", "TypeScript", "Tailwind CSS", "Redux"],
	},
	{
		title: "Promptopia: AI-Powered Prompt Sharing Platform",
		image: "/images/prompt.PNG",
		description:
			"An open-source AI prompting tool designed to help users discover, create, and share creative prompts. Developed a user-friendly interface that leverages AI to enhance creativity and collaboration, making it easier for users to engage with and contribute to the community.",
		github: "https://github.com/Moyo-Made/Promptopia",
		demo: "https://promptopia-peach-one.vercel.app/",
		tags: ["JavaScript", "Next.js", "MongoDB", "CSS"],
	},
  {
		title: "Mega League: Global STEM and AI Collaboration Platform",
		image: "/images/mega home.PNG",
		description:
			"Developed and maintained the frontend for a global platform that connects students in STEM, AI, and computer science, fostering collaboration and innovation. Enhanced responsiveness and performance, resulting in a 35% increase in user engagement. Played a crucial role in the development lifecycle, ensuring platform stability and seamless user experience during high-traffic hackathons and events.",
		tags: ["JavaScript", "React.js", "CSS"],
	},
  {
		title: "Hoobank: Next-Generation Payment Method",
		image: "/images/nextgen.PNG",
		description:
			"Hoobank addresses a critical pain point in FinTech by simplifying the process of finding the best credit card options for users. Leveraging expert methodologies, the platform analyzes key factors like annual percentage rates and fees to provide personalized recommendations. This streamlined approach helps users make informed financial decisions, enhancing their overall experience and satisfaction in navigating the complex credit card landscape.",
		github: "https://github.com/Moyo-Made/Modern-banking-app",
		demo: "https://hoobankss.netlify.app/",
		tags: ["JavaScript", "React.js", "CSS"],
	},
];
