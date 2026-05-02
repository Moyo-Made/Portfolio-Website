import About from "@/components/About";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import React from "react";
import Portfolio from "@/components/Portfolio";
import BlogSection from "@/components/Blogs";
import Footer from "@/components/Footer";
import Impact from "./Impact";

const App = () => {
	return (
		<div>
			<Navbar />
			<Hero />
			<About />
			<Services />
			<Impact />
			<Experience />
			<Portfolio />
			<BlogSection />
			<Footer />
		</div>
	);
};

export default App;
