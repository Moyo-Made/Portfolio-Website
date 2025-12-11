"use client";

import React, { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { navItems } from "@/data/navbar";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("home");
	const [clickedSection, setClickedSection] = useState("");
	const NAV_HEIGHT = 64;

	// Determine if a section is substantially visible
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	interface SectionElement {
		id: string;
		element: HTMLElement | null;
	}

	const isSubstantiallyVisible = useCallback(
		(element: HTMLElement | null): boolean => {
			if (!element) return false;
			const rect = element.getBoundingClientRect();
			const visibleHeight =
				Math.min(rect.bottom, window.innerHeight) -
				Math.max(rect.top, NAV_HEIGHT);
			const sectionHeight = rect.height;
			return visibleHeight > sectionHeight * 0.3; // 30% visibility threshold
		},
		[]
	);

	useEffect(() => {
		const handleScroll = () => {
			// Only check for new active section if we're not in a click transition
			// or if the clicked section is substantially visible
			const clickedElement = clickedSection
				? document.getElementById(clickedSection)
				: null;

			if (!clickedSection || isSubstantiallyVisible(clickedElement)) {
				const sectionElements = navItems.map((section) => ({
					id: section.id,
					element: document.getElementById(section.id),
				}));

				const visibleSection = sectionElements.find(({ element }) =>
					isSubstantiallyVisible(element)
				);

				if (visibleSection) {
					setActiveSection(visibleSection.id);
					setClickedSection(""); // Clear clicked section when naturally scrolling
				}
			}
		};

		const debouncedHandleScroll = () => {
			window.requestAnimationFrame(handleScroll);
		};

		window.addEventListener("scroll", debouncedHandleScroll);
		handleScroll(); // Initial check

		return () => window.removeEventListener("scroll", debouncedHandleScroll);
	}, [clickedSection, isSubstantiallyVisible]);

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

	return (
		<motion.nav
			className="fixed w-full z-50 backdrop-blur-md bg-white/70 border-b border-white/20 shadow-lg"
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.5 }}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div className="flex justify-between h-16 items-center">
					{/* Logo */}
					<motion.div
						className="flex items-center"
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						<Link href="/" className="flex items-center space-x-2">
							<span className="text-blue-500 font-semibold text-xl">/MA</span>
							<span className="font-semibold uppercase text-xl tracking-wider">
								Moyomade Adegbite
							</span>
						</Link>
					</motion.div>

					{/* Desktop Navigation */}
					<ul className="hidden md:flex items-center space-x-8">
						{navItems.map(({ id, label }, index) => (
							<motion.li
								key={id}
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
							>
								<motion.button
									onClick={() => scrollToSection(id)}
									className={`text-md transition-colors mr-2 ${
										activeSection == id ? "text-blue-500" : ""
									}`}
									whileHover={{ scale: 1.05, color: "#3b82f6" }}
									whileTap={{ scale: 0.95 }}
								>
									{label}
								</motion.button>
							</motion.li>
						))}
					</ul>
					{/* Mobile Menu Button */}
					<motion.div
						className="md:hidden"
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						<motion.button
							onClick={() => setIsOpen(!isOpen)}
							className="inline-flex items-center justify-center p-2 rounded-md text-gray-700"
							whileHover={{ scale: 1.1, color: "#3b82f6" }}
							whileTap={{ scale: 0.9 }}
						>
							<svg
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								{isOpen ? (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								) : (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4 6h16M4 12h16M4 18h16"
									/>
								)}
							</svg>
						</motion.button>
					</motion.div>
				</motion.div>
			</div>

			{/* Mobile Menu */}
			<motion.div
				className="md:hidden bg-white/80 backdrop-blur-md shadow-lg border-t border-white/20"
				initial={{ opacity: 0, height: 0 }}
				animate={{
					opacity: isOpen ? 1 : 0,
					height: isOpen ? "auto" : 0,
				}}
				transition={{ duration: 0.3 }}
				style={{ overflow: "hidden" }}
			>
				<ul className="px-2 pt-2 pb-3 space-y-1">
					{navItems.map(({ id, label }, index) => (
						<motion.li
							key={id}
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
							transition={{ duration: 0.3, delay: index * 0.05 }}
						>
							<motion.button
								className="block px-3 py-2 text-sm transition-colors w-full text-left"
								onClick={() => scrollToSection(id)}
								whileHover={{ x: 5, color: "#3b82f6" }}
								whileTap={{ scale: 0.98 }}
							>
								{label}
							</motion.button>
						</motion.li>
					))}
				</ul>
			</motion.div>
		</motion.nav>
	);
};

export default Navbar;
