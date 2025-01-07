import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
	return (
		<div>
			<Navbar />
      <Hero />
      <About />
		</div>
	);
};

export default page;
