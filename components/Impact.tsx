"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const impacts = [
	{
		number: "01",
		category: "Television",
		title: "TVC — The Big Issue",
		description:
			"Featured on national television as a youth voice on pressing social issues bringing the perspective of young Nigerians to a platform that reaches millions.",
		image: "/images/tvc.jpeg",
		stat: "National TV",
		statLabel: "Reach",
	},
	{
		number: "02",
		category: "Public Service",
		title: "Lagos State Youth Ambassador",
		description:
			"Appointed February 2026. Serving as Operations & Logistics Lead, contributing to state-level youth initiatives and leading operations for the programme's first major project.",
		image: "/images/lagos.jpg",
		stat: "Feb 2026",
		statLabel: "Appointed",
	},
	{
		number: "03",
		category: "Public Speaking",
		title: "Best Debater — LSUDS '25/'26",
		description:
			"Won the intra-LSUDS competition after competing across multiple rounds. Not just an award, the result of showing up, failing, improving, and showing up again.",
		image: "/images/award.JPEG",
		stat: "Award",
		statLabel: "Winning",
	},
	{
		number: "04",
		category: "Media",
		title: "Rave TV — Youth & Nation Building",
		description:
			"Spoke as a Lagos State Youth Ambassador on youth participation and nation building making the case that young people are not just the future, they are the present.",
		image: "/images/rave.jpeg",
		stat: "Ambassador",
		statLabel: "Platform",
	},

	{
		number: "05",
		category: "Community",
		title: "Tech Community Volunteer",
		description:
			"Contributed to DevFest Lagos, Flutter Bytes Conference, Web3 Afrika, and the Head Boy & Head Girl Conference, showing up wherever technology and youth development intersect.",
		image: "/images/dev.jpeg",
		stat: "4,000+",
		statLabel: "Reached",
	},
];

const ImpactCard = ({
	item,
	index,
}: {
	item: (typeof impacts)[0];
	index: number;
}) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-80px" });

	return (
		<motion.div
			ref={ref}
			className="group relative bg-white border border-gray-100 rounded-xl overflow-hidden flex flex-col"
			style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
			initial={{ opacity: 0, y: 30 }}
			animate={isInView ? { opacity: 1, y: 0 } : {}}
			transition={{ duration: 0.5, delay: index * 0.1 }}
			whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
		>
			<div className="absolute top-0 left-0 right-0 h-[3px] bg-[#009bdf] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out z-10" />

			<div className="relative w-full h-56 overflow-hidden flex-shrink-0">
				<Image
					src={item.image}
					alt={item.title}
					fill
					sizes="(max-width: 640px) 100vw, 50vw"
					className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
				/>
				<div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-500" />
				<div className="absolute top-3 left-3 bg-[#009bdf] text-white px-2.5 py-1 rounded-md z-10">
					<p className="text-[10px] font-semibold tracking-wider uppercase">
						{item.stat}
					</p>
				</div>

				<span className="absolute bottom-3 right-3 text-5xl font-bold text-white/25 select-none leading-none">
					{item.number}
				</span>
			</div>

			<div className="p-6 flex flex-col flex-1">
				<div className="mb-3">
					<span className="text-[10px] tracking-[0.25em] uppercase text-[#009bdf] font-semibold">
						{item.category}
					</span>
				</div>
				<h3 className="text-lg font-semibold text-gray-900 leading-snug mb-3 group-hover:text-[#009bdf] transition-colors duration-300">
					{item.title}
				</h3>
				<p className="text-sm text-gray-500 leading-relaxed flex-1">
					{item.description}
				</p>
				
			</div>
		</motion.div>
	);
};

const Impact = () => {
	return (
		<div
			id="impact"
			className="px-4 sm:px-20 md:px-24 lg:px-32 mt-10 md:mt-20 mb-10"
		>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-100px" }}
				transition={{ duration: 0.6 }}
			>
				<h2 className="text-lg uppercase tracking-wider text-gray-600">
					Impact
				</h2>
				<motion.div
					className="h-[2px] bg-gray-500"
					initial={{ width: 0 }}
					whileInView={{ width: "3rem" }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}
					style={{ width: 0 }}
				/>
			</motion.div>

			<motion.h1
				className="text-3xl sm:text-4xl font-bold mt-5 mb-3 text-gray-900"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-100px" }}
				transition={{ duration: 0.6, delay: 0.1 }}
			>
				Beyond the code.
			</motion.h1>

			<motion.p
				className="text-lg font-normal text-gray-600 max-w-xl mb-10"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-100px" }}
				transition={{ duration: 0.6, delay: 0.2 }}
			>
				I speak on national platforms, lead youth initiatives, and show up
				wherever technology and opportunity should meet but don&apos;t yet.
			</motion.p>

			<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
				{impacts.map((item, index) => (
					<ImpactCard key={item.number} item={item} index={index} />
				))}
			</div>

			<motion.div
				className="mt-12 flex items-center gap-6"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6, delay: 0.3 }}
			>
				<div className="h-px bg-gray-200 flex-1" />
				<span className="text-sm text-gray-400 italic">
					From here on out, it only gets better.
				</span>
				<div className="h-px bg-gray-200 flex-1" />
			</motion.div>
		</div>
	);
};

export default Impact;
