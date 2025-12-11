"use client";

import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
	return (
		<div
			id="home"
			className="first-letter:relative min-h-screen bg-white flex items-center px-4 md:px-8 lg:px-16"
		>
			<div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 md:gap-36 min-h-screen mt-20 sm:mt-0">
				{/* Left Content */}
				<div className="flex-1 space-y-6 ml-0 sm:ml-16">
					<div className="mb-5">
						<h2 className="text-md uppercase tracking-wider text-gray-600">
							Hello, My name is
						</h2>

						<div className="w-14 h-[2px] bg-gray-500 mt-2" />
					</div>
					<div>
						<h1 className="text-5xl md:text-6xl font-semibold mt-2">
							Moyomade Adegbite
						</h1>
						<h3 className="text-lg md:text-xl text-gray-600 mt-2">
							Building Scalable, High-Performance Frontend Experiences
						</h3>
					</div>

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

						<div className="flex items-center space-x-4 pt-4">
							<Link href="https://github.com/Moyo-Made">
								<FaGithub size={20} />
							</Link>

							<Link href="https://www.linkedin.com/in/moyomade-adegbite/">
								<FaLinkedin size={20} />
							</Link>

							<Link href="https://x.com/moyomadee7">
								<FaSquareXTwitter size={20} />
							</Link>

							<Link href="mailto:adegbitemoyomade2004@gmail.com">
								<IoMdMail size={20} />
							</Link>
						</div>
					</div>
				</div>

				{/* Image */}
				<div className="relative flex justify-center items-center">
					<div className="aspect-square rounded-full overflow-hidden bg-gray-900 mt-0 w-[280px] sm:w-[300px] md:mt-20 lg:mt-0 md:w-[350px] lg:w-[450px]">
						<Image
							src="/images/profile.PNG"
							alt="Profile"
							width={1920}
							height={1920}
							priority
							className="w-full h-full object-cover"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
