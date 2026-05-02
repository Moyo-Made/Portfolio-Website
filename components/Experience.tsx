"use client";

import { motion } from "framer-motion";
import { experiences, skills } from "@/data/experience";
import { FaReact, FaGitAlt } from "react-icons/fa";
import {
	SiNextdotjs,
	SiTypescript,
	SiJavascript,
	SiTailwindcss,
	SiRedux,
	SiGraphql,
	SiJest,
	SiCypress,
} from "react-icons/si";
import { IconType } from "react-icons";

type SkillMeta = { Icon: IconType; color: string; bg: string };

const skillIconMap: Record<string, SkillMeta> = {
	"React.js": { Icon: FaReact, color: "#61DAFB", bg: "bg-cyan-50" },
	"Next.js": { Icon: SiNextdotjs, color: "#000000", bg: "bg-gray-100" },
	"TypeScript": { Icon: SiTypescript, color: "#3178C6", bg: "bg-blue-50" },
	"JavaScript": { Icon: SiJavascript, color: "#ca8a04", bg: "bg-yellow-50" },
	"TailwindCSS": { Icon: SiTailwindcss, color: "#06B6D4", bg: "bg-cyan-50" },
	"Redux / Zustand": { Icon: SiRedux, color: "#764ABC", bg: "bg-purple-50" },
	"GraphQL": { Icon: SiGraphql, color: "#E10098", bg: "bg-pink-50" },
	"Git": { Icon: FaGitAlt, color: "#F05032", bg: "bg-orange-50" },
	"Jest": { Icon: SiJest, color: "#C21325", bg: "bg-red-50" },
	"Cypress": { Icon: SiCypress, color: "#1B1E2E", bg: "bg-slate-100" },
};

const Experience = () => {
	return (
		<div
			id="skills"
			className="px-4 sm:px-20 md:px-24 lg:px-32 mt-10 md:mt-20 mb-7"
		>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
				<div>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.6 }}
					>
						<h2 className="text-lg uppercase tracking-wider text-gray-600">
							Skills
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

					<div className="grid grid-cols-2 gap-3 mt-6">
						{skills.map((skill, index) => {
							const meta = skillIconMap[skill.name];
							return (
								<motion.div
									key={skill.name}
									className="group flex items-center gap-3 p-3.5 bg-white border border-gray-100 rounded-xl hover:border-[#009bdf]/40 hover:shadow-md transition-all duration-300 cursor-default"
									style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}
									initial={{ opacity: 0, y: 15 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true, margin: "-100px" }}
									transition={{ duration: 0.4, delay: index * 0.05 }}
									whileHover={{ y: -2 }}
								>
									<div
										className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${meta ? meta.bg : "bg-blue-50"}`}
									>
										{meta ? (
											<meta.Icon size={15} style={{ color: meta.color }} />
										) : (
											<div className="w-2 h-2 rounded-full bg-[#009bdf]" />
										)}
									</div>
									<span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors leading-tight">
										{skill.name}
									</span>
								</motion.div>
							);
						})}
					</div>
				</div>

				{/* Experience */}
				<div>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.6, delay: 0.1 }}
					>
						<h2 className="text-lg uppercase tracking-wider text-gray-600">
							Experience
						</h2>
						<motion.div
							className="h-[2px] bg-gray-500"
							initial={{ width: 0 }}
							whileInView={{ width: "3rem" }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.3 }}
							style={{ width: 0 }}
						/>
					</motion.div>

					<div className="mt-6 relative">
						{/* Vertical timeline line */}
						<div className="absolute left-[7px] top-2 bottom-0 w-px bg-gray-100" />

						<div className="space-y-8">
							{experiences.map((exp, index) => (
								<motion.div
									key={index}
									className="relative pl-8 group"
									initial={{ opacity: 0, x: 20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true, margin: "-100px" }}
									transition={{ duration: 0.5, delay: index * 0.12 }}
								>
									{/* Timeline dot */}
									<div className="absolute left-0 top-[5px] w-[15px] h-[15px] rounded-full border-2 border-gray-200 bg-white group-hover:border-[#009bdf] group-hover:bg-blue-50 transition-all duration-300" />

									{/* Period badge */}
									<span className="inline-block text-[11px] text-gray-400 bg-gray-50 border border-gray-100 rounded-full px-2.5 py-0.5 mb-1.5 font-medium">
										{exp.period}
									</span>

									<h3 className="font-semibold text-base text-gray-900 leading-snug">
										{exp.role}
									</h3>
									<h4 className="text-[#009bdf] text-sm font-medium mt-0.5">
										{exp.company}
									</h4>
									<p className="text-gray-500 text-sm mt-2 leading-relaxed">
										{exp.description}
									</p>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experience;
