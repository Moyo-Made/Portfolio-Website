import About from "@/components/About";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import React from "react";
import Portfolio from "@/components/Portfolio";

const page = () => {
	return (
		<div>
			<Navbar />
      <Hero />
      <About />
      <Services />
      <Experience />
      <Portfolio />
		</div>
	);
};

export default page;
