import About from "@/components/About";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import React from "react";

const page = () => {
	return (
		<div>
			<Navbar />
      <Hero />
      <About />
      <Services />
      <Experience />
		</div>
	);
};

export default page;
