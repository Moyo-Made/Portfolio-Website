import React from "react";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";
import { blogs } from "@/data/articles";

const BlogSection = () => {
	const formatDate = (dateString: string): string => {
		return new Date(dateString).toLocaleDateString("en-US", {
			month: "long",
			day: "numeric",
			year: "numeric",
		});
	};

	return (
		<div id="blogs" className="py-10 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-10">
					<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
						Blog & Articles
					</h2>
					<p className="text-xl text-gray-600">
						Sharing knowledge and experiences in web development and my persoanl
						development
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{blogs.map((blog, index) => (
						<article
							key={index}
							className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
						>
							<div className="aspect-w-16 aspect-h-9 relative">
								<img
									src={blog.image}
									alt={blog.title}
									className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
								/>
								<div className="absolute top-4 right-4">
									<span className="px-3 py-1 bg-white/90 rounded-full text-sm font-medium text-gray-700">
										{blog.category}
									</span>
								</div>
							</div>

							<div className="p-6">
								<div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
									<div className="flex items-center">
										<Calendar className="w-4 h-4 mr-1" />
										{formatDate(blog.date)}
									</div>
									<div className="flex items-center">
										<Clock className="w-4 h-4 mr-1" />
										{blog.readTime}
									</div>
								</div>

								<h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
									{blog.title}
								</h3>

								<p className="text-gray-600 mb-4 line-clamp-2">
									{blog.excerpt}
								</p>

								<a
									href={blog.link}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
								>
									Read More
									<ArrowUpRight className="w-4 h-4 ml-1" />
								</a>
							</div>
						</article>
					))}
				</div>

				<div className="text-center mt-8">
					<a
						href="https://medium.com/@adegbitemoyomade2004"
						target="_blank"
						className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
					>
						View All Articles
					</a>
				</div>
			</div>
		</div>
	);
};

export default BlogSection;
