import Image from "next/image";
import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";

const Services = () => {
	return (
		<div className="px-4 sm:px-20 md:px-24 lg:px-32 mt-10 md:mt-20 mb-10">
			<h1 className="text-3xl sm:text-4xl font-semibold">
				What I do?
			</h1>

			<p className="text-lg font-normal mt-5 text-gray-600">
				From understanding your requirements to designing a blueprint and
				delivering the final product, I handle every step in between. As a
				frontend developer, I ensure that each phase, from concept to
				deployment, is executed with precision and attention to detail,
				resulting in a seamless and engaging user experience.
			</p>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 md:gap-8 mt-10">
				<div className="bg-[#f7f7f7] rounded-md shadow-md p-6 max-w-[400px]">
					<div className="flex gap-4 items-center">
						<FaLaptopCode className="text-[#009bdf]" size={30} />
						<h1 className="uppercase text-xl md:text-2xl font-medium">Web development</h1>
					</div>

					<div className="ml-12">
						<p className="text-md font-normal mt-1 text-gray-600 max-w-[300px]">
							If you're looking for a developer to handle the research and
							development of your website, I am a seasoned professional ready to
							bring your vision to life with expertise and dedication.
						</p>
					</div>
				</div>

				<div className="bg-[#f7f7f7] rounded-md shadow-md p-6 max-w-[400px]">
					<div className="flex gap-4 items-center">
						<IoPhonePortraitOutline className="text-[#009bdf]" size={30} />
						<h1 className="uppercase text-xl md:text-2xl font-medium">App development</h1>
					</div>

					<div className="ml-12">
						<p className="text-md font-normal mt-1 text-gray-600 max-w-[300px]">
							If you're seeking a user-friendly app that will captivate and
							attract more mobile users, I can help design and build a platform
							with a modern, trendy look and feel, ensuring an engaging and
							seamless user experience.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
