"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaLaptopCode, FaChalkboardTeacher } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";

const achievements = [
	{
		icon: <FaTrophy className="text-[#009bdf] w-6 h-6" />,
		title: "Intra-LASU Debate Society Public Speaking Award",
		year: 2025,
		description:
			"Recognized as Best Debater for outstanding public speaking skills.",
	},
	{
		icon: <FaLaptopCode className="text-[#009bdf] w-6 h-6" />,
		title: "DevFest Lagos 2025 Ticketing Platform",
		year: 2025,
		description:
			"Contributed to development supporting 4,000+ attendees with zero downtime.",
	},
	{
		icon: <FaChalkboardTeacher className="text-[#009bdf] w-6 h-6" />,
		title: "Frontend Mentor, GDG LASU Bootcamp 2.0",
		year: 2025,
		description:
			"Guided and supported participants in frontend development projects, providing mentorship and practical insights during the bootcamp.",
	},
	{
		icon: <FaUsers className="text-[#009bdf] w-6 h-6" />,
		title: "Member, Digital Working Group – DevFest Lagos",
		year: 2024,
		description:
			"Contributed to planning and executing digital initiatives, collaborating with cross-functional teams to enhance event platforms and attendee experience.",
	},
];

const Achievements = () => {
	return (
		<div
			id="achievements"
			className="px-4 sm:px-20 md:px-24 lg:px-32 mt-10 mb-10"
		>
			<motion.h2
				className="text-3xl sm:text-4xl font-semibold mb-5 text-center"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-100px" }}
				transition={{ duration: 0.6 }}
			>
				Achievements
			</motion.h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
				{achievements.map((achieve, index) => (
					<motion.div
						key={index}
						className="flex items-start gap-4 p-4 bg-gray-50 rounded-md shadow-md"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
						whileHover={{
							y: -5,
							boxShadow:
								"0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
						}}
					>
						<motion.div
							className="mt-1"
							whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
							transition={{ duration: 0.5 }}
						>
							{achieve.icon}
						</motion.div>
						<div>
							<motion.h3
								className="font-semibold text-lg"
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
							>
								{achieve.title}{" "}
								<span className="text-gray-500 font-normal">
									({achieve.year})
								</span>
							</motion.h3>
							<motion.p
								className="text-gray-600 mt-1"
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
							>
								{achieve.description}
							</motion.p>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default Achievements;
