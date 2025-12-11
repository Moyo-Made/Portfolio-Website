"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";
import { blogs } from "@/data/articles";
import Image from "next/image";

const BlogSection = () => {
	const formatDate = (dateString: string): string => {
		return new Date(dateString).toLocaleDateString("en-US", {
			month: "long",
			day: "numeric",
			year: "numeric",
		});
	};

	return (
		<div id="blogs" className="py-10 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					className="text-center mb-10"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.6 }}
				>
					<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
						Blog & Articles
					</h2>
					<p className="text-xl text-gray-600">
						Sharing knowledge and experiences in web development and my persoanl
						development
					</p>
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{blogs.map((blog, index) => (
						<motion.article
							key={index}
							className="group relative bg-white rounded-2xl shadow-md overflow-hidden"
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 0.5, delay: index * 0.15 }}
							whileHover={{
								y: -8,
								boxShadow:
									"0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
							}}
						>
							<div className="aspect-w-16 aspect-h-9 relative">
								<Image
									src={blog.image}
									alt={blog.title}
									width={1920}
									height={192}
									className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
								/>
								<motion.div
									className="absolute top-4 right-4"
									initial={{ opacity: 0, scale: 0.8, x: 20 }}
									whileInView={{ opacity: 1, scale: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.4, delay: 0.2 }}
								>
									<span className="px-3 py-1 bg-white/90 rounded-full text-sm font-medium text-gray-700">
										{blog.category}
									</span>
								</motion.div>
							</div>

							<div className="p-6">
								<motion.div
									className="flex items-center text-sm text-gray-500 mb-3 space-x-4"
									initial={{ opacity: 0 }}
									whileInView={{ opacity: 1 }}
									viewport={{ once: true }}
									transition={{ duration: 0.4, delay: 0.3 }}
								>
									<div className="flex items-center">
										<Calendar className="w-4 h-4 mr-1" />
										{formatDate(blog.date)}
									</div>
									<div className="flex items-center">
										<Clock className="w-4 h-4 mr-1" />
										{blog.readTime}
									</div>
								</motion.div>

								<h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
									{blog.title}
								</h3>

								<p className="text-gray-600 mb-4 line-clamp-2">
									{blog.excerpt}
								</p>

								<motion.a
									href={blog.link}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center text-blue-600 font-medium"
									whileHover={{ x: 5, color: "#2563eb" }}
									transition={{ duration: 0.2 }}
								>
									Read More
									<motion.div
										whileHover={{ x: 3, y: -3 }}
										transition={{ duration: 0.2 }}
									>
										<ArrowUpRight className="w-4 h-4 ml-1" />
									</motion.div>
								</motion.a>
							</div>
						</motion.article>
					))}
				</div>

				<motion.div
					className="text-center mt-8"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.6, delay: 0.4 }}
				>
					<motion.a
						href="https://medium.com/@adegbitemoyomade2004"
						target="_blank"
						className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium"
						whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
						whileTap={{ scale: 0.98 }}
						transition={{ duration: 0.2 }}
					>
						View All Articles
					</motion.a>
				</motion.div>
			</div>
		</div>
	);
};

export default BlogSection;
