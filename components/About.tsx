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
				I'm a frontend developer with 3 years of experience, dedicated to
				building web applications that not only meet client needs but also
				deliver exceptional user experiences.
			</h1>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 md:gap-16 mt-4 sm:mt-10 md:mt-12 lg:mt-16">
				{" "}
				{/* Left Column */}
				<div>
					<h1
						className={`${cardo.className} text-2xl sm:text-3xl md:text-4xl text-[#009bdf] font-semibold pt-5 leading-10`}
					>
						I design professional and beautiful websites
					</h1>
				</div>
				<div>
					<p className="text-lg font-normal">
						With years of experience in frontend development, I have honed the
						skills to understand client requirements and deliver solutions
						aligned with the latest trends. I've collaborated with businesses
						across various industries, making me a reliable partner for your
						project.
					</p>

					<p className="mt-5 text-lg text-gray-500 font-normal">
						I've spent most of these years working in areas like responsive web
						applications, landing pages, interactive components, and app UI/UX,
						to my current role focusing on creating seamless user experiences
						for web platforms. Having contributed to numerous live projects, I
						can offer valuable suggestions and innovative ideas to move forward
						with. With me, you're not limited to a single approach; I provide a
						range of options that we can refine together to achieve the best
						results.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
