"use client";

import { motion } from "framer-motion";
import { Links, links, socials } from "@/data/footer";
import { ArrowUpRight, ExternalLink, Mail } from "lucide-react";
import React, { useState } from "react";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [activeSection, setActiveSection] = useState("");
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [clickedSection, setClickedSection] = useState("");
	const NAV_HEIGHT = 64;

	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			// Immediately set active and clicked section
			setActiveSection(id);
			setClickedSection(id);

			const elementPosition = element.getBoundingClientRect().top;
			const offsetPosition = elementPosition + window.pageYOffset - NAV_HEIGHT;

			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth",
			});

			// Clear clicked section after scroll animation (roughly 1 second)
			setTimeout(() => {
				setClickedSection("");
			}, 1000);
		}
	};

	const renderLink = (link: Links) => {
		if (link.isExternal) {
			return (
				<motion.a
					key={link.id}
					href={link.id}
					target="_blank"
					rel="noopener noreferrer"
					className="group flex items-center text-gray-600"
					whileHover={{ x: 5, color: "#2563eb" }}
					transition={{ duration: 0.2 }}
				>
					<span className="mr-2">{link.name}</span>
					<motion.div
						initial={{ opacity: 0, x: -8 }}
						whileHover={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.3 }}
					>
						<ExternalLink className="w-4 h-4" />
					</motion.div>
				</motion.a>
			);
		}

		return (
			<ul>
				<li key={link.id}>
					<motion.button
						onClick={() => scrollToSection(link.id)}
						className="group flex items-center text-gray-600"
						whileHover={{ x: 5, color: "#2563eb" }}
						transition={{ duration: 0.2 }}
					>
						<span className="mr-2">{link.name}</span>
						<motion.div
							initial={{ opacity: 0, x: -8 }}
							whileHover={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.3 }}
						>
							<ArrowUpRight className="w-4 h-4" />
						</motion.div>
					</motion.button>
				</li>
			</ul>
		);
	};

	return (
		<footer id="contact" className="relative bg-white">
			<div className="absolute top-0 left-0 right-0 h-px bg-gray-200"></div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
					{/* About Section */}
					<motion.div
						className="lg:col-span-1"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.6 }}
					>
						<div className="space-y-6">
							<h3 className="text-2xl font-bold text-gray-900">
								Let&#39;s Create Together
							</h3>

							<p className="text-gray-600 leading-relaxed">
								I&#39;m always excited to connect with fellow developers,
								potential clients, and anyone passionate about technology.
								Whether you have a project in mind or just want to say hello,
								I&#39;m here to collaborate.
							</p>
							<div className="flex flex-wrap gap-3">
								{socials.map((social, index) => (
									<motion.a
										key={social.label}
										href={social.href}
										target="_blank"
										rel="noopener noreferrer"
										className="p-2 rounded-lg group"
										aria-label={social.label}
										initial={{ opacity: 0, scale: 0.8 }}
										whileInView={{ opacity: 1, scale: 1 }}
										viewport={{ once: true }}
										transition={{ duration: 0.3, delay: index * 0.1 }}
										whileHover={{
											scale: 1.1,
											y: -3,
											backgroundColor: "#f3f4f6",
										}}
										whileTap={{ scale: 0.95 }}
									>
										<social.icon className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
									</motion.a>
								))}
							</div>
						</div>
					</motion.div>

					{/* Quick Links */}
					<motion.div
						className="lg:col-span-1"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<h3 className="text-lg font-semibold text-gray-900 mb-6">
							Quick Links
						</h3>
						<div className="grid grid-cols-2 gap-4">
							{links.map(renderLink)}
						</div>
					</motion.div>

					{/* Contact Section */}
					<motion.div
						className="lg:col-span-1"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.6, delay: 0.4 }}
					>
						<motion.div
							className="bg-gray-50 rounded-2xl p-6 space-y-6"
							whileHover={{ scale: 1.02 }}
							transition={{ duration: 0.3 }}
						>
							{" "}
							<h3 className="text-lg font-semibold text-gray-900">
								Get in Touch
							</h3>
							<p className="text-gray-600">
								Have a project in mind? Let&#39;s discuss how we can work
								together to bring your ideas to life.
							</p>
							<div className="space-y-4">
								<motion.a
									href="mailto:adegbitemoyomade2004@gmail.com"
									className="flex items-center justify-center w-full px-6 py-3 text-white bg-blue-600 rounded-lg group"
									whileHover={{
										scale: 1.05,
										backgroundColor: "#2563eb",
									}}
									whileTap={{ scale: 0.98 }}
									transition={{ duration: 0.2 }}
								>
									<Mail className="w-4 h-4 mr-2" />
									<span>Send me an email</span>
									<motion.div
										initial={{ opacity: 0 }}
										whileHover={{ opacity: 1 }}
										transition={{ duration: 0.3 }}
									>
										<ExternalLink className="w-4 h-4 ml-2" />
									</motion.div>
								</motion.a>
							</div>
						</motion.div>
					</motion.div>
				</div>

				{/* Bottom Bar */}
				<motion.div
					className="pt-8 border-t border-gray-100"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.6 }}
				>
					<div className="flex flex-col md:flex-row justify-between items-center gap-4">
						<p className="text-gray-500 text-sm">
							© {currentYear} Moyomade. All rights reserved.
						</p>
					</div>
				</motion.div>
			</div>
		</footer>
	);
};

export default Footer;
