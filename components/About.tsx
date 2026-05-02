"use client";

import React from "react";
import { Cardo } from "next/font/google";
import { motion } from "framer-motion";

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
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-100px" }}
				transition={{ duration: 0.6 }}
			>
				<h2 className="text-lg uppercase tracking-wider text-gray-600">
					About me
				</h2>
				<motion.div
					className="w-20 h-[2px] bg-gray-500"
					initial={{ width: 0 }}
					whileInView={{ width: "4rem" }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}
				/>
			</motion.div>

			<motion.h1
				className={`${cardo.className} text-xl sm:text-2xl md:text-3xl font-bold pt-5 leading-10`}
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-100px" }}
				transition={{ duration: 0.6, delay: 0.3 }}
			>
				I grew up in Ajegunle, Lagos. At some point, my dad made a decision that
				changed everything. He moved us out so I could get better access to
				education. Same Lagos, different reality.
			</motion.h1>

			<motion.div
				className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 md:gap-16 mt-4 sm:mt-10 md:mt-12 lg:mt-16"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true, margin: "-100px" }}
				transition={{ duration: 0.5, delay: 0.5 }}
			>
				{" "}
				<motion.div
					initial={{ opacity: 0, x: -30 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.6, delay: 0.6 }}
				>
					<h1
						className={`${cardo.className} text-2xl sm:text-3xl md:text-4xl text-[#009bdf] font-semibold pt-5 leading-10`}
					>
						Now, I&apos;m doing my part to change that for others.
					</h1>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, x: 30 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.6, delay: 0.7 }}
				>
					<p className="text-lg font-normal">
						I&apos;m a Software Developer, Public Speaker, and Lagos State Youth
						Ambassador. My work sits at the intersection of technology,
						education, and communication because I believe those three things,
						used together, can open doors that should never have been closed.
					</p>

					<motion.p
						className="mt-5 text-lg font-normal"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.5, delay: 0.9 }}
					>
						As a Frontend Engineer, I&apos;ve built platforms across EdTech,
						FinTech, and community systems including contributing to the
						Google Developer ecosystem through DevFest Lagos, serving 4,000+
						attendees. But the code is only part of the story. Everything I do
						points in one direction: <span className="font-medium">making learning and opportunities easier to
						access, especially for young people who don&apos;t always get the
						right exposure early.</span>
					</motion.p>

				</motion.div>
			</motion.div>
		</div>
	);
};

export default About;
