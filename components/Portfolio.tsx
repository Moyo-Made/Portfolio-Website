"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import Image from "next/image";

interface ProjectLinksProps {
	github?: string;
	demo?: string;
}

const ProjectLinks: React.FC<ProjectLinksProps> = ({ github, demo }) => {
	// Only render the container if there are links to show
	if (!github && !demo) return null;

	return (
		<motion.div
			className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center space-x-4"
			initial={{ opacity: 0 }}
			whileHover={{ opacity: 1 }}
			transition={{ duration: 0.3 }}
		>
			{" "}
			{github && (
				<motion.a
					href={github}
					target="_blank"
					rel="noopener noreferrer"
					className="p-2 bg-white rounded-full"
					whileHover={{ scale: 1.1, backgroundColor: "#f3f4f6" }}
					whileTap={{ scale: 0.95 }}
					initial={{ scale: 0, rotate: -180 }}
					animate={{ scale: 1, rotate: 0 }}
					transition={{ duration: 0.3, delay: 0.1 }}
				>
					<Github className="w-6 h-6 text-gray-800" />
				</motion.a>
			)}
			{demo && (
				<motion.a
					href={demo}
					target="_blank"
					rel="noopener noreferrer"
					className="p-2 bg-white rounded-full"
					whileHover={{ scale: 1.1, backgroundColor: "#f3f4f6" }}
					whileTap={{ scale: 0.95 }}
					initial={{ scale: 0, rotate: -180 }}
					animate={{ scale: 1, rotate: 0 }}
					transition={{ duration: 0.3, delay: 0.2 }}
				>
					<ExternalLink className="w-6 h-6 text-gray-800" />
				</motion.a>
			)}
		</motion.div>
	);
};

const Portfolio = () => {
	return (
		<div id="projects" className="py-10 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					className="text-center"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.6 }}
				>
					<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5">
						My Projects
					</h2>
					<p className="text-xl text-gray-600 mb-10">
						Here are some of my recent works that showcase my skills and passion
						for development.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, index) => (
						<motion.div
							key={index}
							className="group relative bg-white rounded-xl shadow-md overflow-hidden"
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							whileHover={{
								y: -8,
								shadow:
									"0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
							}}
						>
							<div className="aspect-w-16 aspect-h-9 relative">
								<Image
									src={project.image}
									alt={project.title}
									width={1270}
									height={192}
									className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
								/>
								<ProjectLinks github={project.github} demo={project.demo} />
							</div>

							<div className="p-6">
								<h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
									{project.title}
								</h3>
								<p className="text-gray-600 mb-4">{project.description}</p>
								<div className="flex flex-wrap gap-2">
									{project.tags.map((tag, tagIndex) => (
										<motion.span
											key={tagIndex}
											className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
											initial={{ opacity: 0, scale: 0.8 }}
											whileInView={{ opacity: 1, scale: 1 }}
											viewport={{ once: true }}
											transition={{ duration: 0.3, delay: tagIndex * 0.05 }}
										>
											{tag}
										</motion.span>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
