"use client";

import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
	return (
		<div
			id="home"
			className="first-letter:relative min-h-screen bg-white flex items-center px-4 md:px-8 lg:px-16"
		>
			<div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 md:gap-36 min-h-screen mt-20 sm:mt-0">
				{/* Left Content */}
				<motion.div
					className="flex-1 space-y-6 ml-0 sm:ml-16"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: "easeOut" }}
				>
					<motion.div
						className="mb-5"
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						<h2 className="text-md uppercase tracking-wider text-gray-600">
							Hello, My name is
						</h2>

						<motion.div
							className="w-14 h-[2px] bg-gray-500 mt-2"
							initial={{ width: 0 }}
							animate={{ width: "3.5rem" }}
							transition={{ duration: 0.6, delay: 0.4 }}
						/>
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.5 }}
					>
						<h1 className="text-5xl md:text-6xl font-semibold mt-2">
							Moyomade Adegbite
						</h1>
						<h3 className="text-lg md:text-xl text-gray-600 mt-2">
							Building Scalable, High-Performance Frontend Experiences
						</h3>
					</motion.div>

					<div className="space-y-2 pt-1">
						<div className="flex items-center space-x-2">
							<p className="text-lg text-gray-600 max-w-[500px]">
								I’m a frontend developer with 3+ years of experience building
								responsive, accessible, and high-performance web applications
								using React, Next.js, and TypeScript. I’ve contributed to
								products across EdTech, SocialEdTech, and FinTech, including a
								ticketing platform for 4,000+ users and a full UGC marketplace
								built end-to-end. I create scalable, maintainable interfaces
								that deliver measurable impact.
							</p>
						</div>

						<motion.div
							className="flex items-center space-x-4 pt-4"
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.8 }}
						>
							<motion.div
								whileHover={{ scale: 1.1, y: -2 }}
								transition={{ duration: 0.2 }}
							>
								<Link href="https://github.com/Moyo-Made">
									<FaGithub size={20} />
								</Link>
							</motion.div>

							<motion.div
								whileHover={{ scale: 1.1, y: -2 }}
								transition={{ duration: 0.2 }}
							>
								<Link href="https://www.linkedin.com/in/moyomade-adegbite/">
									<FaLinkedin size={20} />
								</Link>
							</motion.div>

							<motion.div
								whileHover={{ scale: 1.1, y: -2 }}
								transition={{ duration: 0.2 }}
							>
								<Link href="https://x.com/moyomadee7">
									<FaSquareXTwitter size={20} />
								</Link>
							</motion.div>

							<motion.div
								whileHover={{ scale: 1.1, y: -2 }}
								transition={{ duration: 0.2 }}
							>
								<Link href="mailto:adegbitemoyomade2004@gmail.com">
									<IoMdMail size={20} />
								</Link>
							</motion.div>
						</motion.div>
					</div>
				</motion.div>

				{/* Image */}
				<motion.div
					className="relative flex justify-center items-center"
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
				>
					<div className="aspect-square rounded-full overflow-hidden bg-gray-900 mt-0 w-[280px] sm:w-[300px] md:mt-20 lg:mt-0 md:w-[350px] lg:w-[450px]">
						<Image
							src="/images/blue.png"
							alt="Profile"
							width={1920}
							height={1920}
							priority
							className="w-full h-full object-cover"
						/>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default Hero;
