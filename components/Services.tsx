import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";

const Services = () => {
	return (
		<div
			id="services"
			className="px-4 sm:px-20 md:px-24 lg:px-32 mt-10 md:mt-20 mb-10"
		>
			<h1 className="text-3xl sm:text-4xl font-semibold">What I do</h1>

			<p className="text-lg font-normal mt-5 text-gray-600">
				I design and build fast, responsive, and user-focused web interfaces. My
				work combines modern frontend engineering with clean UI execution to
				deliver websites and applications that look great, feel smooth, and
				perform reliably across all devices.
			</p>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 md:gap-8 mt-10 ">
				<div className="bg-[#f7f7f7] rounded-md shadow-md p-6 max-w-[400px] hover:scale-105 transition-transform duration-300">
					<div className="flex gap-4 items-center">
						<FaLaptopCode className="text-[#009bdf]" size={30} />
						<h1 className="uppercase text-xl md:text-2xl font-medium">
							Web development
						</h1>
					</div>

					<div className="ml-12">
						<p className="text-md font-normal mt-1 text-gray-600 max-w-[300px]">
							I build modern, scalable websites using React, Next.js,
							TypeScript, and Tailwind. From landing pages to full platforms, I
							deliver fast, responsive, and accessible interfaces.
						</p>
					</div>
				</div>

				<div className="bg-[#f7f7f7] rounded-md shadow-md p-6 max-w-[400px] hover:scale-105 transition-transform duration-300">
					<div className="flex gap-4 items-center">
						<IoPhonePortraitOutline className="text-[#009bdf]" size={30} />
						<h1 className="uppercase text-xl md:text-2xl font-medium ">
							App development
						</h1>
					</div>

					<div className="ml-12">
						<p className="text-md font-normal mt-1 text-gray-600 max-w-[300px]">
							I develop clean, responsive applications with smooth interactions
							and intuitive user flows. I focus on modern UI practices to ensure
							your app feels polished and engaging on all devices.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
