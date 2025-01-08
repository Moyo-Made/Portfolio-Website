import About from "@/components/About";
import Hero from "@/components/Hero";
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
		</div>
	);
};

export default page;
