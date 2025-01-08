import React from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
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

interface ProjectLinksProps {
	github?: string;
	demo?: string;
}

const ProjectLinks: React.FC<ProjectLinksProps> = ({ github, demo }) => {
	// Only render the container if there are links to show
	if (!github && !demo) return null;

	return (
		<div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
			{github && (
				<a
					href={github}
					target="_blank"
					rel="noopener noreferrer"
					className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors duration-200"
				>
					<Github className="w-6 h-6 text-gray-800" />
				</a>
			)}
			{demo && (
				<a
					href={demo}
					target="_blank"
					rel="noopener noreferrer"
					className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors duration-200"
				>
					<ExternalLink className="w-6 h-6 text-gray-800" />
				</a>
			)}
		</div>
	);
};

const Portfolio = () => {
	return (
		<div className="py-16 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center">
					<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5">
						My Projects
					</h2>
					<p className="text-xl text-gray-600 mb-12">
						Here are some of my recent works that showcase my skills and passion
						for development.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, index) => (
						<div
							key={index}
							className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
						>
							<div className="relative">
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-48 object-cover"
								/>
								<ProjectLinks github={project.github} demo={project.demo} />
							</div>

							<div className="p-6">
								<h3 className="text-xl font-semibold text-gray-900 mb-2">
									{project.title}
								</h3>
								<p className="text-gray-600 mb-4">{project.description}</p>
								<div className="flex flex-wrap gap-2">
									{project.tags.map((tag, tagIndex) => (
										<span
											key={tagIndex}
											className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
										>
											{tag}
										</span>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
