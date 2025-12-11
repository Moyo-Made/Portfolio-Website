"use client";

import { motion } from "framer-motion";
import { experiences, skills } from "@/data/experience";

const Experience = () => {
	return (
		<div
			id="skills"
			className="px-4 sm:px-20 md:px-24 lg:px-32 mt-10 md:mt-20 mb-7"
		>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
				{/* Skills Section */}
				<div>
					<motion.h2
						className="text-3xl sm:text-4xl font-semibold mb-3 md:mb-5"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.6 }}
					>
						Skills
					</motion.h2>
					<div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
						{skills.map((skill, index) => (
							<motion.div
								key={skill.name}
								className="p-4 bg-gray-50 rounded-lg"
								initial={{ opacity: 0, scale: 0.9 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true, margin: "-100px" }}
								transition={{ duration: 0.4, delay: index * 0.05 }}
								whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6" }}
							>
								<h3 className="font-semibold text-lg">{skill.name}</h3>
							</motion.div>
						))}
					</div>
				</div>

				{/* Experience Section */}
				<div>
					<motion.h2
						className="text-3xl sm:text-4xl font-semibold mb-3 md:mb-5"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						Experience
					</motion.h2>
					<div className="space-y-8">
						{experiences.map((exp, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, x: 30 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true, margin: "-100px" }}
								transition={{ duration: 0.6, delay: index * 0.2 }}
							>
								<span className="text-sm text-gray-500">{exp.period}</span>
								<h3 className="font-semibold text-xl mt-1">{exp.role}</h3>
								<h4 className="text-blue-600 text-lg">{exp.company}</h4>
								<p className="text-gray-600 mt-2">{exp.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experience;
