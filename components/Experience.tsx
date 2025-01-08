import { experiences, skills } from "@/data/experience";

const Experience = () => {
	return (
		<div className="px-4 sm:px-20 md:px-24 lg:px-32 mt-10 md:mt-20 mb-10">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
				{/* Skills Section */}
				<div>
					<h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold mb-5">Skills</h2>
					<div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
						{skills.map((skill) => (
							<div
								key={skill.name}
								className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
							>
								<h3 className="font-semibold text-lg">{skill.name}</h3>
							</div>
						))}
					</div>
				</div>

				{/* Experience Section */}
				<div>
					<h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold mb-8">Experience</h2>
					<div className="space-y-8">
						{experiences.map((exp, index) => (
							<div key={index}>
								<span className="text-sm text-gray-500">{exp.period}</span>
								<h3 className="font-semibold text-xl mt-1">{exp.role}</h3>
								<h4 className="text-blue-600 text-lg">{exp.company}</h4>
								<p className="text-gray-600 mt-2">{exp.description}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experience;
