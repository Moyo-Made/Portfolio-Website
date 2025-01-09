interface Blog {
	title: string;
	excerpt: string;
	date: string;
	readTime: string;
	category: string;
	image: string;
	link: string;
}

export const blogs: Blog[] = [
	{
		title: "From Introvert to Tech: A Journey of Personal Growth and Community Connection",
		excerpt: "Moyomade shares his transformative journey from a high school extrovert and sports enthusiast to an introspective tech enthusiast. After a sports injury ended his athletic dreams, Moyomade embraced technology, starting with coding on his smartphone. Initially isolating himself, he soon realized the importance of community, finding mentorship and opportunities through tech networks. His story highlights resilience, the power of community, and the rewarding path of continuous learning and growth in the tech world. Moyomade encourages others to embrace change, connect with peers, and take bold steps into the tech industry.",
		date: "2024-08-11",
		readTime: "3 min read",
		category: "Personal Development",
		image: "/images/introvert.avif",
		link: "https://medium.com/@adegbitemoyomade2004/from-introvert-to-tech-a-journey-of-personal-growth-and-community-connection-8971ae8b848c",
	},
	{
		title: "My Journey of Growth: Volunteering at Web3 Afrika Lagos",
		excerpt: "Moyomade shares his personal growth journey in improving public speaking and communication skills. Starting with a supportive online community, he practiced consistently, gaining confidence over time. Volunteering at Web3 Afrika Lagos pushed him further, allowing him to engage directly with attendees and other volunteers. This experience not only boosted his confidence but also helped him build meaningful connections, marking significant progress in his journey of personal and professional growth.",
		date: "2024-09-23",
		readTime: "3 min read",
		category: "Personal Development",
		image: "/images/afrika.webp",
		link: "https://medium.com/@adegbitemoyomade2004/my-journey-of-growth-volunteering-at-web3-afrika-lagos-a939b3a35efb",

	},
	{
		title: "Masking vs Encryption in JavaScript: A Comprehensive Guide for Secure Data Handling",
		excerpt: "In this article, I explored the critical differences between masking and encryption in JavaScript, inspired by his experience while developing a finance dashboard. He delves into the definitions, purposes, and applications of both techniques, illustrating how masking obscures parts of sensitive data for limited visibility, while encryption transforms data into an unreadable format for confidentiality. Through practical examples and use cases, Moyomade emphasizes the importance of choosing the right method for secure data handling in development projects.",
		date: "2024-7-11",
		readTime: "3 min read",
		category: "Technical",
		image: "/images/masking.webp",
		link: "https://medium.com/@adegbitemoyomade2004/masking-vs-encryption-in-javascript-a-comprehensive-guide-for-secure-data-handling-9c5032326461",
	}
];