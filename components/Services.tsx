"use client";

import React from "react";
import { FaLaptopCode, FaMicrophone } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
	{
		icon: FaLaptopCode,
		title: "Build",
		description:
			"I build modern, scalable web applications using React, Next.js, and TypeScript across EdTech, FinTech, and community platforms. Fast, accessible, and built to last.",
	},
	{
		icon: FaMicrophone,
		title: "Speak & Lead",
		description:
			"I speak on national platforms, mentor young people, and serve as a Lagos State Youth Ambassador advocating for quality education and youth participation across Nigeria.",
	},
];

const Services = () => {
	return (
		<div
			id="services"
			className="px-4 sm:px-20 md:px-24 lg:px-32 mt-10 md:mt-20 mb-10"
		>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-100px" }}
				transition={{ duration: 0.6 }}
			>
				<h2 className="text-lg uppercase tracking-wider text-gray-600">
					Blog & Articles
				</h2>
				<motion.div
					className="h-[2px] bg-gray-500"
					initial={{ width: 0 }}
					whileInView={{ width: "6rem" }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}
					style={{ width: 0 }}
				/>

				<p className="text-xl text-gray-600 mb-10 mt-3">
					I build, I speak, and I lead. Three things that look different on the
					surface but point in the same direction: creating impact for people
					who deserve better access to technology and opportunity.
				</p>
			</motion.div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
				{services.map((service, index) => (
					<motion.div
						key={service.title}
						className="group relative bg-white border border-gray-100 rounded-xl p-7 overflow-hidden"
						style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
						whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
					>
						<div className="absolute top-0 left-0 right-0 h-[3px] bg-[#009bdf] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />

						<div className="flex gap-4 items-center mb-5">
							<motion.div
								className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors duration-300"
								whileHover={{ rotate: [0, -8, 8, -4, 0] }}
								transition={{ duration: 0.5 }}
							>
								<service.icon className="text-[#009bdf]" size={20} />
							</motion.div>
							<h2 className="uppercase text-xl font-semibold tracking-wide text-gray-900">
								{service.title}
							</h2>
						</div>

						<p className="text-base text-gray-500 leading-relaxed">
							{service.description}
						</p>

						<div className="absolute bottom-0 right-0 w-16 h-16 border-t border-l border-gray-50 group-hover:border-blue-50 transition-colors duration-300 rounded-tl-xl" />
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default Services;
