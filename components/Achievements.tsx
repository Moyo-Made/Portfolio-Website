"use client";

import React from "react";
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
			<h2 className="text-3xl sm:text-4xl font-semibold mb-5 text-center">Achievements</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
				{achievements.map((achieve, index) => (
					<div
						key={index}
						className="flex items-start gap-4 p-4 bg-gray-50 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
					>
						<div>{achieve.icon}</div>
						<div>
							<h3 className="font-semibold text-lg">
								{achieve.title}{" "}
								<span className="text-gray-500 font-normal">
									({achieve.year})
								</span>
							</h3>
							<p className="text-gray-600 mt-1">{achieve.description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Achievements;
