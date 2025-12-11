"use client";

import React from "react";
import { Cardo } from "next/font/google";

const cardo = Cardo({
	weight: ["400", "700"],
	subsets: ["latin"],
});

const About = () => {
	return (
		<div
			id="about"
			className="blockanimation px-4 sm:px-20 md:px-24 lg:px-32 mt-10 md:mt-4 mb-10"
		>
			<div>
				<h2 className="text-lg uppercase tracking-wider text-gray-600">
					About me
				</h2>
				<div className="w-20 h-[2px] bg-gray-500" />
			</div>

			<h1
				className={`${cardo.className} text-xl sm:text-2xl md:text-3xl font-bold pt-5 leading-10`}
			>
				I am a frontend developer with 3 years of experience building fast,
				responsive, and user-focused web applications. I specialise in
				transforming ideas into clean, scalable interfaces that solve real
				problems and deliver measurable results for clients and users.
			</h1>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 md:gap-16 mt-4 sm:mt-10 md:mt-12 lg:mt-16">
				{" "}
				{/* Left Column */}
				<div>
					<h1
						className={`${cardo.className} text-2xl sm:text-3xl md:text-4xl text-[#009bdf] font-semibold pt-5 leading-10`}
					>
						I create functional, modern, and visually consistent digital
						experiences.
					</h1>
				</div>
				<div>
					<p className="text-lg font-normal">
						With years of experience in frontend development, I translate client
						requirements into modern, scalable, and intuitive web solutions.
						I’ve worked with businesses across various industries, giving me the
						flexibility to understand different goals and deliver outcomes
						aligned with current best practices and technologies.
					</p>

					<p className="mt-5 text-lg font-normal">
						During this time, I’ve built responsive applications, landing pages,
						interactive components, and refined web interfaces. My work focuses
						on clarity, usability, and high-quality execution. Beyond
						implementation, I provide strategic insight—offering options,
						identifying improvements, and collaborating effectively to achieve
						the strongest results on every project.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
