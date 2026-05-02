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
		title:
			"From Introvert to Tech: A Journey of Personal Growth and Community Connection",
		excerpt:
			"From high school extrovert and sports enthusiast to tech builder. My journey wasn't linear. After a sports injury ended my athletic dreams, I found technology. I started coding on my smartphone, isolated at first, then slowly discovered that community changes everything. This is the story of resilience, mentorship, and what happens when you take a bold step into the unknown.",
		date: "2024-08-11",
		readTime: "3 min read",
		category: "Personal Development",
		image: "/images/introvert.avif",
		link: "https://medium.com/@adegbitemoyomade2004/from-introvert-to-tech-a-journey-of-personal-growth-and-community-connection-8971ae8b848c",
	},
	{
		title: "My Journey of Growth: Volunteering at Web3 Afrika Lagos",
		excerpt:
			"I've been on a deliberate journey to become a better communicator and public speaker. Volunteering at Web3 Afrika Lagos was a turning point putting me directly in front of attendees and fellow volunteers, testing everything I'd been practising. This is what I learned about confidence, connection, and showing up before you feel ready.",
		date: "2024-09-23",
		readTime: "3 min read",
		category: "Personal Development",
		image: "/images/afrika.webp",
		link: "https://medium.com/@adegbitemoyomade2004/my-journey-of-growth-volunteering-at-web3-afrika-lagos-a939b3a35efb",
	},
	{
		title:
			"Masking vs Encryption in JavaScript: A Comprehensive Guide for Secure Data Handling",
		excerpt:
			"While building a finance dashboard, I ran into a question that stopped me: should I mask this data or encrypt it? They sound similar but do completely different things. In this piece I break down both techniques with practical JavaScript examples so you can make the right call in your own projects.",
		date: "2024-7-11",
		readTime: "3 min read",
		category: "Technical",
		image: "/images/masking.webp",
		link: "https://medium.com/@adegbitemoyomade2004/masking-vs-encryption-in-javascript-a-comprehensive-guide-for-secure-data-handling-9c5032326461",
	},
];
